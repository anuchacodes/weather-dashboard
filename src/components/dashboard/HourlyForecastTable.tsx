import type { WeatherForecast } from "@/features/weather/types/weather";
import { formatWeekdayHour } from "@/lib/formatters";

type HourlyForecastTableProps = {
  forecast: WeatherForecast;
};

export function HourlyForecastTable({ forecast }: HourlyForecastTableProps) {
  const rows = forecast.hourly.slice(0, 12);

  return (
    <section className="rounded-lg border bg-card p-4 shadow-sm sm:p-5">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-xl font-semibold">ตารางพยากรณ์อากาศ</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            ข้อมูลพยากรณ์รายชั่วโมง 12 รายการถัดไปจาก Open-Meteo
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          โหลดข้อมูลรายชั่วโมงทั้งหมด {forecast.hourly.length} รายการ
        </p>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="border-b text-xs uppercase text-muted-foreground">
            <tr>
              <th className="py-3 pr-4 font-medium">เวลา</th>
              <th className="px-4 py-3 font-medium">อุณหภูมิ</th>
              <th className="px-4 py-3 font-medium">ความชื้น</th>
              <th className="px-4 py-3 font-medium">ลม</th>
              <th className="py-3 pl-4 font-medium">ปริมาณฝน</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {rows.map((point) => (
              <tr className="transition hover:bg-muted/70" key={point.time}>
                <td className="py-3 pr-4 font-medium">
                  {formatWeekdayHour(point.time)}
                </td>
                <td className="px-4 py-3">
                  {point.temperature2m.toFixed(1)} {forecast.units.temperature}
                </td>
                <td className="px-4 py-3">
                  {point.relativeHumidity2m.toFixed(0)}
                  {forecast.units.humidity}
                </td>
                <td className="px-4 py-3">
                  {point.windSpeed10m.toFixed(1)} {forecast.units.windSpeed}
                </td>
                <td className="py-3 pl-4">
                  {point.precipitation.toFixed(1)}{" "}
                  {forecast.units.precipitation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
