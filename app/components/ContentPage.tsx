import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SITE_URL } from "../seo-config";
import { siteContent } from "@/data/site-content";

type Breadcrumb = {
  label: string;
  href: string;
};

type RelatedLink = {
  title: string;
  description: string;
  href: string;
};

type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
  children: ReactNode;
  relatedLinks?: RelatedLink[];
  schema?: Record<string, unknown>;
};

const primaryNavigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gradiate", href: "/products/gradiate" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function ContentPage({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  relatedLinks = [],
  schema,
}: ContentPageProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/90 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-3 font-manrope text-sm font-bold tracking-tight"
            >
              <span className="h-4 w-4 rotate-45 rounded-sm bg-[#ef233c]" />
              <span className="hidden sm:inline">THANDULULO TECHNOLOGIES</span>
              <span className="sm:hidden">TT</span>
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-5 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300 transition-colors hover:border-[#ef233c] hover:text-white"
            >
              Start a project
            </Link>
          </nav>
          <nav className="mt-5 flex gap-5 overflow-x-auto border-t border-white/10 pt-4 md:hidden">
            {primaryNavigation.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 text-xs font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-white/10 bg-gradient-to-b from-[#1a0505] to-black px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-2 text-xs text-zinc-500"
            >
              {breadcrumbs.map((item, index) => (
                <span key={item.href} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </span>
              ))}
            </nav>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#ef233c]">
              {eyebrow}
            </p>
            <h1 className="max-w-4xl font-manrope text-5xl font-semibold tracking-tight sm:text-7xl">
              {title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl">
              {description}
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-20">{children}</article>

        {relatedLinks.length > 0 && (
          <section className="border-t border-white/10 bg-zinc-950/60 px-6 py-20">
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#ef233c]">
                Continue exploring
              </p>
              <h2 className="font-manrope text-3xl font-semibold">Related pages</h2>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {relatedLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-2xl border border-white/10 bg-black p-6 transition-colors hover:border-[#ef233c]/60"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-manrope text-lg font-semibold">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-500">{item.description}</p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-zinc-600 transition-colors group-hover:text-[#ef233c]" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-zinc-500">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} THANDULULO TECHNOLOGIES. Founded by{" "}
            <Link
              href="/about/thandululo-nengovhela"
              className="transition-colors hover:text-white"
            >
              Thandululo Nengovhela
            </Link>
            .
          </p>
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="transition-colors hover:text-white"
          >
            {siteContent.contact.email}
          </a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </div>
  );
}

export function ContentSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-8 border-b border-white/10 py-14 first:pt-0 last:border-0 last:pb-0 md:grid-cols-[1fr_2fr]">
      <h2 className="font-manrope text-2xl font-semibold">{title}</h2>
      <div className="space-y-6 text-base leading-8 text-zinc-400">{children}</div>
    </section>
  );
}

export function ContentCards({
  items,
}: {
  items: { title: string; description: string; href?: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => {
        const content = (
          <>
            <h3 className="font-manrope text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-500">{item.description}</p>
            {item.href && (
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ef233c]">
                Learn more <ArrowRight className="h-3 w-3" />
              </span>
            )}
          </>
        );

        return item.href ? (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-2xl border border-white/10 bg-zinc-950 p-6 transition-colors hover:border-[#ef233c]/60"
          >
            {content}
          </Link>
        ) : (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
            {content}
          </div>
        );
      })}
    </div>
  );
}

export function ContentList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-zinc-300">
          <Check className="mt-1 h-4 w-4 shrink-0 text-[#ef233c]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ContactCta({
  title = "Have a project in mind?",
  description = "Share the problem you want to solve and the outcome you need.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="mt-16 rounded-2xl border border-[#ef233c]/30 bg-zinc-950 p-8 sm:p-10">
      <h2 className="font-manrope text-2xl font-semibold">{title}</h2>
      <p className="mt-4 max-w-2xl leading-7 text-zinc-400">{description}</p>
      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ef233c] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700"
      >
        Start a conversation <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
