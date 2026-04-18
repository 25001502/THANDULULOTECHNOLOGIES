import { Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import type { TestimonialsContent } from "@/data/site-content";

type TestimonialsSectionProps = {
  testimonials: TestimonialsContent;
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="section-shell">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-10 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
            description={testimonials.description}
          />
          <a
            href="#contact"
            className="shrink-0 self-start rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-base-content/80 transition-colors hover:border-primary/35 hover:bg-primary/10"
          >
            View All Testimonials
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <article
              key={item.name}
              className="glass-panel flex flex-col rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
            >
              <div className="flex gap-1">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-base-content">
                {item.heading}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-base-content/65">
                {item.quote}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-xs font-semibold text-primary ring-1 ring-primary/25">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-base-content">{item.name}</p>
                  <p className="text-xs text-base-content/50">{item.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
