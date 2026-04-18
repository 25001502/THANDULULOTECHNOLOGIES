import { ArrowUpRight, Menu } from "lucide-react";
import type { ActionLink, BrandContent, NavLink } from "@/data/site-content";

type NavbarProps = {
  brand: BrandContent;
  links: NavLink[];
  cta: ActionLink;
};

export function Navbar({ brand, links, cta }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="glass-panel navbar rounded-full px-3 sm:px-5">
          <div className="navbar-start min-w-0">
            <a href="#top" className="flex min-w-0 items-center gap-3">
              <div className="shadow-glow flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-sm font-semibold text-primary">
                {brand.monogram}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold uppercase tracking-[0.16em] text-base-content">
                  {brand.name}
                </p>
                <p className="truncate font-mono text-[0.68rem] uppercase tracking-[0.24em] text-base-content/45">
                  Digital Solutions Company
                </p>
              </div>
            </a>
          </div>

          <div className="navbar-end gap-2">
            <nav className="hidden items-center gap-2 lg:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-base-content/70 hover:bg-white/5 hover:text-base-content"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href={cta.href}
              className="btn btn-primary hidden rounded-full border-0 px-5 text-sm font-medium shadow-glow sm:inline-flex"
            >
              {cta.label}
              <ArrowUpRight className="size-4" />
            </a>

            <div className="dropdown dropdown-end lg:hidden">
              <label
                tabIndex={0}
                className="btn btn-ghost rounded-full border border-white/10 bg-white/5 px-3 text-base-content"
                aria-label="Open navigation"
              >
                <Menu className="size-5" />
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content glass-panel mt-3 w-72 rounded-[24px] p-3"
              >
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="rounded-2xl py-3 text-base-content/80">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href={cta.href}
                    className="btn btn-primary rounded-full border-0 font-medium"
                  >
                    {cta.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
