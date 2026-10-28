import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Conception & Développement Web à Istanbul | Sites Rapides & Sécurisés | NEXARO",
  description:
    "Création de sites web rapides, sécurisés et performants pour entreprises et fondateurs en 5 à 14 jours. Tarifs transparents, cybersécurité intégrée, sans frais d'agence.",
  keywords: [
    "Création de site web Istanbul",
    "Développement web sécurisé",
    "Audit sécurité web",
    "Site vitrine entreprise",
    "NEXARO",
  ],
  alternates: {
    canonical: "https://nexaro.studio/fr",
    languages: {
      en: "https://nexaro.studio",
      tr: "https://nexaro.studio/tr",
      fr: "https://nexaro.studio/fr",
      ar: "https://nexaro.studio/ar",
    },
  },
  openGraph: {
    title: "Conception & Développement Web à Istanbul | Sites Rapides & Sécurisés | NEXARO",
    description:
      "Des sites web rapides et sécurisés qui vous apportent des clients. Livrés en 5 à 14 jours sans intermédiaires.",
    url: "https://nexaro.studio/fr",
    siteName: "NEXARO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://nexaro.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXARO — Studio Web & Cybersécurité à Istanbul",
      },
    ],
  },
};

export default function FrenchPage() {
  return <HomeContent initialLocale="fr" />;
}
