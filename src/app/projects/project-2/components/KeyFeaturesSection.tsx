import { SectionHeading } from "./SectionHeading";

const features = [
  "Random 50/50 assignment to cat or dog group",
  "Firebase Firestore for persistent data storage",
  "Real-time tracking of pictures viewed per session",
  "Aggregated results showing average engagement per group",
  "Responsive design with dark mode support",
];

export function KeyFeaturesSection() {
  return (
    <>
      <SectionHeading>Key Features</SectionHeading>
      <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-2">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </>
  );
}
