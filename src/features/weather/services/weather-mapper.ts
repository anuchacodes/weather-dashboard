import type {
  OpenMeteoForecastResponse,
  WeatherForecast,
  WeatherLocation,
} from "@/features/weather/types/weather";

export function mapOpenMeteoForecast(
  data: OpenMeteoForecastResponse,
  location: WeatherLocation,
): WeatherForecast {
  return {
    location,
    current: {
      temperature2m: data.current.temperature_2m,
      relativeHumidity2m: data.current.relative_humidity_2m,
      windSpeed10m: data.current.wind_speed_10m,
      precipitation: data.current.precipitation,
    },
    hourly: data.hourly.time.map((time, index) => ({
      time,
      temperature2m: data.hourly.temperature_2m[index],
      relativeHumidity2m: data.hourly.relative_humidity_2m[index],
      windSpeed10m: data.hourly.wind_speed_10m[index],
      precipitation: data.hourly.precipitation[index],
    })),
    units: {
      temperature: data.current_units.temperature_2m,
      humidity: data.current_units.relative_humidity_2m,
      windSpeed: data.current_units.wind_speed_10m,
      precipitation: data.current_units.precipitation,
    },
    updatedAt: data.current.time,
  };
}
