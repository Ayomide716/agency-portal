import { TrendingDown, TrendingUp } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * Headline KPI tile.
 *
 * `positive` says whether the movement is *good*, which is not the same as
 * whether the number went up — a falling cost per lead is a win, so the caller
 * decides the sentiment and the arrow follows the raw direction.
 */
export function MetricCard({
  label,
  value,
  delta,
  positive = true,
  caption,
  icon: Icon,
  accent = "emerald",
  sparkline,
}) {
  const accentStyles = {
    emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    cyan: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
    violet: "border-violet-500/20 bg-violet-500/10 text-violet-400",
    amber: "border-amber-500/20 bg-amber-500/10 text-amber-400",
  };

  const rising = typeof delta === "number" ? delta >= 0 : true;
  const TrendIcon = rising ? TrendingUp : TrendingDown;

  return (
    <Card className="group relative overflow-hidden p-5 transition-colors hover:border-zinc-700">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm text-muted-foreground">{label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 tabular-nums sm:text-3xl">
            {value}
          </p>
        </div>
        {Icon ? (
          <span
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-xl border",
              accentStyles[accent] ?? accentStyles.emerald
            )}
          >
            <Icon className="size-[18px]" />
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs">
        {typeof delta === "number" ? (
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-medium tabular-nums",
              positive
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-red-500/10 text-red-400"
            )}
          >
            <TrendIcon className="size-3" />
            {rising ? "+" : ""}
            {delta.toFixed(1)}%
          </span>
        ) : null}
        {caption ? (
          <span className="truncate text-muted-foreground">{caption}</span>
        ) : null}
      </div>

      {sparkline ? <MetricSparkline points={sparkline} positive={positive} /> : null}
    </Card>
  );
}

/** Inline SVG trend line — no chart library needed for a 12-point series. */
function MetricSparkline({ points, positive }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;

  const path = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * 100;
      const y = 100 - ((point - min) / range) * 84 - 8;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  const stroke = positive ? "#10b981" : "#f87171";

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="mt-4 h-10 w-full opacity-70 transition-opacity group-hover:opacity-100"
    >
      <polyline
        points={path}
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
