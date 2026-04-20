import { GitBranch, Link, Mail, Send, X } from "lucide-react";
import type { BrandContent, FooterContent } from "../data/site-content";

type FooterProps = {
  brand: BrandContent;
  footer: FooterContent;
};

const socialIconMap: Record<string, typeof Mail> = {
  GitHub: GitBranch,
  LinkedIn: Link,
  Twitter: X,
  Email: Mail,
};

export function Footer({ brand, footer }: FooterProps) {
  return (
    <footer className="border-t border-white/8 bg-black/30">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))]">
          {/* Brand + newsletter column */}
          <div className="space-y-5">
            <a href="#top" className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 font-mono text-sm font-semibold text-primary ring-1 ring-primary/25">
                {brand.monogram}
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-base-content">
                {brand.name.split(" ")[0]}
              </span>
            </a>
            <p className="max-w-xs text-sm leading-7 text-base-content/55">
              {footer.newsletterDescription}
            </p>
            <form className="flex max-w-xs overflow-hidden rounded-full border border-white/12 bg-white/5">
              <div className="flex flex-1 items-center gap-2 px-4 py-2.5">
                <Mail className="size-4 shrink-0 text-base-content/35" />
                <input
                  type="email"
                  placeholder={footer.newsletterPlaceholder}
                  className="min-w-0 flex-1 bg-transparent text-sm text-base-content placeholder:text-base-content/35 focus:outline-none"
                />
              </div>
              <button
                type="button"
                aria-label="Subscribe"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-content transition-opacity hover:opacity-80"
              >
                <Send className="size-4" />
              </button>
            </form>
          </div>

          {/* Nav columns */}
          {footer.columns.map((col) => (
            <div key={col.heading} className="space-y-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-base-content/45">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-base-content/60 transition-colors hover:text-base-content"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-base-content/40">{footer.legal}</p>
          <div className="flex items-center gap-3">
            {footer.socials.map((social) => {
              const Icon = socialIconMap[social.label] ?? Mail;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-base-content/60 transition-colors hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

