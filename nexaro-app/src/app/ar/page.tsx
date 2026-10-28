import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "تصميم وتطوير المواقع في إسطنبول | مواقع سريعة وآمنة | NEXARO",
  description:
    "بناء مواقع سريعة وآمنة للأنشطة التجارية ورواد الأعمال في 5–14 يومًا مع أمان سيبراني مدمج وأسعار ثابتة. تعامل مباشر مع المهندسة المطورة دون تكاليف الوكالات.",
  keywords: [
    "تصميم مواقع إلكترونية إسطنبول",
    "تطوير ويب آمن",
    "فحص أمان المواقع",
    "مواقع شركات ومتاجر إلكترونية",
    "NEXARO",
  ],
  alternates: {
    canonical: "https://nexaro.studio/ar",
    languages: {
      en: "https://nexaro.studio",
      tr: "https://nexaro.studio/tr",
      fr: "https://nexaro.studio/fr",
      ar: "https://nexaro.studio/ar",
    },
  },
  openGraph: {
    title: "تصميم وتطوير المواقع في إسطنبول | مواقع سريعة وآمنة | NEXARO",
    description:
      "مواقع سريعة وآمنة تجلب لك عملاء فعليين. تسليم خلال 5 إلى 14 يومًا بأسعار ثابتة ودون وسطاء.",
    url: "https://nexaro.studio/ar",
    siteName: "NEXARO",
    locale: "ar_AR",
    type: "website",
    images: [
      {
        url: "https://nexaro.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXARO — مواقع سريعة وآمنة في إسطنبول",
      },
    ],
  },
};

export default function ArabicPage() {
  return <HomeContent initialLocale="ar" />;
}
