import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getStatusDistribution } from "@/lib/metrics";
import { formatPercent } from "@/lib/utils";

/** Stacked proportion bar plus legend — pure markup, no chart runtime. */
export function StatusBreakdown() {
  const distribution = getStatusDistribution();
  const total = distribution.reduce((sum, row) => sum + row.count, 0) || 1;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Pipeline by status</CardTitle>
        <p className="text-sm text-muted-foreground">
          Distribution across all {total} tracked leads.
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-secondary">
          {distribution.map((row) =>
            row.count ? (
              <div
                key={row.status}
                style={{
                  width: `${(row.count / total) * 100}%`,
                  backgroundColor: row.color,
                }}
                title={`${row.status}: ${row.count}`}
              />
            ) : null
          )}
        </div>

        <ul className="space-y-3">
          {distribution.map((row) => (
            <li key={row.status} className="flex items-center gap-3 text-sm">
              <span
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: row.color }}
                aria-hidden="true"
              />
              <span className="flex-1 text-zinc-300">{row.status}</span>
              <span className="font-mono text-zinc-400 tabular-nums">
                {row.count}
              </span>
              <span className="w-14 text-right font-mono text-xs text-muted-foreground tabular-nums">
                {formatPercent((row.count / total) * 100, 1)}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
