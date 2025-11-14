"use client";

import { motion } from "framer-motion";
import type { educationHistory as educationData } from "@/data/content";

type EducationItem = (typeof educationData)[number];

type EducationGridProps = {
  education: EducationItem[];
};

export function EducationGrid({ education }: EducationGridProps) {
  const icon = (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-black/80" aria-hidden>
      <path
        d="M3 7.5 12 4l9 3.5-9 3.5-9-3.5Zm0 0V17c0 1 4 3 9 3s9-2 9-3V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 11v9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <section className="rounded-[var(--radius-lg)] border border-white/5 bg-white/[0.02] px-8 py-10 shadow-[0_40px_120px_rgba(5,6,14,0.65)]">
      <div className="mb-8 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5DE0F5] via-[#4D9DE0] to-[#8358FF] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          {icon}
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Education
          </p>
          <h3 className="text-3xl font-semibold text-white">Academic path</h3>
        </div>
      </div>
      <div className="space-y-6">
        {education.map((item) => (
          <motion.article
            key={item.degree}
            className="rounded-3xl border border-white/8 bg-white/[0.04] p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <h4 className="text-xl font-semibold text-white">{item.degree}</h4>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--text-muted)]">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-semibold text-[var(--accent-500)]">
              {item.school}
            </p>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              {item.summary}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


