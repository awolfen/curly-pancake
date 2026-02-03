export type AnimalType = "cat" | "dog";

export interface ABTestResults {
  catSessions: number;
  dogSessions: number;
  catTotalViews: number;
  dogTotalViews: number;
  catAverageViews: number;
  dogAverageViews: number;
}

export interface AnimalImage {
  url: string;
  type: AnimalType;
}
