import type { Metadata } from "next";
import PrestationLayout from "@/components/PrestationLayout";

export const metadata: Metadata = {
  title: "Refit intégral de bateau à Toulon",
  description:
    "Refit intégral de yacht sur la Côte d'Azur : vaigrage, boiseries, inox, sellerie, Starlink, LED, covering et enceintes marine. Devis gratuit.",
  alternates: { canonical: "https://prestigenautic.com/pages/refit-integral" },
  openGraph: {
    url: "https://prestigenautic.com/pages/refit-integral",
    title: "Refit intégral bateau Toulon & Côte d'Azur | Prestige Nautic",
    description:
      "Refit intégral de yacht sur la Côte d'Azur : vaigrage, boiseries, inox, sellerie, Starlink, LED, covering et enceintes marine. Devis gratuit.",
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
    { "@type": "ListItem", position: 2, name: "Refit intégral", item: "https://prestigenautic.com/pages/refit-integral" },
  ],
};

const dot = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="3" fill="currentColor" />
  </svg>
);

const STRUCTURE = [
  { t: "Vaigrage intérieur", d: "Revêtements de coque, isolation phonique et thermique, habillage des cabines." },
  { t: "Boiseries & menuiserie", d: "Meubles sur mesure, cloisons et habillages bois intérieurs." },
  { t: "Inox intérieur sur mesure", d: "Mains courantes, platines et éléments décoratifs ou fonctionnels." },
  { t: "Sellerie & peintures", d: "Coussins, revêtements de sol, peintures intérieures et vernis." },
  { t: "Covering int. & ext.", d: "Film adhésif certifié marine : coque, tableau de bord, habitacle — mat, brillant, carbone ou brossé." },
];

const ELECTRONIQUE = [
  { t: "Installation Starlink", d: "Antenne, routeur et câblage intégrés — connexion haut débit partout en mer, sans câble apparent." },
  { t: "Kit d'enceintes marine", d: "Enceintes étanches haute fidélité, intégration discrète au cockpit, carré et cabines." },
  { t: "LED sous-marines", d: "Éclairage immergé de coque, câblage étanche intégré — effet spectaculaire au mouillage." },
  { t: "LED d'ambiance int. & ext.", d: "Rubans et spots encastrés avec contrôle couleur et intensité — une atmosphère sur mesure." },
  { t: "Lettrage bateau LED", d: "Nom du bateau en LED ou inox rétroéclairé — design personnalisé, rendu soigné jour et nuit." },
];

const Icon = ({ d }: { d: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="var(--navy-700)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {d.split("|").map((p, i) => (
      <path key={i} d={p} />
    ))}
  </svg>
);

