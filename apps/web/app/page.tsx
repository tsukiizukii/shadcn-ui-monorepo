import SiteDescription from "@/components/description";
import QuestionAccordion from "@/components/question";
import Section from "@/components/section";
import ContactCard from "@workspace/ui/blocks/contact-card";
import Hero from "@workspace/ui/blocks/hero";

export default function Page() {
  return (
    <>
      <Hero title="LANDING PAGE" />
      <main>
        <Section title="about" />
        <SiteDescription />
        <Section title="question" />
        <QuestionAccordion />
        <ContactCard />
      </main>
    </>
  );
}
