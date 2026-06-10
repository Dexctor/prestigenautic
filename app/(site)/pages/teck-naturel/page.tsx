import type { Metadata } from "next";
import PrestationLayout from "@/components/PrestationLayout";

export const metadata: Metadata = {
  title: "Pose teck naturel bateau | Prestige Nautic — Côte d'Azur",
  description:
    "Pose et rénovation de teck naturel pour yachts et bateaux. Artisan à Toulon : finitions authentiques, bois haut de gamme. Côte d'Azur. Devis gratuit.",
  alternates: { canonical: "https://prestigenautic.com/pages/teck-naturel.html" },
  openGraph: {
    url: "https://prestigenautic.com/pages/teck-naturel.html",
    title: "Pose teck naturel bateau | Prestige Nautic — Côte d'Azur",
    description:
      "Pose et rénovation de teck naturel pour yachts et bateaux. Artisan à Toulon, intervention sur toute la Côte d'Azur.",
    images: ["/assets/teck-naturel.webp"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://prestigenautic.com/" },
    { "@type": "ListItem", position: 2, name: "Teck naturel", item: "https://prestigenautic.com/pages/teck-naturel.html" },
  ],
};

const Icon = ({ d }: { d: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="var(--navy-700)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {d.split("|").map((p, i) => (
      <path key={i} d={p} />
    ))}
  </svg>
);

