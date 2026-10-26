"use client";

import { useEffect, useState } from "react";
import { studio } from "@/lib/content";
import { useSite } from "@/lib/site-context";
import { Wordmark } from "./ui";

export function Footer() {
  const { t } = useSite();
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200/80 bg-white py-10 md:py-12 text-slate-500 dark:border-neutral-800 dark:bg-[#0c0e14] dark:text-neutral-400">
      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        <div>
          {/* Left: Wordmark + all contact details */}
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
              Design. Develop. Deliver.
            </p>

            {/* Contact Details Directly Under Logo */}
            <div className="mt-5 space-y-2.5 text-xs leading-relaxed text-slate-600 dark:text-neutral-400">
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
                  className="font-medium text-[#2563eb] hover:underline dark:text-blue-400"
                >
                  {studio.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-white">Studio:</span>
                <span>{studio.city}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-white">Working languages:</span>
                <span>English · Turkish · French · Arabic</span>
              </div>
            </div>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-gray-100 pt-6 text-xs sm:flex-row sm:items-center dark:border-neutral-800">
          <p>© {currentYear} {studio.name}. {t("footer.rights")}</p>
          <a
            href="#home"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 font-bold text-slate-900 hover:text-[#2563eb] transition-colors dark:text-white"
          >
            {t("footer.top")} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
