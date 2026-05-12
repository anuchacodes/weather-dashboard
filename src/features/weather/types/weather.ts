export type WeatherLocation = {
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
};

export type TemperatureUnit = "celsius" | "fahrenheit";

export type CurrentWeather = {
  temperature2m: number;
  relativeHumidity2m: number;
  windSpeed10m: number;
  precipitation: number;
};

export type HourlyForecastPoint = {
  time: string;
  temperature2m: number;
  relativeHumidity2m: number;
  windSpeed10m: number;
  precipitation: number;
};

export type OpenMeteoForecastResponse = {
  latitude: number;
  longitude: number;
  timezone: string;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
    precipitation: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    precipitation: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
    precipitation: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    wind_speed_10m: number[];
    precipitation: number[];
  };
};

export type WeatherForecast = {
  location: WeatherLocation;
  current: CurrentWeather;
  hourly: HourlyForecastPoint[];
  units: {
    temperature: string;
    humidity: string;
    windSpeed: string;
    precipitation: string;
  };
  updatedAt: string;
};
