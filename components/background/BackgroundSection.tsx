import { ExperienceTimeline } from "./ExperienceTimeline";
import { EducationGrid } from "./EducationGrid";
import { CertificationList } from "./CertificationList";
import {
  experienceTimeline,
  educationHistory,
  certifications,
} from "@/data/content";

export function BackgroundSection() {
  return (
    <section className="space-y-10">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          Background
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-white">
          Experience & Growth
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--text-muted)]">
          Blending AI-driven development with distributed backend architecture to deliver scalable, resilient, and intelligent systems.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <ExperienceTimeline experience={experienceTimeline} />
        <div className="space-y-8">
          <EducationGrid education={educationHistory} />
          <CertificationList certifications={certifications} />
        </div>
      </div>
    </section>
  );
}


