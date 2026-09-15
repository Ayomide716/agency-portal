"use client";

import {
  Bar,
  BarChart,
  Cell,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartTooltip } from "@/components/dashboard/charts/chart-tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getChannelMetrics } from "@/lib/metrics";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";

const axisStyle = { fill: "#a1a1aa", fontSize: 12 };

/** Horizontal bar chart of lead volume by acquisition channel. */
export function ChannelVolumeChart() {
  const data = getChannelMetrics().sort((a, b) => b.leads - a.leads);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Lead acquisition by channel</CardTitle>
        <p className="mt-1 text-sm text-muted-foreground">
          Volume delivered per source over the last 90 days.
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 4, right: 16, left: 8, bottom: 0 }}
              barCategoryGap={14}
            >
              <CartesianGrid
                stroke="#27272a"
                strokeDasharray="3 3"
                horizontal={false}
              />
              <XAxis
                type="number"
                tick={axisStyle}
                tickLine={false}
                axisLine={{ stroke: "#27272a" }}
              />
              <YAxis
                type="category"
                dataKey="channel"
                tick={axisStyle}
                tickLine={false}
                axisLine={false}
                width={86}
              />
              <Tooltip
                cursor={{ fill: "#ffffff0a" }}
                content={
                  <ChartTooltip formatter={(value) => formatNumber(value)} />
                }
              />
              <Bar dataKey="leads" name="Leads" radius={[0, 6, 6, 0]}>
                {data.map((entry) => (
                  <Cell key={entry.channel} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

/** Donut of spend share, with the blended cost per lead in the middle. */
export function ChannelSpendChart() {
  const data = getChannelMetrics();
  const totalSpend = data.reduce((sum, row) => sum + row.spend, 0);
  const totalLeads = data.reduce((sum, row) => sum + row.leads, 0);
  const blendedCpl = totalLeads ? totalSpend / totalLeads : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Spend distribution</CardTitle>
        <p className="mt-1 text-sm text-muted-foreground">
          Where the media budget went, and what it returned.
        </p>
      </CardHeader>
      <CardContent className="grid gap-6 sm:grid-cols-[minmax(0,240px)_1fr] sm:items-center">
        <div className="relative h-[220px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                content={
                  <ChartTooltip formatter={(value) => formatCurrency(value)} />
                }
              />
              <Pie
                data={data}
                dataKey="spend"
                nameKey="channel"
                innerRadius="62%"
                outerRadius="92%"
                paddingAngle={2}
                stroke="none"
                isAnimationActive={false}
              >
                {data.map((entry) => (
                  <Cell key={entry.channel} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
              Blended CPL
            </span>
            <span className="text-2xl font-semibold tracking-tight text-zinc-50 tabular-nums">
              {formatCurrency(Math.round(blendedCpl))}
            </span>
          </div>
        </div>

        <ul className="space-y-3">
          {data.map((row) => (
            <li key={row.channel} className="flex items-center gap-3 text-sm">
              <span
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: row.color }}
                aria-hidden="true"
              />
              <span className="flex-1 truncate text-zinc-300">{row.channel}</span>
              <span className="font-mono text-xs text-zinc-400 tabular-nums">
                {formatCurrency(row.spend)}
              </span>
              <span className="w-12 text-right font-mono text-xs text-muted-foreground tabular-nums">
                {formatPercent((row.spend / (totalSpend || 1)) * 100, 0)}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
