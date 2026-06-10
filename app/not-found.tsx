import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "La page que vous cherchez n'existe pas ou a été déplacée.",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/pages/teck-synthetique", label: "Teck synthétique" },
  { href: "/pages/configurateur", label: "Configurateur" },
  { href: "/articles", label: "Articles & guides" },
  { href: "/#devis", label: "Demander un devis" },
];

export default function NotFound() {
  return (
    <main id="main-content" className="notfound-page">
      <div className="notfound-inner">
        <p className="notfound-code">404</p>
        <h1 className="notfound-title">
          Cette page a <em>levé l&apos;ancre</em>
        </h1>
        <p className="notfound-text">
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Reprenez le cap
          grâce aux liens ci-dessous.
        </p>
        <nav className="notfound-links" aria-label="Liens utiles">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="notfound-link">
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="notfound-contact">
          Besoin d&apos;aide ?{" "}
          <a href="tel:+33783345950">07 83 34 59 50</a> ·{" "}
          <a href="mailto:prestige.nautic@gmail.com">prestige.nautic@gmail.com</a>
        </p>
      </div>
    </main>
  );
}
