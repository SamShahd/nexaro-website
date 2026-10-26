"use client";

import { useRef, useState, useEffect } from "react";
import { getServices } from "@/lib/content";
import { useSite } from "@/lib/site-context";

/* Uncolored Monochrome Line Icons Matching Reference */
const serviceIcons = {
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  ),
  brand: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="m12 2 10 5-10 5-10-5Z" />
      <path d="m2 12 10 5 10-5" />
      <path d="m2 17 10 5 10-5" />
    </svg>
  ),
  content: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect width="18" height="18" x="3" y="3" rx="4" />
      <path d="m10 9 5 3-5 3v-6Z" />
    </svg>
  ),
  software: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
    </svg>
  ),
  documents: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
};

/* High-End Visual Mockups Matching Reference Image Exactly */
function ServiceMockup({ id }: { id: string }) {
  if (id === "web") {
    return (
      <div className="my-5 overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        {/* Top Browser Bar */}
        <div className="flex h-7 items-center justify-between border-b border-gray-100 bg-[#fafbfc] px-3 dark:border-neutral-800 dark:bg-neutral-950">
          <div className="flex items-center gap-1.5">
            <span className="grid h-3.5 w-3.5 place-items-center rounded bg-black text-[6px] font-bold text-white">N.</span>
            <span className="text-[7px] font-bold tracking-tight text-slate-800 dark:text-white">NEXARO</span>
          </div>
          <div className="flex items-center gap-2 text-[6px] text-slate-500 font-medium">
            <span>Home</span>
            <span>Services</span>
            <span>About</span>
          </div>
          <span className="rounded-full bg-black px-2 py-0.5 text-[6px] font-semibold text-white dark:bg-white dark:text-black">
            Get Started
          </span>
        </div>

        {/* Browser Content with Architecture Building Photo Accent */}
        <div className="grid grid-cols-[1.2fr_0.8fr] items-center gap-2 p-3 sm:p-4">
          <div>
            <h5 className="text-[11px] font-extrabold leading-tight text-slate-900 tracking-tight dark:text-white">
              Build your online presence.
            </h5>
            <p className="mt-1 text-[7px] leading-tight text-slate-500">
              Modern websites for modern businesses.
            </p>
            <span className="mt-2.5 inline-flex items-center gap-1 rounded-full bg-slate-950 px-2 py-0.5 text-[6px] font-semibold text-white dark:bg-white dark:text-black">
              Get Started →
            </span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-tr from-slate-200 via-sky-100 to-blue-200">
            {/* Architectural building vector visual */}
            <svg viewBox="0 0 100 75" className="h-full w-full object-cover" preserveAspectRatio="none">
              <polygon points="10,75 50,20 90,75" fill="#c3d2eb" />
              <polygon points="50,20 90,75 75,75 45,30" fill="#9db5dd" />
              <polygon points="20,75 45,30 40,75" fill="#e2eafd" />
              <rect x="55" y="40" width="8" height="15" fill="#4a6cb3" opacity="0.7" />
              <rect x="68" y="50" width="8" height="15" fill="#3b5bdb" opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (id === "brand") {
    return (
      <div className="my-5 grid grid-cols-3 items-center gap-2 p-1">
        {/* Left: Square Dark Tile with N. */}
        <div className="flex aspect-square flex-col justify-between rounded-xl bg-[#111318] p-3 text-white shadow-md">
          <span className="text-[7px] font-mono text-neutral-400">01</span>
          <span className="text-xl font-black tracking-tight">N.</span>
        </div>

        {/* Center: White Card with Logo & Color Palette Swatches */}
        <div className="flex aspect-square flex-col justify-between rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center gap-1">
            <span className="grid h-3 w-3 place-items-center rounded bg-black text-[5px] font-bold text-white">N.</span>
            <span className="text-[7px] font-extrabold text-slate-800 dark:text-white">NEXARO</span>
          </div>
          <div className="flex gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#1e293b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3b5bdb]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#93c5fd]" />
          </div>
        </div>

        {/* Right: 3D Packaging / Stationery Box Mockup */}
        <div className="flex aspect-square flex-col justify-center items-center rounded-xl border border-gray-200 bg-[#f8fafc] p-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
          <div className="h-9 w-9 rounded border border-gray-300 bg-white p-1 shadow-sm rotate-6 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="h-full w-full rounded bg-neutral-900 dark:bg-white flex items-center justify-center text-[6px] font-bold text-white dark:text-black">
              N.
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "content") {
    return (
      <div className="my-5 grid grid-cols-[1.1fr_0.9fr] items-center gap-2 p-1">
        {/* Left: Campaign Card */}
        <div className="flex aspect-[1.1/1] flex-col justify-between rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center gap-1">
            <span className="grid h-2.5 w-2.5 place-items-center rounded bg-black text-[5px] font-bold text-white">N.</span>
            <span className="text-[6px] font-bold text-slate-800 dark:text-white">NEXARO</span>
          </div>
          <div>
            <strong className="block text-[8px] font-black leading-tight text-slate-900 dark:text-white">
              Ideas.<br />Design.<br />Impact.
            </strong>
            <span className="text-[5px] text-slate-400">Branding · Social</span>
          </div>
        </div>

        {/* Right: 2x2 Media Grid with Play Button */}
        <div className="grid grid-cols-2 gap-1">
          <div className="aspect-square rounded-lg bg-slate-200 dark:bg-neutral-800 flex items-center justify-center text-[7px] text-slate-400">
            ✦
          </div>
          <div className="aspect-square rounded-lg bg-slate-300 dark:bg-neutral-700 flex items-center justify-center text-[7px] text-slate-500">
            ◌
          </div>
          <div className="aspect-square rounded-lg bg-slate-100 dark:bg-neutral-850 flex items-center justify-center text-[7px] text-slate-400">
            ✳
          </div>
          <div className="aspect-square rounded-lg bg-[#111318] flex items-center justify-center text-[8px] text-white shadow-sm">
            ▶
          </div>
        </div>
      </div>
    );
  }

  if (id === "software") {
    return (
      <div className="my-5 rounded-2xl border border-gray-200/90 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        {/* Top: Overview and +124% Growth Pill */}
        <div className="flex items-center justify-between pb-1.5 border-b border-gray-100 dark:border-neutral-800">
          <span className="text-[8px] font-bold text-slate-800 dark:text-white">Overview</span>
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[7px] font-bold text-[#3b5bdb] dark:bg-blue-950/60 dark:text-blue-300">
            +124% Growth
          </span>
        </div>

        {/* Smooth Blue Wave Chart Line */}
        <div className="my-2 h-7 w-full overflow-hidden">
          <svg viewBox="0 0 100 30" className="h-full w-full" preserveAspectRatio="none">
            <path
              d="M0,22 C20,20 30,12 45,15 S70,18 80,8 S90,12 100,5 L100,30 L0,30 Z"
              fill="rgba(59,91,219,0.09)"
            />
            <path
              d="M0,22 C20,20 30,12 45,15 S70,18 80,8 S90,12 100,5"
              fill="none"
              stroke="#3b5bdb"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* 3 Metric Rows */}
        <div className="space-y-1 text-[7px]">
          <div className="flex items-center justify-between text-slate-600 dark:text-neutral-400">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3b5bdb]" /> Website Traffic
            </span>
            <span className="font-bold text-slate-900 dark:text-white">12.4K <span className="text-emerald-500">↑</span></span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-neutral-400">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> Leads
            </span>
            <span className="font-bold text-slate-900 dark:text-white">1.8K <span className="text-emerald-500">↑</span></span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-neutral-400">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Conversions
            </span>
            <span className="font-bold text-slate-900 dark:text-white">842 <span className="text-emerald-500">↑</span></span>
          </div>
        </div>
      </div>
    );
  }

  if (id === "documents") {
    return (
      <div className="my-5 rounded-2xl border border-gray-200/90 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center justify-between text-[8px] font-bold text-slate-800 border-b border-gray-100 pb-1.5 dark:text-white">
          <span>Pitch Deck · Executive</span>
          <span className="text-[7px] text-slate-400">15 Slides</span>
        </div>
        <div className="mt-2 space-y-1.5">
          <span className="block h-2 w-2/3 rounded bg-slate-900/80 dark:bg-white/80" />
          <span className="block h-1.5 w-full rounded bg-gray-200 dark:bg-neutral-800" />
          <span className="block h-1.5 w-4/5 rounded bg-gray-200 dark:bg-neutral-800" />
        </div>
      </div>
    );
  }

  return (
    <div className="my-5 rounded-2xl border border-gray-200/90 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center justify-between text-[8px] font-bold text-slate-800 border-b border-gray-100 pb-1.5 dark:text-white">
        <span>Security SLA</span>
        <span className="font-bold text-emerald-500">99.98% Uptime</span>
      </div>
      <div className="mt-2.5 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="h-1.5 flex-1 rounded-full bg-emerald-500/20" />
        <span className="text-[7px] font-mono text-slate-500">Monitored</span>
      </div>
    </div>
  );
}

export function Services() {
  const { t, locale } = useSite();
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const servicesList = getServices(locale);

  const scrollToIndex = (idx: number) => {
    if (!trackRef.current) return;
    const targetIdx = Math.max(0, Math.min(servicesList.length - 1, idx));
    const card = trackRef.current.children[targetIdx] as HTMLElement;
    if (card) {
      trackRef.current.scrollTo({
        left: card.offsetLeft - trackRef.current.offsetLeft,
        behavior: "smooth",
      });
      setActiveIdx(targetIdx);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const left = trackRef.current.scrollLeft;
      const cardWidth = trackRef.current.children[0]
        ? (trackRef.current.children[0] as HTMLElement).offsetWidth + 20
        : 340;
      const index = Math.round(left / cardWidth);
      setActiveIdx(Math.max(0, Math.min(servicesList.length - 1, index)));
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener("scroll", handleScroll, { passive: true });
      return () => track.removeEventListener("scroll", handleScroll);
    }
  }, [servicesList.length]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8faff] py-12 md:py-16 dark:bg-[#0c0e14]"
    >
      {/* Soft ethereal ambient glow on the right like reference image */}
      <div className="pointer-events-none absolute -end-40 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-blue-100/60 blur-[130px] dark:bg-blue-950/20" />

      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        {/* Section Header Matching Reference Image */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            {/* Eyebrow with blue line */}
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
              <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
              <span>{t("services.eyebrow")}</span>
            </div>

            {/* Headline: Execution. That drives results. */}
            <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 dark:text-white">
              {t("services.title.1")}{" "}
              <span className="block text-[#2563eb] dark:text-blue-500">{t("services.title.2")}</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-500 dark:text-neutral-400">
              {t("services.side")}
            </p>
          </div>

          {/* Right Controls: 01 / 04 and circular arrow buttons */}
          <div className="flex items-center gap-4 self-end pb-2 md:self-auto">
            <span className="text-xs font-mono font-medium tracking-wider text-slate-400">
              {String(activeIdx + 1).padStart(2, "0")} / {String(servicesList.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollToIndex(activeIdx - 1)}
                disabled={activeIdx === 0}
                className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-white text-slate-700 shadow-sm transition hover:border-gray-400 active:scale-95 disabled:pointer-events-none disabled:opacity-30 cursor-pointer dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                aria-label="Previous service"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(activeIdx + 1)}
                disabled={activeIdx === servicesList.length - 1}
                className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white shadow-md transition hover:bg-neutral-800 active:scale-95 disabled:pointer-events-none disabled:opacity-30 cursor-pointer dark:bg-white dark:text-black"
                aria-label="Next service"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Bento Cards matching the 4 reference cards */}
        <div
          ref={trackRef}
          className="no-scrollbar mt-10 flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth"
          tabIndex={0}
          aria-label="Services carousel"
        >
          {servicesList.map((service, idx) => {
            const isOpen = openId === service.id;
            const isFirstActive = idx === 0;

            return (
              <article
                key={service.id}
                className={`flex min-h-[460px] w-[min(88vw,350px)] shrink-0 flex-col justify-between rounded-[28px] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  isFirstActive
                    ? "border-2 border-[#6366f1]/40 bg-white shadow-[0_12px_40px_rgba(79,70,229,0.08)] ring-1 ring-[#6366f1]/20 dark:border-indigo-500/40 dark:bg-[#121620]"
                    : "border border-gray-200/90 bg-white shadow-sm hover:border-gray-300 hover:shadow-xl dark:border-neutral-800 dark:bg-[#121620]"
                }`}
              >
                <div>
                  {/* Category Index & Uncolored Circular Icon Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-400">
                      {service.index} / {service.tag}
                    </span>
                    <div className="grid h-8 w-8 place-items-center rounded-full border border-gray-200 bg-white text-slate-700 shadow-sm dark:border-neutral-700 dark:bg-neutral-850 dark:text-neutral-200">
                      {serviceIcons[service.id]}
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="mt-3.5 text-[17px] font-bold tracking-tight text-slate-900 leading-snug dark:text-white">
                    {service.title}
                  </h3>

                  {/* Concise Subtitle */}
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-neutral-400">
                    {service.summary}
                  </p>

                  {/* Exact Visual Mockup */}
                  <ServiceMockup id={service.id} />

                  {/* Pill Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-200/80 bg-[#f4f6fa] px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Link: Explore the service → */}
                <div className="mt-6 border-t border-gray-100 pt-4 dark:border-neutral-800">
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between text-left text-xs font-semibold text-slate-900 transition-colors hover:text-[#2563eb] dark:text-white dark:hover:text-blue-400"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : service.id)}
                  >
                    <span>{t("services.explore")}</span>
                    <span className="text-sm">→</span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 animate-in fade-in slide-in-from-top-1 duration-200">
                      <p className="rounded-2xl border border-gray-100 bg-[#f8fafc] p-3 text-xs leading-relaxed text-slate-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                        {service.details}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
