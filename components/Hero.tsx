import Link from "next/link";

type HeroContent = {
  badge: string;
  title: string;
  subtitle: string;
  highlight: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-[var(--radius-lg)] border border-white/5 bg-gradient-to-br from-[var(--base-900)] to-[var(--base-950)] px-8 py-16 shadow-[0_50px_150px_rgba(0,0,0,0.45)] md:px-14 md:py-20"
    >
      <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-[var(--accent-500)]/20 blur-[70px]" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#4951ff]/10 blur-[120px]" />
      <div className="relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[var(--accent-500)]">
            {content.badge}
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            {content.title}
          </h1>
          <p className="text-base text-[var(--text-muted)] md:text-lg">
            {content.subtitle}
          </p>
          <p className="text-sm font-semibold text-[var(--accent-500)]">
            {content.highlight}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent-500)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-400)]"
            >
              {content.primaryCta.label}
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              {content.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="grid w-full max-w-md gap-6">
            <div className="rounded-[var(--radius-md)] border border-white/5 bg-white/5 p-6 text-center shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
              <p className="text-sm uppercase tracking-[0.4em] text-[var(--text-muted)]">
                Focus
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                Product + Engineering
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Converging design taste, technical rigor, and fast iteration.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-left">
              {["Delivery", "AI Systems", "Cloud"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/5 bg-white/5 px-4 py-5"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                    {item}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Elite
                  </p>
                  <span className="mt-1 inline-flex rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-[var(--accent-500)]">
                    2025
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


