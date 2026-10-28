"use client";

import { studio } from "@/lib/content";
import { useSite } from "@/lib/site-context";
import { Wordmark } from "./ui";

export function Footer() {
  const { t } = useSite();
  const currentYear = 2026;

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200/80 bg-white py-12 md:py-16 text-slate-500 dark:border-neutral-800 dark:bg-[#0c0e14] dark:text-neutral-400">
      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          {/* Left Column: Brand & Details */}
          <div>
            <Wordmark />
            <p className="mt-2 text-xs font-mono uppercase tracking-widest text-slate-400">
              One-Person Studio · Fast, Secure Websites
            </p>

            <div className="mt-6 space-y-2.5 text-xs leading-relaxed text-slate-600 dark:text-neutral-400">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-white">Direct Line &amp; WhatsApp:</span>
                <a
                  href={`tel:${studio.phoneRaw}`}
                  className="font-bold text-slate-950 hover:text-[#2563eb] transition dark:text-white"
                >
                  {studio.phone}
                </a>
                <a
                  href={studio.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 transition hover:bg-emerald-100 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-400"
                >
                  <span>💬</span> WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-white">Direct Email:</span>
                <a
                  href={`mailto:${studio.email}`}
                  className="font-semibold text-[#2563eb] hover:underline dark:text-blue-400"
                >
                  {studio.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-white">Location:</span>
                <span>{studio.city}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-white">Working languages:</span>
                <span>English · Turkish · French · Arabic</span>
              </div>
            </div>
          </div>

          {/* Right Column: Social Links & Navigation */}
          <div className="flex flex-col justify-between gap-6 md:items-end">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={studio.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-gray-200 bg-[#f8fafc] px-3.5 text-xs font-semibold text-slate-700 transition hover:border-gray-400 hover:text-slate-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                <span className="font-bold text-[#0a66c2]">in</span>
                <span>LinkedIn</span>
              </a>

              <a
                href={studio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-gray-200 bg-[#f8fafc] px-3.5 text-xs font-semibold text-slate-700 transition hover:border-gray-400 hover:text-slate-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                <span className="font-bold">GH</span>
                <span>GitHub</span>
              </a>

              <a
                href={studio.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-gray-200 bg-[#f8fafc] px-3.5 text-xs font-semibold text-slate-700 transition hover:border-gray-400 hover:text-slate-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                <span className="font-bold text-[#0057ff]">Bē</span>
                <span>Behance</span>
              </a>

              <a
                href={studio.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-gray-200 bg-[#f8fafc] px-3.5 text-xs font-semibold text-slate-700 transition hover:border-gray-400 hover:text-slate-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                <span className="font-bold text-[#e1306c]">IG</span>
                <span>Instagram</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href="/privacy"
                className="font-medium text-slate-600 hover:text-[#2563eb] transition dark:text-neutral-400 dark:hover:text-white"
              >
                {t("footer.privacy")}
              </a>
              <span>•</span>
              <a
                href="#home"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 font-bold text-slate-900 hover:text-[#2563eb] transition-colors dark:text-white"
              >
                {t("footer.top")} ↑
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights Notice */}
        <div className="mt-10 border-t border-gray-100 pt-6 text-xs text-slate-400 sm:flex sm:items-center sm:justify-between dark:border-neutral-800">
          <p>© {currentYear} {studio.name}. {t("footer.rights")}</p>
          <p className="mt-2 sm:mt-0 font-mono text-[11px]">
            Security-First · Fast Delivery · Zero Agency Overhead
          </p>
        </div>
      </div>
    </footer>
  );
}
