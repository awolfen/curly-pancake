import { Metadata } from "next";
import { LogEntryCard } from "./components";
import { LOG_PAGE_DESCRIPTION, LOG_PAGE_TITLE } from "./consts";
import { LOG_ENTRIES } from "./entries";

export const metadata: Metadata = {
  title: "Log | Alfie Wolfenden",
  description: "Website updates and design decisions log",
};

export default function LogPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          {LOG_PAGE_TITLE}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          {LOG_PAGE_DESCRIPTION}
        </p>

        <div className="space-y-12">
          {LOG_ENTRIES.map((entry) => (
            <LogEntryCard key={`${entry.date}-${entry.title}`} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}
