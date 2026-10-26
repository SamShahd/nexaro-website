import { NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please provide a valid email address"),
  company: z.string().trim().optional().default(""),
  service: z.string().trim().min(1, "Please select a service"),
  budget: z.string().trim().optional().default(""),
  timing: z.string().trim().optional().default(""),
  details: z.string().trim().min(10, "Please describe your project in at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    let body;
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      body = await request.json();
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
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
          message: "Please check the form for errors.",
          errors: formattedErrors,
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;
    const inquiryId = `NX-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Log the inquiry for server monitoring / Vercel log stream
    console.log(`[NEXARO Inquiry ${inquiryId}]`, {
      ...validData,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your project inquiry has been securely received by NEXARO.",
      inquiryId,
      summary: {
        service: validData.service,
        client: validData.name,
      },
    });
  } catch (err: unknown) {
    console.error("[NEXARO Inquiry Error]", err);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please try again or reach out directly to hello@nexaro.studio",
      },
      { status: 500 }
    );
  }
}
