import { NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  contact: z.string().trim().min(3, "Please provide your email address or WhatsApp number"),
  service: z.string().trim().min(1, "Please select what you need"),
  websiteUrl: z.string().trim().optional().default(""),
  details: z.string().trim().min(5, "Please share a brief note about what you need"),
  // Honeypot field: must be empty
  website_hp: z.string().optional().default(""),
});

// Simple in-memory rate limiting map for basic spam protection
const ipRequestTimestamps = new Map<string, number[]>();

export async function POST(request: Request) {
  try {
    // 1. IP rate limiting (allow max 5 requests per 10 minutes per IP)
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown-ip";

    const now = Date.now();
    const windowMs = 10 * 60 * 1000;
    const timestamps = (ipRequestTimestamps.get(clientIp) || []).filter(
      (ts) => now - ts < windowMs
    );

    if (timestamps.length >= 5) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many inquiries sent from your IP. Please try again in a few minutes or reach out directly on WhatsApp.",
        },
        { status: 429 }
      );
    }
    timestamps.push(now);
    ipRequestTimestamps.set(clientIp, timestamps);

    // 2. Parse body
    let body;
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      body = await request.json();
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    } else {
      body = await request.json();
    }

    const validationResult = inquirySchema.safeParse(body);

    if (!validationResult.success) {
      const formattedErrors: Record<string, string[]> = {};
      validationResult.error.issues.forEach((issue) => {
        const key = issue.path[0]?.toString() || "form";
        if (!formattedErrors[key]) formattedErrors[key] = [];
        formattedErrors[key].push(issue.message);
      });

      return NextResponse.json(
        {
          success: false,
          message: "Please fill out all required fields.",
          errors: formattedErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 3. Honeypot check: If bot filled the hidden honeypot field, silently pretend success
    if (data.website_hp && data.website_hp.trim().length > 0) {
      console.warn(`[NEXARO Spam Blocked] Honeypot triggered from IP ${clientIp}`);
      return NextResponse.json({
        success: true,
        message: "Thanks! I’ll review your details and reply within 24 hours.",
      });
    }

    const inquiryId = `NX-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    // 4. Structured Server Log & Webhook / Forwarding Dispatch
    console.log(`[NEXARO NEW INQUIRY ${inquiryId}]`, {
      id: inquiryId,
      name: data.name,
      contact: data.contact,
      service: data.service,
      websiteUrl: data.websiteUrl || "None provided",
      details: data.details,
      ip: clientIp,
      timestamp: new Date().toISOString(),
    });

    // Optional Webhook / Formspree / Email Forwarding if configured in environment
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryId,
          ...data,
          submittedAt: new Date().toISOString(),
        }),
      }).catch((err) => console.error("[NEXARO Webhook Dispatch Error]", err));
    }

    return NextResponse.json({
      success: true,
      message: "Thanks! I’ll review your details and reply within 24 hours.",
      inquiryId,
    });
  } catch (err: unknown) {
    console.error("[NEXARO Inquiry Error]", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong processing your inquiry. Please reach out directly to hello@nexaro.studio or message on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
