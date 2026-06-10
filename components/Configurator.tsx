"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const TECKS = [
  { value: "champagne", label: "Champagne", dotClass: "swatch-card__dot--champagne" },
  { value: "dapplegrey", label: "Dapplegrey", dotClass: "swatch-card__dot--dapplegrey" },
  { value: "mediteraneen", label: "Mediteraneen", dotClass: "swatch-card__dot--mediteraneen" },
  { value: "noyer", label: "Noyer", dotClass: "swatch-card__dot--noyer" },
  { value: "teak", label: "Teak", dotClass: "swatch-card__dot--teak" },
];

const JOINTS = [
  { value: "black", label: "Black", dotClass: "swatch-card__dot--black" },
  { value: "silver", label: "Silver", dotClass: "swatch-card__dot--silver" },
  { value: "white", label: "White", dotClass: "swatch-card__dot--white" },
];

const ZOOM_BASE = "/assets/configurateur/bateau/variante";
const RENDER_BASE = "/assets/configurateur/bateau/rendu";

// Combinaisons d'images réellement disponibles (toutes sauf rendu/champagne-white,
// absente sur le site source). On reproduit le placeholder "Non disponible" du JS d'origine.
const MISSING_RENDER = new Set(["champagne-white"]);

const FALLBACK_MAIN = "/assets/configurateur/bateau/bateau-reference-vue-01.webp";

