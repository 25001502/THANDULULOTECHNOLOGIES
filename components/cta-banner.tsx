import { ArrowUpRight } from "lucide-react";
import type { CtaBannerContent } from "@/data/site-content";

type CtaBannerProps = {
  banner: CtaBannerContent;
};

export function CtaBanner({ banner }: CtaBannerProps) {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel relative overflow-hidden rounded-4xl p-8 sm:p-10 lg:p-14">
          <div
            className="hero-orb -right-24 -top-24 size-112 bg-primary/20"
            aria-hidden="true"
          />
          <div
            className="hero-orb -bottom-20 left-1/2 size-80 bg-secondary/15"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-semibold leading-tight text-base-content sm:text-4xl lg:text-5xl">
                {banner.title}
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-8 text-base-content/70 sm:text-lg">
                {banner.description}
              </p>
            </div>
            <a
              href={banner.cta.href}
              className="btn btn-primary shrink-0 self-start rounded-full border-0 px-8 py-3 text-sm font-medium shadow-glow lg:self-auto"
            >
              {banner.cta.label}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
