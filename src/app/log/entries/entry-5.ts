import { LogEntry } from "../types";

export const entry5: LogEntry = {
  date: "2026-02-03",
  title: "A/B Testing with Firebase",
  content:
    "Built an interactive A/B testing experiment (Cats vs Dogs) to explore how A/B tests can measure user engagement. Visitors are randomly assigned to one group and their session data—pictures viewed before ending—is tracked in Firebase Firestore. The aggregated results reveal which content type drives higher engagement, demonstrating A/B testing as a practical analytical tool for data-driven decision making. Chose Firebase for its ease of use, generous free tier, and built-in security via App Check which Google manages.",
  tags: ["Firebase", "Firestore", "A/B Testing", "Analytics", "TypeScript"],
};
