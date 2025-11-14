"use client";

import { motion } from "framer-motion";
import type { skillsSummary as skillsSummaryData } from "@/data/content";

type SkillsSummary = typeof skillsSummaryData;

export function SkillsSummary({ summary }: { summary: SkillsSummary }) {
  return (
    <motion.section
      className="rounded-[var(--radius-lg)] border border-[var(--accent-500)]/40 bg-gradient-to-br from-[var(--base-900)] to-[var(--base-950)] px-10 py-12 shadow-[0_60px_160px_rgba(4,6,20,0.7)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          Professional Summary
        </p>
        <h3 className="mt-3 text-3xl font-semibold text-white">
          {summary.headline}
        </h3>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-[var(--text-muted)]">
          {summary.description}
        </p>
        <p className="mt-3 text-sm font-semibold text-[var(--accent-500)]">
          {summary.stack}
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summary.achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 text-left"
          >
            <p className="text-sm font-semibold text-white">
              {achievement.title}
            </p>
            <p className="mt-2 text-xs text-[var(--text-muted)]">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}


