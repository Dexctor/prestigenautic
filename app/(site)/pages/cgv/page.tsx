import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions générales de vente de Prestige Nautic, artisan nautique à Toulon : devis, paiement, délais, garanties et exécution des chantiers.",
  alternates: { canonical: "https://prestigenautic.com/pages/cgv" },
};

export default function CgvPage() {
  return (
    <main className="legal-page" id="main-content" tabIndex={-1}>
      <div className="legal-shell">
        <Link className="legal-back" href="/">
          ← Retour au site
        </Link>

        <p className="legal-eyebrow">Prestige Nautic</p>
        <h1>Conditions Générales de Vente</h1>
        <p className="legal-date">En vigueur au 19 mai 2026</p>

        <div className="legal-section">
          <h2>1. Identification du prestataire</h2>
          <p>
            <strong>Louis Troadec Agez</strong>, entrepreneur individuel opérant
            sous le nom commercial <strong>Prestige Nautic</strong>.
            <br />
            18 avenue du 1er bataillon Choc, 83200 Toulon
            <br />
            SIRET : 984 660 043 00022
            <br />
            Email :{" "}
            <a href="mailto:prestige.nautic@gmail.com">
              prestige.nautic@gmail.com
            </a>
            <br />
            Téléphone : <a href="tel:+33783345950">07 83 34 59 50</a>
          </p>
          <p>TVA non applicable — article 293 B du CGI.</p>
        </div>

        <div className="legal-section">
          <h2>2. Champ d&apos;application</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à
            toutes les prestations de services proposées par Prestige Nautic,
            notamment : pose et rénovation de teck synthétique, teck naturel,
            vaigrage, refit intégral, soudure et fabrication inox marin.
          </p>
          <p>
            Elles s&apos;appliquent aussi bien aux clients particuliers (B2C)
            qu&apos;aux clients professionnels (B2B). Toute commande implique
            l&apos;acceptation pleine et entière des présentes CGV.
          </p>
        </div>

        <div className="legal-section">
          <h2>3. Devis et formation du contrat</h2>
          <p>
            Toute prestation fait l&apos;objet d&apos;un devis préalable, établi
            gratuitement après étude du projet. Le devis est valable{" "}
            <strong>30 jours</strong> à compter de sa date d&apos;émission.
          </p>
          <p>
            Le contrat est formé dès lors que le client retourne le devis signé,
            accompagné de la mention « Bon pour accord », et verse l&apos;acompte
            prévu. Prestige Nautic se réserve le droit de refuser toute commande
            sans avoir à s&apos;en justifier.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Tarifs</h2>
          <p>
            Les tarifs sont indiqués en euros toutes taxes comprises (TTC).
            Prestige Nautic étant soumis au régime de la franchise en base de TVA
            (article 293 B du CGI), aucune TVA n&apos;est facturée.
          </p>
          <p>
            Les prix peuvent être révisés à tout moment pour les nouveaux devis.
            Ils ne s&apos;appliquent qu&apos;à la commande en cours pour les
            devis déjà acceptés.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Modalités de paiement</h2>
          <p>Sauf mention contraire sur le devis :</p>
          <p>
            — <strong>Acompte de 30 %</strong> du montant total TTC à la
            signature du devis, nécessaire au lancement des travaux.
            <br />— <strong>Solde de 70 %</strong> à la réception des travaux,
            avant restitution du bateau.
          </p>
          <p>
            Modes de paiement acceptés : virement bancaire, chèque, espèces (dans
            les limites légales en vigueur).
          </p>
          <p>
            Tout retard de paiement entraîne, de plein droit et sans mise en
            demeure préalable, des pénalités de retard au taux légal en vigueur,
            ainsi qu&apos;une indemnité forfaitaire de recouvrement de{" "}
            <strong>40 €</strong> (pour les clients professionnels).
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Délais d&apos;exécution</h2>
          <p>
            Les délais d&apos;intervention sont indiqués à titre indicatif sur le
            devis. Prestige Nautic s&apos;engage à respecter ces délais dans la
            mesure du possible. Des aléas techniques, météorologiques ou liés à
            l&apos;approvisionnement en matériaux peuvent entraîner des
            modifications du planning, sans que cela ne constitue un manquement
            contractuel.
          </p>
          <p>
            Le client s&apos;engage à mettre le bateau à disposition aux dates
            convenues et à assurer l&apos;accès au chantier dans de bonnes
            conditions.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Réception des travaux</h2>
          <p>
            À l&apos;issue des travaux, une réception est organisée en présence
            du client ou de son représentant. Tout défaut apparent doit être
            signalé lors de cette réception ou au plus tard{" "}
            <strong>48 heures</strong> après la remise du bateau, par écrit à
            l&apos;adresse email du prestataire.
          </p>
          <p>
            Le paiement du solde vaut acceptation des travaux réalisés, sauf
            réserves formulées par écrit à la réception.
          </p>
        </div>

        <div className="legal-section">
          <h2>8. Garanties</h2>
          <p>
            Prestige Nautic garantit ses prestations contre les vices et
            malfaçons pendant une durée de <strong>1 an</strong> à compter de la
            réception des travaux, sous réserve d&apos;une utilisation normale du
            bateau et du respect des conditions d&apos;entretien recommandées.
          </p>
          <p>
            Cette garantie ne couvre pas l&apos;usure normale, les dommages liés
            à une mauvaise utilisation, des chocs, des catastrophes naturelles ou
            des interventions de tiers non autorisés.
          </p>
          <p>
            Les clients particuliers bénéficient en outre des garanties légales
            applicables au droit de la consommation (garantie légale de
            conformité et garantie contre les vices cachés).
          </p>
        </div>

        <div className="legal-section">
          <h2>9. Droit de rétractation (clients particuliers)</h2>
          <p>
            Conformément à l&apos;article L.221-18 du Code de la consommation,
            les clients particuliers ayant conclu un contrat à distance ou hors
            établissement disposent d&apos;un délai de{" "}
            <strong>14 jours calendaires</strong> à compter de l&apos;acceptation
            du devis pour exercer leur droit de rétractation, sans justification
            ni pénalité.
          </p>
          <p>
            Pour exercer ce droit, le client doit notifier sa décision par email
            à{" "}
            <a href="mailto:prestige.nautic@gmail.com">
              prestige.nautic@gmail.com
            </a>{" "}
            avant l&apos;expiration du délai.
          </p>
          <div className="info-box">
            <strong>Exception :</strong> Si le client demande expressément que
            les travaux commencent avant la fin du délai de rétractation, il
            reconnaît perdre son droit de rétractation dès lors que les
            prestations ont été entièrement exécutées. Si les prestations ont été
            partiellement exécutées, le client devra payer un montant
            proportionnel aux services déjà réalisés.
          </div>
        </div>

        <div className="legal-section">
          <h2>10. Responsabilité</h2>
          <p>
            Prestige Nautic est couvert par une assurance responsabilité civile
            professionnelle. La responsabilité du prestataire ne saurait être
            engagée pour des dommages indirects ou immatériels, ni pour des
            dommages résultant d&apos;une utilisation inadaptée du bateau après
            les travaux.
          </p>
          <p>
            Le client est responsable de la mise en sécurité et de
            l&apos;assurance de son bateau pendant la durée des travaux.
          </p>
        </div>

        <div className="legal-section">
          <h2>11. Résolution des litiges</h2>
          <p>
            En cas de litige, une solution amiable sera recherchée en priorité.
            Le client peut contacter Prestige Nautic à l&apos;adresse{" "}
            <a href="mailto:prestige.nautic@gmail.com">
              prestige.nautic@gmail.com
            </a>
            .
          </p>
          <p>
            <strong>Pour les clients particuliers :</strong> conformément à
            l&apos;article L.612-1 du Code de la consommation, tout consommateur
            peut recourir gratuitement à un médiateur de la consommation.
            Prestige Nautic adhère au service de médiation <strong>CM2C</strong>{" "}
            —{" "}
            <a href="https://www.cm2c.net" target="_blank" rel="noopener noreferrer">
              www.cm2c.net
            </a>
            .
          </p>
          <p>
            <strong>Pour les clients professionnels :</strong> en cas de
            désaccord persistant, les tribunaux de Toulon seront seuls
            compétents.
          </p>
        </div>

        <div className="legal-section">
          <h2>12. Droit applicable</h2>
          <p>
            Les présentes CGV sont soumises au droit français. Toute clause non
            applicable n&apos;entraîne pas la nullité des autres dispositions.
          </p>
        </div>
      </div>
    </main>
  );
}
