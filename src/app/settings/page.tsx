import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <section className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center gap-3">
          <Settings className="size-6 text-primary" aria-hidden="true" />
          <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
        </div>
        <div className="rounded-lg border bg-card p-6 text-sm text-muted-foreground">
          Dashboard preferences, saved locations, and refresh settings will live
          here as the project grows.
        </div>
      </section>
    </main>
  );
}
