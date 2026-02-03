"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimalType } from "../types";
import { useABTestResults } from "./useABTestResults";
import { useAnimalImage } from "./useAnimalImage";
import { useSession } from "./useSession";

function getRandomAnimalType(): AnimalType {
  return Math.random() < 0.5 ? "cat" : "dog";
}

export function useABTest() {
  const [animalType] = useState<AnimalType>(getRandomAnimalType);
  const [isTestEnded, setIsTestEnded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const {
    currentImage,
    isLoading: isImageLoading,
    error: imageError,
    fetchImage,
  } = useAnimalImage(animalType);

  const { picturesViewed, startSession, incrementViews, closeSession } =
    useSession();

  const {
    results,
    isLoading: isResultsLoading,
    error: resultsError,
    fetchResults,
  } = useABTestResults();

  useEffect(() => {
    if (!isInitialized && !isTestEnded) {
      const initSession = async () => {
        await startSession(animalType);
        await fetchImage();
        setIsInitialized(true);
      };
      initSession();
    }
  }, [animalType, isInitialized, isTestEnded, startSession, fetchImage]);

  const nextImage = useCallback(async () => {
    if (isTestEnded) return;

    await incrementViews();
    await fetchImage();
  }, [isTestEnded, incrementViews, fetchImage]);

  const revealResults = useCallback(async () => {
    await closeSession();
    const testResults = await fetchResults();

    if (testResults) {
      setIsTestEnded(true);
    }
  }, [closeSession, fetchResults]);

  const isLoading = isImageLoading || isResultsLoading || !isInitialized;

  const error = isTestEnded ? resultsError : imageError;

  return {
    animalType,
    currentImage,
    picturesViewed,
    isLoading,
    isTestEnded,
    results,
    error,
    nextImage,
    revealResults,
  };
}
