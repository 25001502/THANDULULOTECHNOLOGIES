import type { BrandContent, NavLink } from "@/data/site-content";

type FooterProps = {
  brand: BrandContent;
  links: NavLink[];
};

export function Footer({ brand, links }: FooterProps) {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-base-content">
            {brand.name}
          </p>
          <p className="mt-2 max-w-md text-sm text-base-content/55">{brand.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-base-content/65">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-base-content">
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-right">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-base-content/45">
            {new Date().getFullYear()} | {brand.name}
          </p>
          <p className="mt-2 text-sm text-base-content/55">{brand.founderLine}</p>
        </div>
      </div>
    </footer>
  );
}
