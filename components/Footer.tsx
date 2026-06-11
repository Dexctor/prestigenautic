import Link from "next/link";
import CookiePreferencesLink from "@/components/CookiePreferencesLink";

const PRESTATIONS = [
  { href: "/pages/teck-synthetique", label: "Teck synthétique" },
  { href: "/pages/teck-naturel", label: "Teck naturel" },
  { href: "/pages/vaigrage", label: "Vaigrage" },
  { href: "/pages/refit-integral", label: "Refit intégral" },
  { href: "/pages/soudure-inox", label: "Soudure sur mesure" },
];

const EXPLORER = [
  { href: "/pages/configurateur", label: "Configurateur teck" },
  { href: "/#savoir-faire", label: "Notre savoir-faire" },
  { href: "/#methode", label: "Notre méthode" },
  { href: "/articles", label: "Conseils & actualités" },
  { href: "/#devis", label: "Demander un devis" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      {/* Corps principal — 4 colonnes */}
      <div className="container site-footer__main">
        {/* Marque */}
        <div className="footer-brand">
          <Link href="/" className="footer-brand__logo" aria-label="Accueil Prestige Nautic">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-prestige-nautic.webp"
              alt="Prestige Nautic"
              width={170}
              height={43}
              decoding="async"
            />
          </Link>
          <p className="footer-brand__desc">
            Artisan nautique haut de gamme sur la Côte d&apos;Azur. Pose de teck,
            vaigrage, refit intégral et soudure sur mesure pour yachts et bateaux
            d&apos;exception.
          </p>
          <p className="footer-brand__area">
            <span aria-hidden="true">⚓</span> Basés à Toulon — de Marseille à Monaco
          </p>
        </div>

        {/* Prestations */}
        <nav className="footer-col" aria-label="Prestations">
          <h2 className="footer-col__title">Prestations</h2>
          <ul className="footer-links">
            {PRESTATIONS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Explorer */}
        <nav className="footer-col" aria-label="Explorer le site">
          <h2 className="footer-col__title">Explorer</h2>
          <ul className="footer-links">
            {EXPLORER.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="footer-col footer-contact">
          <h2 className="footer-col__title">Contact</h2>
          <ul className="footer-contact__list">
            <li>
              <span className="footer-contact__label">Téléphone</span>
              <a href="tel:+33783345950" className="footer-contact__value">07 83 34 59 50</a>
            </li>
            <li>
              <span className="footer-contact__label">Email</span>
              <a href="mailto:prestige.nautic@gmail.com" className="footer-contact__value">
                prestige.nautic@gmail.com
              </a>
            </li>
            <li>
              <span className="footer-contact__label">Atelier</span>
              <span className="footer-contact__value footer-contact__value--plain">
                18 avenue du 1er bataillon Choc<br />83200 Toulon
              </span>
            </li>
          </ul>
          <Link href="/#devis" className="footer-cta">Demander un devis →</Link>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p className="footer-legal-line">
            © {year} Prestige Nautic · SIRET 984 660 043 00022
          </p>
          <nav className="footer-legal-nav" aria-label="Informations légales">
            <Link href="/pages/mentions-legales">Mentions légales</Link>
            <Link href="/pages/politique-confidentialite">Confidentialité</Link>
            <Link href="/pages/cgv">CGV</Link>
            <CookiePreferencesLink />
          </nav>
        </div>
      </div>
    </footer>
  );
}
