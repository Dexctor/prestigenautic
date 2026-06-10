"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Service = {
  href: string;
  cls: string;
  title: string;
  text: string;
  cta?: string;
  /** Carte mise en avant (grande, span 2×2). */
  featured?: boolean;
};

const MotionLink = motion.create(Link);

/**
 * Grille mosaïque asymétrique des prestations : une carte mise en avant
 * (grande) + les autres en cartes plus petites. Tout visible d'un coup,
 * hiérarchie claire, apparition en cascade. Respecte prefers-reduced-motion.
 */
export default function ServiceGrid({ services }: { services: Service[] }) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const card: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.55, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className="services-mosaic"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      {services.map((s) => (
        <MotionLink
          key={s.href}
          href={s.href}
          variants={card}
          className={`svc-card ${s.cls}${s.featured ? " svc-card--featured" : ""}`}
        >
          <span className="svc-card__media" aria-hidden="true" />
          <span className="svc-card__veil" aria-hidden="true" />
          <span className="svc-card__body">
            {s.featured && <span className="svc-card__eyebrow">Le plus demandé</span>}
            <span className="svc-card__title">{s.title}</span>
            <span className="svc-card__text">{s.text}</span>
            <span className="svc-card__cta">
              {s.cta ?? "Découvrir"}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </span>
        </MotionLink>
      ))}
    </motion.div>
  );
}
