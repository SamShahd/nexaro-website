"use client";

import { getProcessSteps } from "@/lib/content";
import { useSite } from "@/lib/site-context";

const icons = [
  <svg key="discover" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
    <path d="M11 8v6M8 11h6" />
  </svg>,
  <svg key="design" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="m14 7 3 3-9 9H5v-3l9-9Z" />
    <path d="M12 20h9" />
  </svg>,
  <svg key="develop" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" x2="10" y1="4" y2="20" />
  </svg>,
  <svg key="deliver" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
];

export function Process() {
  const { t, locale } = useSite();
  const steps = getProcessSteps(locale);

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f8faff] py-12 md:py-16 dark:bg-[#0c0e14]"
    >
      {/* Ambient left glow */}
      <div className="pointer-events-none absolute -start-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[130px] dark:bg-blue-950/20" />

      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
              <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
              <span>{t("process.eyebrow")}</span>
            </div>

            <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 dark:text-white">
              {t("process.title.1")}{" "}
              <span className="block text-[#2563eb] dark:text-blue-500">{t("process.title.2")}</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-500 dark:text-neutral-400">
              {t("process.side")}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end pb-1 md:self-auto">
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-mono text-slate-500 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              04 Steps
            </span>
          </div>
        </div>

        {/* 4 Process Step Bento Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <article
              key={step.index}
              className="group flex flex-col justify-between rounded-[28px] border border-gray-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-neutral-800 dark:bg-[#121620]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-400">
                    {step.index}
                  </span>
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-[#f8fafc] text-slate-700 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                    {icons[idx]}
                  </div>
                </div>

                <div className="my-5 h-px w-full bg-gray-100 dark:bg-neutral-800" />

                <h3 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-neutral-400">
                  {step.body}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5">
                <span className="h-1 w-6 rounded-full bg-slate-200 group-hover:bg-[#2563eb] transition-colors dark:bg-neutral-800" />
                <span className="text-[10px] font-mono text-slate-400">Phase {idx + 1}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
