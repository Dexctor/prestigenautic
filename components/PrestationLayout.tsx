import Link from "next/link";
import { isValidElement, type ReactNode } from "react";
import Reveal from "@/components/Reveal";

/** Extrait le texte brut d'un ReactNode (pour générer le JSON-LD FAQ). */
function nodeToText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return nodeToText(props.children);
  }
  return "";
}

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
  /** Articles de blog liés (maillage interne prestation → guide). */
  relatedArticles?: RelatedLink[];
};

function btnClass(variant: "gold" | "secondary" | "primary") {
  return `btn btn--${variant}`;
}

export default function PrestationLayout(data: PrestationData) {
  // FAQPage JSON-LD généré automatiquement depuis les Q/R de la page
  // (texte extrait des ReactNode pour rester synchronisé avec l'affichage).
  const faqJsonLd =
    data.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: nodeToText(item.a) },
          })),
        }
      : null;

  return (
    <main id="main-content" tabIndex={-1}>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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
            <Reveal className="section-text">
              <span className="section-eyebrow">{data.introEyebrow}</span>
              <h2>{data.introTitle}</h2>
              {data.introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
            <Reveal className="section-media" delay={0.1}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.introImg.src} alt={data.introImg.alt} loading="lazy" decoding="async" width={800} height={600} />
            </Reveal>
          </div>

          <div className="avantages-grid">
            {data.avantages.map((av, i) => (
              <Reveal as="div" className="avantage-card" key={i} delay={i * 0.08}>
                <span className="avantage-card__icon" aria-hidden="true">
                  {av.icon}
                </span>
                <div className="avantage-card__title">{av.title}</div>
                <p className="avantage-card__text">{av.text}</p>
              </Reveal>
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
          <Reveal className="section-head">
            <span className="section-eyebrow">{data.processEyebrow}</span>
            <h2>{data.processTitle}</h2>
            <p>{data.processIntro}</p>
          </Reveal>
          <div className="process-steps">
            {data.processSteps.map((s, i) => (
              <div className="process-step" key={i}>
                <div className="process-step__num" aria-hidden="true"></div>
                <div className="process-step__body">
                  <h3>{s.title}</h3>
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
          <Reveal className="section-head">
            <span className="section-eyebrow">{data.faqEyebrow}</span>
            <h2>{data.faqTitle}</h2>
          </Reveal>
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

      {/* AUTRES PRESTATIONS & ARTICLES LIÉS (maillage interne) */}
      {(data.related.length > 0 || (data.relatedArticles?.length ?? 0) > 0) && (
        <section className="article-related">
          <div className="container">
            {data.related.length > 0 && (
              <div className="article-related__group">
                <p className="article-related__label">{data.relatedTitle ?? "Autres prestations"}</p>
                <div className="article-related__links">
                  {data.related.map((r) => (
                    <Link className="related-link" href={r.href} key={r.href}>
                      <span className="related-link__label">{r.label}</span>
                      <span className="related-link__arrow">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {data.relatedArticles && data.relatedArticles.length > 0 && (
              <div className="article-related__group">
                <p className="article-related__label">Nos guides sur le sujet</p>
                <div className="article-related__links">
                  {data.relatedArticles.map((r) => (
                    <Link className="related-link" href={r.href} key={r.href}>
                      <span className="related-link__label">{r.label}</span>
                      <span className="related-link__arrow">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
