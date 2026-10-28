"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/types";
import { useSite } from "@/lib/site-context";
import { Header } from "@/components/header";
import { Hero, Marquee } from "@/components/hero";
import { Services } from "@/components/services";
import { Pricing } from "@/components/pricing";
import { Work } from "@/components/work";
import { Process } from "@/components/process";
import { Founder } from "@/components/founder";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export function HomeContent({ initialLocale = "en" }: { initialLocale?: Locale }) {
  const { setLocale } = useSite();

  useEffect(() => {
    if (initialLocale) {
      setLocale(initialLocale);
    }
  }, [initialLocale, setLocale]);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8faff] text-slate-950 transition-colors duration-200 dark:bg-[#0c0e14] dark:text-white">
      <Header />
      <main id="home" className="flex-1 bg-[#f8faff] dark:bg-[#0c0e14]">
        {/* Page order: Hero → benefits strip → Services (3) → Pricing → Work → Security-first → Process → Founder → FAQ → Contact */}
        <Hero />
        <Marquee />
        <Services />
        <Pricing />
        <Work />
        <Process />
        <Founder />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
