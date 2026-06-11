import type { Metadata } from "next";
import Link from "next/link";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";

export const metadata: Metadata = {
  title: "Teck synthétique ou naturel : que choisir ?",
  description:
    "Teck synthétique ou teck naturel pour le pont de votre bateau ? Comparatif aspect, entretien, durabilité et prix. Le guide Prestige Nautic, Toulon.",
  alternates: { canonical: "https://prestigenautic.com/pages/teck-synthetique-ou-naturel" },
  openGraph: {
    type: "article",
    url: "https://prestigenautic.com/pages/teck-synthetique-ou-naturel",
    title: "Teck synthétique ou teck naturel : quel pont choisir ?",
    description:
      "Comparatif complet teck synthétique vs teck naturel : aspect, entretien, durabilité, prix et confort. Le guide de Prestige Nautic.",
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

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Teck synthétique ou teck naturel : quel pont choisir pour votre bateau ?",
  description:
    "Comparatif complet entre teck synthétique et teck naturel pour le pont d'un yacht ou bateau : aspect, entretien, durabilité, prix et confort.",
  image: "https://prestigenautic.com/assets/teck-synthetique.webp",
  datePublished: "2026-05-30",
  dateModified: "2026-05-30",
  author: { "@type": "Organization", name: "Prestige Nautic" },
  publisher: {
    "@type": "Organization",
    name: "Prestige Nautic",
    logo: { "@type": "ImageObject", url: "https://prestigenautic.com/assets/logo-prestige-nautic.webp" },
  },
  mainEntityOfPage: "https://prestigenautic.com/pages/teck-synthetique-ou-naturel",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://prestigenautic.com/" },
    { "@type": "ListItem", position: 2, name: "Teck synthétique ou teck naturel", item: "https://prestigenautic.com/pages/teck-synthetique-ou-naturel" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Le teck synthétique est-il moins cher que le teck naturel ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Souvent oui sur le coût global : la matière première du teck naturel est plus chère et il faut y ajouter l'entretien régulier sur toute la durée de vie. Le synthétique limite ces coûts récurrents. Le prix final dépend de la surface et de la complexité du pont.",
      },
    },
    {
      "@type": "Question",
      name: "Lequel dure le plus longtemps ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le teck synthétique de qualité dépasse facilement 15 ans en Méditerranée sans grisaillement ni fissures. Le teck naturel peut durer aussi longtemps, mais uniquement avec un entretien régulier et une épaisseur de lame suffisante.",
      },
    },
    {
      "@type": "Question",
      name: "Le teck synthétique a-t-il l'air faux ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les produits haut de gamme actuels imitent très fidèlement le veinage et la teinte du bois. À quelques pas, la différence est minime ; de près, un œil averti distingue encore le naturel.",
      },
    },
  ],
};

export default function TeckSynthetiqueOuNaturelPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="guide-hero">
        <div className="container">
          <nav className="guide-hero__breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">›</span>
            <Link href="/articles">Articles</Link>
            <span aria-hidden="true">›</span>
            <span>Teck synthétique ou teck naturel</span>
          </nav>
          <span className="guide-hero__eyebrow">Comparatif · Teck</span>
          <h1>Teck synthétique ou teck naturel : <em>quel pont choisir ?</em></h1>
          <p className="guide-hero__sub">C&apos;est la première question que se posent la plupart des propriétaires avant de refaire leur pont. Voici un comparatif honnête, critère par critère, pour décider en connaissance de cause.</p>
          <div className="guide-hero__meta">
            <span className="meta-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              5 min de lecture
            </span>
            <span className="meta-chip">Par Prestige Nautic · Toulon</span>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container article-layout">
          <aside className="article-layout__aside">
            <ArticleToc />
          </aside>
          <div className="article-layout__main">
          <div className="article-prose">
            <p>Refaire le pont d&apos;un bateau est un investissement qui se vit pendant des années. Entre le <Link href="/pages/teck-synthetique">teck synthétique</Link> et le <Link href="/pages/teck-naturel">teck naturel</Link>, il n&apos;y a pas de « meilleur » choix dans l&apos;absolu : il y a le choix le plus adapté à votre usage, à votre budget et au temps que vous souhaitez consacrer à l&apos;entretien. Voyons les différences concrètes.</p>

            <h2>Le comparatif <em>critère par critère</em></h2>
          </div>

          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">Critère</th>
                  <th scope="col">Teck synthétique</th>
                  <th scope="col">Teck naturel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Aspect</th>
                  <td>Imitation très réaliste, teinte et couleur de joint au choix, rendu homogène.</td>
                  <td>Bois authentique, veinage unique, chaleur et cachet incomparables.</td>
                </tr>
                <tr>
                  <th scope="row">Entretien</th>
                  <td>Quasi nul : un nettoyage à l&apos;eau savonneuse suffit.</td>
                  <td>Régulier : nettoyage dans le sens du fil, dégrisage, reprise des joints.</td>
                </tr>
                <tr>
                  <th scope="row">Durabilité</th>
                  <td>15 ans et plus, insensible aux UV, au sel et aux taches.</td>
                  <td>Longue si bien entretenu ; dépend de l&apos;épaisseur des lames.</td>
                </tr>
                <tr>
                  <th scope="row">Confort</th>
                  <td>Surface antidérapante ; certaines teintes sombres chauffent au soleil.</td>
                  <td>Agréable pieds nus, chauffe peu, toucher naturel.</td>
                </tr>
                <tr>
                  <th scope="row">Coût global</th>
                  <td>Compétitif sur la durée : peu de coûts d&apos;entretien récurrents.</td>
                  <td>Matière première plus chère + entretien à prévoir chaque saison.</td>
                </tr>
                <tr>
                  <th scope="row">Idéal pour</th>
                  <td>Propriétaires qui veulent un pont impeccable sans contrainte.</td>
                  <td>Puristes attachés à l&apos;authenticité du bois.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="article-prose">
            <h2>Alors, <em>lequel choisir ?</em></h2>
            <p>Le bon réflexe est de partir de votre usage réel plutôt que d&apos;un a priori. Voici trois profils typiques.</p>
          </div>

          <div className="profil-grid">
            <div className="profil-card">
              <h3>Vous naviguez souvent, sans temps pour l&apos;entretien</h3>
              <p>Le teck synthétique est fait pour vous : un pont net toute l&apos;année, aucune immobilisation pour le bois.</p>
            </div>
            <div className="profil-card">
              <h3>Vous recherchez l&apos;authenticité avant tout</h3>
              <p>Le teck naturel garde une longueur d&apos;avance sur le cachet et la chaleur du bois véritable, si l&apos;entretien ne vous rebute pas.</p>
            </div>
            <div className="profil-card">
              <h3>Vous préparez une revente</h3>
              <p>Les deux valorisent le bateau. Le synthétique rassure sur l&apos;entretien futur ; le teck naturel séduit une clientèle haut de gamme.</p>
            </div>
          </div>

          <div className="article-prose">
            <h2>Notre <em>conseil d&apos;artisan</em></h2>
            <p>Chez Prestige Nautic, nous posons les deux et nous n&apos;avons aucun intérêt à vous orienter vers l&apos;un plutôt que l&apos;autre : nous partons toujours de votre bateau, de votre programme de navigation et de votre budget. Le mieux est d&apos;en discuter à partir d&apos;un cas concret — le vôtre.</p>
            <p>Vous pouvez aussi <Link href="/pages/configurateur">tester les combinaisons de teintes dans notre configurateur</Link> avant de vous décider, puis nous envoyer votre projet pour un devis gratuit.</p>
          </div>

          {/* FAQ */}
          <ArticleFaq
            items={[
              { q: "Le teck synthétique est-il moins cher que le teck naturel ?", a: "Souvent oui sur le coût global : la matière première du teck naturel est plus chère et il faut y ajouter l'entretien régulier sur toute la durée de vie. Le synthétique limite ces coûts récurrents. Le prix final dépend de la surface et de la complexité du pont." },
              { q: "Lequel dure le plus longtemps ?", a: "Le teck synthétique de qualité dépasse facilement 15 ans en Méditerranée sans grisaillement ni fissures. Le teck naturel peut durer aussi longtemps, mais uniquement avec un entretien régulier et une épaisseur de lame suffisante." },
              { q: "Le teck synthétique a-t-il l'air faux ?", a: "Les produits haut de gamme actuels imitent très fidèlement le veinage et la teinte du bois. À quelques pas, la différence est minime ; de près, un œil averti distingue encore le naturel." },
            ]}
          />

          {/* CTA */}
          <div className="devis-cta" style={{ marginTop: "3rem" }}>
            <h2>Un projet de pont <em>sur la Côte d&apos;Azur ?</em></h2>
            <p>Décrivez votre bateau et vos attentes. Nous vous conseillons sur le bon choix et vous établissons un devis gratuit, sans engagement.</p>
            <Link className="btn btn--primary" href="/#devis">Demander un devis gratuit</Link>
          </div>
          </div>
        </div>
      </section>

      {/* AUTRES PRESTATIONS & ARTICLES */}
      <section className="article-related">
        <div className="container">
          <div className="article-related__group">
            <p className="article-related__label">Nos prestations teck</p>
            <div className="article-related__links">
              <Link className="related-link" href="/pages/teck-synthetique">
                <span className="related-link__label">Pose de teck synthétique</span>
                <span className="related-link__arrow">→</span>
              </Link>
              <Link className="related-link" href="/pages/teck-naturel">
                <span className="related-link__label">Pose de teck naturel</span>
                <span className="related-link__arrow">→</span>
              </Link>
              <Link className="related-link" href="/pages/configurateur">
                <span className="related-link__label">Configurateur teck</span>
                <span className="related-link__arrow">→</span>
              </Link>
            </div>
          </div>
          <div className="article-related__group">
            <p className="article-related__label">Autres articles</p>
            <div className="article-related__links">
              <Link className="related-link" href="/pages/entretien-teck-bateau">
                <span className="related-link__label">Comment entretenir son teck de bateau</span>
                <span className="related-link__arrow">→</span>
              </Link>
              <Link className="related-link" href="/pages/vaigrage-bateau-guide-complet">
                <span className="related-link__label">Le vaigrage de bateau : guide complet</span>
                <span className="related-link__arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
