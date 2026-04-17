import type { BrandContent } from "@/data/site-content";

type FooterProps = {
  brand: BrandContent;
};

export function Footer({ brand }: FooterProps) {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-base-content">
            {brand.name}
          </p>
          <p className="mt-2 text-sm text-base-content/55">{brand.tagline}</p>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-base-content/45">
          {new Date().getFullYear()} • {brand.personName}
        </p>
      </div>
    </footer>
  );
}
