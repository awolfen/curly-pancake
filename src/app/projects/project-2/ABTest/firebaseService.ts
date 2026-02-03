import { db } from "@/lib/firebase";
import {
    addDoc,
    collection,
    doc,
    getDocs,
    query,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { ABTestResults, AnimalType } from "./types";

const COLLECTION_NAME = "ab_test_sessions";

export async function createSession(animalType: AnimalType): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), {
    animalType,
    picturesViewed: 1,
    startedAt: serverTimestamp(),
    endedAt: null,
  });
  return docRef.id;
}

export async function updateSessionViews(
  sessionId: string,
  picturesViewed: number,
): Promise<void> {
  const sessionRef = doc(db, COLLECTION_NAME, sessionId);
  await updateDoc(sessionRef, {
    picturesViewed,
  });
}

export async function endSession(sessionId: string): Promise<void> {
  const sessionRef = doc(db, COLLECTION_NAME, sessionId);
  await updateDoc(sessionRef, {
    endedAt: serverTimestamp(),
  });
}

export async function getABTestResults(): Promise<ABTestResults> {
  const q = query(collection(db, COLLECTION_NAME));
  const querySnapshot = await getDocs(q);

  let catSessions = 0;
  let dogSessions = 0;
  let catTotalViews = 0;
  let dogTotalViews = 0;

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    // Only count sessions that have ended
    if (data.endedAt) {
      if (data.animalType === "cat") {
        catSessions++;
        catTotalViews += data.picturesViewed || 0;
      } else if (data.animalType === "dog") {
        dogSessions++;
        dogTotalViews += data.picturesViewed || 0;
      }
    }
  });

  return {
    catSessions,
    dogSessions,
    catTotalViews,
    dogTotalViews,
    catAverageViews: catSessions > 0 ? catTotalViews / catSessions : 0,
    dogAverageViews: dogSessions > 0 ? dogTotalViews / dogSessions : 0,
  };
}
