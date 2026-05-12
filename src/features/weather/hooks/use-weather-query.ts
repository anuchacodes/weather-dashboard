import { useQuery } from "@tanstack/react-query";

import { openMeteoClient } from "@/features/weather/services/open-meteo-client";
import type { WeatherLocation } from "@/features/weather/types/weather";

type ForecastResponse = {
  current?: Record<string, number | string>;
  hourly?: Record<string, Array<number | string>>;
};

export function useWeatherQuery(location: WeatherLocation) {
  return useQuery({
    queryKey: ["weather", location.latitude, location.longitude],
    queryFn: async () => {
      const { data } = await openMeteoClient.get<ForecastResponse>(
        "/forecast",
        {
          params: {
            latitude: location.latitude,
            longitude: location.longitude,
            timezone: location.timezone,
            current:
              "temperature_2m,relative_humidity_2m,wind_speed_10m,surface_pressure",
            hourly: "temperature_2m,relative_humidity_2m,wind_speed_10m",
          },
        },
      );

      return data;
    },
    refetchInterval: 300_000,
  });
}
