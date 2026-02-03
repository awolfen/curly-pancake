import { LogEntry } from "../types";

export const entry2: LogEntry = {
  date: "2026-02-02",
  title: "Dark/Light Theme Toggle",
  content:
    "Implemented theme switching using next-themes. It eliminates the common 'flash of wrong theme' on page load by properly syncing server-rendered HTML with client preferences. The library handles system preference detection, persists selections in localStorage, and provides a simple useTheme hook. It also prevents React hydration mismatches by managing theme state after mounting. Minimal setup with great Tailwind CSS integration.",
  tags: ["Theming", "next-themes", "UX"],
};
