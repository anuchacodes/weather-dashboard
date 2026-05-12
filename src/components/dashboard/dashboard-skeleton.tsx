export function DashboardSkeleton() {
  return (
    <main className="min-h-screen bg-background px-6 py-8">
      <section className="mx-auto grid max-w-7xl gap-6">
        <div className="h-10 w-72 animate-pulse rounded-md bg-muted" />
        <div className="grid gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              className="h-32 animate-pulse rounded-lg border bg-muted"
              key={index}
            />
          ))}
        </div>
        <div className="h-96 animate-pulse rounded-lg border bg-muted" />
      </section>
    </main>
  );
}
