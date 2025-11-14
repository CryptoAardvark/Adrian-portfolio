"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";

type PortfolioCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
  disableVideoAutoPlay?: boolean;
};

export function PortfolioCard({
  project,
  onSelect,
  disableVideoAutoPlay = false,
}: PortfolioCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (project.media.type === "video" && !disableVideoAutoPlay) {
      videoRef.current?.play();
    }
  };

  const handleMouseLeave = () => {
    if (project.media.type === "video") {
      videoRef.current?.pause();
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <motion.article
      layout
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={() => onSelect(project)}
      onKeyDown={(evt) => {
        if (evt.key === "Enter" || evt.key === " ") {
          evt.preventDefault();
          onSelect(project);
        }
      }}
      tabIndex={0}
      role="button"
      className="group flex cursor-pointer flex-col overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.02] shadow-[0_25px_80px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-[24px] p-4">
        <div className="relative h-56 w-full overflow-hidden rounded-[18px]">
          {project.media.type === "image" ? (
            <Image
              src={project.media.src}
              alt={project.media.alt}
              width={640}
              height={360}
              className="h-full w-full object-cover"
              unoptimized
            />
          ) : (
            <>
              <video
                ref={videoRef}
                src={project.media.src}
                poster={project.media.poster}
                muted
                loop
                playsInline
                preload="none"
                className="hidden h-full w-full object-cover md:block"
              />
              <Image
                src={project.media.poster}
                alt={project.media.alt}
                width={640}
                height={360}
                className="block h-full w-full object-cover md:hidden"
                unoptimized
              />
            </>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-[18px] bg-black/30 opacity-0 transition duration-300 group-hover:opacity-100">
            <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black">
              View Details
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 px-6 pb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            {project.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            {project.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-[var(--text-muted)]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}


