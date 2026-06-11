// ============================================================
// Constantes du site — URL canonique centralisée
// ============================================================
// Source unique de vérité pour le domaine et les chemins, afin que
// les canonicals, Open Graph, sitemap et JSON-LD restent cohérents.

// Domaine canonique final (utilisé pour les canonicals, le sitemap, le JSON-LD).
// Ne change pas selon l'environnement : c'est l'URL de référence pour Google.
export const SITE_URL = "https://prestigenautic.com";

export const SITE_NAME = "Prestige Nautic";

/**
 * URL de base réelle du déploiement courant, pour résoudre les ressources
 * (notamment les images Open Graph) là où elles existent VRAIMENT :
 *  - en prod sur le vrai domaine si défini (NEXT_PUBLIC_SITE_URL) ;
 *  - sinon sur l'URL Vercel (preview / vercel.app) ;
 *  - sinon en local.
 * Cela évite que l'aperçu de partage casse tant que le domaine final
 * n'est pas branché (les balises pointaient vers prestigenautic.com alors
 * que le site tournait sur *.vercel.app).
 */
export function runtimeBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.startsWith("http") ? explicit : `https://${explicit}`;

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return `https://${vercelProd}`;

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return SITE_URL;
}

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
