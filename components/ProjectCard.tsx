type Project = {
  id: string;
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  image: string;
  link: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-white/5 bg-white/[0.03]">
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-white/10 to-transparent">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover rounded-b-none rounded-t-[var(--radius-md)] transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            {project.description}
          </p>
        </div>
        <p className="text-sm font-semibold text-white">{project.outcome}</p>
        <div className="flex flex-wrap gap-2 text-xs text-[var(--text-muted)]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-500)] transition hover:text-white"
          >
            View case study
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}


