"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; text: string };

/** Slugify simple, sans accents, pour générer des ancres stables. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

/**
 * Sommaire d'article généré à partir des <h2> de .article-prose.
 * Attribue un id à chaque titre et propose des ancres cliquables.
 */
export default function ArticleToc() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    // Lecture du DOM rendu (système externe) dans une micro-tâche pour éviter
    // un setState synchrone pendant l'effet.
    const id = window.setTimeout(() => {
      const headings = Array.from(
        document.querySelectorAll<HTMLHeadingElement>(".article-prose h2")
      );
      const collected: TocItem[] = headings.map((h, i) => {
        const base = slugify(h.textContent || `section-${i + 1}`);
        const hid = h.id || `${base || "section"}-${i + 1}`;
        if (!h.id) h.id = hid;
        // décalage pour ne pas masquer le titre sous le header sticky
        h.style.scrollMarginTop = "110px";
        return { id: hid, text: (h.textContent || "").trim() };
      });
      setItems(collected);

      // Surlignage de la section courante au scroll.
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) setActiveId(entry.target.id);
          }
        },
        { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
      );
      headings.forEach((h) => observer!.observe(h));
    }, 0);

    return () => {
      window.clearTimeout(id);
      observer?.disconnect();
    };
  }, []);

  if (items.length < 3) return null; // sommaire utile seulement pour les longs articles

  return (
    <nav className="article-toc" aria-label="Sommaire de l'article">
      <p className="article-toc__title">Sommaire</p>
      <ol className="article-toc__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeId === item.id ? "is-active" : undefined}
              aria-current={activeId === item.id ? "true" : undefined}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
