"use client";

import { PERSONAL_INFO } from "@/lib/constants";

export default function AboutSection() {
  return (
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
  );
}
