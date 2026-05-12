"use client";

import {
  Activity,
  CloudRain,
  CloudSun,
  Droplets,
  RefreshCw,
  Wind,
} from "lucide-react";

import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { ErrorState } from "@/components/dashboard/ErrorState";
import { HourlyForecastTable } from "@/components/dashboard/HourlyForecastTable";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { LocationSelect } from "@/components/dashboard/LocationSelect";
import { UnitSegmentedControl } from "@/components/dashboard/UnitSegmentedControl";
import { WeatherLineChart } from "@/components/dashboard/WeatherLineChart";
import { WeatherSummary } from "@/components/dashboard/WeatherSummary";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useWeatherDashboard } from "@/features/weather/hooks/use-weather-dashboard";
import { formatNumber } from "@/lib/formatters";

export function WeatherDashboardShell() {
  const {
    locations,
    selectedLocation,
    setSelectedLocation,
    unit,
    setUnit,
    weatherQuery: { data, error, isError, isFetching, isLoading, refetch },
  } = useWeatherDashboard();

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (isError) {
    return (
      <ErrorState
        message={
          error instanceof Error
            ? error.message
            : "ไม่สามารถโหลดข้อมูลสภาพอากาศจาก Open-Meteo ได้"
        }
        onRetry={() => refetch()}
      />
    );
  }

  const hasEmptyData = !data || data.hourly.length === 0;

  const kpis = data
    ? [
        {
          label: "อุณหภูมิ",
          value: `${formatNumber(data.current.temperature2m)} ${data.units.temperature}`,
          helperText: "อุณหภูมิอากาศปัจจุบัน",
          icon: CloudSun,
        },
        {
          label: "ความชื้น",
          value: `${formatNumber(data.current.relativeHumidity2m, 0)}${data.units.humidity}`,
          helperText: "ความชื้นสัมพัทธ์",
          icon: Droplets,
        },
        {
          label: "ความเร็วลม",
          value: `${formatNumber(data.current.windSpeed10m)} ${data.units.windSpeed}`,
          helperText: "ความเร็วลมที่ระดับ 10 เมตร",
          icon: Wind,
        },
        {
          label: "ปริมาณฝน",
          value: `${formatNumber(data.current.precipitation)} ${data.units.precipitation}`,
          helperText: "ปริมาณฝนปัจจุบัน",
          icon: CloudRain,
        },
      ]
    : [];

  return (
    <main className="min-h-screen bg-background px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
      <section className="mx-auto max-w-7xl space-y-5 sm:space-y-6">
        <header className="flex flex-col justify-between gap-5 xl:flex-row xl:items-end">
          <div>
            <p className="text-sm font-medium text-primary">
              {selectedLocation.name} · {selectedLocation.timezone}
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              แดชบอร์ดสภาพอากาศ
            </h1>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-end lg:justify-end">
            <LocationSelect
              locations={locations}
              onLocationChange={setSelectedLocation}
              selectedLocation={selectedLocation}
            />
            <UnitSegmentedControl onUnitChange={setUnit} unit={unit} />
            <div className="inline-flex h-9 w-full items-center gap-2 rounded-md border bg-card px-3 text-sm text-muted-foreground shadow-sm sm:w-auto">
              <Activity className="size-4 text-accent" aria-hidden="true" />
              {isFetching ? "กำลังรีเฟรชข้อมูล" : "รีเฟรชทุก 5 นาที"}
            </div>
            <ThemeToggle />
            <Button
              onClick={() => refetch()}
              size="sm"
              variant="secondary"
              disabled={isFetching}
            >
              <RefreshCw
                className={isFetching ? "size-4 animate-spin" : "size-4"}
                aria-hidden="true"
              />
              รีเฟรช
            </Button>
          </div>
        </header>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {kpis.map((item) => (
            <KpiCard
              helperText={item.helperText}
              icon={item.icon}
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>

        {hasEmptyData ? (
          <EmptyState
            locationName={selectedLocation.name}
            onRetry={() => refetch()}
          />
        ) : (
          <>
            <WeatherSummary forecast={data} />
            <div className="grid gap-5 lg:gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(420px,0.9fr)]">
              <WeatherLineChart forecast={data} />
              <HourlyForecastTable forecast={data} />
            </div>
          </>
        )}
      </section>
    </main>
  );
}
