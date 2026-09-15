/** Skeleton shown while a dashboard route segment streams in. */
export default function DashboardLoading() {
  return (
    <div className="space-y-6" role="status" aria-label="Loading dashboard">
      <div className="space-y-2.5">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-secondary" />
        <div className="h-4 w-80 max-w-full animate-pulse rounded bg-secondary/60" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-[168px] animate-pulse rounded-xl border border-border bg-card"
          />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="h-[280px] animate-pulse rounded-xl border border-border bg-card" />
        <div className="h-[280px] animate-pulse rounded-xl border border-border bg-card" />
      </div>

      <div className="h-[520px] animate-pulse rounded-xl border border-border bg-card" />
    </div>
  );
}
