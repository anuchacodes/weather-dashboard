import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Open-Meteo Portfolio Project
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Weather Monitoring Dashboard
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            A production-minded Next.js dashboard foundation for location-based
            weather KPIs, hourly forecasts, refresh state, and resilient API
            workflows.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/dashboard">Open Dashboard</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/settings">Settings</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
