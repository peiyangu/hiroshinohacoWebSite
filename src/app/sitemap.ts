import type { MetadataRoute } from "next";
import { lineupItems } from "@/data/lineupItems";

const BASE_URL = "https://hiroshinohaco.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["/", "/lineup/", "/menu/"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
    })
  );

  const lineupRoutes: MetadataRoute.Sitemap = lineupItems.map((item) => ({
    url: `${BASE_URL}/lineup/${item.slug}/`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...lineupRoutes];
}
