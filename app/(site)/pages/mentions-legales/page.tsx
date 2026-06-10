import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Prestige Nautic",
  description:
    "Mentions légales du site Prestige Nautic — artisan nautique à Toulon (Var) : teck, vaigrage, refit et inox sur la Côte d'Azur.",
  alternates: { canonical: "https://prestigenautic.com/pages/mentions-legales.html" },
};

export default function MentionsLegalesPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="legal-back" href="/">
          ← Retour au site
        </Link>

        <p className="legal-eyebrow">Prestige Nautic</p>
        <h1>Mentions légales</h1>
        <p className="legal-date">En vigueur au 19 mai 2026</p>

        <div className="legal-section">
          <h2>1. Éditeur du site</h2>
          <address>
            <strong>Louis Troadec Agez</strong>
            <br />
            Entrepreneur individuel — Prestige Nautic
            <br />
            18 avenue du 1er bataillon Choc
            <br />
            83200 Toulon, France
            <br />
            <br />
            <strong>SIRET :</strong> 984 660 043 00022
            <br />
            <strong>Téléphone :</strong>{" "}
            <a href="tel:+33783345950">07 83 34 59 50</a>
            <br />
            <strong>Email :</strong>{" "}
            <a href="mailto:prestige.nautic@gmail.com">
              prestige.nautic@gmail.com
            </a>
          </address>
          <p style={{ marginTop: "0.75rem" }}>
            TVA non applicable — article 293 B du CGI.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Directeur de la publication</h2>
          <p>Louis Troadec Agez, en qualité d&apos;entrepreneur individuel.</p>
        </div>

        <div className="legal-section">
          <h2>3. Hébergement</h2>
          <p>
            Les informations relatives à l&apos;hébergeur seront complétées lors
            de la mise en ligne du site. En cas de question, vous pouvez
            contacter l&apos;éditeur à l&apos;adresse indiquée ci-dessus.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, photographies,
            visuels, logos, structure) est la propriété exclusive de Louis
            Troadec Agez — Prestige Nautic, ou fait l&apos;objet d&apos;une
            autorisation d&apos;utilisation.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou
            adaptation, totale ou partielle, de ces éléments, quel que soit le
            moyen ou le procédé utilisé, est interdite sans autorisation écrite
            préalable de l&apos;éditeur.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Responsabilité</h2>
          <p>
            Prestige Nautic s&apos;efforce de maintenir les informations
            publiées sur ce site exactes et à jour. Toutefois, l&apos;éditeur ne
            peut garantir l&apos;exactitude, la complétude ou l&apos;actualité
            des informations diffusées. En conséquence, l&apos;utilisateur
            reconnaît utiliser ces informations sous sa responsabilité
            exclusive.
          </p>
          <p>
            L&apos;éditeur ne saurait être tenu responsable des dommages directs
            ou indirects causés au matériel de l&apos;utilisateur lors de
            l&apos;accès au site.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Liens hypertextes</h2>
          <p>
            Le site <strong>prestigenautic.com</strong> peut contenir des liens
            vers des sites tiers. Ces liens sont fournis à titre informatif.
            Prestige Nautic n&apos;assume aucune responsabilité quant au contenu
            de ces sites externes.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. En cas de litige, les
            tribunaux français sont seuls compétents.
          </p>
        </div>
      </div>
    </main>
  );
}