function preload(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Impossible de charger ${src}`));
    img.src = src;
  });
}

export default function Configurator() {
  const [teck, setTeck] = useState("champagne");
  const [joint, setJoint] = useState("black");

  const [mainSrc, setMainSrc] = useState(FALLBACK_MAIN);
  const [zoomSrc, setZoomSrc] = useState(`${ZOOM_BASE}/teak-black.webp`);
  const [mainLoading, setMainLoading] = useState(false);
  const [zoomLoading, setZoomLoading] = useState(false);
  const [mainUnavailable, setMainUnavailable] = useState(false);
  const [zoomUnavailable, setZoomUnavailable] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const jointLabel = JOINTS.find((j) => j.value === joint)?.label ?? joint;
  // Le nom de l'essence est volontairement masqué (commentaire "MASQUE NOM MARQUE TECK"
  // dans le code source d'origine) : on affiche "—".
  const comboKey = `${teck}-${joint}`;

  const updateImages = useCallback((key: string) => {
    const zoomTarget = `${ZOOM_BASE}/${key}.webp`;
    const renderTarget = MISSING_RENDER.has(key) ? null : `${RENDER_BASE}/${key}.webp`;

    // Zoom matière
    setZoomLoading(true);
    preload(zoomTarget)
      .then(() => {
        setZoomSrc(zoomTarget);
        setZoomUnavailable(false);
      })
      .catch(() => setZoomUnavailable(true))
      .finally(() => setTimeout(() => setZoomLoading(false), 60));

    // Rendu principal
    if (!renderTarget) {
      setMainUnavailable(true);
      return;
    }
    setMainLoading(true);
    preload(renderTarget)
      .then(() => {
        setMainSrc(renderTarget);
        setMainUnavailable(false);
      })
      .catch(() => setMainUnavailable(true))
      .finally(() => setTimeout(() => setMainLoading(false), 60));
  }, []);

  // Synchronisation avec un système externe (préchargement d'images) à chaque
  // changement de combinaison : usage légitime de setState dans un effet.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateImages(comboKey);
  }, [comboKey, updateImages]);

  // Échap ferme la modale
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <main className="configurateur-page configurateur-page--audi">
      <section className="configurateur-shell">
        <div className="configurateur-topbar">
          <Link
            aria-label="Retour à l'accueil Prestige Nautic"
            className="config-back-link"
            href="/"
          >
            <span>Retour</span>
            <span className="config-back-link__icon" aria-hidden="true">
              →
            </span>
          </Link>

          <p className="configurator-kicker">Prestige Nautic</p>

          <div className="configurator-heading">
            <span className="configurator-step">Configurateur teck synthétique</span>
            <h1>Couleur du teck &amp; du joint</h1>
            <p>
              Choisissez votre combinaison et visualisez immédiatement le rendu global
              ainsi que le détail matière.
            </p>
          </div>
        </div>

        <div className="configurateur-layout configurateur-layout--triple">
          {/* Vue principale */}
          <section className="config-main-visual" aria-labelledby="config-main-title">
            <h2 id="config-main-title" className="sr-only">
              Vue principale
            </h2>

            <div className={`config-main-visualframe${mainLoading ? " is-loading" : ""}${mainUnavailable ? " frame-unavailable" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                id="configurator-image"
                src={mainSrc}
                alt={`Pont de bateau en teck synthétique Prestige Nautic — combinaison ${teck} / joint ${joint}`}
                width={600}
                height={800}
              />
              <div className="img-placeholder" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="34" height="34" rx="4" stroke="currentColor" strokeWidth="2" />
                  <line x1="8" y1="8" x2="28" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="28" y1="8" x2="8" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Non disponible</span>
              </div>
            </div>

            <div className="config-main-visualfooter">
              <div className="selection-chip">
                <span className="selection-chiplabel">Teck</span>
                <strong id="selected-teck">—</strong>
              </div>
              <div className="selection-chip">
                <span className="selection-chiplabel">Joint</span>
                <strong id="selected-joint">{jointLabel}</strong>
              </div>
            </div>
          </section>

          {/* Zoom matière */}
          <aside className="config-zoom-panel" aria-labelledby="config-zoom-title">
            <div className="config-zoom-panelhead">
              <span className="config-panel-label">Aperçu matière</span>
              <h2 id="config-zoom-title">Détail de la combinaison</h2>
            </div>

            <div className={`zoom-image-frame${zoomLoading ? " is-loading" : ""}${zoomUnavailable ? " frame-unavailable" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                id="zoom-image"
                src={zoomSrc}
                alt={`Détail matière teck synthétique ${teck} avec joint ${joint} — Prestige Nautic`}
                width={800}
                height={788}
                loading="lazy"
              />
              <div className="img-placeholder" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="34" height="34" rx="4" stroke="currentColor" strokeWidth="2" />
                  <line x1="8" y1="8" x2="28" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="28" y1="8" x2="8" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Non disponible</span>
              </div>
              <button
                type="button"
                className="zoom-trigger"
                aria-label="Agrandir l'aperçu matière"
                onClick={() => {
                  if (!zoomUnavailable) setModalOpen(true);
                }}
              ></button>
            </div>

            <div className="material-caption">
              <p>
                Association active : <strong id="selected-combo">— / {jointLabel}</strong>
              </p>
            </div>
          </aside>

          {/* Panneau choix */}
          <aside className="config-choice-panel" aria-labelledby="config-choice-title">
            <div className="config-choice-panelhead">
              <span className="config-panel-label">Sélection</span>
              <h2 id="config-choice-title">Personnalisation</h2>
            </div>

            <div className="config-choice-columns">
              <section className="choice-column" aria-labelledby="teck-title">
                <h3 id="teck-title">Couleur du teck</h3>
                <div className="swatch-list" id="teck-options">
                  {TECKS.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      className={`swatch-card${teck === t.value ? " is-active" : ""}`}
                      data-type="teck"
                      data-value={t.value}
                      aria-pressed={teck === t.value}
                      onClick={() => setTeck(t.value)}
                    >
                      <span className={`swatch-card__dot ${t.dotClass}`}></span>
                      <span className="swatch-cardcontent">
                        {/* Titre masqué via CSS (#teck-options .swatch-cardtitle{display:none}) */}
                        <span className="swatch-cardtitle">{t.label}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              <section className="choice-column" aria-labelledby="joint-title">
                <h3 id="joint-title">Couleur du joint</h3>
                <div className="swatch-list" id="joint-options">
                  {JOINTS.map((j) => (
                    <button
                      key={j.value}
                      type="button"
                      className={`swatch-card${joint === j.value ? " is-active" : ""}`}
                      data-type="joint"
                      data-value={j.value}
                      aria-pressed={joint === j.value}
                      onClick={() => setJoint(j.value)}
                    >
                      <span className={`swatch-card__dot ${j.dotClass}`}></span>
                      <span className="swatch-cardcontent">
                        <span className="swatch-cardtitle">{j.label}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </section>

      {/* Modale zoom */}
      <div
        id="material-modal"
        className={`image-modal${modalOpen ? " is-open" : ""}`}
        aria-hidden={!modalOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) setModalOpen(false);
        }}
      >
        <button
          type="button"
          className="image-modal__close"
          aria-label="Fermer l'aperçu"
          onClick={() => setModalOpen(false)}
        >
          ×
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="material-modal-image"
          className="image-modal__image"
          src={zoomSrc}
          alt={`Aperçu agrandi du teck synthétique ${teck} avec joint ${joint} — Prestige Nautic`}
          width={800}
          height={788}
        />
      </div>
    </main>
  );
}
