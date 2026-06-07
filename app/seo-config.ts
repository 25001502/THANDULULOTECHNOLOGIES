import type { Metadata } from "next";

export const SITE_URL = "https://thandululo.tech";
export const FOUNDER_PATH = "/about/thandululo-nengovhela";
export const FOUNDER_URL = `${SITE_URL}${FOUNDER_PATH}`;

export const FOUNDER_PROFILES = [
  "https://github.com/25001502",
  "https://www.linkedin.com/in/nengovhela-thandululo-880080367/",
];

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${FOUNDER_URL}/#person`;

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | THANDULULO TECHNOLOGIES`,
      description,
      url: `${SITE_URL}${path}`,
      type: "website",
    },
  };
}
