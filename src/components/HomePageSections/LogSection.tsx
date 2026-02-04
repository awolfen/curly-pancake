import { LinkButton } from "../ui/LinkButton";

export default function LogSection() {
  return (
    <section id="log" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
          Development Log
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
          I believe in intentional development. My log documents the journey of
          building this site—capturing design decisions, technical trade-offs,
          and the reasoning behind each choice.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="p-6 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Explains Design Decisions
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Why I chose specific tools, patterns, and approaches for this
              project.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
            <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-violet-600 dark:text-violet-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Clear Communication
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Practising the art of explaining technical concepts clearly. I try
              to emphasize communication, and clarity in an accessible way.
            </p>
          </div>
        </div>

        <LinkButton href="/log">Read the Development Log</LinkButton>
      </div>
    </section>
  );
}
