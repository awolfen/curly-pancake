"use client";

import { useCallback, useEffect, useState } from "react";
import {
    createSession,
    endSession,
    getABTestResults,
    updateSessionViews,
} from "./firebaseService";
import { ABTestResults, AnimalImage, AnimalType } from "./types";

// Fetch a random cat image from cataas.com
async function fetchCatImage(): Promise<string> {
  // cataas.com returns a new random cat image on each request
  // We add a timestamp to bust cache
  return `https://cataas.com/cat?t=${Date.now()}`;
}

// Fetch a random dog image from dog.ceo
async function fetchDogImage(): Promise<string> {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  if (data.status === "success") {
    return data.message;
  }
  throw new Error("Failed to fetch dog image");
}

export function useABTest() {
  const [animalType, setAnimalType] = useState<AnimalType | null>(null);
  const [currentImage, setCurrentImage] = useState<AnimalImage | null>(null);
  const [picturesViewed, setPicturesViewed] = useState(0);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTestEnded, setIsTestEnded] = useState(false);
  const [results, setResults] = useState<ABTestResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Randomly assign user to cat or dog group on mount
  useEffect(() => {
    const assignedType: AnimalType = Math.random() < 0.5 ? "cat" : "dog";
    setAnimalType(assignedType);
  }, []);

  // Fetch image based on animal type
  const fetchImage = useCallback(async () => {
    if (!animalType) return;

    setIsLoading(true);
    setError(null);

    try {
      const imageUrl =
        animalType === "cat" ? await fetchCatImage() : await fetchDogImage();

      setCurrentImage({
        url: imageUrl,
        type: animalType,
      });
    } catch (err) {
      setError("Failed to load image. Please try again.");
      console.error("Error fetching image:", err);
    } finally {
      setIsLoading(false);
    }
  }, [animalType]);

  // Initialize session and fetch first image
  useEffect(() => {
    if (animalType && !sessionId && !isTestEnded) {
      const initSession = async () => {
        try {
          const id = await createSession(animalType);
          setSessionId(id);
          setPicturesViewed(1);
          await fetchImage();
        } catch (err) {
          console.error("Error creating session:", err);
          // Still fetch image even if session creation fails
          await fetchImage();
          setPicturesViewed(1);
        }
      };
      initSession();
    }
  }, [animalType, sessionId, isTestEnded, fetchImage]);

  // Fetch next image
  const nextImage = useCallback(async () => {
    if (isTestEnded) return;

    const newCount = picturesViewed + 1;
    setPicturesViewed(newCount);

    // Update session in Firebase
    if (sessionId) {
      try {
        await updateSessionViews(sessionId, newCount);
      } catch (err) {
        console.error("Error updating session:", err);
      }
    }

    await fetchImage();
  }, [picturesViewed, sessionId, isTestEnded, fetchImage]);

  // End the test and reveal results
  const revealResults = useCallback(async () => {
    setIsLoading(true);

    // End the session in Firebase
    if (sessionId) {
      try {
        await endSession(sessionId);
      } catch (err) {
        console.error("Error ending session:", err);
      }
    }

    // Fetch aggregated results
    try {
      const testResults = await getABTestResults();
      setResults(testResults);
      setIsTestEnded(true);
    } catch (err) {
      console.error("Error fetching results:", err);
      setError("Failed to load results. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [sessionId]);

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
