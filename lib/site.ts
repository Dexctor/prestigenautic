// ============================================================
// Constantes du site — URL canonique centralisée
// ============================================================
// Source unique de vérité pour le domaine et les chemins, afin que
// les canonicals, Open Graph, sitemap et JSON-LD restent cohérents.

export const SITE_URL = "https://prestigenautic.com";

export const SITE_NAME = "Prestige Nautic";

/** Construit une URL absolue à partir d'un chemin (« /pages/... »). */
export function absoluteUrl(path = "/"): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path === "/" ? "" : path}` || SITE_URL;
}

// Chemins réels des routes Next (sans extension .html)
export const ROUTES = {
  home: "/",
  configurateur: "/pages/configurateur",
  teckSynthetique: "/pages/teck-synthetique",
  teckNaturel: "/pages/teck-naturel",
  vaigrage: "/pages/vaigrage",
  refitIntegral: "/pages/refit-integral",
  soudureInox: "/pages/soudure-inox",
  articles: "/articles",
  articleEntretienTeck: "/pages/entretien-teck-bateau",
  articleVaigrageGuide: "/pages/vaigrage-bateau-guide-complet",
  articleTeckComparatif: "/pages/teck-synthetique-ou-naturel",
  mentionsLegales: "/pages/mentions-legales",
  politiqueConfidentialite: "/pages/politique-confidentialite",
  cgv: "/pages/cgv",
} as const;
