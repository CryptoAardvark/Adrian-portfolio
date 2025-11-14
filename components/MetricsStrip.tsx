type Metric = {
  value: string;
  label: string;
  detail: string;
};

type MetricsStripProps = {
  metrics: Metric[];
};

export function MetricsStrip({ metrics }: MetricsStripProps) {
  return (
    <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-[var(--radius-md)] border border-white/5 bg-white/[0.03] p-6 shadow-[0_30px_80px_rgba(5,6,14,0.4)] transition hover:bg-white/[0.06]"
        >
          <p className="text-3xl font-semibold text-white">{metric.value}</p>
          <p className="text-sm font-semibold text-[var(--text-muted)]">
            {metric.label}
          </p>
          <p className="mt-3 text-sm text-[var(--text-muted)]">{metric.detail}</p>
        </div>
      ))}
    </section>
  );
}


