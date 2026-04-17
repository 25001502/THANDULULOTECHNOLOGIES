import Image from "next/image";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { ContributionCard } from "@/components/contribution-card";
import { StatCard } from "@/components/stat-card";
import type { BrandContent, HeroContent } from "@/data/site-content";

type HeroProps = {
  brand: BrandContent;
  hero: HeroContent;
  hasAvatar: boolean;
};

export function Hero({ brand, hero, hasAvatar }: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div
        className="hero-orb left-[-10rem] top-24 size-[22rem] bg-primary/35"
        aria-hidden="true"
      />
      <div
        className="hero-orb right-[-6rem] top-16 size-[18rem] bg-secondary/30"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center lg:gap-16 lg:px-8">
        <div className="relative space-y-8">
          <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-3 py-3 shadow-glow backdrop-blur-xl">
            <div className="avatar">
              {hasAvatar ? (
                <div className="w-14 rounded-full ring-1 ring-white/10">
                  <Image
                    src="/avatar.jpg"
                    alt={`${brand.personName} avatar`}
                    width={56}
                    height={56}
                    priority
                  />
                </div>
              ) : (
                <div className="flex size-14 items-center justify-center rounded-full bg-primary/15 font-mono text-lg font-semibold text-primary ring-1 ring-primary/25">
                  TN
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-base-content">{brand.personName}</p>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-base-content/45">
                {brand.domain}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="badge badge-success badge-outline rounded-full border-success/25 bg-success/10 px-4 py-3 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-success">
              <Sparkles className="mr-1 size-3.5" />
              {hero.availability}
            </div>
            <div className="badge badge-outline rounded-full border-white/10 bg-white/5 px-4 py-3 text-sm text-base-content/65">
              <MapPin className="mr-2 size-4 text-primary" />
              {hero.location}
            </div>
          </div>

          <div className="space-y-5">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-primary/80 sm:text-sm">
              {hero.role}
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] text-base-content sm:text-6xl lg:text-7xl">
              {hero.heading}
            </h1>
            <p className="max-w-3xl text-balance text-xl text-primary sm:text-2xl">
              {hero.supportLine}
            </p>
            <p className="max-w-2xl text-pretty text-base leading-8 text-base-content/72 sm:text-lg">
              {hero.paragraph}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {hero.techStack.map((item) => (
              <span
                key={item}
                className="badge badge-outline rounded-full border-white/10 bg-white/5 px-4 py-4 text-sm text-base-content/75"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-5 lg:pl-4">
          <ContributionCard />

          <div className="grid gap-4 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={hero.primaryCta.href}
              className="btn btn-primary rounded-full border-0 px-6 text-sm font-medium shadow-glow"
            >
              {hero.primaryCta.label}
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="btn btn-ghost rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-base-content hover:border-primary/35 hover:bg-primary/10"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
