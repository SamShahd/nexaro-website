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
    { media: "(prefers-color-scheme: dark)", color: "#0c0e14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nexaro.studio"),
  title: {
    default: "Website Design & Development in Istanbul | Fast, Secure Websites | NEXARO",
    template: "%s | NEXARO",
  },
  description:
    "NEXARO is a one-person studio in Istanbul building fast, secure websites for small businesses in 5-14 days with security built in. Fixed prices, no agency overhead.",
  keywords: [
    "Website Design Istanbul",
    "Web Development Istanbul",
    "web sitesi tasarımı İstanbul",
    "kurumsal web sitesi fiyatları",
    "e-ticaret sitesi kurulumu",
    "Secure Websites",
    "Cybersecurity Engineer",
    "Small Business Websites",
    "NEXARO",
  ],
  authors: [{ name: "Shahd Belhadj", url: "https://nexaro.studio" }],
  creator: "Shahd Belhadj - NEXARO",
  publisher: "NEXARO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nexaro.studio",
    languages: {
      en: "https://nexaro.studio",
      tr: "https://nexaro.studio/tr",
      fr: "https://nexaro.studio/fr",
      ar: "https://nexaro.studio/ar",
    },
  },
  openGraph: {
    title: "Website Design & Development in Istanbul | Fast, Secure Websites | NEXARO",
    description:
      "Fast, secure websites that bring you customers. Built in 5–14 days by a solo software & cybersecurity engineer in Istanbul. Fixed prices, zero agency overhead.",
    url: "https://nexaro.studio",
    siteName: "NEXARO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Development in Istanbul | Fast, Secure Websites | NEXARO",
    description:
      "Fast, secure websites that bring you customers. Built in 5–14 days with security built in. Fixed prices, no agency overhead.",
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
