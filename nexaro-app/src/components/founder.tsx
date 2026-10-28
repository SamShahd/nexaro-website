"use client";

import Image from "next/image";
import { studio } from "@/lib/content";
import { useSite } from "@/lib/site-context";

export function Founder() {
  const { t } = useSite();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-14 md:py-20 dark:bg-[#0c0e14]"
    >
      {/* Anchor for #founder backwards compatibility */}
      <div id="founder" className="absolute -top-20" />

      {/* Soft ethereal ambient glow */}
      <div className="pointer-events-none absolute -end-40 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[140px] dark:bg-blue-950/20" />

      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        <div className="grid items-center gap-10 md:grid-cols-[340px_1fr] lg:grid-cols-[380px_1fr] lg:gap-16">
          {/* Portrait with Photo & Specific Availability Badge */}
          <div className="relative mx-auto w-full max-w-[340px] md:max-w-none">
            <div className="group relative aspect-[3.8/4.8] overflow-hidden rounded-[28px] border border-gray-200/90 bg-[#121620] p-2 shadow-2xl transition-all duration-300 hover:shadow-2xl dark:border-neutral-800">
              <div className="relative h-full w-full overflow-hidden rounded-[22px]">
                <Image
                  src={studio.founder.image}
                  alt={studio.founder.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 340px, 380px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              </div>

              {/* Specific Availability Badge */}
              <div className="absolute start-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 text-[11px] font-bold text-white shadow-lg backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {t("founder.availability")}
              </div>

              {/* Founder Tag at bottom of photo */}
              <div className="absolute inset-x-5 bottom-5 z-10 rounded-[20px] border border-white/15 bg-black/75 p-4 text-white shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <strong className="block text-base font-extrabold tracking-tight">
                      {studio.founder.name}
                    </strong>
                    <span className="text-xs text-white/80">
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

          {/* Copy, Credentials, Direct Solo Working Advantage & Social Links */}
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
              <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
              <span>{t("founder.eyebrow")}</span>
            </div>

            {/* Lead with what client gets, not degree */}
            <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-slate-950 dark:text-white">
              {t("founder.lead")}
            </h2>

            {/* Solo studio perspective written in "I", not "we" */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-neutral-300">
              {t("founder.bio")}
            </p>

            {/* Response-time promise callout */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/80 px-4 py-2 text-xs font-bold text-[#2563eb] dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
              {t("founder.response")}
            </div>

            {/* Credential Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-[#fafbfc] px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
                BSc · Software Engineering & Information Systems
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-[#fafbfc] px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Master’s · Cybersecurity Specialization
              </span>
            </div>

            {/* Social Links: LinkedIn, GitHub, Behance, Instagram */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={studio.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-gray-400 hover:text-slate-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                <span className="font-bold text-[#0a66c2]">in</span>
                <span>LinkedIn</span>
              </a>

              <a
                href={studio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-gray-400 hover:text-slate-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                <span className="font-bold">GH</span>
                <span>GitHub</span>
              </a>

              <a
                href={studio.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-gray-400 hover:text-slate-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                <span className="font-bold text-[#0057ff]">Bē</span>
                <span>Behance</span>
              </a>

              <a
                href={studio.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-gray-400 hover:text-slate-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                <span className="font-bold text-[#e1306c]">IG</span>
                <span>Instagram</span>
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-full bg-slate-950 px-5 text-xs font-bold text-white shadow-sm transition hover:bg-neutral-800 dark:bg-white dark:text-slate-950 dark:hover:bg-neutral-200"
              >
                {t("founder.cta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
