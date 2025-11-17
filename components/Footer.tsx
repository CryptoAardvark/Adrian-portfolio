export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 text-sm text-[var(--text-muted)]">
      <div className="page-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Adrian Garcia. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/AdrianEGraphene" className="transition hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/adrian-garcia-80718b391/" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:AdrianEG2026@gmail.com
" className="transition hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}


