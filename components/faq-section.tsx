import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import type { FaqContent } from "@/data/site-content";

type FaqSectionProps = {
  faq: FaqContent;
};

export function FaqSection({ faq }: FaqSectionProps) {
  return (
    <section id="faq" className="section-shell">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-10 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <SectionHeading
            eyebrow={faq.eyebrow}
            title={faq.title}
            description={faq.description}
          />
          <a
            href="#contact"
            className="shrink-0 self-start rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-base-content/80 transition-colors hover:border-primary/35 hover:bg-primary/10"
          >
            View All FAQ&apos;s
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {faq.items.map((item) => (
            <article
              key={item.question}
              className="glass-panel flex flex-col rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
            >
              <h3 className="text-xl font-semibold leading-snug text-base-content">
                {item.question}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-base-content/65">
                {item.answer}
              </p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-base-content/75 transition-colors hover:border-primary/35 hover:bg-primary/10"
                >
                  Read More
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
