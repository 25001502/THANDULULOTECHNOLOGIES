import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { BrandContent, FounderContent } from "@/data/site-content";

type FounderNoteSectionProps = {
  founder: FounderContent;
  brand: BrandContent;
  hasAvatar: boolean;
};

export function FounderNoteSection({
  founder,
  brand,
  hasAvatar,
}: FounderNoteSectionProps) {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-[32px] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.48fr)_minmax(0,1fr)] lg:items-center">
            <div className="flex items-center gap-4 rounded-[28px] border border-white/10 bg-black/25 p-4 sm:p-5">
              <div className="avatar">
                {hasAvatar ? (
                  <div className="w-[4.5rem] rounded-full ring-1 ring-white/10">
                    <Image
                      src="/avatar.jpg"
                      alt={brand.founderName}
                      width={72}
                      height={72}
                    />
                  </div>
                ) : (
                  <div className="flex size-[4.5rem] items-center justify-center rounded-full bg-primary/15 font-mono text-lg font-semibold text-primary ring-1 ring-primary/25">
                    TN
                  </div>
                )}
              </div>

              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-primary">
                  {founder.eyebrow}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-base-content">
                  {brand.founderName}
                </h3>
                <p className="mt-1 text-sm text-base-content/60">
                  Founder, THANDULULO TECHNOLOGIES
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-balance text-3xl font-semibold text-base-content sm:text-4xl">
                {founder.title}
              </h2>
              <p className="mt-5 max-w-3xl text-pretty text-base leading-8 text-base-content/70 sm:text-lg">
                {founder.description}
              </p>
              <p className="mt-5 max-w-3xl text-pretty text-sm leading-7 text-base-content/62 sm:text-base">
                {founder.body}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {founder.principles.map((principle) => (
                  <span
                    key={principle}
                    className="badge badge-outline rounded-full border-white/10 bg-white/5 px-4 py-4 text-sm text-base-content/75"
                  >
                    {principle}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <a
                  href={founder.cta.href}
                  className="btn btn-ghost rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-base-content hover:border-primary/35 hover:bg-primary/10"
                >
                  {founder.cta.label}
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