function RefitGroup({ title, rows }: { title: string; rows: { t: string; d: string }[] }) {
  return (
    <div className="refit-group">
      <h3 className="refit-group__title">{title}</h3>
      <ul className="refit-list">
        {rows.map((r) => (
          <li className="refit-row" key={r.t}>
            <span className="refit-row__icon" aria-hidden="true">
              {dot}
            </span>
            <span className="refit-row__body">
              <strong>{r.t}</strong>
              <span>{r.d}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RefitIntegralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PrestationLayout
        breadcrumb="Refit intégral"
        heroEyebrow="Refit & rénovation"
        heroTitle={<>Refit intégral <em>sur mesure</em> — de la structure à l&apos;électronique</>}
        heroSubtitle="Un bateau entièrement transformé : vaigrage, boiseries, inox, sellerie, mais aussi Starlink, enceintes, LED sous-marines, covering et lettrage LED — avec la même exigence de finition d'un bout à l'autre du chantier."
        heroActions={[
          { href: "/#devis", label: "Demander un devis gratuit", variant: "gold" },
          { href: "/#services", label: "Toutes nos prestations", variant: "secondary" },
        ]}
        heroImg={{ src: "/assets/refit-integral-luxe.webp", alt: "Refit intégral d'un yacht de luxe — Prestige Nautic Côte d'Azur" }}
        introEyebrow="La prestation"
        introTitle={<>Le refit intégral, <em>une transformation complète</em></>}
        introParagraphs={[
          "Un refit intégral, c'est la transformation totale d'un bateau : structure intérieure, revêtements, équipements électroniques et personnalisation visuelle. Vaigrage, boiseries, inox, sellerie, mais aussi Starlink, enceintes marine, LED sous-marines, covering et lettrage lumineux — tout ce qui fait passer un bateau du fonctionnel au prestige.",
          "Chez Prestige Nautic, le chantier est piloté comme un projet unique : de la pose de vaigrage à l'installation Starlink, chaque poste est coordonné avec les mêmes exigences de finition d'un bout à l'autre, pour un résultat cohérent et maîtrisé.",
        ]}
        introImg={{ src: "/assets/refit-integral-luxe.webp", alt: "Intérieur de yacht après refit intégral — Prestige Nautic" }}
        avantages={[
          { icon: <Icon d="M16 8v8l5 3|M16 4a12 12 0 1 0 0 24 12 12 0 0 0 0-24z" />, title: "Un seul interlocuteur", text: "Un contact unique du premier rendez-vous à la livraison, qui pilote l'ensemble du projet et coordonne chaque étape. Vous suivez votre chantier en toute simplicité." },
          { icon: <Icon d="M6 16l6 6 14-14" />, title: "Résultat cohérent", text: "Matériaux assortis, finitions harmonisées du sol au plafond. Un projet pensé dans son ensemble pour une cohérence totale du résultat." },
          { icon: <Icon d="M4 26 16 6l12 20z|M11 26h10" />, title: "Valeur ajoutée maximale", text: "Un refit intégral bien exécuté multiplie la valeur de revente du bateau. Le retour sur investissement est immédiat à la revente." },
          { icon: <Icon d="M5 5h10v10H5z|M17 5h10v10H17z|M5 17h10v10H5z|M17 17h10v10H17z" />, title: "Personnalisation totale", text: "Chaque refit est unique. Nous adaptons les matériaux, les couleurs et les aménagements à vos envies et au style de votre bateau." },
        ]}
        extraSection={
          <section className="section" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className="section-head">
                <span className="section-eyebrow">Le périmètre</span>
                <h2>
                  Tout ce que comprend <em>un refit intégral</em>
                </h2>
                <p>
                  Des finitions intérieures à l&apos;électronique embarquée, chaque poste est traité avec la même
                  exigence de bout en bout. Vous choisissez le périmètre, nous nous occupons du reste.
                </p>
              </div>
              <div className="refit-panel">
                <RefitGroup title="Structure & finitions" rows={STRUCTURE} />
                <RefitGroup title="Électronique & personnalisation" rows={ELECTRONIQUE} />
              </div>
            </div>
          </section>
        }
        realisations={{
          eyebrow: "En images",
          title: <>Exemple de <em>prestation possible</em></>,
          text: "Un aperçu des prestations possibles dans un refit : audio marine, éclairage LED sous-marin et bien d'autres aménagements pensés pour le plaisir à bord.",
          gridModifier: "duo",
          items: [
            { src: "/assets/refit-enceintes-marine.webp", alt: "Enceintes marine intégrées lors d'un refit — Prestige Nautic", caption: "Enceintes marine" },
            { src: "/assets/refit-led-sous-marines.webp", alt: "Pack LED sous-marines installé sur un bateau — Prestige Nautic", caption: "Pack led complet" },
          ],
        }}
        processEyebrow="Notre méthode"
        processTitle={<>Du diagnostic à la <em>livraison</em></>}
        processIntro="Un chantier d'envergure piloté de bout en bout, étape par étape, pour un résultat maîtrisé."
        processSteps={[
          { title: "Diagnostic complet de l'intérieur", text: "Inspection complète de l'intérieur : coque, vaigrage existant, boiseries, inox et zones à rénover. Identification des priorités et des contraintes techniques propres à votre unité." },
          { title: "Proposition et planning de chantier", text: "Devis détaillé par prestation, choix des matériaux et des options, établissement d'un planning d'intervention réaliste pour minimiser les durées d'immobilisation." },
          { title: "Dépose et préparation", text: "Retrait des éléments existants (teck, vaigrage, inox à remplacer), traitement des supports, nettoyage et mise en état des surfaces avant toute nouvelle installation." },
          { title: "Réalisation du chantier", text: "Vaigrage, boiseries, inox, sellerie : chaque poste est exécuté dans le bon ordre et coordonné de près. Un chantier planifié, fluide et maîtrisé du début à la fin." },
          { title: "Contrôle global et livraison", text: "Inspection de l'ensemble du chantier, correction des détails, nettoyage complet du bateau. Livraison avec tour de pont et documentation des travaux réalisés." },
        ]}
        faqEyebrow="Questions fréquentes"
        faqTitle={<>Tout savoir sur le <em>refit intégral</em></>}
        faq={[
          { q: "Qu'est-ce qu'un refit intérieur de bateau ?", a: "C'est la rénovation complète de l'habitacle : vaigrage de coque, boiseries, éléments inox, sellerie et peintures intérieures. Le refit transforme un intérieur fatigué en un espace élégant et sur mesure, ou personnalise profondément un bateau récent." },
          { q: "Combien de temps dure un refit complet ?", a: "La durée dépend de l'ampleur du chantier et de la taille du bateau, de quelques semaines à plusieurs mois. Nous établissons un planning précis avant le démarrage pour limiter l'immobilisation de votre unité." },
          { q: "Quel budget prévoir pour un refit intérieur ?", a: "Chaque refit est unique : le budget varie selon les prestations retenues (vaigrage, boiseries, inox, sellerie) et le niveau de finition. Nous visitons le bateau et établissons un devis détaillé, poste par poste, gratuitement." },
          { q: "Puis-je ne rénover qu'une partie du bateau ?", a: <>Oui. Vous pouvez nous confier l&apos;intégralité de l&apos;intérieur ou seulement certains postes — par exemple le seul <a href="/pages/vaigrage">vaigrage</a> ou de la <a href="/pages/soudure-inox">soudure sur mesure</a>. Le devis s&apos;adapte à votre projet.</> },
          { q: "Où se déroule le chantier ?", a: "Nous intervenons sur toute la Côte d'Azur depuis Toulon : Hyères, Bandol, Saint-Tropez, Cannes, Antibes, Nice et Monaco, à quai ou en chantier selon les travaux." },
          { q: "Installez-vous le Starlink sur tous types de bateaux ?", a: "Oui. Nous installons le système Starlink (antenne, routeur, câblage) sur voiliers, motoryachts et catamarans. L'intégration est soignée — aucun câble apparent — et nous adaptons le positionnement de l'antenne selon la structure du bateau pour un signal optimal." },
          { q: "Peut-on combiner LED sous-marines et LED d'ambiance dans un même chantier ?", a: "Absolument. C'est même la façon la plus cohérente de procéder : en traitant l'ensemble de l'installation électrique lumineuse en une seule intervention, on garantit une compatibilité totale entre les systèmes et on évite les reprises ultérieures. Nous proposons des éclairages avec contrôle couleur et intensité (RGB ou blanc chaud/froid)." },
          { q: "Le covering résiste-t-il aux conditions marines ?", a: "Nous utilisons exclusivement des films adhésifs certifiés marine, résistants aux UV, au sel, à l'humidité et aux chocs. La pose est réalisée dans des conditions contrôlées pour garantir l'adhérence et la durabilité. Coque, cockpit, tableau de bord, habillages intérieurs : chaque support reçoit le film adapté." },
          { q: "Proposez-vous le lettrage LED sur mesure ?", a: "Oui. Le nom du bateau, le port d'attache ou tout autre élément graphique peuvent être réalisés en LED ou en inox rétroéclairé selon vos préférences. Nous gérons le design, la fabrication et la pose — avec un rendu soigné de jour comme de nuit." },
        ]}
        ctaTitle={<>Un projet de refit intérieur <em>sur la Côte d&apos;Azur ?</em></>}
        ctaText="Partagez-nous votre projet — même si tout n'est pas encore défini. Nous visitons votre bateau, évaluons l'intérieur et vous proposons un devis complet et détaillé, poste par poste."
        ctaButtonLabel="Demander un devis gratuit"
        related={[
          { href: "/pages/vaigrage", label: "Vaigrage intérieur" },
          { href: "/pages/soudure-inox", label: "Soudure sur mesure" },
          { href: "/pages/teck-synthetique", label: "Teck synthétique" },
          { href: "/pages/teck-naturel", label: "Teck naturel" },
        ]}
        relatedArticles={[
          { href: "/pages/vaigrage-bateau-guide-complet", label: "Le vaigrage de bateau : le guide complet" },
        ]}
      />
    </>
  );
}
