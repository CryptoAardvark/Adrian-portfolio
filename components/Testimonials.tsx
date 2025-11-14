type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          Testimonials
        </p>
        <h3 className="text-3xl font-semibold text-white">Client reviews</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote
            key={t.author}
            className="rounded-[var(--radius-md)] border border-white/5 bg-white/[0.03] p-6 text-sm text-[var(--text-muted)]"
          >
            <p>“{t.quote}”</p>
            <footer className="mt-6">
              <p className="text-base font-semibold text-white">{t.author}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                {t.role}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}


