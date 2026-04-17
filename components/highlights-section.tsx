import {
  Blocks,
  GraduationCap,
  LayoutDashboard,
  MonitorSmartphone,
  Rocket,
  ServerCog,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import type { HighlightItem } from "@/data/site-content";

const iconMap = [
  MonitorSmartphone,
  LayoutDashboard,
  Rocket,
  GraduationCap,
  ServerCog,
  Blocks,
];

type HighlightsSectionProps = {
  highlights: HighlightItem[];
};

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section id="highlights" className="section-shell">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-10 lg:px-8">
        <SectionHeading
          eyebrow="Work Highlights"
          title="Capabilities built for founders, products, and modern platforms"
          description="From polished landing pages to Firebase-powered student platforms, these cards show the kinds of systems and interfaces this studio can shape."
          center
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = iconMap[index] ?? Blocks;

            return (
              <article
                key={highlight.title}
                className="glass-panel rounded-[30px] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="shadow-glow flex size-[3.25rem] items-center justify-center rounded-[20px] bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-base-content">
                  {highlight.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-base-content/65">
                  {highlight.description}
                </p>
                <div className="mt-6 space-y-3">
                  {highlight.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-[20px] border border-white/10 bg-black/20 px-4 py-3 text-sm text-base-content/72"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
