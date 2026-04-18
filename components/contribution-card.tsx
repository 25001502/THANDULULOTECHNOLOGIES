import { ArrowUpRight, Sparkles } from "lucide-react";
import type { HeroShowcaseContent } from "@/data/site-content";

type ContributionCardProps = {
  showcase: HeroShowcaseContent;
};

export function ContributionCard({ showcase }: ContributionCardProps) {
  return (
    <article className="glass-panel rounded-[32px] p-6 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-primary">
            <Sparkles className="size-3.5" />
            {showcase.eyebrow}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-base-content sm:text-2xl">
              {showcase.title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-7 text-base-content/65">
              {showcase.description}
            </p>
          </div>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-black/30 px-4 py-3 text-right">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-base-content/45">
            Delivery Lens
          </p>
          <p className="mt-2 text-sm font-medium text-base-content">
            Products and platforms built for useful outcomes
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-[28px] border border-white/10 bg-black/25 p-4 sm:p-5">
        <div className="flex flex-wrap gap-2">
          {showcase.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-base-content/72"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3">
          {showcase.highlights.map((item, index) => (
            <div
              key={item}
              className="flex items-start justify-between gap-4 rounded-[22px] border border-white/10 bg-white/5 px-4 py-4"
            >
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-base-content/40">
                0{index + 1}
              </div>
              <p className="flex-1 text-sm leading-7 text-base-content/78">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 rounded-[22px] border border-white/10 bg-black/30 px-4 py-4 text-sm">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-base-content/45">
              {showcase.footerLabel}
            </p>
            <p className="mt-2 text-base-content/78">{showcase.footerValue}</p>
          </div>
          <div className="rounded-full border border-primary/20 bg-primary/10 p-3 text-primary">
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </div>
    </article>
  );
}
