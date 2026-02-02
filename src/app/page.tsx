import {
  AboutSection,
  ContactSection,
  HeroSection,
  SkillsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
