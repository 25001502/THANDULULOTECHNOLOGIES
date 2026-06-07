import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    {
      path: "/about/thandululo-nengovhela",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    {
      path: "/services/web-development",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/services/educational-technology",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/products/gradiate",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/insights", changeFrequency: "weekly" as const, priority: 0.8 },
    {
      path: "/insights/building-scalable-web-platforms",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/insights/designing-useful-edtech-platforms",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date("2026-06-07"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
