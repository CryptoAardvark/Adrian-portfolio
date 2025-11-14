import {
  skillsSummary,
  skillCategories,
  skillHighlights,
} from "@/data/content";
import { SkillsSummary } from "./SkillsSummary";
import { SkillCategoryGrid } from "./SkillCategoryGrid";
import { SkillHighlights } from "./SkillHighlights";

export function SkillsSection() {
  return (
    <section className="space-y-16" id="skills">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          Skills & Expertise
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-white">
          Comprehensive technical capabilities
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
          Modern stack coverage across frontend polish, scalable backend
          systems, and production AI workflows.
        </p>
      </div>
      <SkillsSummary summary={skillsSummary} />
      <SkillCategoryGrid categories={skillCategories} />
      <SkillHighlights highlights={skillHighlights} />
    </section>
  );
}


