import {
  Blocks,
  BriefcaseBusiness,
  GraduationCap,
  LayoutDashboard,
} from "lucide-react";
import type { CapabilityItem } from "@/data/site-content";

const capabilityIcons = [
  Blocks,
  LayoutDashboard,
  GraduationCap,
  BriefcaseBusiness,
];

type CapabilityStripProps = {
  items: CapabilityItem[];
};

export function CapabilityStrip({ items }: CapabilityStripProps) {
  return (
    <section className="pb-8 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = capabilityIcons[index] ?? Blocks;

            return (
              <article
                key={item.title}
                className="glass-panel rounded-[28px] p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="shadow-glow flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-base-content">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-base-content/65">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
