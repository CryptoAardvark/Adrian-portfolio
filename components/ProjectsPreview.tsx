import type { ComponentProps } from "react";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

type Project = ComponentProps<typeof ProjectCard>["project"];

type ProjectsPreviewProps = {
  projects: Project[];
};

export function ProjectsPreview({ projects }: ProjectsPreviewProps) {
  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Featured Work
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Spotlight projects
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
            A condensed look at recent AI, platform, and product launches.
          </p>
        </div>
        <Link
          href="/portfolio"
          className="self-start rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
        >
          View full portfolio
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}


