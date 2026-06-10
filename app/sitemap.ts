import type { MetadataRoute } from "next";
import { SITE_URL, ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Date de dernière mise à jour (statique pour un build reproductible).
  const lastModified = new Date("2026-06-10");

  const entries: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: ROUTES.home, priority: 1.0, changeFrequency: "monthly" },
    { path: ROUTES.teckSynthetique, priority: 0.9, changeFrequency: "monthly" },
    { path: ROUTES.teckNaturel, priority: 0.9, changeFrequency: "monthly" },
    { path: ROUTES.vaigrage, priority: 0.9, changeFrequency: "monthly" },
    { path: ROUTES.refitIntegral, priority: 0.9, changeFrequency: "monthly" },
    { path: ROUTES.soudureInox, priority: 0.9, changeFrequency: "monthly" },
    { path: ROUTES.configurateur, priority: 0.8, changeFrequency: "monthly" },
    { path: ROUTES.articles, priority: 0.7, changeFrequency: "weekly" },
    { path: ROUTES.articleEntretienTeck, priority: 0.6, changeFrequency: "yearly" },
    { path: ROUTES.articleVaigrageGuide, priority: 0.6, changeFrequency: "yearly" },
    { path: ROUTES.articleTeckComparatif, priority: 0.6, changeFrequency: "yearly" },
    { path: ROUTES.mentionsLegales, priority: 0.2, changeFrequency: "yearly" },
    { path: ROUTES.politiqueConfidentialite, priority: 0.2, changeFrequency: "yearly" },
    { path: ROUTES.cgv, priority: 0.2, changeFrequency: "yearly" },
  ];

  return entries.map((e) => ({
    url: `${SITE_URL}${e.path === "/" ? "" : e.path}`,
    lastModified,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
