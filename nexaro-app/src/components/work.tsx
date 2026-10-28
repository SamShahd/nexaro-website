"use client";

import { getWorkItems } from "@/lib/content";
import { useSite } from "@/lib/site-context";

/** North Studio — editorial architecture website mockup */
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
            NORTH / ARCHITECTURE
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[7px] font-medium text-slate-400">
          <span>Projects</span>
          <span>Practice</span>
          <span>Journal</span>
          <span>Contact</span>
        </div>
        <span className="rounded-full bg-slate-950 px-2.5 py-0.5 text-[7px] font-semibold text-white dark:bg-white dark:text-black">
          Inquire →
        </span>
      </div>

      {/* Hero section */}
      <div className="grid grid-cols-1 sm:grid-cols-[1.3fr_0.7fr] gap-4 p-4 sm:p-5">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[7px] font-mono uppercase tracking-[0.2em] text-slate-400">
              Architectural Practice · Istanbul
            </p>
            <h4 className="mt-2 max-w-[210px] text-[15px] font-extrabold leading-tight tracking-[-0.04em] text-slate-950 dark:text-white">
              Spaces designed for light and calm.
            </h4>
            <p className="mt-1.5 max-w-[200px] text-[7px] leading-relaxed text-slate-500">
              A bespoke digital showcase engineered for architectural monographs and commission inquiries.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-950 px-3 py-1 text-[7px] font-semibold text-white dark:bg-white dark:text-black">
                View Monograph ↗
              </span>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[7px] text-slate-500 dark:border-neutral-800 dark:bg-neutral-800">
                Contact Studio
              </span>
            </div>
          </div>

          {/* Genuine Deliverable Highlights (No Fake 12 Projects / 100% Delivered) */}
          <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-3 dark:border-neutral-800">
            <div>
              <div className="text-[11px] font-mono font-extrabold text-slate-900 dark:text-white">0.4s</div>
              <div className="text-[6px] text-slate-400">Load Time</div>
            </div>
            <div>
              <div className="text-[11px] font-mono font-extrabold text-emerald-600 dark:text-emerald-400">A+</div>
              <div className="text-[6px] text-slate-400">Security Grade</div>
            </div>
            <div>
              <div className="text-[11px] font-mono font-extrabold text-slate-900 dark:text-white">5 Pages</div>
              <div className="text-[6px] text-slate-400">Delivered</div>
            </div>
          </div>
        </div>

        {/* Abstract architecture visual */}
        <div className="relative h-28 sm:h-auto overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950">
          <svg viewBox="0 0 100 120" className="h-full w-full" preserveAspectRatio="none">
            <polygon points="15,120 50,30 85,120" fill="#c3d2eb" opacity="0.7" />
            <polygon points="50,30 85,120 70,120 48,40" fill="#9db5dd" opacity="0.8" />
            <polygon points="22,120 48,40 44,120" fill="#dde6f8" opacity="0.9" />
            <rect x="30" y="70" width="5" height="8" fill="#3b5bdb" opacity="0.4" rx="1" />
            <rect x="38" y="65" width="5" height="8" fill="#4c6ef5" opacity="0.5" rx="1" />
            <rect x="55" y="72" width="5" height="8" fill="#3b5bdb" opacity="0.35" rx="1" />
            <rect x="62" y="60" width="5" height="10" fill="#6366f1" opacity="0.4" rx="1" />
            <line x1="5" y1="120" x2="95" y2="120" stroke="#c5d3e8" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/** Form & Field — brand identity mockup */
function BrandMockup() {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      <div className="col-span-1 flex aspect-square flex-col justify-between rounded-2xl bg-[#0f1117] p-3.5 text-white shadow-md">
        <span className="text-[7px] font-mono tracking-widest text-neutral-500">Specimen / 01</span>
        <div>
          <div className="text-[13px] font-black tracking-tighter leading-none">form</div>
          <div className="text-[13px] font-black tracking-tighter leading-none text-neutral-400">&amp;field</div>
        </div>
        <span className="text-[6px] font-mono uppercase tracking-widest text-neutral-600">
          Living Goods
        </span>
      </div>

      <div className="col-span-2 flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center justify-between">
          <span className="text-[7px] font-mono uppercase tracking-widest text-slate-400">
            Brand Starter Kit
          </span>
          <span className="text-[6px] text-slate-400">Web Palette</span>
        </div>
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
          <span className="text-[7px] font-extrabold text-slate-900 dark:text-white">FORM & FIELD</span>
        </div>
      </div>

      <div className="col-span-3 flex items-center justify-between rounded-2xl border border-gray-200 bg-[#faf9f7] px-4 py-2.5 dark:border-neutral-800 dark:bg-neutral-950">
        <div>
          <span className="text-[6px] font-mono uppercase tracking-[0.2em] text-slate-400">Typography</span>
          <p className="mt-0.5 text-[10px] font-bold tracking-tight text-slate-900 dark:text-white">
            Aa Bb Cc Dd — Web Typography Pairing
          </p>
        </div>
        <span className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[7px] text-slate-500 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          Starter Kit
        </span>
      </div>
    </div>
  );
}

