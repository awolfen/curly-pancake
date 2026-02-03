"use client";

import { useCallback, useState } from "react";
import {
    createSession,
    endSession,
    updateSessionViews,
} from "../firebaseService";
import { AnimalType } from "../types";

export function useSession() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [picturesViewed, setPicturesViewed] = useState(0);

  const startSession = useCallback(async (animalType: AnimalType) => {
    try {
      const id = await createSession(animalType);
      setSessionId(id);
      setPicturesViewed(1);
      return id;
    } catch (err) {
      console.error("Error creating session:", err);
      setPicturesViewed(1);
      return null;
    }
  }, []);

  const incrementViews = useCallback(async () => {
    const newCount = picturesViewed + 1;
    setPicturesViewed(newCount);

    if (sessionId) {
      try {
        await updateSessionViews(sessionId, newCount);
      } catch (err) {
        console.error("Error updating session:", err);
      }
    }

    return newCount;
  }, [picturesViewed, sessionId]);

  const closeSession = useCallback(async () => {
    if (sessionId) {
      try {
        await endSession(sessionId);
      } catch (err) {
        console.error("Error ending session:", err);
      }
    }
  }, [sessionId]);

  return {
    sessionId,
    picturesViewed,
    startSession,
    incrementViews,
    closeSession,
  };
}
