import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Guides & conseils d'artisan nautique",
  description:
    "Conseils d'artisan nautique : entretien du teck, vaigrage, refit, choix des matériaux… Tous les guides de Prestige Nautic, basé à Toulon sur la Côte d'Azur.",
  alternates: { canonical: "https://prestigenautic.com/articles" },
  openGraph: {
    type: "website",
    url: "https://prestigenautic.com/articles",
    title: "Articles et guides nautiques | Prestige Nautic",
    description:
      "Conseils d'artisan nautique : entretien du teck, vaigrage, refit, choix des matériaux. Guides Prestige Nautic, Toulon — Côte d'Azur.",
    locale: "fr_FR",
    siteName: "Prestige Nautic",
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

const ARTICLES = [
  {
    href: "/pages/entretien-teck-bateau",
    img: "/assets/teck-naturel.webp",
    alt: "Pont en teck naturel d'un bateau — entretien, nettoyage et dégrisage",
    category: "Entretien",
    topic: "Teck",
    readingTime: 12,
    title: "Comment entretenir son teck de bateau : le guide complet",
    excerpt:
      "Nettoyage, dégrisage, huilage, erreurs à éviter, signes qui indiquent qu'une repose s'impose… Tout ce qu'il faut savoir pour garder un pont en teck impeccable en Méditerranée.",
  },
  {
    href: "/pages/vaigrage-bateau-guide-complet",
    img: "/assets/vaigrage.webp",
    alt: "Vaigrage en cuir sur mesure à l'intérieur d'un bateau",
    category: "Intérieur",
    topic: "Vaigrage",
    readingTime: 12,
    title: "Le vaigrage de bateau : guide complet sur l'habillage intérieur",
    excerpt:
      "Qu'est-ce que le vaigrage ? Quels matériaux choisir (tissu, cuir, alcantara) ? Comment se déroule la pose sur mesure ? Tout ce que vous devez savoir avant de refaire l'intérieur de votre bord.",
  },
  {
    href: "/pages/teck-synthetique-ou-naturel",
    img: "/assets/teck-synthetique.webp",
    alt: "Comparaison teck synthétique et teck naturel sur un pont de bateau",
    category: "Comparatif",
    topic: "Teck",
    readingTime: 5,
    title: "Teck synthétique ou teck naturel : quel pont choisir pour votre bateau ?",
    excerpt:
      "Aspect, entretien, durabilité, confort, coût sur la durée… Un comparatif honnête critère par critère pour choisir le pont qui correspond vraiment à votre usage et à votre profil.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://prestigenautic.com/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://prestigenautic.com/articles" },
  ],
};

// ItemList : aide Google à comprendre qu'il s'agit d'une liste d'articles
// ordonnée et à les afficher comme un ensemble (meilleur que CollectionPage seul).
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Guides et conseils d'artisan nautique — Prestige Nautic",
  itemListElement: ARTICLES.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://prestigenautic.com${a.href}`,
    name: a.title,
  })),
};

export default function ArticlesPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      {/* HERO */}
      <section className="articles-hero">
        <div className="container">
          <nav className="articles-hero__breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span>Articles</span>
          </nav>
          <span className="articles-hero__eyebrow">Le journal de l&apos;atelier</span>
          <h1>
            Guides &amp; conseils <em>d&apos;artisan nautique</em>
          </h1>
          <p className="articles-hero__sub">
            Entretien du teck, vaigrage, refit, choix des matériaux… Des réponses
            concrètes aux questions que se posent les propriétaires de bateaux sur la
            Côte d&apos;Azur.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section articles-section">
        <div className="container">
          <Reveal className="section-intro" as="div">
            <p>
              Ces guides sont rédigés par l&apos;équipe de Prestige Nautic, artisans
              nautiques basés à Toulon, avec plusieurs années d&apos;expérience sur les
              bateaux du Var et des Alpes-Maritimes. Pas de contenu générique : des
              réponses ancrées dans la réalité de la navigation méditerranéenne.
            </p>
          </Reveal>

          <ul className="articles-grid" aria-label="Liste des guides">
            {ARTICLES.map((a, i) => (
              <Reveal as="li" key={a.href} delay={i * 0.08} className="article-card-wrap">
                <Link className="article-card" href={a.href}>
                  <div className="article-card__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.img}
                      alt={a.alt}
                      className="article-card__img"
                      loading="lazy"
                      width={600}
                      height={338}
                    />
                    <span className="article-card__badge">{a.category}</span>
                  </div>
                  <div className="article-card__body">
                    <div className="article-card__meta">
                      <span className="article-card__topic">{a.topic}</span>
                      <span className="article-card__dot" aria-hidden="true">·</span>
                      <span className="article-card__time">{a.readingTime} min de lecture</span>
                    </div>
                    <h2 className="article-card__title">{a.title}</h2>
                    <p className="article-card__excerpt">{a.excerpt}</p>
                    <span className="article-card__cta">
                      Lire l&apos;article
                      <span className="article-card__arrow" aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>

          {/* CTA */}
          <Reveal className="devis-cta" as="div" style={{ marginTop: "4rem" }}>
            <h2>
              Vous avez un projet <em>sur la Côte d&apos;Azur ?</em>
            </h2>
            <p>
              Nos guides vous donnent les clés pour comprendre. Pour une situation
              concrète sur votre bateau — diagnostic à quai, devis sur mesure, conseil
              matériaux — contactez-nous directement.
            </p>
            <Link className="btn btn--primary" href="/#devis">
              Demander un devis gratuit
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
