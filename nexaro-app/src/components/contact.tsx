"use client";

import { useState } from "react";
import {
  getBudgetOptions,
  getServiceOptions,
  getTimingOptions,
  studio,
} from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function Contact() {
  const { t, locale } = useSite();

  const serviceOptions = getServiceOptions(locale);
  const budgetOptions = getBudgetOptions(locale);
  const timingOptions = getTimingOptions(locale);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timing: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [inquiryId, setInquiryId] = useState("");
  const [copied, setCopied] = useState(false);

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
        setFeedbackMsg(data.message || t("form.success"));
        setInquiryId(data.inquiryId || "");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          timing: "",
          details: "",
        });
      } else {
        setStatus("error");
        setFeedbackMsg(data.message || t("form.error"));
      }
    } catch {
      setStatus("error");
      setFeedbackMsg(t("form.error"));
    } finally {
      setLoading(false);
    }
  };

  const handleCopyBrief = () => {
    const brief = `NEXARO Project Brief:\nName: ${formData.name || "N/A"}\nEmail: ${formData.email || "N/A"}\nCompany: ${formData.company || "N/A"}\nService: ${formData.service || "N/A"}\nBudget: ${formData.budget || "N/A"}\nTiming: ${formData.timing || "N/A"}\nDetails: ${formData.details || "N/A"}`;
    navigator.clipboard.writeText(brief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`NEXARO Project Inquiry — ${formData.service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "Not provided"}\nService: ${formData.service}\nBudget: ${formData.budget || "Not provided"}\nTiming: ${formData.timing || "Not provided"}\n\nProject details:\n${formData.details}`
    );
    window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f8faff] py-12 md:py-16 dark:bg-[#0c0e14]"
    >
      {/* Soft ethereal ambient glow */}
      <div className="pointer-events-none absolute -end-24 top-0 -z-10 h-[650px] w-[650px] rounded-full bg-blue-100/70 blur-[140px] dark:bg-blue-950/20" />

      <div className="mx-auto w-[min(960px,calc(100%-2rem))] sm:w-[min(960px,calc(100%-3rem))]">
        {/* Sleek Centered Header like Apple / Stripe */}
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
        </div>

        {/* Clean, Focused Inquiry Bento Card */}
        <div className="mt-10 sm:mt-12 rounded-[28px] sm:rounded-[32px] border border-gray-200/90 bg-white p-5 sm:p-10 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:border-neutral-800 dark:bg-[#121620]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
                  {t("form.name")} <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("form.placeholder.name")}
                  className="mt-2.5 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2563eb] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-black/40 dark:text-white dark:placeholder-neutral-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
                  {t("form.email")} <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="mt-2.5 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2563eb] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-black/40 dark:text-white dark:placeholder-neutral-500"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
                  {t("form.company")} <span className="text-slate-400 font-normal">({t("form.optional")})</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Studio or Organization"
                  className="mt-2.5 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2563eb] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-black/40 dark:text-white dark:placeholder-neutral-500"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
                  {t("form.service")} <span className="text-[#2563eb]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-2.5 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-900 transition focus:border-[#2563eb] focus:bg-white focus:outline-none cursor-pointer dark:border-neutral-800 dark:bg-black/40 dark:text-white"
                >
                  <option value="" disabled>
                    {t("form.choose")}
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-slate-900 dark:bg-neutral-900 dark:text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
                  {t("form.budget")} <span className="text-slate-400 font-normal">({t("form.optional")})</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-2.5 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-900 transition focus:border-[#2563eb] focus:bg-white focus:outline-none cursor-pointer dark:border-neutral-800 dark:bg-black/40 dark:text-white"
                >
                  <option value="">{t("form.range")}</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-slate-900 dark:bg-neutral-900 dark:text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timing" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
                  {t("form.timing")} <span className="text-slate-400 font-normal">({t("form.optional")})</span>
                </label>
                <select
                  id="timing"
                  name="timing"
                  value={formData.timing}
                  onChange={handleChange}
                  className="mt-2.5 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-900 transition focus:border-[#2563eb] focus:bg-white focus:outline-none cursor-pointer dark:border-neutral-800 dark:bg-black/40 dark:text-white"
                >
                  <option value="">{t("form.select")}</option>
                  {timingOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-slate-900 dark:bg-neutral-900 dark:text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Details */}
            <div>
              <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300">
                {t("form.details")} <span className="text-[#2563eb]">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                required
                value={formData.details}
                onChange={handleChange}
                placeholder={t("form.placeholder.details")}
                className="mt-2.5 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#2563eb] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-black/40 dark:text-white dark:placeholder-neutral-500"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-xs font-bold text-white shadow-md transition hover:bg-neutral-800 disabled:opacity-50 cursor-pointer dark:bg-white dark:text-slate-950"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent dark:border-slate-950" />
                    {t("form.sending")}
                  </span>
                ) : (
                  <>
                    {t("form.submit")} <span aria-hidden="true">→</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-neutral-400">
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="hover:text-slate-900 transition cursor-pointer dark:hover:text-white"
                >
                  {copied ? "✓ Copied" : "Copy brief"}
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={handleMailtoFallback}
                  className="hover:text-slate-900 transition cursor-pointer dark:hover:text-white"
                >
                  Open in Mail
                </button>
              </div>
            </div>

            {/* Status alerts */}
            {status === "success" && (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-sm text-emerald-800 dark:text-emerald-300 animate-in fade-in">
                <div className="flex items-center gap-2 font-bold">
                  <span>✓ Inquiry Sent Successfully</span>
                  {inquiryId && (
                    <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-xs">
                      ID: {inquiryId}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs opacity-90">{feedbackMsg}</p>
              </div>
            )}

            {status === "error" && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-sm text-red-800 dark:text-red-300 animate-in fade-in">
                <p className="font-semibold">{feedbackMsg}</p>
                <button
                  type="button"
                  onClick={handleMailtoFallback}
                  className="mt-2 text-xs font-bold underline hover:no-underline"
                >
                  Click here to email directly →
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
