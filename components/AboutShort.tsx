const quickMetrics = [
  { label: "Projects shipped", value: "50+" },
  { label: "Industries", value: "Fintech · Health · AI" },
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
          Product-minded engineer shaping zero-to-one experiences.
        </h3>
      </div>
      <div className="space-y-6">
        <p className="text-base text-[var(--text-muted)]">
          I’m Aardvark, a full-stack engineer focused on blending product
          strategy with hands-on execution. I build clean, scalable software for
          startups in fintech, health, and AI—shipping real-time dashboards,
          AI-rich workflows, and automation systems that help teams move faster.
        </p>
        <p className="text-base text-[var(--text-muted)]">
          I favor thoughtful architecture, systems thinking, and purposeful UI
          to launch products that feel crafted yet pragmatic.
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


