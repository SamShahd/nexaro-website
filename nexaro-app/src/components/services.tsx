"use client";

import { getServices } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function Services() {
  const { t, locale, currency } = useSite();
  const servicesList = getServices(locale);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8faff] py-14 md:py-20 dark:bg-[#0c0e14]"
    >
      {/* Soft ethereal ambient glow */}
      <div className="pointer-events-none absolute -end-40 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-blue-100/60 blur-[130px] dark:bg-blue-950/20" />

      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
              <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
              <span>{t("services.eyebrow")}</span>
            </div>

            <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 dark:text-white">
              {t("services.title.1")}{" "}
              <span className="block text-[#2563eb] dark:text-blue-500">{t("services.title.2")}</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base dark:text-neutral-400">
              {t("services.side")}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end pb-1 md:self-auto">
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-mono font-semibold text-slate-500 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              03 Core Services
            </span>
          </div>
        </div>

        {/* 3 Streamlined Cards (No Fake Dashboards, Same Structured Layout) */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {servicesList.map((service, idx) => {
            const isFeatured = idx === 0;
            const price = currency === "TRY" ? service.fromPriceTRY : service.fromPriceUSD;

            return (
              <article
                key={service.id}
                className={`flex flex-col justify-between rounded-[28px] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                  isFeatured
                    ? "border-2 border-[#2563eb]/50 bg-white shadow-[0_12px_40px_rgba(37,99,235,0.08)] ring-1 ring-[#2563eb]/20 dark:border-blue-500/40 dark:bg-[#121620]"
                    : "border border-gray-200/90 bg-white shadow-sm hover:border-gray-300 hover:shadow-xl dark:border-neutral-800 dark:bg-[#121620]"
                }`}
              >
                <div>
                  {/* Top Index & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-400">
                      {service.index} / {service.tag}
                    </span>
                    {service.badge && (
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-[#2563eb] dark:bg-blue-950/60 dark:text-blue-300">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  {/* 1. The result for the client */}
                  <div className="mt-3 rounded-2xl bg-[#f8fafc] p-3.5 border border-gray-100 dark:border-neutral-800 dark:bg-black/30">
                    <p className="text-xs font-bold text-slate-900 sm:text-sm dark:text-white">
                      “{service.result}”
                    </p>
                  </div>

                  {/* 2. What's included */}
                  <div className="mt-6">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {t("services.includes")}
                    </div>
                    <ul className="mt-3 space-y-2.5 text-xs text-slate-600 dark:text-neutral-300">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-0.5 text-xs font-bold text-[#2563eb] dark:text-blue-400">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3. "From" Price & 4. Button */}
                <div className="mt-8 border-t border-gray-100 pt-5 dark:border-neutral-800">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-400">Starting at</span>
                    <span className="font-mono text-xl font-extrabold text-slate-950 dark:text-white">
                      {price}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className={`mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs font-bold transition shadow-sm cursor-pointer ${
                      isFeatured
                        ? "bg-[#2563eb] text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                        : "bg-slate-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-slate-950 dark:hover:bg-neutral-200"
                    }`}
                  >
                    <span>{service.ctaText}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Add-on only & Quote only note block */}
        <div className="mt-10 rounded-[24px] border border-gray-200/90 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-[#121620]">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            {t("services.addon.title")}
          </h4>
          <div className="mt-3 grid gap-4 sm:grid-cols-2 text-xs leading-relaxed text-slate-600 dark:text-neutral-300">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-sm font-bold text-indigo-500">✳</span>
              <p>{t("services.addon.brand")}</p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-sm font-bold text-indigo-500">⌘</span>
              <p>{t("services.addon.custom")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
