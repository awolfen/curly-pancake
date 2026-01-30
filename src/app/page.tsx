import SocialLinks from "@/components/SocialLinks";
import { PERSONAL_INFO, SKILLS } from "@/lib/constants";

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4">
            📍 {PERSONAL_INFO.location}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
            {PERSONAL_INFO.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
            About Me
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              {PERSONAL_INFO.intro}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-6">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Languages:
              </span>
              {PERSONAL_INFO.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 text-sm rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
            I&apos;m always open to discussing new opportunities and interesting
            projects.
          </p>
          <SocialLinks variant="buttons" />
        </div>
      </section>
    </div>
  );
}
