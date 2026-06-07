import type { MetadataRoute } from "next";
import { FOUNDER_URL, SITE_URL } from "./seo-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: FOUNDER_URL,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
