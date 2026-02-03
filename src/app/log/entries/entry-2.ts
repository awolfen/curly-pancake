import { LogEntry } from "../types";

export const entry2: LogEntry = {
  date: "2026-02-02",
  title: "Dark/Light Theme Toggle",
  content:
    "Added a theme selector using next-themes. Chose next-themes over a pure Redux implementation due to its built-in handling of hydration, localStorage persistence, and system preference detection.",
  tags: ["Theming", "next-themes", "UX"],
};
