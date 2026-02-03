import { DATE_FORMAT_OPTIONS } from "../consts";
import { LogEntry } from "../types";

interface LogEntryCardProps {
  entry: LogEntry;
}

export function LogEntryCard({ entry }: LogEntryCardProps) {
  return (
    <article className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-700">
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
      <time className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {new Date(entry.date).toLocaleDateString("en-GB", DATE_FORMAT_OPTIONS)}
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
  );
}
