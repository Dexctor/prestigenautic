import Link from "next/link";
import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Artisan teck nautique Toulon & Côte d'Azur | Prestige Nautic",
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
    text: "Pose soignée, rendu durable, propre et élégant.",
    cta: "Configurer →",
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
    <main id="top">
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
            poster="/assets/poster-yacht.webp"
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
          <div className="section-head section-head--services">
            <span className="section-eyebrow">Nos prestations</span>
            <h2>
              Un <em>savoir-faire</em> qui s&apos;exprime dans chaque détail
            </h2>
            <p>
              Une approche artisanale et technique pour des projets exigeants, du pont aux
              finitions intérieures. Sélectionnez la prestation qui correspond à votre
              projet.
            </p>
          </div>

          <div className="services-carousel" aria-label="Prestations Prestige Nautic">
            {SERVICES.map((s) => (
              <Link key={s.href} className={`service-card ${s.cls}`} href={s.href}>
                <span className="service-card__overlay"></span>
                <span className="service-card__content">
                  <span className="service-card__title">{s.title}</span>
                  <span className="service-card__text">{s.text}</span>
                  {s.cta && <span className="service-card__cta">{s.cta}</span>}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SAVOIR-FAIRE */}
      <section className="section section--split" id="savoir-faire">
        <div className="container section-grid">
          <div className="section-text">
            <span className="section-eyebrow">Notre approche</span>
            <h2>
              Savoir-faire <em>Prestige Nautic</em>
            </h2>
            <p>
              Chaque projet est traité comme une pièce unique : sélection des matériaux,
              détails de finition, contrôle des alignements et respect des lignes du
              bateau. Basés à Toulon, nous intervenons sur toute la Côte d&apos;Azur — du
              Var aux Alpes-Maritimes, de Marseille à Nice et Monaco — pour tous les
              projets de refit et d&apos;aménagement nautique.
            </p>
            <p>
              Du pont au vaigrage, nous travaillons avec des standards de chantier haut de
              gamme, avec une attention particulière portée aux contraintes marines de la
              Méditerranée.
            </p>
          </div>
          <div className="section-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photo-yacht-luxe-1.webp"
              alt="Pose de teck synthétique sur yacht par Prestige Nautic, artisan nautique à Toulon — Côte d'Azur"
              loading="lazy"
              width={1600}
              height={900}
            />
          </div>
        </div>

        <div className="container">
          <div className="values-strip">
            <div className="value-item">
              <AnimatedCounter target={100} suffix="%" />
              <span className="value-item__label">Sur mesure</span>
              <span className="value-item__text">
                Chaque chantier est étudié, dessiné et exécuté pour votre bateau.
              </span>
            </div>
            <div className="value-item">
              <AnimatedCounter target={100} suffix="+" />
              <span className="value-item__label">Clients conquis</span>
              <span className="value-item__text">
                Des propriétaires satisfaits qui nous font confiance pour leurs projets.
              </span>
            </div>
            <div className="value-item">
              <AnimatedCounter target={0} staticText="A+" />
              <span className="value-item__label">Matériaux premium</span>
              <span className="value-item__text">
                Teck, cuir, inox marin sélectionnés pour leur tenue dans le temps.
              </span>
            </div>
            <div className="value-item">
              <AnimatedCounter target={0} staticText="1·1" />
              <span className="value-item__label">Suivi dédié</span>
              <span className="value-item__text">
                Un interlocuteur unique du devis jusqu&apos;à la livraison du chantier.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DEVIS */}
      <section className="section" id="devis">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Étude personnalisée</span>
            <h2>
              Demande de <em>devis</em>
            </h2>
            <p>
              Décrivez votre projet, votre bateau et vos coordonnées. Cette première
              demande nous permet de préparer un retour sérieux et adapté à vos exigences.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
