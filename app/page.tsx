import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MetricsStrip } from "@/components/MetricsStrip";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { AboutShort } from "@/components/AboutShort";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { BackgroundSection } from "@/components/background/BackgroundSection";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import {
  heroContent,
  metrics,
  featuredProjects,
  testimonials,
  contactCta,
} from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--base-950)]">
      <Header />
      <main className="page-shell space-y-16 py-16 md:py-24">
        <AboutShort />
        <Hero content={heroContent} />
        <MetricsStrip metrics={metrics} />
        <ProjectsPreview projects={featuredProjects} />
        {/* <SkillsSection /> */}
        {/* <BackgroundSection /> */}
        <Testimonials testimonials={testimonials} />
        <ContactCTA {...contactCta} />
      </main>
      <Footer />
    </div>
  );
}
