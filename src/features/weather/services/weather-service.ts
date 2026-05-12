import {
  WEATHER_FORECAST_DAYS,
  WEATHER_FORECAST_FIELDS,
} from "@/features/weather/constants";
import { openMeteoClient } from "@/features/weather/services/open-meteo-client";
import { mapOpenMeteoForecast } from "@/features/weather/services/weather-mapper";
import type {
  OpenMeteoForecastResponse,
  TemperatureUnit,
  WeatherForecast,
  WeatherLocation,
} from "@/features/weather/types/weather";

export async function getWeatherForecast(
  location: WeatherLocation,
  unit: TemperatureUnit,
): Promise<WeatherForecast> {
  const { data } = await openMeteoClient.get<OpenMeteoForecastResponse>(
    "/forecast",
    {
      params: {
        latitude: location.latitude,
        longitude: location.longitude,
        timezone: location.timezone,
        current: WEATHER_FORECAST_FIELDS,
        hourly: WEATHER_FORECAST_FIELDS,
        forecast_days: WEATHER_FORECAST_DAYS,
        temperature_unit: unit === "fahrenheit" ? "fahrenheit" : undefined,
      },
    },
  );

  return mapOpenMeteoForecast(data, location);
}
