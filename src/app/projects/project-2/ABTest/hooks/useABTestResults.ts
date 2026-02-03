"use client";

import { useCallback, useState } from "react";
import { getABTestResults } from "../firebaseService";
import { ABTestResults } from "../types";

export function useABTestResults() {
  const [results, setResults] = useState<ABTestResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchResults = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const testResults = await getABTestResults();
      setResults(testResults);
      return testResults;
    } catch (err) {
      console.error("Error fetching results:", err);
      setError("Failed to load results. Please try again.");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    results,
    isLoading,
    error,
    fetchResults,
  };
}
