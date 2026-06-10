// ============================================================
// Gestion du consentement cookies — conforme CNIL / RGPD
// ============================================================
// - Choix stocké en localStorage avec horodatage.
// - Durée de validité de 6 mois (recommandation CNIL) : au-delà,
//   le consentement est redemandé.
// - Catégories : "necessary" (toujours actif) et "analytics" (optionnel).
// - S'interface avec Google Consent Mode v2.

export type ConsentCategories = {
  necessary: true; // toujours vrai, non désactivable
  analytics: boolean;
};

export type ConsentRecord = {
  categories: ConsentCategories;
  timestamp: number; // ms epoch
  version: number; // version de la politique de consentement
};

export const CONSENT_STORAGE_KEY = "pn-cookie-consent";
export const CONSENT_VERSION = 1;
// 6 mois en millisecondes
export const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30 * 6;

// Événement custom émis quand le consentement change (pour réagir dans l'UI / GA)
export const CONSENT_EVENT = "pn-consent-change";

const isBrowser = typeof window !== "undefined";

/** Lit le consentement stocké. Retourne null si absent, invalide ou expiré. */
export function readConsent(): ConsentRecord | null {
  if (!isBrowser) return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (
      !parsed ||
      typeof parsed !== "object" ||
      typeof parsed.timestamp !== "number" ||
      parsed.version !== CONSENT_VERSION
    ) {
      return null;
    }
    // Expiré ?
    if (Date.now() - parsed.timestamp > CONSENT_MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Indique si un choix valide existe déjà (donc la bannière ne doit pas s'afficher). */
export function hasStoredConsent(): boolean {
  return readConsent() !== null;
}

/** Enregistre un choix et notifie l'application + Google Consent Mode. */
export function saveConsent(analytics: boolean): ConsentRecord {
  const record: ConsentRecord = {
    categories: { necessary: true, analytics },
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  if (isBrowser) {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    } catch {
      /* localStorage indisponible : on continue en mémoire pour la session */
    }
    applyConsentMode(record.categories);
    window.dispatchEvent(new CustomEvent<ConsentRecord>(CONSENT_EVENT, { detail: record }));
  }
  return record;
}

/** Réinitialise le choix (rouvre la possibilité de reconsentir). */
export function resetConsent(): void {
  if (!isBrowser) return;
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    /* noop */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}

// ----- Google Consent Mode v2 -----

type GtagArgs =
  | ["consent", "default" | "update", Record<string, "granted" | "denied">]
  | [string, ...unknown[]];

declare global {
  interface Window {
    dataLayer?: unknown[];
    // gtag est défini par le script GA ; on le type de façon souple.
    gtag?: (...args: GtagArgs) => void;
  }
}

/** Pousse l'état par défaut (tout refusé sauf le strictement nécessaire). */
export function initConsentModeDefault(): void {
  if (!isBrowser) return;
  window.dataLayer = window.dataLayer || [];
  // gtag minimal au cas où le script GA n'est pas encore chargé : on empile dans dataLayer.
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

/** Met à jour Consent Mode selon les catégories acceptées. */
export function applyConsentMode(categories: ConsentCategories): void {
  if (!isBrowser) return;
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  gtag("consent", "update", {
    analytics_storage: categories.analytics ? "granted" : "denied",
  });
}
