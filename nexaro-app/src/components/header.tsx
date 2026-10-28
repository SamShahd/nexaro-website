"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";
import { locales } from "@/lib/i18n";
import { useSite } from "@/lib/site-context";
import { ButtonLink, Wordmark } from "./ui";

export function Header() {
  const { t, locale, setLocale, theme, setTheme } = useSite();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("services");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = ["services", "pricing", "work", "process", "about", "faq", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-xl dark:border-neutral-800 dark:bg-[#0c0e14]/95"
          : "border-b border-transparent bg-white/80 backdrop-blur-md dark:bg-[#0c0e14]/80"
      }`}
    >
      <nav
        className="mx-auto flex min-h-[76px] w-[min(1280px,calc(100%-2rem))] items-center justify-between gap-4 sm:w-[min(1280px,calc(100%-3rem))]"
        aria-label="Main"
      >
        <Wordmark />

        {/* Center Desktop Navigation Links in exact requested order */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "font-semibold text-slate-950 dark:text-white"
                    : "text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white"
                }`}
              >
                {t(item.key)}
                {isActive && (
                  <span className="absolute -bottom-1.5 inset-x-0 h-[2px] bg-[#2563eb] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Language Selector with Dedicated URLs */}
          <div className="relative">
            <label className="sr-only" htmlFor="languageSelect">
              {t("lang.label")}
            </label>
            <select
              id="languageSelect"
              value={locale}
              onChange={(e) => setLocale(e.target.value as typeof locale)}
              className="h-9 cursor-pointer appearance-none rounded-full border border-gray-200/90 bg-white px-3.5 pe-7 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-gray-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
              aria-label={t("lang.label")}
            >
              {locales.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute end-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">
              ▼
            </span>
          </div>

          {/* Theme Toggle Pill: Bright / Dark */}
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-gray-200/90 bg-white px-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-gray-400 cursor-pointer dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Switch to Bright Mode" : "Switch to Dark Mode"}
            title={theme === "dark" ? "Switch to Bright Mode" : "Switch to Dark Mode"}
          >
            <span className="text-sm">{theme === "dark" ? "☀" : "☼"}</span>
            <span className="hidden sm:inline font-mono text-[11px] font-bold">
              {theme === "dark" ? "Dark" : "Bright"}
            </span>
          </button>

          {/* Get a Free Website Audit → Button */}
          <ButtonLink
            href="#contact"
            className="hidden min-h-[42px] rounded-full bg-slate-950 px-5 text-xs font-semibold text-white shadow-sm transition hover:bg-neutral-800 sm:inline-flex dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            {t("nav.cta")}
          </ButtonLink>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-gray-200 bg-white text-slate-900 shadow-sm lg:hidden dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
            aria-expanded={open}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            onClick={() => setOpen(!open)}
          >
            <span className="flex w-4 flex-col gap-1">
              <span
                className={`block h-0.5 w-full bg-current transition-transform duration-200 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-transform duration-200 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="fixed inset-x-0 top-[76px] bottom-0 z-40 flex flex-col justify-between overflow-y-auto border-t border-gray-100 bg-white/98 p-6 shadow-2xl backdrop-blur-2xl dark:border-neutral-800 dark:bg-[#0c0e14]/98 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col divide-y divide-gray-100 dark:divide-neutral-800">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3.5 text-base font-semibold text-slate-900 transition-colors hover:text-[#2563eb] dark:text-white"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          <div className="pt-6 pb-4">
            <ButtonLink
              href="#contact"
              className="w-full justify-center min-h-[48px] rounded-full bg-slate-950 text-sm text-white dark:bg-white dark:text-black"
              onClick={() => setOpen(false)}
            >
              {t("nav.cta")}
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
