import { Hero } from "@/components/Hero";
import { MetricsStrip } from "@/components/MetricsStrip";
import { heroContent, metrics } from "@/data/content";
import { AboutShort } from "@/components/AboutShort";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { featuredProjects } from "@/data/content";

export default function HomePage() {
  return (
    <div className="page-shell w-full max-w-6xl space-y-10">
      <AboutShort />
      <Hero content={heroContent} />
      <MetricsStrip metrics={metrics} />
      <ProjectsPreview projects={featuredProjects} />
    </div>
  );
}


