import { Blocks, MonitorSmartphone, Rocket, ServerCog } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import type { ReasonsContent } from "@/data/site-content";

const reasonIcons = [Rocket, Blocks, MonitorSmartphone, ServerCog];

type WhyChooseUsSectionProps = {
  reasons: ReasonsContent;
};

export function WhyChooseUsSection({ reasons }: WhyChooseUsSectionProps) {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-10 lg:px-8">
        <SectionHeading
          eyebrow={reasons.eyebrow}
          title={reasons.title}
          description={reasons.description}
          center
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.items.map((reason, index) => {
            const Icon = reasonIcons[index] ?? Blocks;

            return (
              <article
                key={reason.title}
                className="glass-panel rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="shadow-glow flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-base-content">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-base-content/65">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
