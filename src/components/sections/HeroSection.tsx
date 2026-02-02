"use client";

import { PERSONAL_INFO } from "@/lib/constants";

export default function HeroSection() {
  return (
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
  );
}
