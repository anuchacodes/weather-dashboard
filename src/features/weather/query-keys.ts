import type {
  TemperatureUnit,
  WeatherLocation,
} from "@/features/weather/types/weather";

export const weatherQueryKeys = {
  all: ["weather"] as const,
  forecasts: () => [...weatherQueryKeys.all, "forecast"] as const,
  forecast: (location: WeatherLocation, unit: TemperatureUnit) =>
    [
      ...weatherQueryKeys.forecasts(),
      {
        latitude: location.latitude,
        longitude: location.longitude,
        timezone: location.timezone,
        unit,
      },
    ] as const,
};
