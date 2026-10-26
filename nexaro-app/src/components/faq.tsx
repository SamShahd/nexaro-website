"use client";

import { useState } from "react";
import { getFaqs } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function FAQ() {
  const { t, locale } = useSite();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqsList = getFaqs(locale);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-12 md:py-16 dark:bg-[#0c0e14]"
    >
      {/* Soft ethereal ambient glow */}
      <div className="pointer-events-none absolute -end-40 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-100/50 blur-[140px] dark:bg-blue-950/20" />

      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Header Column */}
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
              <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
              <span>{t("faq.eyebrow")}</span>
            </div>

            <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 dark:text-white">
              {t("faq.title")}
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-neutral-400">
              {t("faq.side")}
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-[#f8fafc] px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-gray-400 hover:text-slate-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                <span>Have a different question?</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Accordion Column */}
          <div className="divide-y divide-gray-100 dark:divide-neutral-850">
            {faqsList.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={faq.q} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 text-left transition-colors hover:text-[#3b5bdb]"
                  >
                    <span className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                      {faq.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gray-200 bg-white text-base font-light text-slate-700 shadow-sm transition-transform duration-200 dark:border-neutral-700 dark:bg-neutral-850 dark:text-neutral-200 ${
                        isOpen ? "rotate-45 bg-[#f4f6fa] dark:bg-neutral-800" : ""
                      }`}
                    >
                      ＋
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pe-8 animate-in fade-in slide-in-from-top-1 duration-200">
                      <p className="text-xs leading-relaxed text-slate-500 sm:text-sm dark:text-neutral-400">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
