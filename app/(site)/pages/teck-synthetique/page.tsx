import type { Metadata } from "next";
import PrestationLayout from "@/components/PrestationLayout";

export const metadata: Metadata = {
  title: "Pose de teck synthétique bateau — Côte d'Azur",
  description:
    "Pose de teck synthétique pour yachts et bateaux sur la Côte d'Azur. Artisan à Toulon : finitions premium, durabilité marine, entretien minimal. Devis gratuit.",
  alternates: { canonical: "https://prestigenautic.com/pages/teck-synthetique" },
  openGraph: {
    url: "https://prestigenautic.com/pages/teck-synthetique",
    title: "Pose teck synthétique bateau | Prestige Nautic — Côte d'Azur",
    description:
      "Spécialiste de la pose de teck synthétique sur yachts et bateaux. Intervention sur toute la Côte d'Azur. Devis gratuit.",
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
    { "@type": "ListItem", position: 2, name: "Teck synthétique", item: "https://prestigenautic.com/pages/teck-synthetique" },
  ],
};

// Service + Offer : le tarif « à partir de 580 €/m² » est désormais structuré.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pose de teck synthétique pour bateau",
  name: "Pose de teck synthétique sur yacht et bateau",
  description:
    "Pose et installation de teck synthétique sur pont de yacht et bateau. Matériaux haut de gamme, finitions soignées, durabilité marine.",
  provider: { "@type": "ProfessionalService", name: "Prestige Nautic", "@id": "https://prestigenautic.com/#organization" },
  areaServed: { "@type": "Place", name: "Côte d'Azur" },
  url: "https://prestigenautic.com/pages/teck-synthetique",
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: 580,
      priceCurrency: "EUR",
      unitText: "m²",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MTK" },
    },
    availability: "https://schema.org/InStock",
  },
};

// Icônes (reproduites du site original)
const IconDurability = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="var(--navy-700)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="8" r="3" />
    <path d="M16 11v13M10 16H8c0 5 3.6 8 8 8s8-3 8-8h-2" />
    <path d="M10 16h12" />
  </svg>
);
const IconEntretien = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="var(--navy-700)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4c0 0-8 8-8 14a8 8 0 0 0 16 0C24 12 16 4 16 4z" />
    <path d="M12 20a4 4 0 0 0 4 4" />
  </svg>
);
const IconCouleurs = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="var(--navy-700)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 16a10 10 0 1 1 10 10c-2 0-3-1-3-2.5 0-2 2-3 2-5s-2-2.5-4-2.5H6z" />
    <circle cx="11" cy="10" r="1.2" fill="var(--navy-700)" stroke="none" />
    <circle cx="16" cy="7" r="1.2" fill="var(--navy-700)" stroke="none" />
    <circle cx="21" cy="10" r="1.2" fill="var(--navy-700)" stroke="none" />
    <circle cx="23" cy="16" r="1.2" fill="var(--navy-700)" stroke="none" />
  </svg>
);
const IconAntiderapant = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="var(--navy-700)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
    <path d="M4 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
    <path d="M4 10c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
  </svg>
);

