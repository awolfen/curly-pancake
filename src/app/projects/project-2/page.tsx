import { ErrorBoundary } from "@/components/ErrorBoundary";
import { BackToHome } from "@/components/ui/BackToHome";
import { ABTest } from "./ABTest";
import {
  AboutSection,
  APIsSection,
  KeyFeaturesSection,
  PageHeader,
  TechnologiesSection,
} from "./components";
import { ABTestSkills } from "./consts";

const pageDescription = [
  "An interactive A/B test to determine which is more engaging: cat pictures or dog pictures! You've been randomly assigned to one group.",
  "Browse through pictures and when you're done, reveal the results to see how your engagement compares to other users.",
];

export default function Project2() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <BackToHome />

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <PageHeader
              title="A/B Testing: Cats vs Dogs"
              description={pageDescription}
            />

            <div className="not-prose mb-12">
              <ErrorBoundary>
                <ABTest />
              </ErrorBoundary>
            </div>

            <AboutSection />
            <TechnologiesSection skills={ABTestSkills} />
            <APIsSection />
            <KeyFeaturesSection />
          </div>
        </div>
      </section>
    </div>
  );
}
