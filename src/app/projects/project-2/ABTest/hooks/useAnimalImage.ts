"use client";

import { useCallback, useState } from "react";
import { AnimalImage, AnimalType } from "../types";

async function fetchCatImage(): Promise<string> {
  // cataas.com returns a new random cat image on each request
  // We add a timestamp to bust cache
  return `https://cataas.com/cat?t=${Date.now()}`;
}

async function fetchDogImage(): Promise<string> {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  if (data.status === "success") {
    return data.message;
  }
  throw new Error("Failed to fetch dog image");
}

export function useAnimalImage(animalType: AnimalType) {
  const [currentImage, setCurrentImage] = useState<AnimalImage | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchImage = useCallback(async () => {
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

  const clearError = useCallback(() => setError(null), []);

  return {
    currentImage,
    isLoading,
    error,
    fetchImage,
    clearError,
    setError,
  };
}
