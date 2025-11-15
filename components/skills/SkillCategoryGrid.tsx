"use client";

import React from "react";
import { motion } from "framer-motion";
import type { skillCategories as skillCategoriesData } from "@/data/content";

type SkillCategory = (typeof skillCategoriesData)[number];

type SkillCategoryGridProps = {
  categories: SkillCategory[];
};

const iconVariants: Record<
  SkillCategory["icon"],
  { gradient: string; svg: React.ReactElement }
> = {
  laptop: {
    gradient: "from-[#5DE0F5] via-[#4D9DE0] to-[#8358FF]",
    svg: (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className="h-5 w-5 text-black/80"
      >
        <path
          d="M5 6h14a1 1 0 0 1 1 1v8H4V7a1 1 0 0 1 1-1Zm-2 12h18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  network: {
    gradient: "from-[#F8FFAE] via-[#43C6AC] to-[#191654]",
    svg: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-black/80"
        role="img"
        aria-hidden="true"
      >
        <circle cx="12" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 7.5v4.5l-6 5M12 12l6 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  ai: {
    gradient: "from-[#FFD3A5] via-[#FD6585] to-[#8A2387]",
    svg: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-black/80"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 9h6v6H9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  cloud: {
    gradient: "from-[#C6FFDD] via-[#FBD786] to-[#f7797d]",
    svg: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-black/80"
        aria-hidden="true"
      >
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
  palette: {
    gradient: "from-[#a1c4fd] via-[#c2e9fb] to-[#a18cd1]",
    svg: (
      <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-black/80"
          aria-hidden="true"
        >
          <path
            d="M12 4a8 8 0 0 0 0 16h2.5a2.5 2.5 0 0 0 0-5H13a1 1 0 0 1-1-1v-2h2a4 4 0 0 0 4-4A4 4 0 0 0 12 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
    ),
  },
  compass: {
    gradient: "from-[#F6D365] via-[#FDA085] to-[#FF9A9E]",
    svg: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-black/80"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="m14.5 9.5-2 5-3-1 2-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

export function SkillCategoryGrid({ categories }: SkillCategoryGridProps) {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          Capabilities
        </p>
        <h3 className="text-3xl font-semibold text-white">Core skill groups</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category, index) => {
          const icon =
            iconVariants[
              category.icon as keyof typeof iconVariants
            ] ?? iconVariants.laptop;

          return (
            <motion.article
              key={category.title}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-500)]/60 hover:bg-white/[0.04]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${icon.gradient} shadow-[0_10px_30px_rgba(0,0,0,0.35)]`}
                >
                  {icon.svg}
                </span>
              <h4 className="text-lg font-semibold text-white">
                {category.title}
              </h4>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-[var(--text-muted)]">
                {category.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-[var(--accent-500)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/5" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}


