"use client";

import { useSite } from "@/lib/site-context";
import { ButtonLink } from "./ui";

export function Hero() {
  const { t } = useSite();

  return (
    <section className="relative overflow-hidden bg-[#f8faff] pb-10 pt-8 md:pb-16 md:pt-12 dark:bg-[#0c0e14]">
      {/* Right ethereal soft blue ambient glow matching the reference screenshot */}
      <div className="pointer-events-none absolute -end-24 top-0 -z-10 h-[650px] w-[650px] rounded-full bg-blue-100/70 blur-[140px] dark:bg-blue-950/25" />

      <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] items-center gap-12 sm:w-[min(1280px,calc(100%-3rem))] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          {/* Eyebrow with blue line dash */}
          <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
            <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
            <span>{t("hero.eyebrow")}</span>
          </div>

          <h1 className="mt-4 max-w-[17ch] text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-slate-950 dark:text-white">
            {t("hero.title.1")}{" "}
            <span className="block text-[#2563eb] dark:text-blue-500">
              {t("hero.title.2")}
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-slate-500 dark:text-neutral-400">
            {t("hero.body")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-slate-950 px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-neutral-800 cursor-pointer dark:bg-white dark:text-slate-950 max-sm:w-full"
            >
              {t("nav.cta")} <span aria-hidden="true" className="ms-1">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-gray-300 bg-white px-6 py-3 text-xs font-bold text-slate-900 shadow-sm transition hover:border-gray-400 hover:bg-gray-50 cursor-pointer dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-850 max-sm:w-full"
            >
              {t("hero.work")} <span aria-hidden="true" className="ms-1">↓</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-gray-200/70 pt-6 text-[11px] font-semibold uppercase tracking-[0.09em] text-slate-500 dark:border-neutral-800 dark:text-neutral-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#2563eb] animate-pulse" />
              {t("hero.city")}
            </span>
            <span className="text-slate-300 dark:text-neutral-600">•</span>
            <span>{t("hero.tagline")}</span>
          </div>
        </div>

        {/* Visual Orb & Interactive Chips */}
        <div className="relative mx-auto grid min-h-[340px] w-full max-w-[480px] place-items-center sm:min-h-[440px] lg:min-h-[500px]">
          {/* Subtle orbits */}
          <div className="pointer-events-none absolute h-[200px] sm:h-[220px] w-[90%] max-w-[480px] -rotate-[28deg] rounded-full border border-blue-400/20 dark:border-blue-400/30" />
          <div className="pointer-events-none absolute h-[240px] sm:h-[270px] w-[92%] max-w-[500px] rotate-[36deg] rounded-full border border-slate-900/10 dark:border-white/10" />

          {/* Central Orb */}
          <div className="orb h-[min(64vw,270px)] w-[min(64vw,270px)] sm:h-[360px] sm:w-[360px]" />

          {/* Chip 1 */}
          <div className="absolute start-0 top-[8%] sm:top-[12%] z-10 max-w-[150px] sm:max-w-none rounded-xl sm:rounded-2xl border border-gray-200/90 bg-white/95 p-2 sm:p-3.5 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-[#121620]/95 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="grid h-7 w-7 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-lg sm:rounded-xl bg-gray-100 text-xs sm:text-sm text-slate-800 dark:bg-white/5 dark:text-white">
                ✳
              </div>
              <div>
                <div className="text-[11px] sm:text-[12px] font-bold text-slate-900 dark:text-white leading-tight">{t("hero.chip.brand")}</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-neutral-400 leading-tight">{t("hero.chip.brand.sub")}</div>
              </div>
            </div>
          </div>

          {/* Chip 2 */}
          <div className="absolute end-0 top-[2%] sm:top-[6%] z-10 max-w-[145px] sm:max-w-none rounded-xl sm:rounded-2xl border border-gray-200/90 bg-white/95 p-2 sm:p-3.5 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-[#121620]/95 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="grid h-7 w-7 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-lg sm:rounded-xl bg-gray-100 text-xs sm:text-sm text-slate-800 dark:bg-white/5 dark:text-white">
                ↗
              </div>
              <div>
                <div className="text-[11px] sm:text-[12px] font-bold text-slate-900 dark:text-white leading-tight">{t("hero.chip.web")}</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-neutral-400 leading-tight">{t("hero.chip.web.sub")}</div>
              </div>
            </div>
          </div>

          {/* Chip 3 */}
          <div className="absolute bottom-[8%] sm:bottom-[10%] end-1 sm:end-2 z-10 max-w-[150px] sm:max-w-none rounded-xl sm:rounded-2xl border border-gray-200/90 bg-white/95 p-2 sm:p-3.5 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-[#121620]/95 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="grid h-7 w-7 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-lg sm:rounded-xl bg-gray-100 text-xs sm:text-sm text-slate-800 dark:bg-white/5 dark:text-white">
                ⌘
              </div>
              <div>
                <div className="text-[11px] sm:text-[12px] font-bold text-slate-900 dark:text-white leading-tight">{t("hero.chip.product")}</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-neutral-400 leading-tight">{t("hero.chip.product.sub")}</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 start-2 text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400">
            {t("hero.note")}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = [
    "Full-Stack Web Apps",
    "Tailored Brand Identity",
    "Conversion Landing Pages",
    "Operations Dashboards",
    "Multilingual Experiences",
    "Security-First Engineering",
  ];

  return (
    <div className="border-y border-gray-200/70 bg-white py-4 overflow-hidden dark:border-neutral-800 dark:bg-[#0c0e14]">
      <div className="flex w-max gap-8 animate-marquee">
        {[...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-3 text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase"
          >
            <span>{item}</span>
            <span className="text-[#2563eb]">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
