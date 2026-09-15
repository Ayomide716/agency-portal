import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getChannelMetrics } from "@/lib/metrics";
import { formatCurrency, formatNumber } from "@/lib/utils";

/** Ranked channel list with proportional volume bars. */
export function ChannelSnapshot() {
  const channels = getChannelMetrics().sort((a, b) => b.leads - a.leads);
  const max = Math.max(...channels.map((row) => row.leads)) || 1;

  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-3 space-y-0">
        <div>
          <CardTitle className="text-base">Acquisition channels</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">
            Lead volume and cost per lead, last 90 days.
          </p>
        </div>
        <Link
          href="/dashboard/analytics"
          className="inline-flex shrink-0 items-center gap-1 text-sm text-emerald-400 transition-colors hover:text-emerald-300"
        >
          Details
          <ArrowRight className="size-3.5" />
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {channels.map((row) => (
          <div key={row.channel}>
            <div className="flex items-baseline justify-between gap-3 text-sm">
              <span className="truncate font-medium text-zinc-200">
                {row.channel}
              </span>
              <span className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
                {formatNumber(row.leads)} leads ·{" "}
                {formatCurrency(Math.round(row.costPerLead))} CPL
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${(row.leads / max) * 100}%`,
                  backgroundColor: row.color,
                }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
