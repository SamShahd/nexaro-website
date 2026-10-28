import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "İstanbul Web Tasarım ve Geliştirme | Hızlı ve Güvenli Web Siteleri | NEXARO",
  description:
    "İstanbul'da web sitesi tasarımı, kurumsal web sitesi fiyatları, e-ticaret sitesi kurulumu ve güvenlik denetimi. 5-14 günde teslim, sabit fiyatlar, doğrudan kurucu mühendis ile çalışma.",
  keywords: [
    "web sitesi tasarımı İstanbul",
    "kurumsal web sitesi fiyatları",
    "e-ticaret sitesi kurulumu",
    "web sitesi güvenlik denetimi",
    "İstanbul web yazılım stüdyosu",
    "NEXARO",
  ],
  alternates: {
    canonical: "https://nexaro.studio/tr",
    languages: {
      en: "https://nexaro.studio",
      tr: "https://nexaro.studio/tr",
      fr: "https://nexaro.studio/fr",
      ar: "https://nexaro.studio/ar",
    },
  },
  openGraph: {
    title: "İstanbul Web Tasarım ve Geliştirme | Hızlı ve Güvenli Web Siteleri | NEXARO",
    description:
      "Müşteri kazandıran, hızlı ve güvenli web siteleri. 5–14 günde teslim, sabit fiyat, doğrudan kurucu mühendis ile çalışma.",
    url: "https://nexaro.studio/tr",
    siteName: "NEXARO",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://nexaro.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXARO — İstanbul Web Tasarım ve Güvenlik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul Web Tasarım ve Geliştirme | Hızlı ve Güvenli Web Siteleri | NEXARO",
    description:
      "Küçük işletmeler için 5-14 günde teslim edilen güvenli web siteleri. Sabit fiyatlar, ajans masrafı yok.",
    images: ["https://nexaro.studio/og-image.png"],
  },
};

export default function TurkishPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NEXARO",
    image: "https://nexaro.studio/og-image.png",
    url: "https://nexaro.studio/tr",
    telephone: "+905434597973",
    email: "hello@nexaro.studio",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    priceRange: "₺15,000 - ₺65,000",
    description:
      "İstanbul'da web sitesi tasarımı, kurumsal web sitesi fiyatları, e-ticaret sitesi kurulumu ve web sitesi güvenlik denetimi.",
    founder: {
      "@type": "Person",
      name: "Shahd Belhadj",
      jobTitle: "Kurucu ve Baş Yazılım Mühendisi",
    },
    areaServed: ["İstanbul", "Türkiye", "Uluslararası"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent initialLocale="tr" />
    </>
  );
}
