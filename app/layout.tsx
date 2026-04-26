import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Sora } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://thandululo.tech"),
  title: "THANDULULO TECHNOLOGIES | Digital Solutions Company",
  description:
    "THANDULULO TECHNOLOGIES builds digital products, web platforms, and modern software solutions, including Gradiate.",
  keywords: [
    "THANDULULO TECHNOLOGIES",
    "Digital solutions company",
    "Web platforms",
    "Business websites",
    "Educational technology",
    "Gradiate",
    "South Africa",
  ],
  openGraph: {
    title: "THANDULULO TECHNOLOGIES",
    description:
      "Building scalable digital products, web platforms, and smart software solutions with an impact-driven approach.",
    url: "https://thandululo.tech",
    siteName: "THANDULULO TECHNOLOGIES",
    type: "website",
  },
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
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
