"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PortfolioCard } from "./PortfolioCard";
import { ProjectModal } from "./ProjectModal";
import {
  projects as projectData,
  projectFilters,
  type Project,
} from "@/data/projects";

type Filter = (typeof projectFilters)[number];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [disableVideoAutoPlay, setDisableVideoAutoPlay] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compute = () =>
      setDisableVideoAutoPlay(coarse.matches || reduced.matches);
    compute();
    coarse.addEventListener("change", compute);
    reduced.addEventListener("change", compute);
    return () => {
      coarse.removeEventListener("change", compute);
      reduced.removeEventListener("change", compute);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    return projectData.filter((project) => {
      const matchesFilter =
        activeFilter === "All" || project.category === activeFilter;
      const value = `${project.title} ${project.summary} ${project.tags.join(
        " "
      )}`.toLowerCase();
      const matchesSearch = value.includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--base-950)] via-[#0c1020] to-[var(--base-900)] py-24">
      <div className="page-shell relative z-10 max-w-6xl">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold text-white">Projects</h1>
          <p className="mx-auto max-w-3xl text-sm text-[var(--text-muted)]">
            Recent work across product, AI, and platform engineering. Filter by
            discipline or search by stack to explore deliverables.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-4 rounded-[28px] border border-white/5 bg-white/[0.02] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
          <div className="flex flex-wrap items-center gap-2">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "text-black"
                    : "text-[var(--text-muted)] hover:text-white"
                }`}
              >
                {activeFilter === filter && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-[var(--accent-500)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
            <div className="ml-auto flex w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--text-muted)] md:w-auto">
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4 text-[var(--text-muted)]"
                aria-hidden
              >
                <path
                  d="M9 3a6 6 0 014.8 9.6l3.3 3.3-1.4 1.4-3.3-3.3A6 6 0 119 3zm0 2a4 4 0 100 8 4 4 0 000-8z"
                  fill="currentColor"
                />
              </svg>
              <input
                type="search"
                placeholder="Search title or stack"
                value={searchQuery}
                onChange={(evt) => setSearchQuery(evt.target.value)}
                aria-label="Search projects"
                className="w-full bg-transparent text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none"
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <PortfolioCard
                    key={project.id}
                    project={project}
                    onSelect={setSelectedProject}
                    disableVideoAutoPlay={disableVideoAutoPlay}
                  />
                ))
              ) : (
                <motion.div
                  className="col-span-full rounded-3xl border border-dashed border-white/20 p-12 text-center text-sm text-[var(--text-muted)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  No projects match “{searchQuery}”. Adjust filters or clear the
                  search to see all work.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}


