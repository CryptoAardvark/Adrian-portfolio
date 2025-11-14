import { ContactCTA } from "@/components/ContactCTA";
import { SectionLayout } from "@/components/ui/SectionLayout";
import { contactCta } from "@/data/content";

export default function ContactPage() {
  return (
    <SectionLayout
      title="Contact"
      subtitle="Tell me about your timeline, product goals, or collaboration ideas."
    >
      <div className="flex justify-center">
        <ContactCTA {...contactCta} />
      </div>
    </SectionLayout>
  );
}


