"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  suffix?: string;
  /** Texte affiché tel quel si pas d'animation (ex. "A+", "1·1") */
  staticText?: string;
};

export default function AnimatedCounter({ target, suffix = "", staticText }: Props) {
  const [display, setDisplay] = useState(staticText ?? `0${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    // Cas statique (ex. "A+") : l'état initial suffit, pas d'animation.
    if (staticText) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    function animate() {
      const duration = 2000;
      const start = performance.now();
      function tick(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const value = Math.round(eased * target);
        setDisplay(value + suffix);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, staticText]);

  return (
    <span className="value-item__num" ref={ref}>
      {display}
    </span>
  );
}
