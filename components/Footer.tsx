export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 text-sm text-[var(--text-muted)]">
      <div className="page-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Aardvark. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com" className="transition hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:hello@example.com" className="transition hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}


