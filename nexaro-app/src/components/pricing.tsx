"use client";

import { useState } from "react";
import { getPricingData } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function Pricing() {
  const { t, locale, currency, setCurrency } = useSite();
  const [tab, setTab] = useState<"websites" | "care" | "addons">("websites");

  const pricingData = getPricingData(locale);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#f8faff] py-14 md:py-20 dark:bg-[#0c0e14]"
    >
      {/* Right ethereal soft blue ambient glow */}
      <div className="pointer-events-none absolute -end-24 top-1/4 -z-10 h-[650px] w-[650px] rounded-full bg-blue-100/70 blur-[140px] dark:bg-blue-950/20" />

      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
              <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
              <span>{t("pricing.eyebrow")}</span>
            </div>

            <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 dark:text-white">
              {t("pricing.title.1")}{" "}
              <span className="block text-[#2563eb] dark:text-blue-500">
                {t("pricing.title.2")}
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base dark:text-neutral-400">
              {t("pricing.side")}
            </p>
          </div>

          {/* Currency Switcher Toggle: TRY vs USD */}
          <div className="flex items-center gap-2 self-start rounded-full border border-gray-200 bg-white p-1 shadow-sm md:self-auto dark:border-neutral-800 dark:bg-neutral-900">
            <button
              type="button"
              onClick={() => setCurrency("TRY")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition cursor-pointer ${
                currency === "TRY"
                  ? "bg-[#2563eb] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white"
              }`}
            >
              ₺ TRY
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition cursor-pointer ${
                currency === "USD"
                  ? "bg-[#2563eb] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white"
              }`}
            >
              $ USD
            </button>
          </div>
        </div>

        {/* Founding Client Offer Callout Banner */}
        <div className="mt-10 overflow-hidden rounded-[24px] border border-blue-200/90 bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-white p-6 shadow-sm dark:border-blue-900/50 dark:from-blue-950/40 dark:via-neutral-900 dark:to-neutral-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563eb] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                ★ {t("pricing.founding.badge")}
              </span>
              <h3 className="mt-2 text-lg font-extrabold text-slate-950 dark:text-white">
                {t("pricing.founding.title")}
              </h3>
              <p className="mt-1 max-w-2xl text-xs sm:text-sm text-slate-600 dark:text-neutral-300">
                {t("pricing.founding.desc")}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-xs font-bold text-white shadow transition hover:bg-neutral-800 dark:bg-white dark:text-slate-950 dark:hover:bg-neutral-200"
            >
              Claim a Founding Slot →
            </a>
          </div>
        </div>

        {/* Category Tabs: Websites & Audits | Care Plans | Add-ons & Extras */}
        <div className="no-scrollbar mt-10 flex gap-2.5 overflow-x-auto pb-2">
          <button
            type="button"
            onClick={() => setTab("websites")}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition cursor-pointer ${
              tab === "websites"
                ? "border-2 border-[#2563eb] bg-white text-slate-950 shadow-sm dark:border-blue-500 dark:bg-neutral-900 dark:text-white"
                : "border border-gray-200 bg-[#f4f6fa] text-slate-600 hover:bg-white hover:text-slate-900 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400"
            }`}
          >
            <span>01</span>
            <span>{t("pricing.tabs.websites")}</span>
          </button>
          <button
            type="button"
            onClick={() => setTab("care")}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition cursor-pointer ${
              tab === "care"
                ? "border-2 border-[#2563eb] bg-white text-slate-950 shadow-sm dark:border-blue-500 dark:bg-neutral-900 dark:text-white"
                : "border border-gray-200 bg-[#f4f6fa] text-slate-600 hover:bg-white hover:text-slate-900 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400"
            }`}
          >
            <span>02</span>
            <span>{t("pricing.tabs.care")}</span>
          </button>
          <button
            type="button"
            onClick={() => setTab("addons")}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition cursor-pointer ${
              tab === "addons"
                ? "border-2 border-[#2563eb] bg-white text-slate-950 shadow-sm dark:border-blue-500 dark:bg-neutral-900 dark:text-white"
                : "border border-gray-200 bg-[#f4f6fa] text-slate-600 hover:bg-white hover:text-slate-900 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400"
            }`}
          >
            <span>03</span>
            <span>{t("pricing.tabs.addons")}</span>
          </button>
        </div>

        {/* Tab 1: Websites & Security Audits */}
        {tab === "websites" && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingData.websites.map((plan) => {
              const price = currency === "TRY" ? plan.priceTRY : plan.priceUSD;
              return (
                <article
                  key={plan.id}
                  className={`flex flex-col justify-between rounded-[28px] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                    plan.popular
                      ? "border-2 border-[#2563eb] bg-white shadow-xl ring-2 ring-[#2563eb]/20 dark:border-blue-500 dark:bg-[#121620]"
                      : "border border-gray-200/90 bg-white shadow-sm hover:border-gray-300 dark:border-neutral-800 dark:bg-[#121620]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                        {plan.name}
                      </h3>
                      {plan.popular && (
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2563eb] dark:bg-blue-950/60 dark:text-blue-300">
                          {t("pricing.mostPopular")}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-xs text-slate-500 leading-relaxed dark:text-neutral-400">
                      {plan.scope}
                    </p>

                    <div className="mt-5 border-y border-gray-100 py-4 dark:border-neutral-800">
                      <div className="font-mono text-2xl font-black text-slate-950 dark:text-white">
                        {price}
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2.5 text-xs text-slate-600 dark:text-neutral-300">
                      {plan.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-0.5 text-xs font-bold text-[#2563eb]">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs font-bold transition shadow-sm cursor-pointer ${
                      plan.popular
                        ? "bg-[#2563eb] text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                        : "bg-slate-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-slate-950 dark:hover:bg-neutral-200"
                    }`}
                  >
                    <span>{t("pricing.getStarted")}</span>
                  </a>
                </article>
              );
            })}
          </div>
        )}

        {/* Tab 2: Monthly Care Plans */}
        {tab === "care" && (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricingData.carePlans.map((plan) => {
              const price = currency === "TRY" ? plan.priceTRY : plan.priceUSD;
              return (
                <article
                  key={plan.id}
                  className={`flex flex-col justify-between rounded-[28px] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                    plan.popular
                      ? "border-2 border-[#2563eb] bg-white shadow-xl ring-2 ring-[#2563eb]/20 dark:border-blue-500 dark:bg-[#121620]"
                      : "border border-gray-200/90 bg-white shadow-sm hover:border-gray-300 dark:border-neutral-800 dark:bg-[#121620]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                        {plan.name}
                      </h3>
                      {plan.popular && (
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2563eb] dark:bg-blue-950/60 dark:text-blue-300">
                          {t("pricing.mostPopular")}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-xs text-slate-500 leading-relaxed dark:text-neutral-400">
                      {plan.scope}
                    </p>

                    <div className="mt-5 border-y border-gray-100 py-4 dark:border-neutral-800">
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono text-2xl font-black text-slate-950 dark:text-white">
                          {price}
                        </span>
                        <span className="text-xs text-slate-400">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2.5 text-xs text-slate-600 dark:text-neutral-300">
                      {plan.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-0.5 text-xs font-bold text-[#2563eb]">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs font-bold transition shadow-sm cursor-pointer ${
                      plan.popular
                        ? "bg-[#2563eb] text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                        : "bg-slate-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-slate-950 dark:hover:bg-neutral-200"
                    }`}
                  >
                    <span>{t("pricing.getStarted")}</span>
                  </a>
                </article>
              );
            })}
          </div>
        )}

        {/* Tab 3: Add-Ons Table */}
        {tab === "addons" && (
          <div className="mt-8 overflow-hidden rounded-[28px] border border-gray-200/90 bg-white p-6 sm:p-8 shadow-sm dark:border-neutral-800 dark:bg-[#121620]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:border-neutral-800">
                  <th className="py-3.5 pe-4">Add-On Item</th>
                  <th className="px-4 py-3.5">Details & Scope</th>
                  <th className="py-3.5 ps-4 text-end">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100/80 dark:divide-neutral-800/80">
                {pricingData.addOns.map((item) => {
                  const price = currency === "TRY" ? item.priceTRY : item.priceUSD;
                  return (
                    <tr key={item.name} className="transition-colors hover:bg-slate-50/50 dark:hover:bg-neutral-850/30">
                      <td className="py-4 pe-4 font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </td>
                      <td className="px-4 py-4 text-xs text-slate-500 dark:text-neutral-400">
                        {item.detail}
                      </td>
                      <td className="py-4 ps-4 text-end font-mono font-bold text-slate-900 whitespace-nowrap dark:text-white">
                        {price}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Terms, Invoicing & Guarantees Underneath */}
        <div className="mt-12 rounded-[28px] border border-gray-200/90 bg-white p-6 sm:p-8 shadow-sm dark:border-neutral-800 dark:bg-[#121620]">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            {t("pricing.terms.title")}
          </h4>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 text-xs leading-relaxed text-slate-600 dark:text-neutral-300">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-xs font-bold text-[#2563eb]">✓</span>
              <p>{t("pricing.terms.payment")}</p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-xs font-bold text-[#2563eb]">✓</span>
              <p>{t("pricing.terms.ownership")}</p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-xs font-bold text-[#2563eb]">✓</span>
              <p>{t("pricing.terms.vat")}</p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-xs font-bold text-[#2563eb]">✓</span>
              <p>{t("pricing.terms.invoicing")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
