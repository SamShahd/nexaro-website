import React from "react";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-cobalt dark:text-cobalt-light before:block before:h-px before:w-5 before:bg-current">
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  side,
  className = "",
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  side?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end ${className}`}>
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-[760px] text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.04em] text-ink">
          {title}
        </h2>
      </div>
      {side ? (
        <div className="max-w-sm text-[15px] leading-relaxed text-muted md:pb-1">{side}</div>
      ) : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "dark",
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "blue" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  const styles = {
    dark: "bg-slate-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-slate-950 dark:hover:bg-neutral-200 shadow-sm",
    light: "border border-gray-300 bg-white text-slate-900 hover:border-gray-400 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-850 shadow-sm",
    blue: "bg-[#2563eb] text-white hover:bg-blue-700 shadow-sm dark:bg-blue-600 dark:hover:bg-blue-500",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5",
  }[variant];

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-5 text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export function Button({
  children,
  variant = "dark",
  className = "",
  disabled = false,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  variant?: "dark" | "light" | "blue" | "ghost";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  const styles = {
    dark: "bg-slate-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-slate-950 dark:hover:bg-neutral-200 shadow-sm",
    light: "border border-gray-300 bg-white text-slate-900 hover:border-gray-400 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-850 shadow-sm",
    blue: "bg-[#2563eb] text-white hover:bg-blue-700 shadow-sm dark:bg-blue-600 dark:hover:bg-blue-500",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5",
  }[variant];

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-5 text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50 ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a
      href="#home"
      aria-label="NEXARO home"
      className={`group inline-flex items-center gap-2.5 text-[22px] font-extrabold tracking-[-0.07em] text-ink transition-opacity hover:opacity-90 ${className}`}
    >
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-[13px] font-bold tracking-[-0.08em] text-white transition-transform group-hover:scale-105 dark:bg-white dark:text-ink">
        N.
      </span>
      NEXARO
    </a>
  );
}

export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-soft/80 px-2.5 py-1 text-[11px] font-medium text-muted dark:bg-soft/40 ${className}`}>
      {children}
    </span>
  );
}
