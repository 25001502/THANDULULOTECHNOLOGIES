import type { Metadata } from "next";

export const SITE_URL = "https://thandululo.tech";
export const CONTACT_EMAIL = "thandululo99@gmail.com";
export const SOCIAL_IMAGE_PATH = "/images/thandululo-technologies-og.png";
export const SOCIAL_IMAGE_ALT =
  "THANDULULO TECHNOLOGIES logo on a black background";
export const FOUNDER_PATH = "/about/thandululo-nengovhela";
export const FOUNDER_URL = `${SITE_URL}${FOUNDER_PATH}`;

export const FOUNDER_PROFILES = [
  "https://github.com/25001502",
  "https://www.linkedin.com/in/nengovhela-thandululo-880080367/",
];

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${FOUNDER_URL}/#person`;
export const SOCIAL_IMAGE = {
  url: SOCIAL_IMAGE_PATH,
  width: 1200,
  height: 630,
  alt: SOCIAL_IMAGE_ALT,
};

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
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE_PATH],
    },
  };
}
