import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data/site-content";

type ProjectCardProps = {
  project: ProjectItem;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`glass-panel group relative overflow-hidden rounded-[32px] transition-transform duration-300 hover:-translate-y-1 ${
        featured ? "p-7 sm:p-8 lg:p-10" : "p-6"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(159,122,234,0.18),transparent_42%)] opacity-70" />
      <div
        className={`relative grid gap-8 ${
          featured ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] lg:items-end" : ""
        }`}
      >
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-outline rounded-full border-primary/20 bg-primary/10 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-primary">
              {project.category}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-base-content/40">
              {featured ? "Main Highlight" : "Capability Sample"}
            </span>
          </div>

          <h3
            className={`mt-6 text-balance font-semibold text-base-content ${
              featured ? "text-3xl sm:text-4xl" : "text-2xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-4 text-pretty text-base leading-8 text-base-content/70">
            {project.description}
          </p>
          <p className="mt-4 text-pretty text-sm leading-7 text-base-content/55 sm:text-base">
            {project.outcome}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-sm text-base-content/72"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.actions[0].href}
              className="btn btn-primary rounded-full border-0 px-5 text-sm font-medium"
            >
              {project.actions[0].label}
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={project.actions[1].href}
              className="btn btn-ghost rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-base-content hover:border-primary/35 hover:bg-primary/10"
            >
              {project.actions[1].label}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[28px] border border-white/10 bg-black/35 p-4 sm:p-5">
            <div className="grid gap-3">
              {project.highlights.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[22px] border border-white/10 px-4 py-4 ${
                    index === 1 ? "bg-primary/12" : "bg-white/5"
                  }`}
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-base-content/40">
                    {featured ? `Focus 0${index + 1}` : `Detail 0${index + 1}`}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-7 text-base-content/82">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
