import { SKILLS } from "@/lib/constants";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SKILLS.map((skill) => (
            <div
              key={skill}
              className="px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-center text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
