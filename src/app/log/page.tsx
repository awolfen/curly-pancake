import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log | Alfie Wolfenden",
  description: "Website updates and design decisions log",
};

interface LogEntry {
  date: string;
  title: string;
  content: string;
  tags?: string[];
}

const LOG_ENTRIES: LogEntry[] = [
  {
    date: "2026-02-02",
    title: "Added Three.js Background Animation",
    content:
      "Implemented an interactive particle field behind the hero section using Three.js and @react-three/fiber. The animation includes 5,000 particles with mouse-tracking interactivity.",
    tags: ["Three.js", "Animation", "React Three Fiber"],
  },
  {
    date: "2026-02-02",
    title: "Dark/Light Theme Toggle",
    content:
      "Added a theme selector using next-themes. Chose next-themes over a pure Redux implementation due to its built-in handling of hydration, localStorage persistence, and system preference detection.",
    tags: ["Theming", "next-themes", "UX"],
  },
  {
    date: "30-01-2026",
    title: "Initial Website Launch",
    content:
      "Launched the portfolio website built with Next, React, and Tailwind CSS. Using Redux Toolkit for state management.",
    tags: ["Next.js", "React", "Tailwind CSS", "Redux"],
  },
];

export default function LogPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Development Log
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          A changelog of website updates and explanations of design decisions.
        </p>

        <div className="space-y-12">
          {LOG_ENTRIES.map((entry, index) => (
            <article
              key={index}
              className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-700"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
              <time className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {new Date(entry.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-1 mb-2">
                {entry.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {entry.content}
              </p>
              {entry.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
