import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Prestige Nautic",
  description:
    "Politique de confidentialité de Prestige Nautic : données collectées via le formulaire de devis, conservation et exercice de vos droits (RGPD).",
  alternates: {
    canonical: "https://prestigenautic.com/pages/politique-confidentialite.html",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="legal-back" href="/">
          ← Retour au site
        </Link>

        <p className="legal-eyebrow">Prestige Nautic</p>
        <h1>Politique de confidentialité</h1>
        <p className="legal-date">
          En vigueur au 19 mai 2026 — Conforme au Règlement (UE) 2016/679 (RGPD)
        </p>

        <div className="legal-section">
          <h2>1. Responsable du traitement</h2>
          <p>
            <strong>Louis Troadec Agez</strong> — Prestige Nautic
            <br />
            18 avenue du 1er bataillon Choc, 83200 Toulon
            <br />
            Email :{" "}
            <a href="mailto:prestige.nautic@gmail.com">
              prestige.nautic@gmail.com
            </a>
            <br />
            Téléphone : <a href="tel:+33783345950">07 83 34 59 50</a>
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Données collectées</h2>
          <p>
            Dans le cadre de l&apos;utilisation du formulaire de demande de
            devis, les données suivantes peuvent être collectées :
          </p>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Donnée</th>
                <th>Finalité</th>
                <th>Base légale</th>
                <th>Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prénom, nom</td>
                <td>Identification du demandeur</td>
                <td>Intérêt légitime / exécution du contrat</td>
                <td>
                  3 ans (prospect) — 5 ans après la fin du contrat (client)
                </td>
              </tr>
              <tr>
                <td>Adresse email</td>
                <td>Réponse à la demande de devis</td>
                <td>Intérêt légitime / exécution du contrat</td>
                <td>
                  3 ans (prospect) — 5 ans après la fin du contrat (client)
                </td>
              </tr>
              <tr>
                <td>Téléphone</td>
                <td>Contact commercial</td>
                <td>Intérêt légitime / consentement</td>
                <td>
                  3 ans (prospect) — 5 ans après la fin du contrat (client)
                </td>
              </tr>
              <tr>
                <td>Informations bateau (type, marque, modèle, port)</td>
                <td>Étude et chiffrage du projet</td>
                <td>Exécution du contrat</td>
                <td>Durée du contrat + 5 ans</td>
              </tr>
              <tr>
                <td>Description du projet</td>
                <td>Analyse des besoins</td>
                <td>Exécution du contrat</td>
                <td>Durée du contrat + 5 ans</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: "1rem" }}>
            Aucune donnée n&apos;est collectée à des fins publicitaires ou
            revendue à des tiers.
          </p>
        </div>

        <div className="legal-section">
          <h2>3. Destinataires des données</h2>
          <p>
            Les données collectées sont destinées exclusivement à{" "}
            <strong>Louis Troadec Agez — Prestige Nautic</strong> pour le
            traitement des demandes de devis et la gestion de la relation
            commerciale. Elles ne font l&apos;objet d&apos;aucune cession,
            location ou échange avec des tiers.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants sur vos
            données personnelles :
          </p>
          <div className="rights-grid">
            <div className="right-item">
              <strong>Droit d&apos;accès</strong>
              <span>
                Obtenir une copie des données vous concernant que nous détenons.
              </span>
            </div>
            <div className="right-item">
              <strong>Droit de rectification</strong>
              <span>Faire corriger des données inexactes ou incomplètes.</span>
            </div>
            <div className="right-item">
              <strong>Droit à l&apos;effacement</strong>
              <span>
                Demander la suppression de vos données, sous réserve des
                obligations légales de conservation.
              </span>
            </div>
            <div className="right-item">
              <strong>Droit d&apos;opposition</strong>
              <span>
                Vous opposer au traitement de vos données fondé sur
                l&apos;intérêt légitime.
              </span>
            </div>
            <div className="right-item">
              <strong>Droit à la portabilité</strong>
              <span>
                Recevoir vos données dans un format structuré et lisible par
                machine.
              </span>
            </div>
            <div className="right-item">
              <strong>Droit à la limitation</strong>
              <span>
                Demander la suspension temporaire du traitement de vos données.
              </span>
            </div>
          </div>
          <p style={{ marginTop: "1.2rem" }}>
            Pour exercer l&apos;un de ces droits, contactez-nous à :{" "}
            <a href="mailto:prestige.nautic@gmail.com">
              prestige.nautic@gmail.com
            </a>
            . Nous nous engageons à répondre dans un délai d&apos;un mois.
          </p>
          <p>
            En cas de réponse insatisfaisante, vous disposez du droit
            d&apos;introduire une réclamation auprès de la <strong>CNIL</strong>{" "}
            (
            <a href="https://www.cnil.fr" target="_blank" rel="noopener">
              www.cnil.fr
            </a>
            ).
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Cookies</h2>
          <p>
            Ce site dépose deux types de cookies&nbsp;:
          </p>
          <p>
            <strong>Cookies strictement nécessaires</strong> — indispensables au
            fonctionnement du site (navigation, sécurité, mémorisation de votre choix
            en matière de cookies). Ils sont déposés sans consentement préalable,
            conformément aux recommandations de la CNIL, et ne servent à aucun suivi.
          </p>
          <p>
            <strong>Cookies de mesure d&apos;audience</strong> — nous utilisons Google
            Analytics pour mesurer la fréquentation du site et l&apos;améliorer. Ces
            cookies ne sont déposés qu&apos;<strong>après votre consentement explicite</strong>.
            L&apos;adresse IP est anonymisée et aucune donnée n&apos;est utilisée à des fins
            publicitaires ou revendue à des tiers.
          </p>
          <p>
            Vous pouvez accepter, refuser ou personnaliser votre choix à tout moment via
            le bandeau de consentement ou le lien «&nbsp;Gérer les cookies&nbsp;» présent en
            bas de chaque page. Votre choix est conservé six mois, puis vous est redemandé.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Sécurité</h2>
          <p>
            Prestige Nautic met en œuvre les mesures techniques et
            organisationnelles appropriées pour protéger vos données contre tout
            accès non autorisé, toute perte ou altération.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Modifications</h2>
          <p>
            Cette politique de confidentialité peut être mise à jour à tout
            moment. La date de dernière mise à jour figure en haut du document.
            Nous vous encourageons à la consulter régulièrement.
          </p>
        </div>
      </div>
    </main>
  );
}
