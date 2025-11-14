import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[var(--base-950)]/80 backdrop-blur-2xl">
      <div className="page-shell flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold uppercase tracking-widest text-[var(--accent-500)]">
            AV
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
              Aardvark
            </p>
            <p className="text-base font-semibold text-white">
              Product-Focused Engineer
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden flex-col text-right text-xs text-[var(--text-muted)] sm:flex">
            <span>hello@example.com</span>
            <span>+1 (555) 010-2266</span>
          </div>
          <Link
            href="#contact"
            className="rounded-full bg-[var(--accent-500)] px-5 py-2 text-sm font-semibold text-black shadow-[var(--accent-glow)] transition hover:bg-[var(--accent-400)]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}


