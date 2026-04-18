import {
  BriefcaseBusiness,
  GraduationCap,
  MonitorSmartphone,
  ServerCog,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import type { ServiceIconKey, ServicesContent } from "@/data/site-content";

const serviceIconMap: Record<ServiceIconKey, typeof MonitorSmartphone> = {
  web: MonitorSmartphone,
  edtech: GraduationCap,
  business: BriefcaseBusiness,
  systems: ServerCog,
};

type SolutionsSectionProps = {
  services: ServicesContent;
};

export function SolutionsSection({ services }: SolutionsSectionProps) {
  return (
    <section id="solutions" className="section-shell">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-10 lg:px-8">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {services.items.map((service) => {
            const Icon = serviceIconMap[service.icon];

            return (
              <article
                key={service.title}
                className="glass-panel rounded-[30px] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="shadow-glow flex size-[3.25rem] items-center justify-center rounded-[20px] bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-base-content">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-base-content/65">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.bullets.map((bullet) => (
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
    </section>
  );
}
