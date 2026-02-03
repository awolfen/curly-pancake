import { ABTestResults } from "../types";

interface ResultsDisplayProps {
  results: ABTestResults;
  userAnimalType: "cat" | "dog";
  userPicturesViewed: number;
}

export default function ResultsDisplay({
  results,
  userAnimalType,
  userPicturesViewed,
}: ResultsDisplayProps) {
  const winner =
    results.catAverageViews > results.dogAverageViews
      ? "cat"
      : results.dogAverageViews > results.catAverageViews
        ? "dog"
        : "tie";

  return (
    <div className="space-y-6">
      {/* User's session summary */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
          Your Session
        </h3>
        <p className="text-blue-700 dark:text-blue-300">
          You were in the{" "}
          <span className="font-bold capitalize">{userAnimalType}</span> group{" "}
          {userAnimalType === "cat" ? "🐱" : "🐶"}
        </p>
        <p className="text-blue-700 dark:text-blue-300">
          You viewed <span className="font-bold">{userPicturesViewed}</span>{" "}
          pictures
        </p>
      </div>

      {/* A/B Test Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cat Results */}
        <div
          className={`rounded-xl p-6 border-2 ${
            winner === "cat"
              ? "bg-green-50 dark:bg-green-900/20 border-green-500"
              : "bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              🐱 Cats
            </h3>
            {winner === "cat" && (
              <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                WINNER
              </span>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-zinc-600 dark:text-zinc-400">
                Total Sessions:
              </span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {results.catSessions}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600 dark:text-zinc-400">
                Total Views:
              </span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {results.catTotalViews}
              </span>
            </div>
            <div className="flex justify-between border-t border-zinc-200 dark:border-zinc-600 pt-2 mt-2">
              <span className="text-zinc-600 dark:text-zinc-400">
                Avg. Views/User:
              </span>
              <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
                {results.catAverageViews.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Dog Results */}
        <div
          className={`rounded-xl p-6 border-2 ${
            winner === "dog"
              ? "bg-green-50 dark:bg-green-900/20 border-green-500"
              : "bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              🐶 Dogs
            </h3>
            {winner === "dog" && (
              <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                WINNER
              </span>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-zinc-600 dark:text-zinc-400">
                Total Sessions:
              </span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {results.dogSessions}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600 dark:text-zinc-400">
                Total Views:
              </span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {results.dogTotalViews}
              </span>
            </div>
            <div className="flex justify-between border-t border-zinc-200 dark:border-zinc-600 pt-2 mt-2">
              <span className="text-zinc-600 dark:text-zinc-400">
                Avg. Views/User:
              </span>
              <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
                {results.dogAverageViews.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="text-center p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
        {winner === "tie" ? (
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            It&apos;s a tie! Both cats and dogs are equally engaging. 🐱 = 🐶
          </p>
        ) : (
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            {winner === "cat" ? "Cats" : "Dogs"} are more engaging!{" "}
            {winner === "cat" ? "🐱" : "🐶"} Users viewed an average of{" "}
            <span className="font-bold">
              {(
                Math.abs(results.catAverageViews - results.dogAverageViews) *
                100
              ).toFixed(0)}
              %
            </span>{" "}
            more {winner} pictures.
          </p>
        )}
      </div>
    </div>
  );
}
