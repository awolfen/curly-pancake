"use client";

import {
  AnimalImageDisplay,
  ErrorDisplay,
  LoadingSpinner,
  ResultsDisplay,
} from "./components";
import { useABTest } from "./hooks";

export default function ABTest() {
  const {
    animalType,
    currentImage,
    picturesViewed,
    isLoading,
    isTestEnded,
    results,
    error,
    nextImage,
    revealResults,
  } = useABTest();

  // Show loading while determining animal type
  if (!animalType) {
    return <LoadingSpinner />;
  }

  // Show error if any
  if (error && !isTestEnded) {
    return <ErrorDisplay message={error} onRetry={nextImage} />;
  }

  // Show results when test is ended
  if (isTestEnded && results) {
    return (
      <ResultsDisplay
        results={results}
        userAnimalType={animalType}
        userPicturesViewed={picturesViewed}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Counter */}
      <div className="text-center">
        <span className="inline-block px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Pictures viewed: <span className="font-bold">{picturesViewed}</span>
        </span>
      </div>

      {/* Animal Image */}
      <AnimalImageDisplay image={currentImage} isLoading={isLoading} />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={nextImage}
          disabled={isLoading}
          className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors shadow-lg hover:shadow-xl"
        >
          {isLoading ? "Loading..." : "Next →"}
        </button>

        <button
          onClick={revealResults}
          disabled={isLoading}
          className="w-full sm:w-auto px-8 py-3 bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Reveal Results
        </button>
      </div>

      {/* Hint */}
      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        Click &quot;Next&quot; to see more pictures, or &quot;Reveal
        Results&quot; to end the test and see how you compare to other users.
      </p>
    </div>
  );
}
