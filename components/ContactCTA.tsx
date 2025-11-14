type ContactCTAProps = {
  heading: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
};

export function ContactCTA({
  heading,
  body,
  buttonHref,
  buttonLabel,
}: ContactCTAProps) {
  return (
    <section
      id="contact"
      className="rounded-[var(--radius-lg)] border border-white/5 bg-gradient-to-br from-[var(--base-900)] to-[var(--base-950)] px-8 py-12 text-center shadow-[0_40px_140px_rgba(0,0,0,0.5)] md:px-16 md:py-16"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
        Contact
      </p>
      <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
        {heading}
      </h3>
      <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--text-muted)]">
        {body}
      </p>
      <a
        href={buttonHref}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--accent-500)] px-8 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-400)]"
      >
        {buttonLabel}
      </a>
    </section>
  );
}


