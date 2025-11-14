"use client";

import { motion } from "framer-motion";
import type { experienceTimeline as experienceData } from "@/data/content";

type Experience = (typeof experienceData)[number];

type ExperienceTimelineProps = {
  experience: Experience[];
};

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <section
      id="background"
      className="rounded-[var(--radius-lg)] border border-white/5 bg-white/[0.02] px-8 py-10 shadow-[0_40px_120px_rgba(5,6,14,0.65)]"
    >
      <div className="mb-8 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[var(--accent-500)]">
          📅
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Experience
          </p>
          <h3 className="text-3xl font-semibold text-white">Timeline</h3>
        </div>
      </div>
      <div className="relative pl-6">
        <div className="absolute left-5 top-3 h-[calc(100%-1.5rem)] w-[2px] bg-gradient-to-b from-[var(--accent-500)] to-transparent" />
        <div className="space-y-8">
          {experience.map((role) => (
            <motion.article
              key={role.company}
              className="relative rounded-3xl border border-white/8 bg-white/[0.03] p-6 pl-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <span className="absolute left-0 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-[var(--accent-500)] shadow-[0_0_20px_rgba(63,233,197,0.7)]" />
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                {role.period}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                <h4 className="text-2xl font-semibold text-white">
                  {role.company}
                </h4>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--text-muted)]">
                  {role.location}
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-[var(--accent-500)]">
                {role.role}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-[var(--accent-500)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


