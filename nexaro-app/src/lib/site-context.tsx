"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { translate, type MessageKey } from "./i18n";
import type { Currency, Locale, Theme } from "./types";

type SiteContextValue = {
  locale: Locale;
  theme: Theme;
  currency: Currency;
  setLocale: (locale: Locale) => void;
  setTheme: (theme: Theme) => void;
  setCurrency: (currency: Currency) => void;
  t: (key: MessageKey) => string;
};

const SiteContext = createContext<SiteContextValue | null>(null);

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.localStorage.getItem("nexaro-theme") === "dark" ? "dark" : "light";
}

function getInitialCurrency(locale: Locale): Currency {
  if (typeof window === "undefined") return locale === "tr" ? "TRY" : "USD";
  const saved = window.localStorage.getItem("nexaro-currency");
  if (saved === "TRY" || saved === "USD") return saved as Currency;
  return locale === "tr" ? "TRY" : "USD";
}

export function SiteProvider({
  children,
  initialLocale = "en",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());
  const [currency, setCurrencyState] = useState<Currency>(() =>
    getInitialCurrency(initialLocale)
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.language = locale;
  }, [locale]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("nexaro-theme", theme);
  }, [theme]);

  const setCurrency = useCallback((next: Currency) => {
    setCurrencyState(next);
    window.localStorage.setItem("nexaro-currency", next);
  }, []);

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      window.localStorage.setItem("nexaro-language", next);
      if (next === "tr") {
        setCurrency("TRY");
      }

      // Navigate to dedicated URL if needed
      const targetPath = next === "en" ? "/" : `/${next}`;
      if (
        pathname !== targetPath &&
        (pathname === "/" || pathname === "/tr" || pathname === "/fr" || pathname === "/ar")
      ) {
        router.push(targetPath);
      }
    },
    [pathname, router, setCurrency]
  );

  const setTheme = useCallback((next: Theme) => setThemeState(next), []);
  const t = useCallback((key: MessageKey) => translate(locale, key), [locale]);

  const value = useMemo(
    () => ({ locale, theme, currency, setLocale, setTheme, setCurrency, t }),
    [locale, theme, currency, setLocale, setTheme, setCurrency, t]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSite must be used within SiteProvider");
  return context;
}
