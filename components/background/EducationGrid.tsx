"use client";

import { motion } from "framer-motion";
import type { educationHistory as educationData } from "@/data/content";

type EducationItem = (typeof educationData)[number];

type EducationGridProps = {
  education: EducationItem[];
};

export function EducationGrid({ education }: EducationGridProps) {
  return (
    <section className="rounded-[var(--radius-lg)] border border-white/5 bg-white/[0.02] px-8 py-10 shadow-[0_40px_120px_rgba(5,6,14,0.65)]">
      <div className="mb-8 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[var(--accent-500)]">
          📚
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


