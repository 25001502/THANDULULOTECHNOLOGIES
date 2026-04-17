import { ArrowUpRight, FileDown } from "lucide-react";
import type { ResumeContent } from "@/data/site-content";

type ResumeCtaSectionProps = {
  resume: ResumeContent;
  hasResume: boolean;
};

export function ResumeCtaSection({
  resume,
  hasResume,
}: ResumeCtaSectionProps) {
  const primaryHref = hasResume ? resume.primaryCta.href : resume.secondaryCta.href;
  const primaryLabel = hasResume ? resume.primaryCta.label : resume.secondaryCta.label;

  return (
    <section id="resume" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel overflow-hidden rounded-[34px] p-7 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(240px,0.95fr)] lg:items-center">
            <div>
              <div className="badge badge-outline rounded-full border-white/10 bg-white/5 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-primary">
                {resume.eyebrow}
              </div>
              <h2 className="mt-6 max-w-3xl text-balance text-3xl font-semibold text-base-content sm:text-4xl lg:text-5xl">
                {resume.title}
              </h2>
              <p className="mt-5 max-w-3xl text-pretty text-base leading-8 text-base-content/70 sm:text-lg">
                {resume.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {resume.chips.map((chip) => (
                  <span
                    key={chip}
                    className="badge badge-outline rounded-full border-white/10 bg-black/20 px-4 py-4 text-sm text-base-content/75"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/30 p-6">
              <div className="shadow-glow flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <FileDown className="size-6" />
              </div>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.28em] text-base-content/45">
                Experience Access
              </p>
              <p className="mt-3 text-sm leading-7 text-base-content/65">
                {hasResume
                  ? "A resume file is already available, so visitors can download it directly."
                  : "This section is already wired for a future resume file without changing the layout or component structure."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={primaryHref}
                  download={hasResume ? true : undefined}
                  className="btn btn-primary rounded-full border-0 px-5 text-sm font-medium"
                >
                  {primaryLabel}
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={resume.secondaryCta.href}
                  className="btn btn-ghost rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-base-content hover:border-primary/35 hover:bg-primary/10"
                >
                  {resume.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
