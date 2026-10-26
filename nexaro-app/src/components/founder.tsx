"use client";

import Image from "next/image";
import { studio } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function Founder() {
  const { t } = useSite();

  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-white py-12 md:py-16 dark:bg-[#0c0e14]"
    >
      {/* Soft ethereal ambient glow */}
      <div className="pointer-events-none absolute -end-40 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[140px] dark:bg-blue-950/20" />

      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        <div className="grid items-center gap-10 md:grid-cols-[340px_1fr] lg:grid-cols-[400px_1fr] lg:gap-16">
          {/* Portrait with Photo & Verified Badge */}
          <div className="relative mx-auto w-full max-w-[360px] md:max-w-none">
            <div className="group relative aspect-[3.8/4.8] overflow-hidden rounded-[28px] border border-gray-200/90 bg-[#121620] p-2 shadow-2xl transition-all duration-300 hover:shadow-2xl dark:border-neutral-800">
              <div className="relative h-full w-full overflow-hidden rounded-[22px]">
                <Image
                  src={studio.founder.image}
                  alt={studio.founder.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Status pill on photo */}
              <div className="absolute start-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[11px] font-bold text-white shadow-lg backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Projects
              </div>

              {/* Founder Tag at bottom of photo */}
              <div className="absolute inset-x-5 bottom-5 z-10 rounded-[20px] border border-white/15 bg-black/70 p-4 text-white shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <strong className="block text-base font-extrabold tracking-tight">
                      {studio.founder.name}
                    </strong>
                    <span className="text-xs text-white/75">
                      {studio.founder.role}
                    </span>
                  </div>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[10px] font-black text-slate-950 shadow">
                    ✓
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy, Credentials & Direct Contacts */}
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
              <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
              <span>{t("founder.eyebrow")}</span>
            </div>

            <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 dark:text-white">
              {t("founder.title.1")}{" "}
              <span className="block text-[#2563eb] dark:text-blue-500">{t("founder.title.2")}</span>
            </h2>

            {/* Concise Bio */}
            <p className="mt-5 text-[15px] leading-relaxed text-slate-600 dark:text-neutral-300">
              {t("founder.bio")}
            </p>

            {/* Credential Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-[#f8fafc] px-4 py-2 text-xs font-bold text-slate-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                <span className="h-2 w-2 rounded-full bg-[#2563eb]" />
                {t("founder.cred1")}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-[#f8fafc] px-4 py-2 text-xs font-bold text-slate-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                <span className="h-2 w-2 rounded-full bg-[#2563eb]" />
                {t("founder.cred2")}
              </span>
            </div>

            {/* 3 Core Engineering Highlights */}
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[20px] border border-gray-200/90 bg-[#fafbfc] p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60">
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">01 · Direct Access</span>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed dark:text-neutral-400">
                  Direct communication with your lead builder without agency bureaucracy.
                </p>
              </div>
              <div className="rounded-[20px] border border-gray-200/90 bg-[#fafbfc] p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60">
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">02 · Cybersecurity</span>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed dark:text-neutral-400">
                  Security-first architecture, clean data validation, and resilient systems.
                </p>
              </div>
              <div className="rounded-[20px] border border-gray-200/90 bg-[#fafbfc] p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60">
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">03 · Rapid Delivery</span>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed dark:text-neutral-400">
                  Focused sprints, continuous transparency, and launch-ready deliverables.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={studio.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#0a66c2] px-5 text-xs font-bold text-white shadow-sm transition hover:bg-[#084e96] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span className="grid h-4 w-4 place-items-center rounded bg-white text-[10px] font-extrabold text-[#0a66c2]">
                  in
                </span>
                LinkedIn Profile <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-slate-950 px-5 text-xs font-bold text-white shadow-sm transition hover:bg-neutral-800 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer dark:bg-white dark:text-slate-950"
              >
                {t("founder.cta")} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
