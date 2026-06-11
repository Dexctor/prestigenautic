import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";
import ServiceGrid from "@/components/ServiceGrid";

export const metadata: Metadata = {
  title: "Artisan teck nautique à Toulon — Côte d'Azur",
  description:
    "Artisan nautique haut de gamme à Toulon : teck synthétique, teck naturel, vaigrage, refit et soudure sur mesure sur toute la Côte d'Azur. Devis gratuit.",
  alternates: { canonical: "https://prestigenautic.com/" },
  openGraph: {
    url: "https://prestigenautic.com/",
    title: "Prestige Nautic | Artisan teck nautique à Toulon — Côte d'Azur",
    description:
      "Artisan nautique haut de gamme à Toulon : teck synthétique, teck naturel, vaigrage, refit intégral et soudure sur mesure. Intervention sur toute la Côte d'Azur.",
    images: ["/assets/photo-yacht-luxe-1.webp"],
  },
};

const SERVICES = [
  {
    href: "/pages/teck-synthetique",
    cls: "service-card--teck-synthetique",
    title: "Teck synthétique",
    text: "Pose soignée, rendu durable, propre et élégant. Visualisez votre pont dans notre configurateur en ligne.",
    cta: "Configurer",
    featured: true,
  },
  {
    href: "/pages/teck-naturel",
    cls: "service-card--teck-naturel",
    title: "Teck naturel",
    text: "Un rendu noble et précis pour les projets haut de gamme.",
  },
  {
    href: "/pages/vaigrage",
    cls: "service-card--vaigrage",
    title: "Vaigrage",
    text: "Cuir ou tissu pour redonner confort et caractère aux intérieurs.",
  },
  {
    href: "/pages/refit-integral",
    cls: "service-card--refit-integral",
    title: "Refit intégral",
    text: "Une montée en gamme complète pensée dans le détail.",
  },
  {
    href: "/pages/soudure-inox",
    cls: "service-card--soudure-inox",
    title: "Soudure sur mesure",
    text: "Travaux sur mesure selon le besoin réel du chantier.",
  },
];

