import type { Metadata } from "next";
import Link from "next/link";
import {
  FOUNDER_ID,
  FOUNDER_PATH,
  FOUNDER_PROFILES,
  FOUNDER_URL,
  ORGANIZATION_ID,
  SOCIAL_IMAGE,
  SOCIAL_IMAGE_PATH,
} from "../../seo-config";

export const metadata: Metadata = {
  title: "Thandululo Nengovhela, Founder",
  description:
    "Thandululo Nengovhela is the founder of THANDULULO TECHNOLOGIES, a South African digital solutions company building web platforms, software products, and Gradiate.",
  keywords: [
    "Thandululo Nengovhela",
    "Thandululo Nengovhela founder",
    "THANDULULO TECHNOLOGIES founder",
    "South African software developer",
    "Gradiate founder",
  ],
  alternates: {
    canonical: FOUNDER_PATH,
  },
  openGraph: {
    title: "Thandululo Nengovhela | Founder of THANDULULO TECHNOLOGIES",
    description:
      "Founder building practical digital products, web platforms, educational technology, and modern software solutions.",
    url: FOUNDER_URL,
    type: "profile",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thandululo Nengovhela | Founder of THANDULULO TECHNOLOGIES",
    description:
      "Founder building practical digital products, web platforms, educational technology, and modern software solutions.",
    images: [SOCIAL_IMAGE_PATH],
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: "Thandululo Nengovhela",
  url: FOUNDER_URL,
  jobTitle: "Founder of THANDULULO TECHNOLOGIES",
  description:
    "South African technology founder focused on practical digital products, web platforms, educational technology, and scalable software solutions.",
  worksFor: {
    "@id": ORGANIZATION_ID,
    "@type": "Organization",
    name: "THANDULULO TECHNOLOGIES",
  },
  knowsAbout: [
    "Digital product development",
    "Web platforms",
    "Educational technology",
    "Software development",
  ],
  sameAs: FOUNDER_PROFILES,
};

export default function ThandululoNengovhelaPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <article className="mx-auto max-w-4xl">
        <nav className="mb-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 font-manrope text-sm font-bold tracking-tight"
          >
            <span className="h-4 w-4 rotate-45 rounded-sm bg-[#ef233c]" />
            THANDULULO TECHNOLOGIES
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-white/15 px-5 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300 transition-colors hover:border-[#ef233c] hover:text-white"
          >
            Contact
          </Link>
        </nav>

        <header className="border-b border-white/10 pb-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#ef233c]">
            Founder of THANDULULO TECHNOLOGIES
          </p>
          <h1 className="font-manrope text-5xl font-semibold tracking-tight sm:text-7xl">
            Thandululo Nengovhela
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Thandululo Nengovhela is the founder of THANDULULO TECHNOLOGIES, a
            South African digital solutions company focused on practical,
            scalable web platforms, software products, and educational
            technology.
          </p>
        </header>

        <section className="grid gap-10 py-16 md:grid-cols-[1fr_2fr]">
          <h2 className="font-manrope text-2xl font-semibold">Work and focus</h2>
          <div className="space-y-6 text-base leading-8 text-zinc-400">
            <p>
              His work combines product thinking, software development, and
              user-focused design to turn useful ideas into maintainable
              digital products.
            </p>
            <p>
              Through THANDULULO TECHNOLOGIES, he leads the development of
              Gradiate, a student-focused platform designed to improve access
              to academic opportunities, practical guidance, and important
              information.
            </p>
            <p>
              The company also builds modern web platforms, business websites,
              connected systems, and digital experiences for students,
              organizations, and growth-focused teams.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#ef233c]/30 bg-zinc-950 p-8 sm:p-10">
          <h2 className="font-manrope text-2xl font-semibold">
            Build with THANDULULO TECHNOLOGIES
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            For product, platform, website, or digital solution inquiries,
            contact the company directly.
          </p>
          <a
            href="mailto:thandululo99@gmail.com"
            className="mt-8 inline-flex rounded-full bg-[#ef233c] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700"
          >
            thandululo99@gmail.com
          </a>
        </section>
      </article>
    </main>
  );
}