/** Atlas — operations dashboard mockup */
function AtlasMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2.5 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-bold tracking-tight text-slate-800 dark:text-white">
            ATLAS / DASHBOARD
          </span>
        </div>
        {/* Changed LIVE badge to DEMO */}
        <span className="flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[8px] font-bold text-[#2563eb] dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
          DEMO
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 p-3">
        {[
          { label: "Fleet Status", value: "Active", sub: "100% online" },
          { label: "Response", value: "180ms", sub: "API Latency" },
          { label: "Security", value: "Verified", sub: "Auth CRUD" },
        ].map(({ label, value, sub }) => (
          <div
            key={label}
            className="rounded-xl border border-gray-100 bg-[#f8fafc] p-2 dark:border-neutral-800 dark:bg-neutral-950"
          >
            <p className="text-[6px] text-slate-400">{label}</p>
            <p className="mt-0.5 text-[11px] font-extrabold text-slate-900 dark:text-white">
              {value}
            </p>
            <p className="text-[6px] text-slate-500">{sub}</p>
          </div>
        ))}
      </div>

      <div className="px-3 pb-3">
        <div className="relative h-[48px] overflow-hidden rounded-xl bg-[#f8fafc] dark:bg-neutral-950">
          <svg viewBox="0 0 300 60" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <path
              d="M0,52 C30,48 50,32 80,38 S120,45 150,28 S195,38 225,18 S260,26 300,8 L300,60 L0,60Z"
              fill="rgba(37,99,235,0.08)"
            />
            <path
              d="M0,52 C30,48 50,32 80,38 S120,45 150,28 S195,38 225,18 S260,26 300,8"
              fill="none"
              stroke="#2563eb"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  const { t, locale } = useSite();
  const workItems = getWorkItems(locale);

  const north = workItems.find((w) => w.id === "north")!;
  const formfield = workItems.find((w) => w.id === "formfield")!;
  const atlas = workItems.find((w) => w.id === "atlas")!;

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#f8faff] py-14 md:py-20 dark:bg-[#0c0e14]"
    >
      <div className="pointer-events-none absolute -start-40 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-indigo-100/50 blur-[140px] dark:bg-indigo-950/20" />

      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))]">
        {/* Section Header */}
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
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base dark:text-neutral-400">
              {t("work.side")}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end pb-1 md:self-auto">
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-mono font-semibold text-slate-500 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              03 Case Studies
            </span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Card 1: North Studio */}
          <article className="group flex flex-col justify-between rounded-[28px] border border-gray-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-8 lg:row-span-2 dark:border-neutral-800 dark:bg-[#121620]">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-gray-200 bg-[#f4f6fa] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
                  {north.badge}
                </span>
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[9px] font-bold text-[#2563eb] dark:bg-blue-950/60 dark:text-blue-300">
                  {t("work.concept")}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {north.title}
              </h3>

              <div className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-neutral-300">
                <p>
                  <strong className="text-slate-900 dark:text-white">{t("work.problem")}:</strong> {north.problem}
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">{t("work.solution")}:</strong> {north.solution}
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">{t("work.result")}:</strong> {north.result}
                </p>
              </div>

              <div className="mt-6">
                <NorthMockup />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-neutral-800">
              <span className="text-xs font-mono text-slate-400">Next.js · Tailwind · Hardened Headers</span>
              <a
                href="#contact"
                className="text-xs font-bold text-[#2563eb] hover:underline dark:text-blue-400"
              >
                Inquire for similar site →
              </a>
            </div>
          </article>

          {/* Card 2: Form & Field */}
          <article className="group flex flex-col justify-between rounded-[28px] border border-gray-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7 dark:border-neutral-800 dark:bg-[#121620]">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-gray-200 bg-[#f4f6fa] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
                  {formfield.badge}
                </span>
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[9px] font-bold text-[#2563eb] dark:bg-blue-950/60 dark:text-blue-300">
                  {t("work.concept")}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                {formfield.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-neutral-300">
                <strong className="text-slate-900 dark:text-white">{t("work.solution")}:</strong> {formfield.solution}
              </p>

              <div className="mt-4">
                <BrandMockup />
              </div>
            </div>

            <div className="mt-4 border-t border-gray-100 pt-3 text-xs text-slate-400 dark:border-neutral-800">
              <span>Sold as Add-on with Website (₺8,000 / $220)</span>
            </div>
          </article>

          {/* Card 3: Atlas */}
          <article className="group flex flex-col justify-between rounded-[28px] border border-gray-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7 dark:border-neutral-800 dark:bg-[#121620]">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-gray-200 bg-[#f4f6fa] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
                  {atlas.badge}
                </span>
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[9px] font-bold text-[#2563eb] dark:bg-blue-950/60 dark:text-blue-300">
                  {t("work.concept")}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                {atlas.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-neutral-300">
                <strong className="text-slate-900 dark:text-white">{t("work.solution")}:</strong> {atlas.solution}
              </p>

              <div className="mt-4">
                <AtlasMockup />
              </div>
            </div>

            <div className="mt-4 border-t border-gray-100 pt-3 text-xs text-slate-400 dark:border-neutral-800">
              <span>Custom Web Application · Scoped via Paid Discovery</span>
            </div>
          </article>
        </div>

        {/* Footnote */}
        <p className="mt-8 border-t border-gray-100 pt-5 text-xs leading-relaxed text-slate-400 dark:border-neutral-800 dark:text-neutral-500">
          {t("work.footnote")}
        </p>
      </div>
    </section>
  );
}
