import {
  AboutSection,
  ContactSection,
  HeroSection,
  LogSection,
  SkillsSection,
} from "@/components/HomePageSections";

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <HeroSection />
      <AboutSection />
      <LogSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
