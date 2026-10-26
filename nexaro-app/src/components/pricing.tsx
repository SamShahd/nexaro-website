"use client";

import { useState } from "react";
import { getPricingCategories } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function Pricing() {
  const { t, locale } = useSite();
  const [activeCategory, setActiveCategory] = useState("web");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const categories = getPricingCategories(locale);
  const currentCategoryData =
    categories.find((c) => c.id === activeCategory) || categories[0];

  const toggleItem = (name: string) => {
    setSelectedItems((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  const handleApplyToContact = () => {
    const contactElem = document.getElementById("details");
    if (contactElem instanceof HTMLTextAreaElement && selectedItems.length > 0) {
      contactElem.value = `Selected scope inquiry:\n- ${selectedItems.join(
        "\n- "
      )}\n\nPlease provide schedule and proposal.`;
      contactElem.focus();
    }
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#f8faff] py-12 md:py-16 dark:bg-[#0c0e14]"
    >
      {/* Right ethereal soft blue ambient glow exactly matching the screenshot */}
      <div className="pointer-events-none absolute -end-24 top-1/4 -z-10 h-[650px] w-[650px] rounded-full bg-blue-100/70 blur-[140px] dark:bg-blue-950/20" />

      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        {/* Eyebrow: blue horizontal line dash + TRANSPARENT PRICING in blue */}
        <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
          <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
          <span>{t("pricing.eyebrow")}</span>
        </div>

        {/* Dual-tone Headline: Detailed prices. / Clearly defined scope. */}
        <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 dark:text-white">
          {t("pricing.title.1")}{" "}
          <span className="block text-[#2563eb] dark:text-blue-500">
            {t("pricing.title.2")}
          </span>
        </h2>

        {/* Subtitle matching exact screenshot copy */}
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-neutral-400">
          {t("pricing.side")}
        </p>

        {/* Segmented Category Pill Tabs */}
        <div className="no-scrollbar mt-9 flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex shrink-0 items-center rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "border-2 border-[#2563eb] bg-white text-slate-900 shadow-sm dark:border-blue-500 dark:bg-neutral-900 dark:text-white"
                    : "border border-gray-200/90 bg-[#f4f6fa]/90 text-slate-600 hover:border-gray-300 hover:bg-white hover:text-slate-900 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400 dark:hover:text-white"
                }`}
              >
                <span
                  className={`font-mono text-xs font-bold me-2 ${
                    isActive ? "text-[#2563eb] dark:text-blue-400" : "text-slate-400 dark:text-neutral-500"
                  }`}
                >
                  {cat.index}
                </span>
                <span>{cat.short}</span>
              </button>
            );
          })}
        </div>

        {/* Big White Bento Pricing Card */}
        <div className="mt-7 overflow-hidden rounded-[28px] sm:rounded-[32px] border border-gray-200/90 bg-white p-5 sm:p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:border-neutral-800 dark:bg-[#121620]">
          {/* Header Row: 01 Websites & E-Commerce / 6 Services pill */}
          <div className="flex flex-col justify-between gap-3 pb-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl font-bold text-[#2563eb] dark:text-blue-400">
                {currentCategoryData.index}
              </span>
              <h3 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {currentCategoryData.title}
              </h3>
            </div>
            <span className="self-start rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-[#2563eb] sm:self-auto dark:bg-blue-950/60 dark:text-blue-300">
              {currentCategoryData.items.length} {t("pricing.service")}s
            </span>
          </div>

          {/* Desktop Table View matching screenshot */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:border-neutral-800/80">
                  <th className="py-3.5 ps-1 pe-4 w-[28%]">{t("pricing.service")}</th>
                  <th className="px-4 py-3.5 w-[54%]">{t("pricing.scope")}</th>
                  <th className="py-3.5 pe-2 text-end w-[18%]">{t("pricing.price")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100/80 dark:divide-neutral-800/80">
                {currentCategoryData.items.map((item) => {
                  const isChecked = selectedItems.includes(item.name);
                  return (
                    <tr
                      key={item.name}
                      onClick={() => toggleItem(item.name)}
                      className={`cursor-pointer transition-colors hover:bg-slate-50/70 dark:hover:bg-neutral-850/50 ${
                        isChecked ? "bg-blue-50/40 dark:bg-blue-950/20" : ""
                      }`}
                    >
                      {/* Service column with rounded checkbox */}
                      <td className="py-4.5 ps-1 pe-4 align-middle">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="h-4 w-4 rounded-[4px] border-gray-300 text-[#2563eb] focus:ring-0 cursor-pointer dark:border-neutral-700 dark:bg-neutral-800"
                            aria-label={`Select ${item.name}`}
                          />
                          <span className="font-bold text-slate-900 text-sm dark:text-white">
                            {item.name}
                          </span>
                        </div>
                      </td>

                      {/* Included Scope */}
                      <td className="px-4 py-4.5 align-middle text-xs leading-relaxed text-slate-500 dark:text-neutral-400">
                        {item.scope}
                      </td>

                      {/* Price */}
                      <td className="py-4.5 pe-2 align-middle text-end font-mono font-extrabold text-slate-900 text-sm whitespace-nowrap dark:text-white">
                        {item.price}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked View */}
          <div className="divide-y divide-gray-100 md:hidden dark:divide-neutral-800">
            {currentCategoryData.items.map((item) => {
              const isChecked = selectedItems.includes(item.name);
              return (
                <div
                  key={item.name}
                  onClick={() => toggleItem(item.name)}
                  className={`py-4 transition-colors cursor-pointer ${
                    isChecked ? "bg-blue-50/40 dark:bg-blue-950/20" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-0.5 h-4 w-4 rounded-[4px] border-gray-300 text-[#2563eb]"
                        aria-label={`Select ${item.name}`}
                      />
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </span>
                    </div>
                    <span className="shrink-0 font-mono font-bold text-slate-900 text-sm dark:text-white">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 ps-7 text-xs leading-relaxed text-slate-500 dark:text-neutral-400">
                    {item.scope}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Items Floating Action Bar */}
        {selectedItems.length > 0 && (
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4.5 sm:flex-row sm:px-6 shadow-xl animate-in fade-in slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-[#121620]">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                {selectedItems.length} deliverable{selectedItems.length > 1 ? "s" : ""} selected
              </span>
              <p className="mt-0.5 text-[11px] text-slate-500 dark:text-neutral-400">
                Transfer your selection to pre-fill the inquiry form.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedItems([])}
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 cursor-pointer dark:text-neutral-400 dark:hover:text-white"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleApplyToContact}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-neutral-800 cursor-pointer dark:bg-white dark:text-slate-950"
              >
                Inquire with selection ↗
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
