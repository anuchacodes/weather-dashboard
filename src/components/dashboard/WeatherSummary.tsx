import { CalendarClock, MapPin } from "lucide-react";

import type { WeatherForecast } from "@/features/weather/types/weather";
import { formatShortTime, formatWeekdayHour } from "@/lib/formatters";

type WeatherSummaryProps = {
  forecast: WeatherForecast;
};

export function WeatherSummary({ forecast }: WeatherSummaryProps) {
  const nextRainHour = forecast.hourly.find((point) => point.precipitation > 0);
  const peakWind = forecast.hourly.reduce(
    (max, point) => Math.max(max, point.windSpeed10m),
    forecast.current.windSpeed10m,
  );

  return (
    <section className="rounded-lg border bg-card p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <MapPin className="size-4" aria-hidden="true" />
            {forecast.location.name}
          </div>
          <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
            สรุปสภาพอากาศปัจจุบัน
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            ข้อมูลสภาพอากาศจาก Open-Meteo สำหรับเขตเวลา{" "}
            {forecast.location.timezone} พร้อมข้อมูลรายชั่วโมงของอุณหภูมิ
            ความชื้น ลม และปริมาณฝนในช่วง 2 วันข้างหน้า
          </p>
        </div>

        <div className="grid gap-3 text-sm sm:grid-cols-3 lg:min-w-[520px]">
          <div className="rounded-md bg-muted p-3 transition hover:bg-secondary">
            <p className="text-muted-foreground">ฝนรอบถัดไป</p>
            <p className="mt-1 font-medium text-foreground">
              {nextRainHour
                ? formatWeekdayHour(nextRainHour.time)
                : "ยังไม่มีพยากรณ์"}
            </p>
          </div>
          <div className="rounded-md bg-muted p-3 transition hover:bg-secondary">
            <p className="text-muted-foreground">ลมแรงสุด</p>
            <p className="mt-1 font-medium text-foreground">
              {peakWind.toFixed(1)} {forecast.units.windSpeed}
            </p>
          </div>
          <div className="rounded-md bg-muted p-3 transition hover:bg-secondary">
            <p className="text-muted-foreground">อัปเดตล่าสุด</p>
            <p className="mt-1 inline-flex items-center gap-2 font-medium text-foreground">
              <CalendarClock className="size-4" aria-hidden="true" />
              {formatShortTime(forecast.updatedAt)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
