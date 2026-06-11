"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Décalage d'apparition (effet d'escalier). */
  delay?: number;
  /** Balise rendue. */
  as?: "div" | "section" | "li" | "article" | "ul";
  className?: string;
  style?: CSSProperties;
};

/**
 * Révèle son contenu en fondu + léger glissement vers le haut à l'entrée
 * dans le viewport. Animation sobre et lente (adaptée à un public large).
 * Respecte prefers-reduced-motion : apparition immédiate sans mouvement.
 */
export default function Reveal({ children, delay = 0, as = "div", className, style }: Props) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.6,
        delay: reduce ? 0 : delay,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
