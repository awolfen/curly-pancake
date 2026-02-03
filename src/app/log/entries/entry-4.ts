import { LogEntry } from "../types";

export const entry4: LogEntry = {
  date: "2026-02-03",
  title: "NBA Team Stats Dashboard",
  content:
    "Built an interactive NBA stats dashboard to visualize team performance throughout a season. Leveraged React Query's useQuery hook to maximize caching and minimize API calls, which was essential given the balldontlie.io API's 5 req/min limit on the free tier. Chose Chart.js for the data visualization due to its ease of integration, built-in responsiveness, and visually appealing styling.",
  tags: ["React Query", "Chart.js", "Data Visualization", "API Integration"],
};
