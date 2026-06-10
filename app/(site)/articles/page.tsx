import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles & guides nautiques | Prestige Nautic",
  description:
    "Conseils d'artisan nautique : entretien du teck, vaigrage, refit, choix des matériaux… Tous les guides de Prestige Nautic, basé à Toulon sur la Côte d'Azur.",
  alternates: { canonical: "https://prestigenautic.com/articles.html" },
  openGraph: {
    type: "website",
    url: "https://prestigenautic.com/articles.html",
    title: "Articles et guides nautiques | Prestige Nautic",
    description:
      "Conseils d'artisan nautique : entretien du teck, vaigrage, refit, choix des matériaux. Guides Prestige Nautic, Toulon — Côte d'Azur.",
    images: ["https://prestigenautic.com/assets/photo-yacht-luxe-1.webp"],
    locale: "fr_FR",
    siteName: "Prestige Nautic",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://prestigenautic.com/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://prestigenautic.com/articles.html" },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Articles et guides nautiques — Prestige Nautic",
  description:
    "Guides pratiques et conseils d'artisan nautique par Prestige Nautic, basé à Toulon sur la Côte d'Azur.",
  url: "https://prestigenautic.com/articles.html",
  publisher: {
    "@type": "Organization",
    name: "Prestige Nautic",
    logo: { "@type": "ImageObject", url: "https://prestigenautic.com/assets/logo-prestige-nautic.webp" },
  },
};

export default function ArticlesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      {/* HERO */}
      <section className="articles-hero">
        <div className="container">
          <nav className="articles-hero__breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span>Articles</span>
          </nav>
          <h1>Guides et conseils <em>d&apos;artisan nautique</em></h1>
          <p className="articles-hero__sub">Entretien du teck, vaigrage, refit, choix des matériaux… Des réponses concrètes aux questions que se posent les propriétaires de bateaux sur la Côte d&apos;Azur.</p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">

          <div className="section-intro">
            <p>Ces guides sont rédigés par l&apos;équipe de Prestige Nautic, artisans nautiques basés à Toulon, avec plusieurs années d&apos;expérience sur les bateaux du Var et des Alpes-Maritimes. Pas de contenu générique : des réponses ancrées dans la réalité de la navigation méditerranéenne.</p>
          </div>

          <div className="articles-grid">

            {/* Article 1 : Entretien teck */}
            <Link className="article-card" href="/pages/entretien-teck-bateau">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/teck-naturel.webp"
                alt="Pont en teck naturel d'un bateau — entretien et nettoyage"
                className="article-card__img"
                loading="lazy"
                width="600"
                height="338"
              />
              <div className="article-card__body">
                <div className="article-card__tag">Entretien · Teck</div>
                <div className="article-card__title">Comment entretenir son teck de bateau : le guide complet</div>
                <div className="article-card__excerpt">Nettoyage, dégrisage, huilage, erreurs à éviter, signes qui indiquent qu&apos;une repose s&apos;impose… Tout ce qu&apos;il faut savoir pour garder un pont en teck impeccable en Méditerranée.</div>
                <span className="article-card__cta">Lire l&apos;article</span>
              </div>
            </Link>

            {/* Article 2 : Vaigrage */}
            <Link className="article-card" href="/pages/vaigrage-bateau-guide-complet">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/vaigrage.webp"
                alt="Vaigrage en cuir sur mesure à l'intérieur d'un bateau"
                className="article-card__img"
                loading="lazy"
                width="600"
                height="338"
              />
              <div className="article-card__body">
                <div className="article-card__tag">Intérieur · Vaigrage</div>
                <div className="article-card__title">Le vaigrage de bateau : guide complet sur l&apos;habillage intérieur</div>
                <div className="article-card__excerpt">Qu&apos;est-ce que le vaigrage ? Quels matériaux choisir (tissu, cuir, alcantara) ? Comment se déroule la pose sur mesure ? Tout ce que vous devez savoir avant de refaire l&apos;intérieur de votre bord.</div>
                <span className="article-card__cta">Lire l&apos;article</span>
              </div>
            </Link>

            {/* Article 3 : Comparatif teck */}
            <Link className="article-card" href="/pages/teck-synthetique-ou-naturel">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/teck-synthetique.webp"
                alt="Comparaison teck synthétique et teck naturel sur un pont de bateau"
                className="article-card__img"
                loading="lazy"
                width="600"
                height="338"
              />
              <div className="article-card__body">
                <div className="article-card__tag">Comparatif · Teck</div>
                <div className="article-card__title">Teck synthétique ou teck naturel : quel pont choisir pour votre bateau ?</div>
                <div className="article-card__excerpt">Aspect, entretien, durabilité, confort, coût sur la durée… Un comparatif honnête critère par critère pour choisir le pont qui correspond vraiment à votre usage et à votre profil.</div>
                <span className="article-card__cta">Lire l&apos;article</span>
              </div>
            </Link>

          </div>

          {/* CTA */}
          <div className="devis-cta" style={{ marginTop: "4rem" }}>
            <h2>Vous avez un projet <em>sur la Côte d&apos;Azur ?</em></h2>
            <p>Nos guides vous donnent les clés pour comprendre. Pour une situation concrète sur votre bateau — diagnostic à quai, devis sur mesure, conseil matériaux — contactez-nous directement.</p>
            <Link className="btn btn--primary" href="/#devis">Demander un devis gratuit</Link>
          </div>

        </div>
      </section>
    </main>
  );
}
