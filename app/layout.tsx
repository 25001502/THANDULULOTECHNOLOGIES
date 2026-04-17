import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
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
  title: "Thandululo Technologies | Full Stack Developer & Founder",
  description:
    "Premium landing page for Thandululo Nengovhela, founder of THANDULULO TECHNOLOGIES and creator of Gradiate.",
  keywords: [
    "Thandululo Nengovhela",
    "THANDULULO TECHNOLOGIES",
    "Full Stack Developer",
    "Gradiate",
    "South Africa",
    "Next.js portfolio",
  ],
  openGraph: {
    title: "Thandululo Technologies",
    description:
      "Building practical digital products, student-focused platforms, and modern web experiences.",
    url: "https://thandululo.tech",
    siteName: "Thandululo Technologies",
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
      className={`${sora.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-base-100 text-base-content">{children}</body>
    </html>
  );
}
