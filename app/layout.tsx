import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Sora } from "next/font/google";
import "./globals.css";
import {
  CONTACT_EMAIL,
  FOUNDER_ID,
  FOUNDER_PROFILES,
  FOUNDER_URL,
  ORGANIZATION_ID,
  SOCIAL_IMAGE,
  SOCIAL_IMAGE_PATH,
  SITE_URL,
} from "./seo-config";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "THANDULULO TECHNOLOGIES | Founded by Thandululo Nengovhela",
    template: "%s | THANDULULO TECHNOLOGIES",
  },
  description:
    "THANDULULO TECHNOLOGIES is a South African digital solutions company founded by Thandululo Nengovhela, building web platforms, software products, and Gradiate.",
  applicationName: "THANDULULO TECHNOLOGIES",
  authors: [{ name: "Thandululo Nengovhela", url: FOUNDER_URL }],
  creator: "Thandululo Nengovhela",
  publisher: "THANDULULO TECHNOLOGIES",
  category: "Technology",
  verification: {
    google: "ZgsoHu6-mdP91YghuXeA-zPZGVjrUlKvQAEZEKc6Jz8",
  },
  keywords: [
    "THANDULULO TECHNOLOGIES",
    "Thandululo Nengovhela",
    "Digital solutions company",
    "South African software developer",
    "Web platforms",
    "Business websites",
    "Educational technology",
    "Gradiate",
    "South Africa",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "THANDULULO TECHNOLOGIES | Founded by Thandululo Nengovhela",
    description:
      "A South African digital solutions company founded by Thandululo Nengovhela, building scalable products, web platforms, and software.",
    url: SITE_URL,
    siteName: "THANDULULO TECHNOLOGIES",
    locale: "en_ZA",
    type: "website",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "THANDULULO TECHNOLOGIES | Founded by Thandululo Nengovhela",
    description:
      "South African digital solutions company building scalable products, web platforms, and software.",
    images: [SOCIAL_IMAGE_PATH],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "THANDULULO TECHNOLOGIES",
      url: SITE_URL,
      email: CONTACT_EMAIL,
      description:
        "A South African digital solutions company building web platforms, educational technology, and modern software products.",
      founder: {
        "@id": FOUNDER_ID,
      },
      foundingLocation: {
        "@type": "Country",
        name: "South Africa",
      },
    },
    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Thandululo Nengovhela",
      url: FOUNDER_URL,
      jobTitle: "Founder of THANDULULO TECHNOLOGIES",
      worksFor: {
        "@id": ORGANIZATION_ID,
      },
      sameAs: FOUNDER_PROFILES,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "THANDULULO TECHNOLOGIES",
      publisher: {
        "@id": ORGANIZATION_ID,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="thandululo"
      className={`${sora.variable} ${manrope.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
