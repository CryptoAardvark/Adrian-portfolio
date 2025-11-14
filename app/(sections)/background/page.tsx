import { AboutShort } from "@/components/AboutShort";
import { Testimonials } from "@/components/Testimonials";
import { SectionLayout } from "@/components/ui/SectionLayout";
import { testimonials } from "@/data/content";

export default function BackgroundPage() {
  return (
    <SectionLayout
      title="Background"
      subtitle="Context about my journey, collaborations, and impact."
    >
      <div className="space-y-10">
        <AboutShort />
        <Testimonials testimonials={testimonials} />
      </div>
    </SectionLayout>
  );
}


