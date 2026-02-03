import { SectionHeading } from "./SectionHeading";

interface TechnologiesSectionProps {
  skills: string[];
}

export function TechnologiesSection({ skills }: TechnologiesSectionProps) {
  return (
    <>
      <SectionHeading>Technologies</SectionHeading>
      <div className="flex flex-wrap gap-2 mb-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}
