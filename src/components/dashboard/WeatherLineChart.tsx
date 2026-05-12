"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

import type {
  HourlyForecastPoint,
  WeatherForecast,
} from "@/features/weather/types/weather";
import { formatHour } from "@/lib/formatters";

type WeatherLineChartProps = {
  forecast: WeatherForecast;
};

type ChartPoint = {
  label: string;
  temperature: number;
  humidity: number;
  precipitation: number;
};

function toChartPoint(point: HourlyForecastPoint): ChartPoint {
  return {
    label: formatHour(point.time),
    temperature: point.temperature2m,
    humidity: point.relativeHumidity2m,
    precipitation: point.precipitation,
  };
}

export function WeatherLineChart({ forecast }: WeatherLineChartProps) {
  const chartData = forecast.hourly.slice(0, 24).map(toChartPoint);

  return (
    <section className="rounded-lg border bg-card p-4 shadow-sm sm:p-5">
      <div>
        <h2 className="text-xl font-semibold">พยากรณ์รายชั่วโมง</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          อุณหภูมิ ความชื้น และปริมาณฝนใน 24 ชั่วโมงข้างหน้า
        </p>
      </div>

      <div className="mt-5 h-[280px] w-full sm:mt-6 sm:h-[340px]">
        <ResponsiveContainer height="100%" width="100%">
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 12, left: 0, bottom: 6 }}
          >
            <CartesianGrid
              stroke="var(--border)"
              strokeDasharray="4 4"
              vertical={false}
            />
            <XAxis
              dataKey="label"
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              minTickGap={28}
            />
            <YAxis
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={44}
            />
            <Tooltip
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                color: "var(--foreground)",
                boxShadow: "0 12px 32px rgb(15 23 42 / 0.12)",
              }}
              labelStyle={{ color: "var(--foreground)" }}
            />
            <Legend
              iconType="circle"
              wrapperStyle={{
                color: "var(--muted-foreground)",
                fontSize: 12,
                paddingTop: 12,
              }}
            />
            <Line
              type="monotone"
              dataKey="temperature"
              name={`อุณหภูมิ (${forecast.units.temperature})`}
              stroke="var(--chart-1)"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="humidity"
              name={`ความชื้น (${forecast.units.humidity})`}
              stroke="var(--chart-2)"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="precipitation"
              name={`ปริมาณฝน (${forecast.units.precipitation})`}
              stroke="var(--chart-4)"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
