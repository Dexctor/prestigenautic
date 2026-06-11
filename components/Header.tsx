"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/#services", label: "Prestations" },
  { href: "/pages/configurateur", label: "Configurateur" },
  { href: "/#savoir-faire", label: "Savoir-faire" },
  { href: "/articles", label: "Articles" },
  { href: "/#devis", label: "Devis" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Le lien est "courant" si son chemin de page correspond à l'URL actuelle.
  // (On ignore les ancres de la home : pas de page dédiée.)
  function isCurrent(href: string): boolean {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  }

  // Fermer au clavier (Échap) et au redimensionnement vers desktop
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 900) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Bloquer le scroll de la page quand le menu mobile est ouvert.
  // `overflow:hidden` sur body ne suffit pas sur mobile (iOS Safari l'ignore) :
  // on fige le body en position:fixed et on mémorise/restaure la position.
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const body = document.body;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      // Restaurer la position de défilement où l'utilisateur était.
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  // Compactage de la navbar au défilement (hauteur + logo réduits).
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Voile (scrim) : hors du header pour ne pas être piégé dans son contexte
          d'empilement. Assombrit la page et ferme le drawer au clic. */}
      <button
        type="button"
        className={`nav-scrim${open ? " is-visible" : ""}`}
        aria-label="Fermer le menu"
        tabIndex={open ? 0 : -1}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container site-header__inner">
          <Link href="/" className="brand" aria-label="Retour à l'accueil Prestige Nautic">
            <div className="brand__logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo-prestige-nautic.webp"
                alt="Prestige Nautic"
                width={160}
                height={40}
                decoding="async"
              />
            </div>
          </Link>

          <button
            className={`nav-toggle${open ? " is-active" : ""}`}
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle__line"></span>
            <span className="nav-toggle__line"></span>
            <span className="nav-toggle__line"></span>
          </button>

          <nav
            id="site-nav"
            className={`nav${open ? " nav--open" : ""}`}
            aria-label="Navigation principale"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
