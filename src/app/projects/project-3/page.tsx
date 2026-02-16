import { BackToHome } from "@/components/ui/BackToHome";
import { CarbonPortfolioSkills } from "./consts";

export default function Project3() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <BackToHome />

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Carbon Portfolio Summary
          </h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              A fullstack application for tracking carbon credit positions and
              computing portfolio summaries. It aggregates tonnes, value, and
              pricing across multiple carbon credit holdings to provide a
              portfolio-level view.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              About This Project
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              The Carbon Portfolio Summary system models a simplified carbon
              credit portfolio. A portfolio is a collection of carbon credit
              holdings (positions) across multiple projects, vintages, and
              statuses, viewed as a single investment or risk exposure. The
              application computes aggregate statistics including total tonnes,
              total value, and weighted average price per tonne.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {CarbonPortfolioSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>
                Portfolio summary with total tonnes, total value, and weighted
                average price
              </li>
              <li>
                Filtering by position status (available/retired) and vintage year
              </li>
              <li>
                Graceful handling of slow API responses with loading states
              </li>
              <li>Express backend with business logic and unit tests</li>
              <li>Responsive frontend built with React, Vite, and Tailwind CSS</li>
            </ul>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              Running Locally
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              Clone the repository, install dependencies, and start both the
              backend and frontend with a single command:
            </p>
            <pre className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 text-sm text-zinc-800 dark:text-zinc-200 overflow-x-auto">
              <code>{`git clone https://github.com/awolfen/fluffy-giggle.git
cd fluffy-giggle
npm install
cd backend && npm install && cd ..
npm run dev`}</code>
            </pre>
            <p className="text-zinc-600 dark:text-zinc-300 mt-4 mb-6">
              The frontend runs on{" "}
              <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-1 rounded">
                http://localhost:8080
              </code>{" "}
              and the backend on{" "}
              <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-1 rounded">
                http://localhost:4000
              </code>
              .
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              Source Code
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              The full source code is available on GitHub:
            </p>
            <a
              href="https://github.com/awolfen/fluffy-giggle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
