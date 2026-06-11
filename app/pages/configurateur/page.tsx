import type { Metadata } from "next";
import Configurator from "@/components/Configurator";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Configurateur de teck synthétique",
  description:
    "Configurateur de teck synthétique Prestige Nautic : visualisez en temps réel les teintes et couleurs de joint sur un bateau. Artisan à Toulon.",
  alternates: { canonical: "https://prestigenautic.com/pages/configurateur" },
  openGraph: {
    url: "https://prestigenautic.com/pages/configurateur",
    title: "Configurateur teck synthétique bateau | Prestige Nautic",
    description:
      "Visualisez votre pont en teck synthétique : teintes et joints au choix, rendu en temps réel. Artisan nautique à Toulon — Côte d'Azur.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prestige Nautic — artisan teck, vaigrage et refit sur mesure à Toulon, Côte d'Azur",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://prestigenautic.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Configurateur teck synthétique",
      item: "https://prestigenautic.com/pages/configurateur",
    },
  ],
};

export default function ConfigurateurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Configurator />
      <Footer />
    </>
  );
}
