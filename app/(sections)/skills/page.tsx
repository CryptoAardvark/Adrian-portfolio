import { SkillsGrid } from "@/components/SkillsGrid";
import { MetricsStrip } from "@/components/MetricsStrip";
import { SectionLayout } from "@/components/ui/SectionLayout";
import { metrics, skillStack } from "@/data/content";

export default function SkillsPage() {
  return (
    <SectionLayout
      title="Skills"
      subtitle="Tools and platforms I use to deliver modern applications."
    >
      <SkillsGrid skills={skillStack} />
      <MetricsStrip metrics={metrics} />
    </SectionLayout>
  );
}


