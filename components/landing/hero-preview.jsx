import { ArrowUpRight, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { statusVariant } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

const previewMetrics = [
  { label: "Total Leads", value: "2,847", delta: "+18.4%" },
  { label: "Conversion", value: "23.6%", delta: "+3.1pt" },
  { label: "Pipeline", value: "$1.42M", delta: "+12.8%" },
  { label: "Cost / Lead", value: "$34.10", delta: "-6.2%" },
];

const previewRows = [
  { name: "Marcus Whitfield", company: "Northgate Logistics", status: "Hot", value: 48000 },
  { name: "Priya Raghunathan", company: "Cobalt Health", status: "Warm", value: 31500 },
  { name: "Alicia Mendoza", company: "Brightpath Legal", status: "Closed", value: 92000 },
];

/** Static, non-interactive product shot rendered entirely in markup. */
export function HeroPreview() {
  const sparkline = [18, 26, 22, 34, 31, 45, 42, 58, 54, 71, 78, 96];
  const max = Math.max(...sparkline);
  const points = sparkline
    .map((point, index) => {
      const x = (index / (sparkline.length - 1)) * 100;
      const y = 100 - (point / max) * 92;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div
        aria-hidden="true"
        className="absolute inset-x-8 -bottom-6 h-24 rounded-full bg-emerald-500/20 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/60">
        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-border bg-secondary/40 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-zinc-700" />
            <span className="size-2.5 rounded-full bg-zinc-700" />
            <span className="size-2.5 rounded-full bg-zinc-700" />
          </div>
          <div className="mx-auto hidden w-full max-w-sm items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-1 text-xs text-zinc-500 sm:flex">
            <Search className="size-3" />
            leads.youragency.com/clients/northgate
          </div>
        </div>

        <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {previewMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-background/50 p-3"
                >
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                    {metric.label}
                  </p>
                  <p className="mt-1.5 text-lg font-semibold tracking-tight text-zinc-50">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 flex items-center gap-0.5 text-[11px] font-medium text-emerald-400">
                    <ArrowUpRight className="size-3" />
                    {metric.delta}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-background/50 p-4">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-medium text-zinc-300">
                  Lead volume · last 12 weeks
                </p>
                <p className="text-xs text-emerald-400">+64% QoQ</p>
              </div>
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="mt-3 h-28 w-full"
              >
                <defs>
                  <linearGradient id="heroSpark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon
                  points={`0,100 ${points} 100,100`}
                  fill="url(#heroSpark)"
                />
                <polyline
                  points={points}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background/50 p-4">
            <p className="text-sm font-medium text-zinc-300">Newest leads</p>
            <ul className="mt-3 divide-y divide-border/70">
              {previewRows.map((row) => (
                <li
                  key={row.name}
                  className="flex items-center justify-between gap-3 py-3"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-zinc-100">
                      {row.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {row.company}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <Badge variant={statusVariant[row.status]}>{row.status}</Badge>
                    <span className="font-mono text-xs text-zinc-400">
                      {formatCurrency(row.value)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
