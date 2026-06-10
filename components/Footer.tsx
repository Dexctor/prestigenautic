import Link from "next/link";
import CookiePreferencesLink from "@/components/CookiePreferencesLink";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <p>
          PRESTIGE NAUTIC — Artisan nautique haut de gamme sur la Côte d&apos;Azur.
          Teck synthétique, teck naturel, vaigrage, refit &amp; soudure sur mesure.
          Basés à Toulon, nous intervenons de Marseille à Nice.
        </p>
        <p>
          <a href="mailto:prestige.nautic@gmail.com">prestige.nautic@gmail.com</a>
          &nbsp;·&nbsp;
          <a href="tel:+33783345950">07 83 34 59 50</a>
          &nbsp;·&nbsp; Toulon (83)
        </p>
        <p style={{ marginTop: "0.85rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.35)" }}>
          <Link href="/pages/mentions-legales">Mentions légales</Link>
          &nbsp;·&nbsp;
          <Link href="/pages/politique-confidentialite">Politique de confidentialité</Link>
          &nbsp;·&nbsp;
          <Link href="/pages/cgv">CGV</Link>
          &nbsp;·&nbsp;
          <CookiePreferencesLink />
        </p>
      </div>
    </footer>
  );
}
