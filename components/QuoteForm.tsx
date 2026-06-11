"use client";

import { useEffect, useRef, useState } from "react";

const PRESTATIONS = [
  {
    value: "tecksynthetique",
    title: "Teck synthétique",
    text: "Pose soignée, rendu durable, propre et élégant.",
  },
  {
    value: "tecknaturel",
    title: "Teck naturel",
    text: "Un rendu noble et précis pour les projets haut de gamme.",
  },
  {
    value: "vaigrage",
    title: "Vaigrage",
    text: "Cuir ou tissu pour redonner confort et caractère aux intérieurs.",
  },
  {
    value: "refitintegral",
    title: "Refit intégral",
    text: "Une montée en gamme complète pensée dans le détail.",
  },
  {
    value: "soudureinox",
    title: "Soudure sur mesure",
    text: "Travaux sur mesure selon le besoin réel du chantier.",
  },
];

const DEFAULT_LABEL = "Choisir la prestation souhaitée";

// Libellés lisibles pour le joint (le nom de l'essence de teck reste masqué
// publiquement : on transmet une référence neutre exploitable par l'artisan).
const JOINT_LABELS: Record<string, string> = {
  black: "Noir",
  silver: "Gris",
  white: "Blanc",
};
const TECK_REFS: Record<string, string> = {
  champagne: "Teinte 1",
  dapplegrey: "Teinte 2",
  mediteraneen: "Teinte 3",
  noyer: "Teinte 4",
  teak: "Teinte 5",
};

