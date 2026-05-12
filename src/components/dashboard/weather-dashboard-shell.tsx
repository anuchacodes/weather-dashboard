import { Activity, CloudSun, Droplets, Gauge, Wind } from "lucide-react";

const kpis = [
  { label: "Temperature", value: "28.4 C", icon: CloudSun },
  { label: "Humidity", value: "74%", icon: Droplets },
  { label: "Wind", value: "11 km/h", icon: Wind },
  { label: "Pressure", value: "1011 hPa", icon: Gauge },
];

export function WeatherDashboardShell() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium text-primary">
              Bangkok, Thailand
            </p>
            <h1 className="text-3xl font-semibold tracking-tight">
              Weather Overview
            </h1>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm text-muted-foreground">
            <Activity className="size-4 text-accent" aria-hidden="true" />
            Refreshes every 5 minutes
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((item) => (
            <article
              className="rounded-lg border bg-card p-5 shadow-sm"
              key={item.label}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <item.icon className="size-5 text-primary" aria-hidden="true" />
              </div>
              <p className="mt-4 text-3xl font-semibold tracking-tight">
                {item.value}
              </p>
            </article>
          ))}
        </div>

        <section className="rounded-lg border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Hourly Forecast</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Chart integration is ready for Open-Meteo hourly data.
              </p>
            </div>
          </div>
          <div className="mt-6 flex h-80 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
            Recharts visualization placeholder
          </div>
        </section>
      </section>
    </main>
  );
}
