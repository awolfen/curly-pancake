import { LogEntry } from "../types";

export const entry6: LogEntry = {
  date: "2026-02-16",
  title: "Carbon Portfolio Summary",
  content:
    "Added a fullstack Carbon Portfolio Summary project. The application tracks carbon credit positions and computes portfolio-level summaries including total tonnes, total value, and weighted average price per tonne. The React + Vite frontend communicates with an Express backend, with features for filtering by position status and vintage year. Handling the intentionally slow API response gracefully was a key design challenge, solved with loading states and non-blocking data fetching.",
  tags: ["React", "Vite", "Express", "TypeScript", "Tailwind CSS"],
};
