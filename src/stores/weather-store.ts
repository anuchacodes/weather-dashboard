import { create } from "zustand";

import type { WeatherLocation } from "@/features/weather/types/weather";

type WeatherState = {
  selectedLocation: WeatherLocation;
  setSelectedLocation: (location: WeatherLocation) => void;
};

export const useWeatherStore = create<WeatherState>((set) => ({
  selectedLocation: {
    name: "Bangkok",
    latitude: 13.7563,
    longitude: 100.5018,
    timezone: "Asia/Bangkok",
  },
  setSelectedLocation: (location) => set({ selectedLocation: location }),
}));
