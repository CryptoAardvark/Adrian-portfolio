"use client";

import type React from "react";
import { motion } from "framer-motion";
import type { skillHighlights as skillHighlightsData } from "@/data/content";

type SkillHighlight = (typeof skillHighlightsData)[number];

type SkillHighlightsProps = {
  highlights: SkillHighlight[];
};

const highlightIcons: Record<
  SkillHighlight["icon"],
  { gradient: string; svg: React.ReactElement }
> = {
  stack: {
    gradient: "from-[#5DE0F5] via-[#004CFB] to-[#6B73FF]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-black/80">
        <path
          d="M4 8 12 4l8 4-8 4-8-4Zm0 8 8 4 8-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4 12 8 4 8-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  spark: {
    gradient: "from-[#FFE985] via-[#FA742B] to-[#D4145A]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-black/80">
        <path
          d="M12 2v6M12 16v6M4 12h6M14 12h6M6 6l4 4M14 14l4 4M6 18l4-4M14 10l4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  cloud: {
    gradient: "from-[#89F7FE] via-[#66A6FF] to-[#A7BFE8]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-black/80">
        <path
          d="M7.5 18h9a3.5 3.5 0 0 0 0-7h-.4A4.5 4.5 0 1 0 7.5 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  brush: {
    gradient: "from-[#F9D423] via-[#FF4E50] to-[#E1EEC3]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-black/80">
        <path
          d="M12 4a8 8 0 0 0 0 16h2.5a2.5 2.5 0 0 0 0-5H13a1 1 0 0 1-1-1v-2h2a4 4 0 0 0 4-4A4 4 0 0 0 12 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  data: {
    gradient: "from-[#F6D365] via-[#FDA085] to-[#F093FB]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-black/80">
        <ellipse
          cx="12"
          cy="6"
          rx="7"
          ry="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M5 6v12c0 1.657 3.134 3 7 3s7-1.343 7-3V6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  compass: {
    gradient: "from-[#F5F7FA] via-[#B8C6DB] to-[#8BC6EC]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-black/80">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="m14.5 9.5-2 5-3-1 2-5z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
};

export function SkillHighlights({ highlights }: SkillHighlightsProps) {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          Technical proficiency highlights
        </p>
        <h3 className="text-3xl font-semibold text-white">How I add value</h3>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((highlight, index) => {
          const icon =
            highlightIcons[
              highlight.icon as keyof typeof highlightIcons
            ] ?? highlightIcons.stack;

          return (
            <motion.article
              key={highlight.title}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.02] p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-[14px] bg-gradient-to-br ${icon.gradient} shadow-[0_12px_35px_rgba(0,0,0,0.4)]`}
                >
                  {icon.svg}
                </span>
                <h4 className="text-lg font-semibold text-white">
                  {highlight.title}
                </h4>
              </div>
              <p className="mt-4 text-sm text-[var(--text-muted)]">
                {highlight.description}
              </p>
              <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/5 transition duration-300 group-hover:ring-[var(--accent-500)]/50" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}


