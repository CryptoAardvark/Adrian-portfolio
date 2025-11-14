"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const carouselItems = useMemo(
    () => [
      project.media,
      ...project.details.gallery.map((item) => ({
        type: "image" as const,
        src: item.src,
        alt: item.alt,
      })),
    ],
    [project]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowRight") {
        setSlideIndex((prev) =>
          prev + 1 >= carouselItems.length ? prev : prev + 1
        );
      }
      if (event.key === "ArrowLeft") {
        setSlideIndex((prev) => (prev - 1 < 0 ? prev : prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [carouselItems.length, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[32px] border border-white/8 bg-[var(--base-900)] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--text-muted)] transition hover:border-white/40 hover:text-white"
        >
          Close
        </button>
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
              {project.category}
            </p>
            <h2 className="text-3xl font-semibold text-white">
              {project.title}
            </h2>
            <p className="text-base text-[var(--text-muted)]">
              {project.details.longDescription}
            </p>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">
                Highlights
              </h4>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                {project.details.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent-500)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.details.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-[var(--text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              {project.details.links.demo && (
                <a
                  href={project.details.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[var(--accent-500)] px-5 py-2 text-black transition hover:bg-[var(--accent-400)]"
                >
                  Live demo
                </a>
              )}
              {project.details.links.repo && (
                <a
                  href={project.details.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-5 py-2 text-white transition hover:border-white/50"
                >
                  Source code
                </a>
              )}
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${project.id}-${slideIndex}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {carouselItems[slideIndex].type === "video" ? (
                    <video
                      src={carouselItems[slideIndex].src}
                      muted
                      loop
                      playsInline
                      controls
                      poster={
                        "poster" in carouselItems[slideIndex]
                          ? carouselItems[slideIndex].poster
                          : undefined
                      }
                      className="h-80 w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={carouselItems[slideIndex].src}
                      alt={carouselItems[slideIndex].alt}
                      width={960}
                      height={540}
                      className="h-80 w-full object-cover"
                      unoptimized
                    />
                  )}
                </motion.div>
              </AnimatePresence>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-white transition hover:border-white/60"
                onClick={() =>
                  setSlideIndex((prev) => (prev - 1 < 0 ? prev : prev - 1))
                }
                disabled={slideIndex === 0}
              >
                Prev
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-white transition hover:border-white/60"
                onClick={() =>
                  setSlideIndex((prev) =>
                    prev + 1 >= carouselItems.length ? prev : prev + 1
                  )
                }
                disabled={slideIndex === carouselItems.length - 1}
              >
                Next
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              {carouselItems.map((item, index) => (
                <button
                  key={`${item.src}-${index}`}
                  onClick={() => setSlideIndex(index)}
                  className={`h-2.5 w-8 rounded-full transition ${
                    slideIndex === index
                      ? "bg-[var(--accent-500)]"
                      : "bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


