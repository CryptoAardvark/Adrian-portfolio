type SkillsGridProps = {
  skills: string[];
};

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <section id="skills" className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          Skill stack
        </p>
        <h3 className="text-3xl font-semibold text-white">Systems I work in</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4"
          >
            <span className="text-sm font-semibold text-white">{skill}</span>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
              Ready
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}


