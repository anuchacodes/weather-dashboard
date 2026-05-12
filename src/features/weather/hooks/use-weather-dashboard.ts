import { useWeatherQuery } from "@/features/weather/hooks/use-weather-query";
import { useWeatherStore, weatherLocations } from "@/stores/weather-store";

export function useWeatherDashboard() {
  const selectedLocation = useWeatherStore((state) => state.selectedLocation);
  const setSelectedLocation = useWeatherStore(
    (state) => state.setSelectedLocation,
  );
  const unit = useWeatherStore((state) => state.unit);
  const setUnit = useWeatherStore((state) => state.setUnit);
  const weatherQuery = useWeatherQuery(selectedLocation, unit);

  return {
    locations: weatherLocations,
    selectedLocation,
    setSelectedLocation,
    unit,
    setUnit,
    weatherQuery,
  };
}
