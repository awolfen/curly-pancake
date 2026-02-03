import { BackToHome } from "@/components/ui/BackToHome";
import { NBAStatsChart } from "./NBAStatsChart";
import { NBAStatsSkills } from "./consts";

export default function Project1() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <BackToHome />

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            NBA Team Stats Dashboard
          </h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              Track NBA team performance throughout the season. Select a team to
              visualize their cumulative wins over games played.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              This project uses a free tier plan, and is capped at 5 req/min.
              Although we have made use of caching with useQuery to minimize
              repeated requests.
            </p>

            {/* NBA Stats Chart Component */}
            <div className="not-prose mb-12">
              <NBAStatsChart />
            </div>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              About This Dashboard
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              This dashboard fetches real NBA game data from the{" "}
              <a
                href="https://www.balldontlie.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                balldontlie.io API
              </a>{" "}
              and visualizes team performance using Chart.js. The chart shows
              cumulative wins over the course of a season, allowing you to see
              how a team&apos;s win total grows throughout the year.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {NBAStatsSkills.map((skill) => (
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
              <li>Team selection dropdown with all 30 NBA teams</li>
              <li>Season selector to view historical data</li>
              <li>Interactive line chart showing win progression</li>
              <li>
                Summary stats including games played, wins, losses, and win rate
              </li>
              <li>Responsive design with dark mode support</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
