"use client";

import { useState } from "react";
import { getServiceOptions, studio } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function Contact() {
  const { t, locale } = useSite();
  const serviceOptions = getServiceOptions(locale);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    websiteUrl: "",
    details: "",
    website_hp: "", // Honeypot field
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setFeedbackMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedbackMsg(data.message || t("contact.form.success"));
        setFormData({
          name: "",
          contact: "",
          service: "",
          websiteUrl: "",
          details: "",
          website_hp: "",
        });
      } else {
        setStatus("error");
        setFeedbackMsg(data.message || t("contact.form.error"));
      }
    } catch {
      setStatus("error");
      setFeedbackMsg(t("contact.form.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f8faff] py-14 md:py-20 dark:bg-[#0c0e14]"
    >
      {/* Soft ethereal ambient glow */}
      <div className="pointer-events-none absolute -end-24 top-0 -z-10 h-[650px] w-[650px] rounded-full bg-blue-100/70 blur-[140px] dark:bg-blue-950/20" />

      <div className="mx-auto w-[min(880px,calc(100%-2rem))] sm:w-[min(880px,calc(100%-3rem))]">
        {/* Centered Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
            <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
            <span>{t("contact.eyebrow")}</span>
          </div>

          <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 dark:text-white">
            {t("contact.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base dark:text-neutral-400">
            {t("contact.body")}
          </p>

          {/* Quick Direct WhatsApp or Cal.com intro */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={studio.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-300"
            >
              <span>💬</span> Message on WhatsApp ↗
            </a>
            <a
              href={studio.calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-gray-400 hover:text-slate-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              <span>📅</span> {t("contact.book")}
            </a>
          </div>
        </div>

        {/* Clean 5-Field Contact Bento Card */}
        <div className="mt-10 rounded-[28px] sm:rounded-[32px] border border-gray-200/90 bg-white p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:border-neutral-800 dark:bg-[#121620]">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot field (hidden from real users, caught by bots) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_hp">Leave this empty</label>
              <input
                id="website_hp"
                name="website_hp"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website_hp}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Field 1: Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
                  {t("contact.form.name")} <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Smith"
                  className="mt-2 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2563eb] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-black/40 dark:text-white dark:placeholder-neutral-500"
                />
              </div>

              {/* Field 2: Email or WhatsApp */}
              <div>
                <label htmlFor="contact" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
                  {t("contact.form.contact")} <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="you@company.com or +90..."
                  className="mt-2 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2563eb] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-black/40 dark:text-white dark:placeholder-neutral-500"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Field 3: What do you need? */}
              <div>
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
                  {t("contact.form.service")} <span className="text-[#2563eb]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-900 transition focus:border-[#2563eb] focus:bg-white focus:outline-none cursor-pointer dark:border-neutral-800 dark:bg-black/40 dark:text-white"
                >
                  <option value="" disabled>
                    Select an option…
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-slate-900 dark:bg-neutral-900 dark:text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 4: Current Website URL (optional, for free audit) */}
              <div>
                <label htmlFor="websiteUrl" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
                  {t("contact.form.url")}
                </label>
                <input
                  id="websiteUrl"
                  name="websiteUrl"
                  type="text"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className="mt-2 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2563eb] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-black/40 dark:text-white dark:placeholder-neutral-500"
                />
              </div>
            </div>

            {/* Field 5: Details */}
            <div>
              <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
                {t("contact.form.details")} <span className="text-[#2563eb]">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                required
                value={formData.details}
                onChange={handleChange}
                placeholder="Briefly describe your business goals, required sections, or any specific challenges…"
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2563eb] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-black/40 dark:text-white dark:placeholder-neutral-500"
              />
            </div>

            {/* Submit & Status */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-xs font-bold text-white shadow-md transition hover:bg-neutral-800 disabled:opacity-50 cursor-pointer sm:w-auto dark:bg-white dark:text-slate-950 dark:hover:bg-neutral-200"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent dark:border-slate-950" />
                    {t("contact.form.sending")}
                  </span>
                ) : (
                  <>
                    {t("contact.form.submit")}
                  </>
                )}
              </button>
            </div>

            {/* Privacy notice */}
            <p className="text-[11px] leading-relaxed text-slate-400 dark:text-neutral-500">
              {t("contact.privacy.notice")}{" "}
              <a href="/privacy" className="underline hover:text-slate-600 dark:hover:text-neutral-300">
                KVKK &amp; Privacy Policy
              </a>
              .
            </p>

            {/* Status alerts */}
            {status === "success" && (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-800 dark:text-emerald-300 animate-in fade-in">
                <div className="flex items-center gap-2 font-bold">
                  <span>✓ {feedbackMsg}</span>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-800 dark:text-red-300 animate-in fade-in">
                <p className="font-semibold">{feedbackMsg}</p>
                <a
                  href={`mailto:${studio.email}`}
                  className="mt-2 inline-block text-xs font-bold underline hover:no-underline"
                >
                  Or email directly to {studio.email} →
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