export default function TeckSynthetiquePage() {
  return (
    <>
      {/* Le FAQPage JSON-LD est généré automatiquement par PrestationLayout. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PrestationLayout
        breadcrumb="Teck synthétique"
        heroTitle={<>Pose de <em>teck synthétique</em> sur yacht et bateau</>}
        heroSubtitle="Un pont impeccable, sans les contraintes du teck naturel. Prestige Nautic installe le teck synthétique avec le soin d'un artisan, sur toute la Côte d'Azur."
        heroActions={[
          { href: "/pages/configurateur", label: "Configurer mon teck →", variant: "gold" },
          { href: "/#devis", label: "Demander un devis", variant: "secondary" },
        ]}
        heroImg={{
          src: "/assets/teck-synthetique.webp",
          srcSet: "/assets/teck-synthetique-mobile.webp 600w, /assets/teck-synthetique.webp 1200w",
          alt: "Pont en teck synthétique sur yacht — pose réalisée par Prestige Nautic sur la Côte d'Azur",
        }}
        introEyebrow="La prestation"
        introTitle={<>Le teck synthétique, <em>qu&apos;est-ce que c&apos;est ?</em></>}
        introParagraphs={[
          "Le teck synthétique est un matériau composite conçu pour reproduire l'aspect et le confort du teck naturel, sans ses contraintes d'entretien. Fabriqué à partir de PVC ou de résines techniques, il est insensible à l'eau de mer, aux UV et aux variations de température — des conditions que tout bateau de Méditerranée doit endurer.",
          "Posé collé sur le pont, il offre un rendu visuel haut de gamme, une surface antidérapante et une longévité nettement supérieure au teck naturel. C'est aujourd'hui le choix privilégié des propriétaires de yachts qui veulent un pont irréprochable sans immobiliser leur bateau en chantier chaque saison.",
        ]}
        introImg={{
          src: "/assets/teck-synthetique.webp",
          alt: "Détail de pose de teck synthétique sur pont de voilier — Prestige Nautic Côte d'Azur",
        }}
        avantages={[
          { icon: IconDurability, title: "Durabilité marine", text: "Résistant à l'eau de mer, aux UV et aux chocs. Conçu pour durer plus de 15 ans en conditions méditerranéennes." },
          { icon: IconEntretien, title: "Entretien minimal", text: "Pas de traitement annuel, pas de ponçage. Un nettoyage classique suffit à conserver l'aspect d'origine." },
          { icon: IconCouleurs, title: "Couleurs & joints au choix", text: "Large palette de teintes de teck et de couleurs de joint. Configurez votre combinaison pour un rendu unique." },
          { icon: IconAntiderapant, title: "Antidérapant", text: "Surface striée offrant une adhérence optimale, même mouillée. Sécurité renforcée pour l'équipage et les passagers." },
        ]}
        configCta={{
          title: "Visualisez votre pont avant de vous décider",
          text: "Testez les combinaisons teck / joint en temps réel, directement sur l'image de votre type de bateau.",
        }}
        processEyebrow="Notre méthode"
        processTitle={<>Du devis à la <em>livraison</em></>}
        processIntro="Une intervention structurée, sans mauvaise surprise. Chaque chantier suit les mêmes étapes pour garantir un résultat à la hauteur de vos attentes."
        processSteps={[
          { title: "Prise du gabarit & étude du pont", text: "Prise de côtes minutieuse, chaque élément du pont est pris en compte avant toutes poses" },
          { title: "Conception sur mesure en atelier", text: "Le teck synthétique est confectionné précisément pour votre bateau. Aucun produit générique : tout est fait sur mesure pour s'ajuster parfaitement à vos lignes." },
          { title: "Préparation et collage du pont", text: "Dépose du teck (si nécessaire), remise à plat du pont, ponçage, dégraissage, puis collage avec colle marine bi-composant. La pose est réalisée en une seule passe pour éviter les reprises, les décalages et les bulles." },
          { title: "Jointoyage & finitions", text: "Injection du joint polyuréthane dans la couleur choisie, ponçage léger des arrêtes et angles. Le résultat est net, sans surplus ni bulles." },
          { title: "Contrôle qualité & livraison", text: "Vérification de l'alignement, de la planéité et de l'étanchéité sur chaque zone. Le bateau est rendu propre, prêt à naviguer." },
        ]}
        faqEyebrow="Questions fréquentes"
        faqTitle={<>Tout savoir sur le <em>teck synthétique</em></>}
        faq={[
          { q: "Le teck synthétique glisse-t-il quand le pont est mouillé ?", a: "Non. La surface est striée et conçue pour rester antidérapante, même mouillée — souvent plus sûre que le teck naturel verni. C'est un vrai atout de sécurité pour l'équipage comme pour les passagers." },
          { q: "Quelle est la durée de vie d'un pont en teck synthétique ?", a: "En conditions méditerranéennes (UV, sel, chaleur), un teck synthétique de qualité posé dans les règles dépasse facilement 15 ans, sans le grisaillement ni les fissures du bois naturel." },
          { q: "Quel entretien faut-il prévoir ?", a: <>Quasiment aucun : pas de ponçage, pas d&apos;huile ni de traitement annuel. Un simple nettoyage à l&apos;eau savonneuse suffit à conserver l&apos;aspect d&apos;origine. C&apos;est la principale raison du choix du synthétique. À l&apos;inverse, le teck naturel demande un entretien régulier : voir notre <a href="/pages/entretien-teck-bateau">guide d&apos;entretien du teck</a>.</> },
          { q: "Combien coûte la pose de teck synthétique sur un bateau ?", a: <>Le tarif démarre à partir de <strong>580 € du m²</strong>, pose et finitions comprises. Ce prix varie selon la surface à couvrir, la complexité du pont (hublots, taquets, marches, découpes) et la gamme de produit choisie. Un chantier simple sur un voilier de série sans teck sera moins coûteux que sur un bateau avec du teck à déposer. Chaque projet étant unique, nous établissons un devis gratuit après étude de votre bateau.</> },
          { q: "Teck synthétique ou teck naturel : que choisir ?", a: <>Le synthétique privilégie la durabilité et l&apos;absence d&apos;entretien ; le teck naturel offre un cachet authentique mais demande un entretien régulier. Pour trancher, lisez notre guide <a href="/pages/teck-synthetique-ou-naturel">teck synthétique ou naturel</a> ou comparez avec la <a href="/pages/teck-naturel">pose de teck naturel</a>.</> },
          { q: "Intervenez-vous sur mon port ?", a: "Basés à Toulon, nous intervenons sur toute la Côte d'Azur : Hyères, Bandol, Sanary, Marseille, Saint-Tropez, Cannes, Antibes, Nice et Monaco. Nous possédons également une antenne dans le nord de la France." },
        ]}
        ctaTitle={<>Un projet de teck synthétique <em>sur la Côte d&apos;Azur ?</em></>}
        ctaText="Neuve pose ou rénovation, parlez-nous de votre bateau. Devis gratuit après étude de votre pont."
        ctaButtonLabel="Demander un devis gratuit"
        related={[
          { href: "/pages/teck-naturel", label: "Teck naturel" },
          { href: "/pages/vaigrage", label: "Vaigrage intérieur" },
          { href: "/pages/refit-integral", label: "Refit intégral" },
          { href: "/pages/soudure-inox", label: "Soudure sur mesure" },
        ]}
        relatedArticles={[
          { href: "/pages/teck-synthetique-ou-naturel", label: "Teck synthétique ou naturel : que choisir ?" },
          { href: "/pages/entretien-teck-bateau", label: "Comment entretenir son teck de bateau" },
        ]}
      />
    </>
  );
}
