import { BackToHome } from "@/components/ui/BackToHome";
import { Metadata } from "next";
import Link from "next/link";
import { projects } from "./consts";

export const metadata: Metadata = {
  title: "Projects | Alfie Wolfenden",
  description: "Explore my portfolio of web development projects",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <BackToHome />

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Projects
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-12">
            A collection of projects showcasing my understanding of web
            development.
          </p>

          <div className="grid gap-8">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group block p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
