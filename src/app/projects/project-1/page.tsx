import Link from "next/link";

export default function Project1() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-8 transition-colors"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Data Visualization Dashboard
          </h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              This is a placeholder for the Data Visualization Dashboard
              project.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              Overview
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              Describe what this project is about and the problem it solves.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {["React", "TypeScript", "API"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>API Integration</li>
              <li>Interactive Charts</li>
              <li>Real-time Data Updates</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
