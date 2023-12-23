import { WeatherData } from "../types";

export const updateRecentWeatherData = (
  newData: WeatherData,
  storageKey: string = "recentWeatherData",
  maxSize: number = 5
): void => {
  const storedData = localStorage.getItem(storageKey);
  const recentWeatherData: WeatherData[] | null = storedData
    ? JSON.parse(storedData)
    : null;

  const updatedData: WeatherData[] = Array.isArray(recentWeatherData)
    ? [...recentWeatherData.slice(1, maxSize), newData]
    : [newData];

  localStorage.setItem(storageKey, JSON.stringify(updatedData));
};
