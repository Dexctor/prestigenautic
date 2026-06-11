"use client";

type FaqItem = { q: string; a: string };

/**
 * FAQ d'article en accordéons natifs <details> : accessibles, dépliables au
 * clic, sans JS de notre côté. Le balisage FAQPage (JSON-LD) reste géré dans
 * la page pour le SEO — ce composant n'est que la présentation visible.
 */
export default function ArticleFaq({
  items,
  title = "fréquentes",
  intro,
}: {
  items: FaqItem[];
  /** Mot accentué (or) après « Questions ». */
  title?: string;
  intro?: string;
}) {
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <h2 id="faq-title" className="faq-section__title">
        Questions <em>{title}</em>
      </h2>
      {intro && <p className="faq-section__intro">{intro}</p>}
      <div className="faq-accordion">
        {items.map((item, i) => (
          <details className="faq-acc" key={i} name="article-faq">
            <summary className="faq-acc__q">
              <span>{item.q}</span>
              <span className="faq-acc__icon" aria-hidden="true" />
            </summary>
            <div className="faq-acc__a">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