export default function TeckNaturelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PrestationLayout
        breadcrumb="Teck naturel"
        heroTitle={<>Pose de <em>teck naturel</em> sur yacht et bateau</>}
        heroSubtitle="Le bois noble par excellence. De la pose sur-mesure à l'entretien annuel et à la réparation, Prestige Nautic préserve l'élégance de votre pont en teck naturel — sur toute la Côte d'Azur."
        heroActions={[
          { href: "/#devis", label: "Demander un devis gratuit", variant: "gold" },
          { href: "/#services", label: "Toutes nos prestations", variant: "secondary" },
        ]}
        heroImg={{ src: "/assets/teck-naturel.webp", alt: "Pont en teck naturel sur yacht — pose et rénovation par Prestige Nautic sur la Côte d'Azur" }}
        introEyebrow="La prestation"
        introTitle={<>Le teck naturel, <em>un classique intemporel</em></>}
        introParagraphs={[
          "Le teck naturel reste la référence absolue en matière de pont de plaisance. Son grain chaud, sa résistance naturelle aux huiles marines et sa durabilité légendaire en font le matériau de prédilection des constructeurs de yachts de prestige depuis des siècles.",
          "Une pose de teck naturel bien réalisée, c'est un bateau qui prend instantanément de la valeur. Chaque lame est taillée sur mesure, posée à plat, calfatée à la main. Le résultat est un pont à la fois beau et fonctionnel, qui vieillira avec grâce si l'entretien est respecté — et c'est là que l'expertise de l'artisan fait toute la différence.",
        ]}
        introImg={{ src: "/assets/teck-naturel.webp", alt: "Détail d'un pont en teck naturel calfaté — Prestige Nautic Côte d'Azur" }}
        avantages={[
          { icon: <Icon d="M16 4c-3 4-5 7-5 10a5 5 0 0 0 10 0c0-3-2-6-5-10z|M16 14v14" />, title: "Authenticité naturelle", text: "Aucun matériau ne reproduit fidèlement le grain, la chaleur et l'odeur du vrai teck. Un pont naturel sublime instantanément un bateau." },
          { icon: <Icon d="M16 4a12 12 0 1 0 0 24 12 12 0 0 0 0-24z|M16 9l3 7-7 3 4-10z" />, title: "Valorisation du bateau", text: "Un pont en teck naturel augmente significativement la valeur de revente. Référence dans l'univers du yachting haut de gamme." },
          { icon: <Icon d="M5 14 16 6l11 8|M8 13v12h16V13|M13 25v-7h6v7" />, title: "Durabilité légendaire", text: "Le teck naturel de qualité A (plantation certifiée) tient 20 à 30 ans avec un entretien adapté. Un investissement sur le long terme." },
          { icon: <Icon d="M20 9l3 3-9 9-3-3 9-9z|M20 9l-3-3-9 9 3 3|M8 24h6" />, title: "Pose & rénovation", text: "Nouvelle pose sur pont nu, remplacement de lames abîmées ou rénovation complète : nous adaptons l'intervention à l'état de votre teck." },
        ]}
        processEyebrow="Notre méthode"
        processTitle={<>Du devis à la <em>livraison</em></>}
        processIntro="Une intervention structurée et soignée. Chaque chantier suit les mêmes étapes pour garantir un résultat à la hauteur de vos attentes."
        processSteps={[
          { title: "Inspection & devis personnalisé", text: "Évaluation de l'état du pont existant, relevé des surfaces, choix du teck (épaisseur, provenance, certification FSC). Devis détaillé sans engagement." },
          { title: "Dépose et préparation du support", text: "Retrait du teck ancien si nécessaire, ponçage du pont, rebouchage des trous de vis, traitement des zones dégradées. Le support doit être sain avant toute pose." },
          { title: "Découpe et ajustage des lames", text: "Les lames de teck sont taillées sur mesure pour épouse parfaitement les formes du pont : baïonnettes, courbes, écoutilles et passages de câble." },
          { title: "Pose, vissage et calfatage", text: "Fixation des lames (vis inox ou collage selon configuration), puis calfatage au mastic polyuréthane noir ou blanc dans les gorges. Technique traditionnelle pour une étanchéité parfaite." },
          { title: "Ponçage final & livraison", text: "Ponçage de l'ensemble du pont pour un plan parfait, nettoyage et séchage. Le teck est livré prêt à l'emploi — vous n'avez plus qu'à naviguer." },
        ]}
        faqEyebrow="Questions fréquentes"
        faqTitle={<>Tout savoir sur le <em>teck naturel</em></>}
        faq={[
          { q: "Quelle différence entre teck naturel et teck synthétique ?", a: <>Le teck naturel offre un cachet et une chaleur authentiques mais demande un entretien régulier ; le synthétique imite le bois sans entretien. Comparez en détail dans notre guide <a href="/pages/teck-synthetique-ou-naturel">teck synthétique ou naturel</a>.</> },
          { q: "Quel entretien demande un pont en teck naturel ?", a: "Un nettoyage doux régulier dans le sens du fil, un dégrisage occasionnel et la reprise des joints quand c'est nécessaire. Bien entretenu, un pont teck conserve sa teinte et sa longévité." },
          { q: "Peut-on rénover un pont en teck existant ?", a: "Souvent oui : ponçage, remplacement des lames abîmées, réfection des joints. Nous évaluons l'épaisseur de teck restante pour déterminer si une rénovation suffit ou si une repose est préférable." },
          { q: "Combien de temps dure un pont en teck naturel ?", a: "Avec un entretien adapté, un pont en teck naturel de qualité dure de nombreuses années. Sa longévité dépend surtout de l'épaisseur des lames et de la régularité de l'entretien." },
          { q: "Le teck naturel chauffe-t-il au soleil ?", a: "Comme tout bois, il chauffe moins qu'une surface sombre et reste agréable pieds nus. C'est l'un de ses atouts de confort sous le soleil de Méditerranée." },
          { q: "Intervenez-vous sur mon port ?", a: "Basés à Toulon, nous intervenons sur toute la Côte d'Azur : Hyères, Bandol, Sanary, Saint-Tropez, Cannes, Antibes, Nice et Monaco." },
        ]}
        ctaTitle={<>Un projet de teck naturel <em>sur la Côte d&apos;Azur ?</em></>}
        ctaText="Neuve pose ou rénovation, nous analysons votre pont et vous proposons la solution la plus adaptée. Devis détaillé offert."
        ctaButtonLabel="Demander un devis gratuit"
        related={[
          { href: "/pages/teck-synthetique", label: "Teck synthétique" },
          { href: "/pages/vaigrage", label: "Vaigrage intérieur" },
          { href: "/pages/refit-integral", label: "Refit intégral" },
          { href: "/pages/soudure-inox", label: "Soudure sur mesure" },
        ]}
      />
    </>
  );
}
