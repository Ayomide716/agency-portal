import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { funnelStages } from "@/lib/data";
import { formatNumber, formatPercent } from "@/lib/utils";

/**
 * Conversion funnel drawn as modular SVG rather than a chart library —
 * five stages never justify the bundle cost.
 */
export function FunnelChart() {
  const top = funnelStages[0]?.count || 1;
  const palette = ["#10b981", "#06b6d4", "#0ea5e9", "#6366f1", "#a78bfa"];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Conversion funnel</CardTitle>
        <p className="mt-1 text-sm text-muted-foreground">
          Drop-off from first contact through to signed deal.
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {funnelStages.map((stage, index) => {
          const shareOfTop = (stage.count / top) * 100;
          const previous = funnelStages[index - 1];
          const stepRate = previous
            ? (stage.count / previous.count) * 100
            : 100;

          return (
            <div key={stage.stage}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="font-medium text-zinc-200">{stage.stage}</span>
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {formatNumber(stage.count)} ·{" "}
                  {formatPercent(shareOfTop, 0)} of top
                </span>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <div className="h-8 flex-1 overflow-hidden rounded-lg bg-secondary/60">
                  <div
                    className="flex h-full items-center justify-end rounded-lg px-3 transition-all duration-700"
                    style={{
                      width: `${Math.max(shareOfTop, 12)}%`,
                      background: `linear-gradient(90deg, ${palette[index]}33, ${palette[index]}cc)`,
                      borderRight: `2px solid ${palette[index]}`,
                    }}
                  >
                    <span className="font-mono text-xs font-medium text-zinc-100 tabular-nums">
                      {formatNumber(stage.count)}
                    </span>
                  </div>
                </div>
                <span
                  className="w-16 shrink-0 text-right font-mono text-xs tabular-nums"
                  style={{ color: index === 0 ? "#71717a" : palette[index] }}
                >
                  {index === 0 ? "—" : formatPercent(stepRate, 0)}
                </span>
              </div>
            </div>
          );
        })}

        <p className="border-t border-border pt-4 text-xs text-muted-foreground">
          The right-hand figure is the step conversion rate from the stage above.
        </p>
      </CardContent>
    </Card>
  );
}