export default function QuoteForm() {
  const [prestation, setPrestation] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [prefillNote, setPrefillNote] = useState("");

  const selectRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const selectedPrestation = PRESTATIONS.find((p) => p.value === prestation);
  const selectLabel = selectedPrestation ? selectedPrestation.title : DEFAULT_LABEL;

  // Pré-remplissage depuis le configurateur (?teck=...&joint=...) :
  // on sélectionne « Teck synthétique » et on amorce la description.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const teck = params.get("teck");
    const joint = params.get("joint");
    if (!teck && !joint) return;

    const teckRef = teck ? TECK_REFS[teck] : null;
    const jointLabel = joint ? JOINT_LABELS[joint] : null;
    const parts: string[] = [];
    if (teckRef) parts.push(`teinte ${teckRef.replace("Teinte ", "n°")}`);
    if (jointLabel) parts.push(`joint ${jointLabel.toLowerCase()}`);
    const combo = parts.join(", ");

    // setState dans un effet : initialisation au montage depuis l'URL (légitime).
    setTimeout(() => {
      setPrestation("tecksynthetique");
      if (combo) {
        setPrefillNote(`Configuration choisie : ${combo}.`);
        const ta = document.getElementById("quote-message-input") as HTMLTextAreaElement | null;
        if (ta && !ta.value) {
          ta.value = `Bonjour, je souhaite un devis pour la pose de teck synthétique sur mon pont. ${`Configuration choisie dans le configurateur : ${combo}.`} `;
        }
      }
    }, 0);

    // L'ancre #devis échoue souvent (contenu/images qui décalent la cible au
    // chargement) : on amène nous-mêmes la section dans le champ de vision. On
    // répète le calage (raf + délais) pour résister à la restauration de scroll
    // du navigateur et aux décalages de mise en page tardifs.
    const target = () => document.getElementById("devis");
    const jump = () => target()?.scrollIntoView({ behavior: "auto", block: "start" });
    const timers = [
      requestAnimationFrame(jump),
      window.setTimeout(jump, 120),
      window.setTimeout(jump, 400),
      window.setTimeout(() => target()?.scrollIntoView({ behavior: "smooth", block: "start" }), 650),
    ];
    return () => {
      cancelAnimationFrame(timers[0]);
      timers.slice(1).forEach((id) => clearTimeout(id));
    };
  }, []);

  // Fermer le select au clic extérieur et à Échap
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setSelectOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectOpen(false);
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      prenom: String(data.get("prenom") || "").trim(),
      nom: String(data.get("nom") || "").trim(),
      email: String(data.get("email") || "").trim(),
      telephone: String(data.get("telephone") || "").trim(),
      type_bateau: String(data.get("type-bateau") || "").trim(),
      marque: String(data.get("marque") || "").trim(),
      modele: String(data.get("modele") || "").trim(),
      port: String(data.get("port") || "").trim(),
      type_prestation: prestation,
      description_demande: String(data.get("message") || "").trim(),
    };

    if (
      !payload.prenom ||
      !payload.nom ||
      !payload.email ||
      !payload.type_bateau ||
      !payload.type_prestation ||
      !payload.description_demande
    ) {
      setErrorMsg(
        "Merci de remplir prénom, nom, email, type de bateau, prestation et message."
      );
      setSuccessMsg("");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMsg(result?.message || "Une erreur est survenue. Réessayez.");
        setSuccessMsg("");
        return;
      }

      form.reset();
      setPrestation("");
      setErrorMsg("");
      setSuccessMsg(
        result?.message ||
          "Demande préparée avec succès. Nous reviendrons vers vous après étude de votre projet."
      );
      // Amener le message de succès dans le champ de vision
      requestAnimationFrame(() => {
        document.getElementById("quote-success")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
    } catch {
      setErrorMsg(
        "Erreur réseau. Réessayez dans un instant ou contactez-nous directement."
      );
      setSuccessMsg("");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form" id="quote-form" ref={formRef} onSubmit={handleSubmit} noValidate>
      {prefillNote && (
        <div className="form-prefill" role="status">
          <span className="form-prefill__ico" aria-hidden="true">✓</span>
          <span>
            <strong>Configuration reprise du configurateur.</strong> {prefillNote} Vous
            pouvez l&apos;ajuster dans la description ci-dessous.
          </span>
        </div>
      )}
      <fieldset disabled={submitting}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="quote-prenom">Prénom</label>
          <input id="quote-prenom" name="prenom" type="text" autoComplete="given-name" required />
        </div>
        <div className="field">
          <label htmlFor="quote-nom">Nom</label>
          <input id="quote-nom" name="nom" type="text" autoComplete="family-name" required />
        </div>
        <div className="field">
          <label htmlFor="quote-email">Email</label>
          <input id="quote-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="quote-telephone">Téléphone</label>
          <input id="quote-telephone" name="telephone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="quote-type-bateau">Type de bateau</label>
          <input
            id="quote-type-bateau"
            name="type-bateau"
            type="text"
            placeholder="Vedette, voilier, catamaran..."
            required
          />
        </div>
        <div className="field">
          <label htmlFor="quote-marque">Marque</label>
          <input id="quote-marque" name="marque" type="text" placeholder="Ex. Jeanneau, Beneteau..." />
        </div>
        <div className="field">
          <label htmlFor="quote-modele">Modèle</label>
          <input id="quote-modele" name="modele" type="text" placeholder="Nom du modèle" />
        </div>
        <div className="field">
          <label htmlFor="quote-port">Port</label>
          <input id="quote-port" name="port" type="text" placeholder="Port d'attache" />
        </div>

        <div className="field field--full">
          <label htmlFor="quote-prestation-display">Prestation souhaitée</label>

          <div
            className="custom-select"
            data-custom-select
            data-empty={prestation ? "false" : "true"}
            ref={selectRef}
          >
            <button
              type="button"
              id="quote-prestation-display"
              className="custom-select__trigger"
              aria-haspopup="listbox"
              aria-expanded={selectOpen}
              aria-controls="quote-prestation-list"
              onClick={() => setSelectOpen((v) => !v)}
            >
              <span className="custom-select__value">{selectLabel}</span>
              <span className="custom-select__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </span>
            </button>

            <div
              className="custom-select__menu"
              id="quote-prestation-list"
              role="listbox"
              aria-labelledby="quote-prestation-display"
              hidden={!selectOpen}
            >
              {PRESTATIONS.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  className="custom-select__option"
                  role="option"
                  data-value={p.value}
                  aria-selected={prestation === p.value}
                  onClick={() => {
                    setPrestation(p.value);
                    setSelectOpen(false);
                  }}
                >
                  <span className="custom-select__option-title">{p.title}</span>
                  <span className="custom-select__option-text">{p.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="field field--full">
          <label htmlFor="quote-message-input">Description du projet</label>
          <textarea
            id="quote-message-input"
            name="message"
            placeholder="Décris le bateau, la zone concernée et le rendu souhaité."
            rows={6}
            required
          ></textarea>
        </div>
      </div>
      </fieldset>

      <div className="hero__actions">
        <button
          className="btn btn--primary quote-submit"
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
        >
          {submitting && <span className="quote-spinner" aria-hidden="true" />}
          {submitting ? "Envoi en cours…" : "Envoyer la demande"}
        </button>
      </div>

      {/* Régions live : toujours présentes pour que le lecteur d'écran annonce
          les changements (erreur = assertif, succès = poli). */}
      <p id="quote-message" role="alert" aria-live="assertive">
        {errorMsg}
      </p>
      <p id="quote-success" aria-live="polite">
        {successMsg}
      </p>
    </form>
  );
}
