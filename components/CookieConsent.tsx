"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { hasStoredConsent, readConsent, saveConsent } from "@/lib/consent";

// Événement global pour rouvrir le panneau depuis le footer ("Gérer les cookies").
export const OPEN_COOKIE_PREFS_EVENT = "pn-open-cookie-prefs";

export function openCookiePreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_COOKIE_PREFS_EVENT));
  }
}

type View = "hidden" | "banner" | "preferences";

export default function CookieConsent() {
  const [view, setView] = useState<View>("hidden");
  const [analytics, setAnalytics] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const acceptBtnRef = useRef<HTMLButtonElement>(null);

  // Au montage : afficher la bannière si aucun choix valide n'existe.
  // Lecture de localStorage (système externe indisponible au SSR) → on
  // synchronise l'état d'affichage côté client, dans une micro-tâche pour
  // ne pas déclencher de rendu synchrone pendant l'effet.
  useEffect(() => {
    const id = window.setTimeout(() => {
      if (!hasStoredConsent()) setView("banner");
    }, 0);
    // Rouvrir le panneau "préférences" sur demande (footer).
    function onOpenPrefs() {
      const current = readConsent();
      setAnalytics(current?.categories.analytics ?? false);
      setView("preferences");
    }
    window.addEventListener(OPEN_COOKIE_PREFS_EVENT, onOpenPrefs);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener(OPEN_COOKIE_PREFS_EVENT, onOpenPrefs);
    };
  }, []);

  // Échap ferme la modale de préférences (mais pas la bannière initiale,
  // pour ne pas contourner le choix).
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && view === "preferences") {
        setView(hasStoredConsent() ? "hidden" : "banner");
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [view]);

  // Focus sur le bouton principal quand la bannière apparaît (accessibilité).
  useEffect(() => {
    if (view === "banner") acceptBtnRef.current?.focus();
  }, [view]);

  const acceptAll = useCallback(() => {
    saveConsent(true);
    setView("hidden");
  }, []);

  const refuseAll = useCallback(() => {
    saveConsent(false);
    setView("hidden");
  }, []);

  const savePreferences = useCallback(() => {
    saveConsent(analytics);
    setView("hidden");
  }, [analytics]);

  if (view === "hidden") return null;

  return (
    <div
      className="cookie-root"
      role="dialog"
      aria-modal={view === "preferences"}
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      {/* Overlay seulement pour la modale de préférences */}
      {view === "preferences" && (
        <div className="cookie-overlay" onClick={() => setView(hasStoredConsent() ? "hidden" : "banner")} />
      )}

      <div className={`cookie-panel cookie-panel--${view}`} ref={panelRef}>
        {view === "banner" ? (
          <>
            <div className="cookie-panel__body">
              <h2 id="cookie-title" className="cookie-panel__title">
                Nous respectons votre vie privée
              </h2>
              <p id="cookie-desc" className="cookie-panel__text">
                Ce site utilise des cookies strictement nécessaires à son fonctionnement et,
                avec votre accord, des cookies de mesure d&apos;audience (Google Analytics) pour
                comprendre comment il est utilisé. Vous pouvez accepter, refuser ou
                personnaliser vos choix. Voir notre{" "}
                <Link href="/pages/politique-confidentialite">politique de confidentialité</Link>.
              </p>
            </div>
            <div className="cookie-panel__actions">
              <button
                type="button"
                className="btn btn--gold cookie-btn"
                onClick={acceptAll}
                ref={acceptBtnRef}
              >
                Tout accepter
              </button>
              <button type="button" className="btn btn--secondary cookie-btn cookie-btn--light" onClick={refuseAll}>
                Tout refuser
              </button>
              <button
                type="button"
                className="cookie-link-btn"
                onClick={() => {
                  setAnalytics(readConsent()?.categories.analytics ?? false);
                  setView("preferences");
                }}
              >
                Personnaliser
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-panel__body">
              <h2 id="cookie-title" className="cookie-panel__title">
                Préférences de cookies
              </h2>
              <p id="cookie-desc" className="cookie-panel__text">
                Gérez votre consentement par catégorie. Les cookies strictement nécessaires
                ne peuvent pas être désactivés.
              </p>

              <div className="cookie-cat">
                <div className="cookie-cat__head">
                  <span className="cookie-cat__name">Strictement nécessaires</span>
                  <span className="cookie-cat__status cookie-cat__status--on">Toujours actifs</span>
                </div>
                <p className="cookie-cat__desc">
                  Indispensables au fonctionnement du site (navigation, sécurité, mémorisation
                  de votre choix de cookies). Aucune donnée de suivi.
                </p>
              </div>

              <div className="cookie-cat">
                <div className="cookie-cat__head">
                  <label className="cookie-cat__name" htmlFor="cookie-analytics">
                    Mesure d&apos;audience
                  </label>
                  <label className="cookie-switch">
                    <input
                      id="cookie-analytics"
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                    />
                    <span className="cookie-switch__track" aria-hidden="true">
                      <span className="cookie-switch__thumb" />
                    </span>
                    <span className="sr-only">Activer la mesure d&apos;audience</span>
                  </label>
                </div>
                <p className="cookie-cat__desc">
                  Google Analytics, pour mesurer la fréquentation et améliorer le site. Données
                  agrégées, déposées uniquement avec votre accord.
                </p>
              </div>
            </div>

            <div className="cookie-panel__actions">
              <button type="button" className="btn btn--primary cookie-btn" onClick={savePreferences}>
                Enregistrer mes choix
              </button>
              <button type="button" className="cookie-link-btn" onClick={refuseAll}>
                Tout refuser
              </button>
              <button type="button" className="cookie-link-btn" onClick={acceptAll}>
                Tout accepter
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
