import { Hero } from "@/components/Hero";
import { MetricsStrip } from "@/components/MetricsStrip";
import { heroContent, metrics } from "@/data/content";

export default function HomePage() {
  return (
    <div className="page-shell w-full max-w-6xl space-y-10">
      <Hero content={heroContent} />
      <MetricsStrip metrics={metrics} />
    </div>
  );
}


