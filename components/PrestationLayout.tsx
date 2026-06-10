import Link from "next/link";
import type { ReactNode } from "react";

export type Avantage = { icon: ReactNode; title: string; text: string };
export type ProcessStep = { title: string; text: string };
export type FaqEntry = { q: string; a: ReactNode };
export type Realisation = { src: string; alt: string; caption: ReactNode };
export type RelatedLink = { href: string; label: string };

export type PrestationData = {
  /** Fil d'Ariane : libellé courant */
  breadcrumb: string;
  /** Titre H1 du hero (peut contenir du JSX pour les <em>) */
  heroTitle: ReactNode;
  heroSubtitle: ReactNode;
  heroActions: { href: string; label: string; variant: "gold" | "secondary" | "primary" }[];
  heroImg: { src: string; alt: string; srcSet?: string; mobileSrc?: string };
  /** Section intro */
  introEyebrow: string;
  introTitle: ReactNode;
  introParagraphs: ReactNode[];
  introImg: { src: string; alt: string };
  avantages: Avantage[];
  /** CTA configurateur (optionnel) */
  configCta?: { title: ReactNode; text: ReactNode };
  /** Contenu spécifique inséré après les avantages (panneau refit, tags, etc.) */
  extraSection?: ReactNode;
  /** Galerie de réalisations (optionnelle) */
  realisations?: {
    eyebrow: string;
    title: ReactNode;
    text: ReactNode;
    items: Realisation[];
    gridModifier?: "single" | "duo" | "";
  };
  processEyebrow: string;
  processTitle: ReactNode;
  processIntro: ReactNode;
  processSteps: ProcessStep[];
  faqEyebrow: string;
  faqTitle: ReactNode;
  faq: FaqEntry[];
  ctaTitle: ReactNode;
  ctaText: ReactNode;
  ctaButtonLabel: string;
  relatedTitle?: string;
  related: RelatedLink[];
};

function btnClass(variant: "gold" | "secondary" | "primary") {
  return `btn btn--${variant}`;
}

export default function PrestationLayout(data: PrestationData) {
  return (
    <main>
      {/* HERO */}
      <section className="prestation-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="prestation-hero__img"
          srcSet={data.heroImg.srcSet}
          sizes={data.heroImg.srcSet ? "100vw" : undefined}
          src={data.heroImg.src}
          alt={data.heroImg.alt}
          width={1200}
          height={1600}
          fetchPriority="high"
        />
        <div className="prestation-hero__overlay"></div>
        <div className="container prestation-hero__content">
          <nav className="prestation-hero__breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span>{data.breadcrumb}</span>
          </nav>
          <h1>{data.heroTitle}</h1>
          <p className="prestation-hero__sub">{data.heroSubtitle}</p>
          <div className="prestation-hero__actions">
            {data.heroActions.map((a, i) => (
              <Link key={i} className={btnClass(a.variant)} href={a.href}>
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO + AVANTAGES */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="section-grid">
            <div className="section-text">
              <span className="section-eyebrow">{data.introEyebrow}</span>
              <h2>{data.introTitle}</h2>
              {data.introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="section-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.introImg.src} alt={data.introImg.alt} loading="lazy" decoding="async" width={800} height={600} />
            </div>
          </div>

          <div className="avantages-grid">
            {data.avantages.map((av, i) => (
              <div className="avantage-card" key={i}>
                <span className="avantage-card__icon" aria-hidden="true">
                  {av.icon}
                </span>
                <div className="avantage-card__title">{av.title}</div>
                <p className="avantage-card__text">{av.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CONFIGURATEUR */}
      {data.configCta && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="config-cta">
              <div className="config-cta__text">
                <span className="config-cta__eyebrow">Configurateur en ligne</span>
                <h3>{data.configCta.title}</h3>
                <p>{data.configCta.text}</p>
              </div>
              <Link className="btn btn--gold" href="/pages/configurateur">
                Ouvrir le configurateur →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* SECTION SPÉCIFIQUE (panneau refit, etc.) */}
      {data.extraSection}

      {/* GALERIE RÉALISATIONS */}
      {data.realisations && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">{data.realisations.eyebrow}</span>
              <h2>{data.realisations.title}</h2>
              <p>{data.realisations.text}</p>
            </div>
            <div
              className={`realisations__grid${
                data.realisations.gridModifier ? ` realisations__grid--${data.realisations.gridModifier}` : ""
              }`}
            >
              {data.realisations.items.map((r, i) => (
                <figure className="realisation-card" key={i}>
                  <span className="realisation-card__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.src} alt={r.alt} loading="lazy" decoding="async" />
                  </span>
                  <figcaption>{r.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">{data.processEyebrow}</span>
            <h2>{data.processTitle}</h2>
            <p>{data.processIntro}</p>
          </div>
          <div className="process-steps">
            {data.processSteps.map((s, i) => (
              <div className="process-step" key={i}>
                <div className="process-step__num" aria-hidden="true"></div>
                <div className="process-step__body">
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">{data.faqEyebrow}</span>
            <h2>{data.faqTitle}</h2>
          </div>
          <div className="faq">
            {data.faq.map((item, i) => (
              <details className="faq-item" key={i}>
                <summary>{item.q}</summary>
                <div className="faq-item__body">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>

          {/* CTA final */}
          <div className="devis-cta">
            <h2>{data.ctaTitle}</h2>
            <p>{data.ctaText}</p>
            <Link className="btn btn--primary" href="/#devis">
              {data.ctaButtonLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* AUTRES PRESTATIONS */}
      {data.related.length > 0 && (
        <section
          className="section"
          style={{ background: "var(--bg-soft)", paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <div className="container">
            <p
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "1rem",
              }}
            >
              {data.relatedTitle ?? "Autres prestations"}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {data.related.map((r) => (
                <Link className="related-link" href={r.href} key={r.href}>
                  <span className="related-link__label">{r.label}</span>
                  <span className="related-link__arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
