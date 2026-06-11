import type { Metadata } from "next";
import PrestationLayout from "@/components/PrestationLayout";

export const metadata: Metadata = {
  title: "Soudure inox sur mesure pour bateau",
  description:
    "Pièces métalliques sur mesure pour yachts et bateaux : inox, acier, aluminium. Filières, mains courantes, bossoirs. Artisan à Toulon. Devis gratuit.",
  alternates: { canonical: "https://prestigenautic.com/pages/soudure-inox" },
  openGraph: {
    url: "https://prestigenautic.com/pages/soudure-inox",
    title: "Soudure inox sur mesure bateau Toulon | Prestige Nautic",
    description:
      "Pièces métalliques sur mesure pour yachts et bateaux : inox, acier, aluminium. Artisan à Toulon, intervention sur toute la Côte d'Azur.",
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
    { "@type": "ListItem", position: 2, name: "Soudure sur mesure", item: "https://prestigenautic.com/pages/soudure-inox" },
  ],
};

const TAGS = [
  "Filières", "Mains courantes", "Bossoirs", "Taquets",
  "Platines", "Arceaux", "Supports d'instruments", "Rambardes",
];

const Icon = ({ d }: { d: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="var(--navy-700)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {d.split("|").map((p, i) => (
      <path key={i} d={p} />
    ))}
  </svg>
);

