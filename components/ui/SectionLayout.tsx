import type { ReactNode } from "react";

export function SectionLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="page-shell max-w-5xl space-y-8 py-16">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          {title}
        </p>
        {subtitle && (
          <p className="max-w-2xl text-sm text-[var(--text-muted)]">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}


