"use client";

import { getWorkItems } from "@/lib/content";
import { useSite } from "@/lib/site-context";

/* ─────────────────────────────────────────────
   HIGH-QUALITY VISUAL MOCKUPS
───────────────────────────────────────────── */

/** North Studio — editorial website mockup (hero-sized card) */
function NorthMockup() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* Browser chrome */}
      <div className="flex h-8 items-center justify-between border-b border-gray-100 bg-[#fafbfc] px-3 sm:px-3.5 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex items-center gap-1.5">
          <span className="grid h-4 w-4 place-items-center rounded bg-black text-[7px] font-black text-white dark:bg-white dark:text-black">
            N.
          </span>
          <span className="text-[8px] font-bold tracking-tight text-slate-800 dark:text-white">
            NORTH / STUDIO
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[7px] font-medium text-slate-400">
          <span>About</span>
          <span>Services</span>
          <span>Work</span>
          <span>Contact</span>
        </div>
        <span className="rounded-full bg-slate-950 px-2.5 py-0.5 text-[7px] font-semibold text-white dark:bg-white dark:text-black">
          Start →
        </span>
      </div>

      {/* Hero section */}
      <div className="grid grid-cols-1 sm:grid-cols-[1.3fr_0.7fr] gap-4 p-4 sm:p-5">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[7px] font-mono uppercase tracking-[0.2em] text-slate-400">
              Professional Services · Est. 2026
            </p>
            <h4 className="mt-2 max-w-[200px] text-[15px] font-extrabold leading-tight tracking-[-0.04em] text-slate-950 dark:text-white">
              Made for the next chapter.
            </h4>
            <p className="mt-1.5 max-w-[190px] text-[7px] leading-relaxed text-slate-500">
              A considered digital presence for modern professional service brands.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-950 px-3 py-1 text-[7px] font-semibold text-white dark:bg-white dark:text-black">
                Discover Studio ↗
              </span>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[7px] text-slate-500 dark:border-neutral-800 dark:bg-neutral-800">
                View Work
              </span>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-3 dark:border-neutral-800">
            {[["12", "Projects"], ["4", "Languages"], ["100%", "Delivered"]].map(
              ([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-[11px] font-extrabold text-slate-900 dark:text-white">{val}</div>
                  <div className="text-[6px] text-slate-400">{label}</div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right: abstract architecture visual */}
        <div className="relative h-28 sm:h-auto overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950">
          <svg viewBox="0 0 100 120" className="h-full w-full" preserveAspectRatio="none">
            {/* Building silhouette */}
            <polygon points="15,120 50,30 85,120" fill="#c3d2eb" opacity="0.7" />
            <polygon points="50,30 85,120 70,120 48,40" fill="#9db5dd" opacity="0.8" />
            <polygon points="22,120 48,40 44,120" fill="#dde6f8" opacity="0.9" />
            {/* Windows */}
            <rect x="30" y="70" width="5" height="8" fill="#3b5bdb" opacity="0.4" rx="1" />
            <rect x="38" y="65" width="5" height="8" fill="#4c6ef5" opacity="0.5" rx="1" />
            <rect x="55" y="72" width="5" height="8" fill="#3b5bdb" opacity="0.35" rx="1" />
            <rect x="62" y="60" width="5" height="10" fill="#6366f1" opacity="0.4" rx="1" />
            {/* Ground line */}
            <line x1="5" y1="120" x2="95" y2="120" stroke="#c5d3e8" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Bottom navigation pills */}
      <div className="flex items-center gap-2 border-t border-gray-100 px-5 py-2.5 dark:border-neutral-800">
        <span className="rounded-full bg-slate-950 px-2.5 py-0.5 text-[6px] font-semibold text-white dark:bg-white dark:text-black">
          Home
        </span>
        {["Services", "Process", "About"].map((nav) => (
          <span key={nav} className="text-[6px] text-slate-400">
            {nav}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Form & Field — brand identity mockup */
function BrandMockup() {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {/* Dark mono tile */}
      <div className="col-span-1 flex aspect-square flex-col justify-between rounded-2xl bg-[#0f1117] p-3.5 text-white shadow-md">
        <span className="text-[7px] font-mono tracking-widest text-neutral-500">Specimen / 01</span>
        <div>
          <div className="text-[13px] font-black tracking-tighter leading-none">form</div>
          <div className="text-[13px] font-black tracking-tighter leading-none text-neutral-400">&amp;field</div>
        </div>
        <span className="text-[6px] font-mono uppercase tracking-widest text-neutral-600">
          Everyday Living
        </span>
      </div>

      {/* Palette swatch card */}
      <div className="col-span-2 flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center justify-between">
          <span className="text-[7px] font-mono uppercase tracking-widest text-slate-400">
            Palette / 01
          </span>
          <span className="text-[6px] text-slate-300 dark:text-neutral-600">Natural · Useful</span>
        </div>
        {/* Large color swatches */}
        <div className="mt-2 flex flex-1 gap-1.5">
          {["#0f1117", "#2d3748", "#4a5568", "#a0aec0", "#e2e8f0"].map((c) => (
            <div
              key={c}
              className="flex-1 rounded-lg shadow-sm"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1">
          <span className="grid h-3 w-3 place-items-center rounded bg-black text-[5px] font-bold text-white">
            F.
          </span>
          <span className="text-[7px] font-extrabold text-slate-900 dark:text-white">FORM&FIELD</span>
        </div>
      </div>

      {/* Type specimen card */}
      <div className="col-span-3 flex items-center justify-between rounded-2xl border border-gray-200 bg-[#faf9f7] px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950">
        <div>
          <span className="text-[6px] font-mono uppercase tracking-[0.2em] text-slate-400">Typography</span>
          <p className="mt-0.5 text-[10px] font-bold tracking-tight text-slate-900 dark:text-white">
            Aa Bb Cc Dd Ee Ff — Neutral Grotesk
          </p>
        </div>
        <span className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[7px] text-slate-500 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          Brand Guide
        </span>
      </div>
    </div>
  );
}

/** Atlas — operations dashboard mockup */
function AtlasMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* Dashboard header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2.5 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-bold tracking-tight text-slate-800 dark:text-white">
            ATLAS / TELEMETRY
          </span>
        </div>
        <span className="flex items-center gap-1.5 text-[7px] font-bold text-emerald-500">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          LIVE
        </span>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-3 gap-2 p-3">
        {[
          { label: "Active", value: "2,480", delta: "+14%" },
          { label: "Velocity", value: "94%", delta: "+6%" },
          { label: "Open", value: "18", delta: "−3" },
        ].map(({ label, value, delta }) => (
          <div
            key={label}
            className="rounded-xl border border-gray-100 bg-[#f8fafc] p-2.5 dark:border-neutral-800 dark:bg-neutral-950"
          >
            <p className="text-[7px] text-slate-500">{label}</p>
            <p className="mt-0.5 text-[13px] font-extrabold tracking-tight text-slate-900 dark:text-white">
              {value}
            </p>
            <p className="text-[6px] font-semibold text-emerald-500">{delta}</p>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="px-3 pb-3">
        <div className="relative h-[52px] overflow-hidden rounded-xl bg-[#f8fafc] dark:bg-neutral-950">
          <svg viewBox="0 0 300 60" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="atlasGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b5bdb" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#3b5bdb" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,52 C30,48 50,32 80,38 S120,45 150,28 S195,38 225,18 S260,26 300,8 L300,60 L0,60Z"
              fill="url(#atlasGrad)"
            />
            <path
              d="M0,52 C30,48 50,32 80,38 S120,45 150,28 S195,38 225,18 S260,26 300,8"
              fill="none"
              stroke="#3b5bdb"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Data point dot */}
            <circle cx="225" cy="18" r="3" fill="#3b5bdb" />
            <circle cx="225" cy="18" r="5" fill="#3b5bdb" opacity="0.2" />
          </svg>
        </div>

        {/* Legend */}
        <div className="mt-2 flex items-center gap-3 text-[6px] text-slate-500">
          {[
            { color: "#3b5bdb", label: "Throughput" },
            { color: "#10b981", label: "Uptime" },
          ].map(({ color, label }) => (
            <span key={label} className="flex items-center gap-1">
              <span className="h-1.5 w-3 rounded-full" style={{ backgroundColor: color }} />
              {label}
            </span>
          ))}
          <span className="ml-auto font-semibold text-slate-400">Last 30d</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WORK SECTION COMPONENT
───────────────────────────────────────────── */
export function Work() {
  const { t, locale } = useSite();
  const workItemsList = getWorkItems(locale);

  const north = workItemsList.find((w) => w.id === "north")!;
  const formfield = workItemsList.find((w) => w.id === "formfield")!;
  const atlas = workItemsList.find((w) => w.id === "atlas")!;

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#f8faff] py-12 md:py-16 dark:bg-[#0c0e14]"
    >
      {/* Ambient left glow */}
      <div className="pointer-events-none absolute -start-40 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-indigo-100/50 blur-[140px] dark:bg-indigo-950/20" />

      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        {/* Section header — same pattern as Services */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] dark:text-blue-400">
              <span className="h-0.5 w-6 rounded-full bg-[#2563eb] dark:bg-blue-400" />
              <span>{t("work.eyebrow")}</span>
            </div>
            <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 dark:text-white">
              {t("work.title.1")}{" "}
              <span className="block text-[#2563eb] dark:text-blue-500">{t("work.title.2")}</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 dark:text-neutral-400">
              {t("work.side")}
            </p>
          </div>

          {/* Counter badge */}
          <div className="flex items-center gap-2 self-end pb-1 md:self-auto">
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-mono text-slate-500 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              03 {t("work.projects")}
            </span>
          </div>
        </div>

        {/* ── Bento grid ─────────────────────────────────── */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_1fr]">

          {/* CARD 1 — North Studio (spans 2 rows) */}
          <article className="group flex flex-col justify-between rounded-[28px] border border-gray-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7 lg:row-span-2 dark:border-neutral-800 dark:bg-[#121620]">
            {/* Top metadata */}
            <div>
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-gray-200/80 bg-[#f4f6fa] px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400">
                  {north.label}
                </span>
                <a
                  href="#contact"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gray-200 text-slate-700 transition duration-200 group-hover:border-slate-400 group-hover:scale-110 dark:border-neutral-700 dark:text-neutral-300"
                  aria-label={north.title}
                >
                  ↗
                </a>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {north.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-neutral-400">
                {north.body}
              </p>

              {/* Mockup */}
              <div className="mt-6">
                <NorthMockup />
              </div>
            </div>

            {/* Bottom tags */}
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4 dark:border-neutral-800">
              {["Concept", "Website", "Corporate"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200/80 bg-[#f4f6fa] px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* CARD 2 — Form & Field Brand */}
          <article className="group flex flex-col justify-between rounded-[28px] border border-gray-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7 dark:border-neutral-800 dark:bg-[#121620]">
            <div>
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-gray-200/80 bg-[#f4f6fa] px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400">
                  {formfield.label}
                </span>
                <a
                  href="#contact"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gray-200 text-slate-700 transition duration-200 group-hover:border-slate-400 group-hover:scale-110 dark:border-neutral-700 dark:text-neutral-300"
                  aria-label={formfield.title}
                >
                  ↗
                </a>
              </div>

              <h3 className="mt-4 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {formfield.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-neutral-400">
                {formfield.body}
              </p>

              <div className="mt-5">
                <BrandMockup />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4 dark:border-neutral-800">
              {["Concept", "Brand Kit", "Identity"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200/80 bg-[#f4f6fa] px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* CARD 3 — Atlas Dashboard */}
          <article className="group flex flex-col justify-between rounded-[28px] border border-gray-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7 dark:border-neutral-800 dark:bg-[#121620]">
            <div>
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-gray-200/80 bg-[#f4f6fa] px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400">
                  {atlas.label}
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[9px] font-bold text-emerald-600 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  LIVE
                </span>
              </div>

              <h3 className="mt-4 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {atlas.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-neutral-400">
                {atlas.body}
              </p>

              <div className="mt-5">
                <AtlasMockup />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4 dark:border-neutral-800">
              {["Concept", "Web App", "Dashboard"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200/80 bg-[#f4f6fa] px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* Footnote */}
        <p className="mt-8 border-t border-gray-100 pt-5 text-[11px] leading-relaxed text-slate-400 dark:border-neutral-800 dark:text-neutral-600">
          {t("work.footnote")}
        </p>
      </div>
    </section>
  );
}
