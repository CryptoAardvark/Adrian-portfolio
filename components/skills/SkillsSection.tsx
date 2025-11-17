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
        <h2 className="mt-2 text-4xl font-semibold text-white">
          Skills & Expertise
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
          AI-driven backend engineering: scalable microservices, vector search, RAG pipelines, data infrastructure, observability, and production-grade cloud systems.
        </p>
      </div>
      <SkillsSummary summary={skillsSummary} />
      <SkillCategoryGrid categories={skillCategories} />
      <SkillHighlights highlights={skillHighlights} />
    </section>
  );
}


