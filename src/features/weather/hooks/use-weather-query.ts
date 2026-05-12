import { useQuery } from "@tanstack/react-query";

import { WEATHER_REFETCH_INTERVAL } from "@/features/weather/constants";
import { weatherQueryKeys } from "@/features/weather/query-keys";
import { getWeatherForecast } from "@/features/weather/services/weather-service";
import type {
  TemperatureUnit,
  WeatherLocation,
} from "@/features/weather/types/weather";

export function useWeatherQuery(
  location: WeatherLocation,
  unit: TemperatureUnit,
) {
  return useQuery({
    queryKey: weatherQueryKeys.forecast(location, unit),
    queryFn: () => getWeatherForecast(location, unit),
    refetchInterval: WEATHER_REFETCH_INTERVAL,
    retry: 2,
  });
}
