import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy & KVKK Policy | NEXARO",
  description:
    "Privacy and personal data protection policy for NEXARO in compliance with Turkish KVKK Law No. 6698 and GDPR standards.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8faff] text-slate-950 dark:bg-[#0c0e14] dark:text-white">
      <Header />

      <main className="flex-1 py-14 md:py-20">
        <div className="mx-auto w-[min(820px,calc(100%-2rem))] sm:w-[min(820px,calc(100%-3rem))]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563eb] hover:underline dark:text-blue-400"
          >
            ← Back to NEXARO
          </Link>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Privacy Policy &amp; KVKK Information Notice
          </h1>
          <p className="mt-2 text-xs font-mono text-slate-400">
            Last updated: October 2026 · Compliant with Turkish Law No. 6698 (KVKK) &amp; GDPR
          </p>

          <div className="mt-8 space-y-8 rounded-[28px] border border-gray-200/90 bg-white p-8 text-sm leading-relaxed text-slate-600 shadow-sm dark:border-neutral-800 dark:bg-[#121620] dark:text-neutral-300">
            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                1. Data Controller Identity
              </h2>
              <p className="mt-2">
                This notice is provided by <strong>NEXARO</strong> (Founder: Shahd Belhadj), operating as a digital development and cybersecurity studio based in Istanbul, Türkiye.
                Contact: <a href="mailto:hello@nexaro.studio" className="text-[#2563eb] underline">hello@nexaro.studio</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                2. Processed Personal Data &amp; Purpose
              </h2>
              <p className="mt-2">
                When you submit an inquiry through our contact form or contact us via WhatsApp or email, we collect:
              </p>
              <ul className="mt-2 list-disc ps-5 space-y-1">
                <li>Your name and contact information (email address and/or phone number)</li>
                <li>Your business or organization details (if provided)</li>
                <li>Your website URL (for the purpose of conducting requested audits)</li>
                <li>Project scope notes and communication history</li>
              </ul>
              <p className="mt-2">
                This data is processed solely for the legitimate business purposes of responding to your inquiry, preparing scoped commercial proposals, and executing contractual services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                3. Privacy-First Principles &amp; Cookies
              </h2>
              <p className="mt-2">
                NEXARO does not sell, rent, or trade your personal data. We do not use intrusive cross-site tracking cookies or third-party advertising scripts.
                Any telemetry utilized is strictly privacy-preserving and respects Do Not Track (DNT) browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                4. Technical &amp; Organizational Security
              </h2>
              <p className="mt-2">
                As a cybersecurity-first studio, we apply strict security controls to protect information:
              </p>
              <ul className="mt-2 list-disc ps-5 space-y-1">
                <li>Enforced end-to-end TLS 1.3 encryption across all communication pathways</li>
                <li>Hardened HTTP security headers (CSP, HSTS, X-Content-Type-Options)</li>
                <li>Anti-spam honeypot filtering and automated rate-limiting protections</li>
                <li>Strict access controls and secure data storage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                5. Rights of the Data Subject (KVKK Art. 11 &amp; GDPR)
              </h2>
              <p className="mt-2">
                Under Article 11 of the Turkish Personal Data Protection Law (KVKK No. 6698) and relevant international regulations (including GDPR where applicable), you have the right to:
              </p>
              <ul className="mt-2 list-disc ps-5 space-y-1">
                <li>Learn whether your personal data is being processed</li>
                <li>Request information if your personal data has been processed</li>
                <li>Learn the purpose of processing and whether data is used accordingly</li>
                <li>Request rectification of incomplete or inaccurate data</li>
                <li>Request deletion or destruction of your personal data</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, simply email us at{" "}
                <a href="mailto:hello@nexaro.studio" className="text-[#2563eb] underline">
                  hello@nexaro.studio
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
