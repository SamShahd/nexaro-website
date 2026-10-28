"use client";

import { useSite } from "@/lib/site-context";

export function Hero() {
  const { t } = useSite();

  return (
    <section className="relative overflow-hidden bg-[#f8faff] pb-12 pt-8 md:pb-20 md:pt-14 dark:bg-[#0c0e14]">
      {/* Right ethereal soft blue ambient glow */}
      <div className="pointer-events-none absolute -end-24 top-0 -z-10 h-[650px] w-[650px] rounded-full bg-blue-100/70 blur-[140px] dark:bg-blue-950/25" />

      <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] items-center gap-12 sm:w-[min(1280px,calc(100%-3rem))] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          {/* Eyebrow with blue line dash */}
          <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
            <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
            <span>{t("hero.eyebrow")}</span>
          </div>

          {/* Headline */}
          <h1 className="mt-4 text-[clamp(2.2rem,4.5vw,3.75rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-slate-950 dark:text-white">
            {t("hero.headline")}
          </h1>

          {/* Subline */}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-neutral-300">
            {t("hero.subline")}
          </p>

          {/* Buttons: Get a free website audit / See pricing */}
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-neutral-800 cursor-pointer dark:bg-white dark:text-slate-950 max-sm:w-full"
            >
              {t("hero.cta.audit")} <span aria-hidden="true">→</span>
            </a>
            <a
              href="#pricing"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-xs font-bold text-slate-900 shadow-sm transition hover:border-gray-400 hover:bg-gray-50 cursor-pointer dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-850 max-sm:w-full"
            >
              {t("hero.cta.pricing")} <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Trust line underneath */}
          <p className="mt-5 text-xs font-medium text-slate-500 sm:text-[13px] dark:text-neutral-400">
            {t("hero.trust")}
          </p>

          {/* City & Tagline */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-gray-200/70 pt-6 text-[11px] font-semibold uppercase tracking-[0.09em] text-slate-500 dark:border-neutral-800 dark:text-neutral-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#2563eb] animate-pulse" />
              {t("hero.city")}
            </span>
            <span className="text-slate-300 dark:text-neutral-600">•</span>
            <span>{t("hero.tagline")}</span>
          </div>
        </div>

        {/* Visual Orb & Interactive Trust Chips */}
        <div className="relative mx-auto grid min-h-[340px] w-full max-w-[460px] place-items-center sm:min-h-[420px] lg:min-h-[480px]">
          {/* Subtle orbits */}
          <div className="pointer-events-none absolute h-[200px] sm:h-[220px] w-[90%] max-w-[460px] -rotate-[28deg] rounded-full border border-blue-400/20 dark:border-blue-400/30" />
          <div className="pointer-events-none absolute h-[240px] sm:h-[270px] w-[92%] max-w-[480px] rotate-[36deg] rounded-full border border-slate-900/10 dark:border-white/10" />

          {/* Central Orb */}
          <div className="orb h-[min(64vw,260px)] w-[min(64vw,260px)] sm:h-[340px] sm:w-[340px]" />

          {/* Chip 1: 5-14 Days Delivery */}
          <div className="absolute start-0 top-[10%] z-10 max-w-[160px] sm:max-w-none rounded-xl sm:rounded-2xl border border-gray-200/90 bg-white/95 p-2 sm:p-3 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-[#121620]/95 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-sm text-[#2563eb] dark:bg-blue-950/60 dark:text-blue-300 font-bold">
                ⚡
              </div>
              <div>
                <div className="text-[11px] sm:text-[12px] font-bold text-slate-900 dark:text-white leading-tight">5–14 Days</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-neutral-400 leading-tight">Fast delivery</div>
              </div>
            </div>
          </div>

          {/* Chip 2: Security Built In */}
          <div className="absolute end-0 top-[4%] z-10 max-w-[160px] sm:max-w-none rounded-xl sm:rounded-2xl border border-gray-200/90 bg-white/95 p-2 sm:p-3 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-[#121620]/95 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-50 text-sm text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 font-bold">
                🛡️
              </div>
              <div>
                <div className="text-[11px] sm:text-[12px] font-bold text-slate-900 dark:text-white leading-tight">A+ Security</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-neutral-400 leading-tight">Hardened headers</div>
              </div>
            </div>
          </div>

          {/* Chip 3: Solo Studio */}
          <div className="absolute bottom-[10%] end-2 z-10 max-w-[165px] sm:max-w-none rounded-xl sm:rounded-2xl border border-gray-200/90 bg-white/95 p-2 sm:p-3 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-[#121620]/95 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-indigo-50 text-sm text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 font-bold">
                👤
              </div>
              <div>
                <div className="text-[11px] sm:text-[12px] font-bold text-slate-900 dark:text-white leading-tight">Direct Access</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-neutral-400 leading-tight">Zero agency bloat</div>
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
  const { t } = useSite();

  const benefits = [
    t("benefits.1"),
    t("benefits.2"),
    t("benefits.3"),
    t("benefits.4"),
    t("benefits.5"),
    t("benefits.6"),
    t("benefits.7"),
  ];

  return (
    <div className="border-y border-gray-200/80 bg-white py-3.5 overflow-hidden dark:border-neutral-800 dark:bg-[#0c0e14]">
      <div className="flex w-max gap-8 animate-marquee">
        {[...benefits, ...benefits].map((benefit, idx) => (
          <span
            key={idx}
            className="flex items-center gap-3 text-xs font-semibold tracking-wide text-slate-700 dark:text-neutral-300"
          >
            <span>{benefit}</span>
            <span className="text-[#2563eb]">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
