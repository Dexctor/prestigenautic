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

export default function QuoteForm() {
  const [prestation, setPrestation] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const selectedPrestation = PRESTATIONS.find((p) => p.value === prestation);
  const selectLabel = selectedPrestation ? selectedPrestation.title : DEFAULT_LABEL;

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
    setErrorMsg("Envoi en cours...");
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

      <div className="hero__actions">
        <button className="btn btn--primary" type="submit" disabled={submitting}>
          Envoyer la demande
        </button>
      </div>

      {errorMsg && <p id="quote-message">{errorMsg}</p>}
      {successMsg && <p id="quote-success">{successMsg}</p>}
    </form>
  );
}
