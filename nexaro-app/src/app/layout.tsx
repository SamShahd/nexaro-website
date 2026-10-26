import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteProvider } from "@/lib/site-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111318" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NEXARO — Digital Development & Creative Studio",
  description:
    "NEXARO is a digital development and creative studio in Istanbul. We design and develop distinctive brand identities, high-performance websites, and practical digital products.",
  keywords: [
    "NEXARO",
    "Digital Studio Istanbul",
    "Web Development",
    "Brand Identity",
    "Software Engineering",
    "Digital Products",
    "Creative Agency",
  ],
  authors: [{ name: "Shahd Belhadj", url: "https://nexaro.studio" }],
  creator: "NEXARO",
  openGraph: {
    title: "NEXARO — Design. Develop. Deliver.",
    description:
      "Build a stronger digital presence with NEXARO, an independent digital development and creative studio.",
    url: "https://nexaro.studio",
    siteName: "NEXARO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXARO — Digital Development & Creative Studio",
    description:
      "Build a stronger digital presence with NEXARO. High-performance websites, distinctive brand identities, and custom digital products.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-cobalt selection:text-white">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
