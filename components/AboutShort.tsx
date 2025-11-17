const quickMetrics = [
  { label: "Projects shipped", value: "20+" },
  { label: "Industries", value: "AI/ML · Fintech · Health" },
  { label: "Clients", value: "Startups & scale-ups" },
];

export function AboutShort() {
  return (
    <section
      id="about"
      className="grid gap-10 rounded-[var(--radius-lg)] border border-white/5 bg-white/[0.02] px-8 py-12 md:grid-cols-[0.8fr,1.2fr]"
    >
      <div className="space-y-5">
        <div className="h-32 w-32 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-[0_30px_90px_rgba(0,0,0,0.4)]" />
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          About me
        </p>
        <h3 className="text-3xl font-semibold text-white">
          AI/ML & Backend Engineer delivering scalable, production-ready systems.
        </h3>
      </div>
      <div className="space-y-6">
        <p className="text-base text-[var(--text-muted)]">
          I’m Adrian Garcia, a backend and AI/ML engineer focused on building
          high-performance platforms, AI agents, and cloud-native systems. I
          partner with startups and teams to ship robust SaaS applications,
          intelligent workflows, and scalable automation that drive measurable impact.
        </p>
        <p className="text-base text-[var(--text-muted)]">
          I emphasize thoughtful architecture, system-level thinking, and
          maintainable code to deliver products that are both reliable and
          innovative.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {quickMetrics.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-4"
            >
              <p className="text-sm text-[var(--text-muted)]">{item.label}</p>
              <p className="text-lg font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


