import { BackToHome } from "@/components/ui/BackToHome";
import { PrivateMarketsAPISkills } from "./consts";

export default function Project4() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <BackToHome />

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Private Markets API
          </h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              A RESTful API for managing private market funds, investors, and
              their investments. Built with Express 5, TypeScript (ESM), and
              PostgreSQL 16, fully containerised with Docker.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              About This Project
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              This backend API manages the lifecycle of private market funds,
              investors, and investments. It provides endpoints for creating,
              reading, and updating funds and investors, as well as managing
              investments linked to specific funds. The API features dual-layer
              validation, PostgreSQL domains for enumerated types, centralised
              error handling, and integration tests against a real database.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {PrivateMarketsAPISkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              API Endpoints
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full text-sm text-zinc-600 dark:text-zinc-300">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-700">
                    <th className="text-left py-2 pr-4 font-semibold text-zinc-900 dark:text-zinc-50">
                      Method
                    </th>
                    <th className="text-left py-2 pr-4 font-semibold text-zinc-900 dark:text-zinc-50">
                      Endpoint
                    </th>
                    <th className="text-left py-2 font-semibold text-zinc-900 dark:text-zinc-50">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">GET</td>
                    <td className="py-2 pr-4 font-mono text-xs">/funds</td>
                    <td className="py-2">List all funds</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">POST</td>
                    <td className="py-2 pr-4 font-mono text-xs">/funds</td>
                    <td className="py-2">Create a new fund</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">PUT</td>
                    <td className="py-2 pr-4 font-mono text-xs">/funds</td>
                    <td className="py-2">Update an existing fund</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">GET</td>
                    <td className="py-2 pr-4 font-mono text-xs">/funds/:id</td>
                    <td className="py-2">Get a specific fund</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">GET</td>
                    <td className="py-2 pr-4 font-mono text-xs">/investors</td>
                    <td className="py-2">List all investors</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">POST</td>
                    <td className="py-2 pr-4 font-mono text-xs">/investors</td>
                    <td className="py-2">Create a new investor</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">GET</td>
                    <td className="py-2 pr-4 font-mono text-xs">
                      /funds/:fund_id/investments
                    </td>
                    <td className="py-2">List investments for a fund</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">POST</td>
                    <td className="py-2 pr-4 font-mono text-xs">
                      /funds/:fund_id/investments
                    </td>
                    <td className="py-2">Create an investment for a fund</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>
                Dual-layer validation — application-level TypeScript checks plus
                PostgreSQL domain constraints
              </li>
              <li>
                PostgreSQL domains for enumerated types (status, investor type,
                email)
              </li>
              <li>
                Centralised error handler mapping PostgreSQL error codes to HTTP
                responses
              </li>
              <li>
                Integration tests against a real database via Supertest and
                Vitest
              </li>
              <li>
                Fully containerised with Docker Compose for one-command setup
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              Running Locally
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              The easiest way to run the project is with Docker:
            </p>
            <pre className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 text-sm text-zinc-800 dark:text-zinc-200 overflow-x-auto">
              <code>{`git clone https://github.com/awolfen/scaling-fortnight.git
cd scaling-fortnight
docker compose up --build`}</code>
            </pre>
            <p className="text-zinc-600 dark:text-zinc-300 mt-4 mb-6">
              The API will be available at{" "}
              <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-1 rounded">
                http://localhost:3000
              </code>{" "}
              with sample data pre-loaded.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
              Source Code
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              The full source code is available on GitHub:
            </p>
            <a
              href="https://github.com/awolfen/scaling-fortnight"
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
