import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prestige Nautic — Artisan teck nautique Toulon & Côte d'Azur",
    short_name: "Prestige Nautic",
    description:
      "Artisan nautique haut de gamme à Toulon : teck synthétique, teck naturel, vaigrage, refit et soudure sur mesure sur la Côte d'Azur.",
    start_url: "/",
    display: "standalone",
    background_color: "#03101e",
    theme_color: "#061a2e",
    lang: "fr",
    icons: [
      { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
