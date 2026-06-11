import type { Metadata } from "next";
import PrestationLayout from "@/components/PrestationLayout";

export const metadata: Metadata = {
  title: "Vaigrage de bateau sur mesure — Côte d'Azur",
  description:
    "Pose de vaigrage intérieur pour yachts et bateaux. Artisan à Toulon : isolation, esthétique premium, matériaux haut de gamme. Devis gratuit.",
  alternates: { canonical: "https://prestigenautic.com/pages/vaigrage" },
  openGraph: {
    url: "https://prestigenautic.com/pages/vaigrage",
    title: "Vaigrage bateau sur mesure | Prestige Nautic — Côte d'Azur",
    description:
      "Pose de vaigrage intérieur sur mesure pour yachts et bateaux. Artisan à Toulon, intervention sur toute la Côte d'Azur.",
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
    { "@type": "ListItem", position: 2, name: "Vaigrage", item: "https://prestigenautic.com/pages/vaigrage" },
  ],
};

const Icon = ({ d }: { d: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="var(--navy-700)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {d.split("|").map((p, i) => (
      <path key={i} d={p} />
    ))}
  </svg>
);

export default function VaigragePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PrestationLayout
        breadcrumb="Vaigrage"
        heroTitle={<>Vaigrage intérieur <em>sur mesure</em> pour yacht et bateau</>}
        heroSubtitle="Un intérieur transformé, silencieux et élégant. Prestige Nautic réalise votre vaigrage avec des matériaux nautiques haut de gamme, sur toute la Côte d'Azur."
        heroActions={[
          { href: "/#devis", label: "Demander un devis gratuit", variant: "gold" },
          { href: "/#services", label: "Toutes nos prestations", variant: "secondary" },
        ]}
        heroImg={{ src: "/assets/vaigrage.webp", alt: "Vaigrage intérieur sur mesure d'un bateau — Prestige Nautic Côte d'Azur" }}
        introEyebrow="La prestation"
        introTitle={<>Le vaigrage, <em>qu&apos;est-ce que c&apos;est ?</em></>}
        introParagraphs={[
          "Le vaigrage désigne le revêtement intérieur de la coque d'un bateau — les panneaux qui recouvrent les flancs, le plafond et le fond de la cabine. Il joue à la fois un rôle esthétique et technique : il habille l'intérieur du bateau tout en assurant une isolation phonique et thermique contre la coque.",
          "Un vaigrage bien posé transforme radicalement le confort de vie à bord. Il réduit les bruits de coque, stabilise la température de la cabine et donne à l'intérieur du bateau l'aspect soigné d'un espace de vie haut de gamme.",
        ]}
        introImg={{ src: "/assets/vaigrage.webp", alt: "Détail d'un vaigrage intérieur de bateau — Prestige Nautic" }}
        avantages={[
          { icon: <Icon d="M16 6v20|M11 10v12|M21 10v12|M6 14v8|M26 14v8" />, title: "Isolation phonique", text: "Les bruits de coque, de moteur et de vague sont absorbés. La cabine devient silencieuse et reposante, même en navigation." },
          { icon: <Icon d="M16 4v16|M16 20a4 4 0 1 0 0 8 4 4 0 0 0 0-8z|M16 8h4|M16 13h4" />, title: "Confort thermique", text: "La mousse intercalaire crée une barrière thermique entre la coque et la cabine. Moins de condensation, températures stables été comme hiver." },
          { icon: <Icon d="M5 6h22v16H5z|M5 11h22|M9 6v5" />, title: "Esthétique premium", text: "Tissus nautiques, simili-cuir, cuir véritable, alcantara, suédine : le choix du revêtement personnalise l'ambiance de votre cabine selon vos goûts." },
          { icon: <Icon d="M16 4 6 9v14l10 5 10-5V9z|M16 4v24|M6 9l10 5 10-5" />, title: "Pose sur mesure", text: "Chaque pièce est découpée et ajustée aux courbes uniques de votre coque. Aucun produit générique : tout est taillé pour votre bateau." },
        ]}
        realisations={{
          eyebrow: "En images",
          title: <>Sellerie &amp; <em>finitions</em></>,
          text: "Le même soin que pour le vaigrage s'applique à la sellerie : matériaux nobles, coutures précises et confort à bord.",
          gridModifier: "duo",
          items: [
            { src: "/assets/vaigrage-fauteuil-prestige.webp", alt: "Sellerie sur mesure d'un fauteuil de bateau — Prestige Nautic", caption: "Sellerie sur mesure" },
            { src: "/assets/vaigrage-finition-interieure.webp", alt: "Finitions intérieures soignées d'un bateau — Prestige Nautic", caption: "Finitions intérieures" },
          ],
        }}
        processEyebrow="Notre méthode"
        processTitle={<>Du gabarit à la <em>pose</em></>}
        processIntro="Une intervention soignée du premier relevé à la livraison. Chaque cabine est traitée comme une pièce unique."
        processSteps={[
          { title: "Prise de mesure et gabarit", text: "Chaque gabarit de surface à recouvrir : flancs, plafond, parois est réalisé directement dans le bateau pour un ajustage parfait." },
          { title: "Choix des matériaux", text: "Sélection du support (contreplaqué marine, mousse, coque à nu) et du revêtement de surface (tissu nautique, simili-cuir, stratifié bois) selon vos préférences et le budget." },
          { title: "Fabrication en atelier ou à bord", text: "Découpe, habillage et collage selon les gabarits. Chaque pièce est conçue méticuleusement avant l'installation sur le bateau" },
          { title: "Pose et fixation à bord", text: "Mise en place des panneaux, ajustement fin des coupes, fixation par clips nautiques ou vissage inox selon la configuration. Les joints sont invisibles." },
          { title: "Finitions et contrôle final", text: "Vérification de la planéité, des raccords et de l'étanchéité sur les zones sensibles. La cabine est livrée propre et prête à l'usage." },
        ]}
        faqEyebrow="Questions fréquentes"
        faqTitle={<>Tout savoir sur le <em>vaigrage</em></>}
        faq={[
          { q: "Qu'est-ce que le vaigrage d'un bateau ?", a: "Le vaigrage est l'habillage intérieur de la coque et des cloisons, en tissu marin, simili, cuir ou mousse technique. Il améliore l'esthétique, le confort et l'isolation phonique et thermique de l'habitacle." },
          { q: "Le vaigrage améliore-t-il vraiment l'isolation ?", a: "Oui, nettement. Un vaigrage bien posé réduit la condensation, atténue les bruits de coque et stabilise la température intérieure — un vrai gain de confort, en navigation comme au mouillage." },
          { q: "Quels matériaux proposez-vous ?", a: <>Selon le rendu et le budget : tissus marins, simili cuir, cuir, alcantara, panneaux mousse. Tous sont sélectionnés pour résister à l&apos;humidité et aux UV du milieu marin. Pour le détail des matériaux et des étapes de pose, consultez notre <a href="/pages/vaigrage-bateau-guide-complet">guide complet du vaigrage</a>.</> },
          { q: "Peut-on refaire le vaigrage d'un bateau ancien ?", a: <>Oui. Refaire le vaigrage est l&apos;un des moyens les plus efficaces de moderniser un intérieur fatigué, souvent dans le cadre d&apos;un <a href="/pages/refit-integral">refit intégral</a>.</> },
          { q: "Combien de temps dure la pose ?", a: "Cela dépend de la surface et de la complexité (cabines, équipets, plafonds). Nous établissons un planning précis au devis pour limiter l'immobilisation du bateau." },
          { q: "Intervenez-vous sur mon port ?", a: "Basés à Toulon, nous intervenons sur toute la Côte d'Azur : Hyères, Bandol, Sanary, Saint-Tropez, Cannes, Antibes, Nice et Monaco." },
        ]}
        ctaTitle={<>Un projet de vaigrage <em>sur la Côte d&apos;Azur ?</em></>}
        ctaText="Rénovation ou nouvelle installation, nous transformons votre intérieur de bateau. Devis sur mesure, sans engagement."
        ctaButtonLabel="Demander un devis gratuit"
        related={[
          { href: "/pages/refit-integral", label: "Refit intégral" },
          { href: "/pages/teck-synthetique", label: "Teck synthétique" },
          { href: "/pages/teck-naturel", label: "Teck naturel" },
          { href: "/pages/soudure-inox", label: "Soudure sur mesure" },
        ]}
        relatedArticles={[
          { href: "/pages/vaigrage-bateau-guide-complet", label: "Le vaigrage de bateau : le guide complet" },
        ]}
      />
    </>
  );
}
