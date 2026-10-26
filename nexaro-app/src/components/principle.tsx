"use client";

import { useSite } from "@/lib/site-context";

export function Principle() {
  const { t } = useSite();

  return (
    <section className="relative overflow-hidden bg-[#f8faff] py-10 md:py-14 dark:bg-[#0c0e14]">
      {/* Soft ethereal ambient glow */}
      <div className="pointer-events-none absolute -start-40 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-100/50 blur-[140px] dark:bg-blue-950/20" />

      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        <div className="grid items-center gap-10 rounded-[28px] border border-gray-200/90 bg-white p-8 shadow-sm sm:p-12 md:grid-cols-[0.8fr_1.2fr] lg:gap-16 dark:border-neutral-800 dark:bg-[#121620]">
          {/* Studio Stamp Card */}
          <div className="flex min-h-[220px] items-center justify-center rounded-[22px] border border-gray-100 bg-[#fafbfc] p-6 shadow-sm dark:border-neutral-850 dark:bg-neutral-900/60">
            <div className="grid h-36 w-36 -rotate-6 place-items-center rounded-full border-2 border-gray-200 bg-white text-center font-extrabold text-slate-900 transition-transform duration-500 hover:rotate-0 hover:scale-105 shadow-sm dark:border-neutral-700 dark:bg-neutral-850 dark:text-white">
              <div>
                <span className="block text-2xl font-black tracking-tight">N.</span>
                <span className="block text-xs uppercase tracking-widest font-mono text-slate-700 dark:text-neutral-300">
                  NEXARO
                </span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-sans">
                  Studio
                </span>
              </div>
            </div>
          </div>

          {/* Copy and CTA */}
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
              <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
              <span>{t("principle.eyebrow")}</span>
            </div>

            <h2 className="mt-3 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-slate-950 dark:text-white">
              {t("principle.title")}
            </h2>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500 dark:text-neutral-400">
              {t("principle.body")}
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-neutral-800 hover:-translate-y-0.5 cursor-pointer dark:bg-white dark:text-slate-950"
              >
                {t("principle.cta")} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