export default function SoudureInoxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PrestationLayout
        breadcrumb="Soudure sur mesure"
        heroTitle={<>Soudure sur mesure <em>pour yacht et bateau</em></>}
        heroSubtitle="Filières, mains courantes, bossoirs, taquets, arceaux : Prestige Nautic fabrique et pose chaque pièce métallique sur mesure — inox, acier, aluminium — avec une finition digne des plus beaux chantiers navals."
        heroActions={[
          { href: "/#devis", label: "Demander un devis gratuit", variant: "gold" },
          { href: "/#services", label: "Toutes nos prestations", variant: "secondary" },
        ]}
        heroImg={{ src: "/assets/soudure-inox.webp", alt: "Pièce en inox soudée sur mesure pour bateau — Prestige Nautic Côte d'Azur" }}
        introEyebrow="La prestation"
        introTitle={<>La soudure nautique, <em>précision et longévité</em></>}
        introParagraphs={[
          "Chaque bateau a ses besoins métalliques : équipements de pont, de cockpit et de mouillage. Nous travaillons tous les métaux adaptés au milieu marin — inox 316L, acier, aluminium — choisis selon la pièce, l'usage et le rendu souhaité. L'inox 316L reste une référence pour sa résistance à la corrosion et son aspect brillant, mais il n'est pas le seul matériau que nous mettons en œuvre.",
          "Chez Prestige Nautic, nous fabriquons sur mesure chaque pièce dont votre bateau a besoin. De la simple platine de fixation à l'ensemble des filières d'un voilier, tout est conçu, découpé, cintré et soudé avec le procédé adapté au métal, puis poli selon la finition souhaitée — miroir ou brossée. Le résultat est une pièce unique, taillée pour votre bateau.",
        ]}
        introImg={{ src: "/assets/soudure-inox.webp", alt: "Détail d'une soudure inox sur mesure — Prestige Nautic" }}
        avantages={[
          { icon: <Icon d="M16 4 6 9v14l10 5 10-5V9z|M16 4v24|M6 9l10 5 10-5" />, title: "Résistance marine", text: "Métaux de qualité marine — inox 316L, alliages adaptés. Insensibles à l'eau salée, aux embruns et aux UV. Aucun entretien particulier pour conserver leur aspect." },
          { icon: <Icon d="M20 9l3 3-9 9-3-3 9-9z|M20 9l-3-3-9 9 3 3|M8 24h6" />, title: "Fabrication sur mesure", text: "Chaque pièce est fabriquée d'après les cotes exactes de votre bateau. Pas de compromis, pas d'adaptation : la pièce s'intègre parfaitement." },
          { icon: <Icon d="M16 6v4|M16 22v4|M6 16h4|M22 16h4|M16 11a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />, title: "Finition miroir ou brossée", text: "Polissage miroir pour un rendu brillant très haut de gamme, ou finition brossée satinée pour un style plus contemporain. Au choix." },
          { icon: <Icon d="M9 9l14 14|M23 9 9 23|M7 7l3 3|M22 22l3 3" />, title: "Soudure de précision", text: "Nous soudons avec tout type de procédés, choisi selon le métal et la pièce. Des cordons propres, solides et homogènes : pas de projections, pas d'inclusions, solidité maximale." },
        ]}
        extraSection={
          <section className="section" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className="realisations-tags">
                {TAGS.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>
        }
        realisations={{
          eyebrow: "En images",
          title: <>La soudure sur mesure <em>en images</em></>,
          text: "Hard-tops, plateformes de bain, tables, échelles, Starlink : le sur-mesure s'adapte à chaque bateau, quel que soit le métal.",
          items: [
            { src: "/assets/soudure-hardtop-inox.webp", alt: "Hard-top en inox sur mesure — Prestige Nautic", caption: "Hard-top" },
            { src: "/assets/soudure-plage-bain-elysium.webp", alt: "Plateforme de bain et échelle inox — Prestige Nautic", caption: <>Plateforme &amp; échelle</> },
            { src: "/assets/soudure-table-inox.webp", alt: "Table de cockpit en inox sur mesure — Prestige Nautic", caption: "Table de cockpit" },
          ],
        }}
        processEyebrow="Notre méthode"
        processTitle={<>De la cote à la <em>pose</em></>}
        processIntro="Une fabrication rigoureuse, de la prise de mesure à l'installation à bord. Chaque pièce est unique."
        processSteps={[
          { title: "Relevé de cotes et conception", text: "Prise des mesures directement sur le bateau, définition des formes, des diamètres de tube et des points de fixation. Un plan est établi avant toute fabrication." },
          { title: "Découpe et cintrage en atelier", text: "Tronçonnage des tubes et barres métalliques aux longueurs exactes, cintrage aux angles définis, ajustage des emboîtements avant assemblage." },
          { title: "Soudure et assemblage", text: "Assemblage des pièces avec le procédé de soudure adapté au métal. Les cordons sont pénétrants, homogènes et repris à la meule pour une surface lisse avant polissage." },
          { title: "Polissage et finition", text: "Passage successif sur plusieurs grains de disques, jusqu'à la finition souhaitée : brossée satinée ou miroir brillant. Chaque pièce est nettoyée et protégée avant livraison." },
          { title: "Pose et fixation à bord", text: "Installation de la pièce sur le bateau, perçage si nécessaire, fixation par boulons inox avec joints d'étanchéité. Vérification de la solidité et de l'alignement." },
        ]}
        faqEyebrow="Questions fréquentes"
        faqTitle={<>Tout savoir sur la <em>soudure nautique</em></>}
        faq={[
          { q: "Quels éléments fabriquez-vous ?", a: "Filières, balcons, chandeliers, mains courantes, bossoirs, davits, taquets, platines, supports d'accastillage, portiques et pièces sur mesure selon votre besoin." },
          { q: "Quel type de soudure utilisez-vous ?", a: "Tout type de procédés, choisi selon le métal et la pièce. Quel que soit le procédé, l'objectif reste le même : des cordons propres, résistants et adaptés à l'environnement marin." },
          { q: "Travaillez-vous sur pièce existante ou sur mesure ?", a: <>Les deux : remplacement ou réparation d&apos;un élément existant, ou fabrication complète d&apos;une pièce neuve d&apos;après mesures et plans. C&apos;est aussi un poste fréquent d&apos;un <a href="/pages/refit-integral">refit intégral</a>.</> },
          { q: "Quelle finition proposez-vous ?", a: "Finition brossée ou polie miroir selon le rendu souhaité, avec un traitement de surface qui préserve la tenue du métal dans le temps." },
          { q: "Quels métaux résistent à l'eau de mer ?", a: "Nous choisissons des métaux de qualité marine — inox 316L, alliages d'aluminium et aciers traités — selon la pièce, pour leur résistance à la corrosion saline." },
          { q: "Intervenez-vous sur mon port ?", a: "Basés à Toulon, nous intervenons sur toute la Côte d'Azur : Hyères, Bandol, Sanary, Saint-Tropez, Cannes, Antibes, Nice et Monaco." },
        ]}
        ctaTitle={<>Un projet de soudure <em>sur la Côte d&apos;Azur ?</em></>}
        ctaText="Remplacement d'un élément existant ou fabrication d'une pièce entièrement nouvelle — décrivez votre besoin et nous vous proposons un devis précis."
        ctaButtonLabel="Demander un devis gratuit"
        related={[
          { href: "/pages/refit-integral", label: "Refit intégral" },
          { href: "/pages/teck-synthetique", label: "Teck synthétique" },
          { href: "/pages/teck-naturel", label: "Teck naturel" },
          { href: "/pages/vaigrage", label: "Vaigrage intérieur" },
        ]}
      />
    </>
  );
}