const PROCESS = [
  { t: "Étude & gabarit", d: "Prise de côtes minutieuse : chaque élément du pont est relevé avant toute pose." },
  { t: "Atelier sur mesure", d: "Découpe et façonnage précis pour votre bateau. Aucun produit générique." },
  { t: "Pose & finitions", d: "Collage, jointoyage et ajustage à la main, en une seule passe propre." },
  { t: "Contrôle & livraison", d: "Vérification de l'alignement et de l'étanchéité. Bateau rendu prêt à naviguer." },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prestige Nautic",
  description:
    "Artisan nautique haut de gamme spécialisé en teck synthétique, teck naturel, vaigrage, refit intégral et soudure sur mesure pour yachts et bateaux.",
  url: "https://prestigenautic.com",
  email: "prestige.nautic@gmail.com",
  telephone: "+33783345950",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toulon",
    addressRegion: "Var",
    postalCode: "83000",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.1242, longitude: 5.928 },
  areaServed: [
    { "@type": "City", name: "Toulon" },
    { "@type": "State", name: "Var" },
    { "@type": "Place", name: "Côte d'Azur" },
    { "@type": "City", name: "Nice" },
    { "@type": "City", name: "Cannes" },
    { "@type": "City", name: "Antibes" },
    { "@type": "City", name: "Saint-Tropez" },
    { "@type": "City", name: "Marseille" },
    { "@type": "City", name: "Hyères" },
    { "@type": "City", name: "Monaco" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations nautiques",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teck synthétique" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teck naturel" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vaigrage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Refit intégral" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soudure sur mesure" } },
    ],
  },
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <span id="top" aria-hidden="true" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero__media">
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/poster-yacht.webp"
            aria-hidden="true"
          >
            <source src="/assets/video-yacht.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero__overlay"></div>
        <div className="container hero__content">
          <div className="hero__text">
            <h1>
              Teck nautique &amp; refit bateau — <em>Côte d&apos;Azur</em>
            </h1>
            <p>
              Prestige Nautic réalise la pose de teck synthétique et teck naturel, le
              vaigrage intérieur, le refit intégral et la soudure sur mesure pour les
              yachts et bateaux de la Côte d&apos;Azur.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#devis">
                Demander un devis
              </a>
              <a className="btn btn--secondary" href="#services">
                Découvrir nos prestations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="section" id="services">
        <div className="container">
          <Reveal className="section-head section-head--services">
            <span className="section-eyebrow">Nos prestations</span>
            <h2>
              Un <em>savoir-faire</em>{" "}qui s&apos;exprime dans chaque détail
            </h2>
            <p>
              Une approche artisanale et technique pour des projets exigeants, du pont aux
              finitions intérieures. Sélectionnez la prestation qui correspond à votre
              projet.
            </p>
          </Reveal>

          <ServiceGrid services={SERVICES} />
        </div>
      </section>

      {/* SAVOIR-FAIRE */}
      <section className="section section--split" id="savoir-faire" style={{ background: "var(--bg-soft)" }}>
        <div className="container section-grid">
          <Reveal className="section-text">
            <span className="section-eyebrow">Notre approche</span>
            <h2>
              Le geste de l&apos;artisan, <em>au millimètre</em>
            </h2>
            <p>
              Chaque projet est traité comme une pièce unique : sélection des matériaux,
              détails de finition, contrôle des alignements et respect des lignes du
              bateau. Basés à Toulon, nous intervenons sur toute la Côte d&apos;Azur — du
              Var aux Alpes-Maritimes, de Marseille à Nice et Monaco.
            </p>
            <p>
              Du pont au vaigrage, nous travaillons avec les standards des plus beaux
              chantiers de Méditerranée, avec une attention particulière portée aux
              contraintes marines.
            </p>
            <a className="btn btn--primary" href="#devis" style={{ marginTop: "1rem" }}>
              Discuter de mon projet
            </a>
          </Reveal>
          <Reveal className="section-media" delay={0.1}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photo-yacht-luxe-1.webp"
              alt="Pose de teck synthétique sur yacht par Prestige Nautic, artisan nautique à Toulon — Côte d'Azur"
              loading="lazy"
              width={1600}
              height={900}
            />
          </Reveal>
        </div>

        {/* BANDE VALEURS — sous « Notre approche » */}
        <div className="container">
          <div className="home-stats home-stats--inline" role="group" aria-label="Nos engagements">
            <div className="home-stats__grid">
              <div className="home-stat">
                <AnimatedCounter target={100} suffix="%" />
                <span className="home-stat__label">Sur mesure</span>
                <span className="home-stat__text">
                  Chaque chantier est étudié, dessiné et exécuté pour votre bateau.
                </span>
              </div>
              <div className="home-stat">
                <AnimatedCounter target={100} suffix="+" />
                <span className="home-stat__label">Clients conquis</span>
                <span className="home-stat__text">
                  Des propriétaires satisfaits qui nous font confiance pour leurs projets.
                </span>
              </div>
              <div className="home-stat">
                <AnimatedCounter target={0} staticText="A+" />
                <span className="home-stat__label">Matériaux premium</span>
                <span className="home-stat__text">
                  Teck, cuir, inox marin sélectionnés pour leur tenue dans le temps.
                </span>
              </div>
              <div className="home-stat">
                <AnimatedCounter target={0} staticText="1·1" />
                <span className="home-stat__label">Suivi dédié</span>
                <span className="home-stat__text">
                  Un interlocuteur unique du devis jusqu&apos;à la livraison du chantier.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--dark" id="methode">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-eyebrow">Notre méthode</span>
            <h2>
              Du devis à <em>la livraison</em>
            </h2>
            <p>
              Une intervention structurée, sans mauvaise surprise. Chaque chantier suit les
              mêmes étapes pour garantir un résultat à la hauteur de vos attentes.
            </p>
          </Reveal>

          <div className="home-steps">
            {PROCESS.map((s, i) => (
              <Reveal as="div" className="home-step" key={s.t} delay={i * 0.08}>
                <span className="home-step__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEVIS */}
      <section className="section section--devis" id="devis">
        <div className="container">
          <div className="devis-layout">
            {/* Panneau de réassurance */}
            <Reveal className="devis-aside">
              <span className="section-eyebrow">Étude personnalisée</span>
              <h2>
                Demande de <em>devis</em>
              </h2>
              <p className="devis-aside__lead">
                Décrivez votre projet, votre bateau et vos coordonnées. Nous préparons un
                retour sérieux, adapté à vos exigences.
              </p>

              <ul className="devis-points">
                <li>
                  <span className="devis-points__ico" aria-hidden="true">✓</span>
                  <span><strong>Devis gratuit</strong> et sans engagement, après étude de votre bateau.</span>
                </li>
                <li>
                  <span className="devis-points__ico" aria-hidden="true">✓</span>
                  <span><strong>Réponse rapide</strong> par un interlocuteur unique, du devis à la livraison.</span>
                </li>
                <li>
                  <span className="devis-points__ico" aria-hidden="true">✓</span>
                  <span><strong>Toute la Côte d&apos;Azur</strong> — de Marseille à Monaco, base à Toulon.</span>
                </li>
              </ul>

              <div className="devis-contact">
                <a href="tel:+33783345950" className="devis-contact__item">
                  <span className="devis-contact__label">Par téléphone</span>
                  <span className="devis-contact__value">07 83 34 59 50</span>
                </a>
                <a href="mailto:prestige.nautic@gmail.com" className="devis-contact__item">
                  <span className="devis-contact__label">Par email</span>
                  <span className="devis-contact__value">prestige.nautic@gmail.com</span>
                </a>
              </div>
            </Reveal>

            {/* Formulaire */}
            <Reveal className="devis-form-wrap" delay={0.1}>
              <QuoteForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
