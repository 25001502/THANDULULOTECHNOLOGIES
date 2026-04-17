import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import type { ProjectsContent } from "@/data/site-content";

type ProjectsSectionProps = {
  projects: ProjectsContent;
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [featuredProject, ...otherProjects] = projects.items;

  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-10 lg:px-8">
        <SectionHeading
          eyebrow={projects.eyebrow}
          title={projects.title}
          description={projects.description}
        />

        <ProjectCard project={featuredProject} featured />

        <div className="grid gap-5 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
