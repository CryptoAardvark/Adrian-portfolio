import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { contactInfo, contactForm } from "@/data/content";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="space-y-10 rounded-[var(--radius-lg)] border border-white/5 bg-gradient-to-br from-[var(--base-900)] to-[var(--base-950)] px-8 py-12 shadow-[0_50px_150px_rgba(0,0,0,0.45)] md:px-14 md:py-16"
    >
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          Contact
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-white">Get In Touch</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--text-muted)]">
          Let&apos;s connect and discuss potential opportunities. I&apos;m always open to
          collaboration and new projects.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
        <ContactInfo info={contactInfo} />
        <ContactForm form={contactForm} />
      </div>
    </section>
  );
}

