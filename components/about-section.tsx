import { Blocks, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import type { AboutContent } from "@/data/site-content";

const icons = [Blocks, GraduationCap, BriefcaseBusiness];

type AboutSectionProps = {
  about: AboutContent;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div className="glass-panel rounded-[32px] p-7 sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              description={about.description}
            />
            <p className="mt-8 max-w-2xl text-pretty text-base leading-8 text-base-content/70 sm:text-lg">
              {about.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="badge badge-outline rounded-full border-white/10 bg-white/5 px-4 py-4 text-sm text-base-content/75">
                South Africa based
              </span>
              <span className="badge badge-outline rounded-full border-white/10 bg-white/5 px-4 py-4 text-sm text-base-content/75">
                Full stack delivery
              </span>
              <span className="badge badge-outline rounded-full border-white/10 bg-white/5 px-4 py-4 text-sm text-base-content/75">
                Startup-minded execution
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {about.cards.map((card, index) => {
              const Icon = icons[index] ?? Blocks;

              return (
                <article
                  key={card.title}
                  className="glass-panel rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="shadow-glow flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-base-content">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-base-content/65">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-base-content/72"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
