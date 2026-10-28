import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Website Design & Development in Istanbul | Fast, Secure Websites | NEXARO",
  description:
    "NEXARO is a web & security studio in Istanbul building fast, secure websites for small businesses in 5-14 days with security built in. Fixed prices, no agency overhead.",
  keywords: [
    "Website Design Istanbul",
    "Web Development Istanbul",
    "Secure Websites",
    "Cybersecurity Studio",
    "Small Business Websites",
    "Istanbul Web Design Agency",
    "NEXARO",
  ],
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
      "Fast, secure websites that bring you customers. Built in 5–14 days with security built in. Fixed prices, zero agency overhead.",
    url: "https://nexaro.studio",
    siteName: "NEXARO",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://nexaro.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXARO — Fast, Secure Websites in Istanbul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Development in Istanbul | Fast, Secure Websites | NEXARO",
    description:
      "Fast, secure websites that bring you customers. Built in 5–14 days with security built in. Fixed prices, no agency overhead.",
    images: ["https://nexaro.studio/og-image.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NEXARO",
    image: "https://nexaro.studio/og-image.png",
    url: "https://nexaro.studio",
    telephone: "+905434597973",
    email: "hello@nexaro.studio",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.0082",
      longitude: "28.9784",
    },
    priceRange: "₺15,000 - ₺65,000 / $400 - $1,800",
    description:
      "Fast, secure websites for small businesses built in 5-14 days with security built in. Fixed prices, no agency overhead.",
    founder: {
      "@type": "Person",
      name: "Shahd Belhadj",
      jobTitle: "Founder & Lead Engineer",
    },
    areaServed: ["Istanbul", "Worldwide"],
    currenciesAccepted: ["TRY", "USD", "EUR"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent initialLocale="en" />
    </>
  );
}
