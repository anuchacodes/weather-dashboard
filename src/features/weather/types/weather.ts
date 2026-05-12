export type WeatherLocation = {
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
};

export type CurrentWeather = {
  temperature2m: number;
  relativeHumidity2m: number;
  windSpeed10m: number;
  surfacePressure: number;
};

export type HourlyForecastPoint = {
  time: string;
  temperature2m: number;
  relativeHumidity2m: number;
  windSpeed10m: number;
};
