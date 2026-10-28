"use client";

import { getSecurityChecklist } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function SecurityFirst() {
  const { t, locale } = useSite();
  const checklist = getSecurityChecklist(locale);

  return (
    <section
      id="security"
      className="relative overflow-hidden bg-white py-14 md:py-20 dark:bg-[#0c0e14]"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -end-40 top-1/3 -z-10 h-[550px] w-[550px] rounded-full bg-emerald-100/40 blur-[140px] dark:bg-emerald-950/20" />

      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              <span className="h-0.5 w-6 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              <span>{t("security.eyebrow")}</span>
            </div>

            <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 dark:text-white">
              {t("security.title.1")}{" "}
              <span className="block text-emerald-600 dark:text-emerald-400">
                {t("security.title.2")}
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base dark:text-neutral-400">
              {t("security.side")}
            </p>
          </div>

          {/* Security Proof Badge Card (SecurityHeaders.com A+) */}
          <div className="rounded-[24px] border border-emerald-200/90 bg-emerald-50/60 p-5 shadow-sm dark:border-emerald-900/40 dark:bg-emerald-950/20 sm:max-w-xs">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-600 font-mono text-xl font-black text-white shadow-md">
                A+
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  SecurityHeaders.com
                </span>
                <p className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                  Grade A+ Verified
                </p>
              </div>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-600 dark:text-neutral-400">
              {t("security.score.desc")}
            </p>
          </div>
        </div>

        {/* 6-Point Checklist Bento Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {checklist.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-[24px] border border-gray-200/90 bg-[#fafbfc] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-neutral-800 dark:bg-[#121620] dark:hover:border-emerald-500/40 dark:hover:bg-[#141a26]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                  ✓
                </span>
                <span className="text-[11px] font-mono font-bold text-slate-400">
                  0{idx + 1} / Fortification
                </span>
              </div>

              <h3 className="mt-4 text-base font-extrabold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Audit CTA Link */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[24px] border border-gray-200/90 bg-[#f8fafc] p-5 sm:flex-row sm:px-8 dark:border-neutral-800 dark:bg-[#121620]">
          <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-neutral-300 text-center sm:text-left">
            Have an existing website and wonder if your client data or forms are exposed?
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-xs font-bold text-white shadow transition hover:bg-neutral-800 dark:bg-white dark:text-slate-950 dark:hover:bg-neutral-200"
          >
            {t("security.audit.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
