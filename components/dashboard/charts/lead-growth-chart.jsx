"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartTooltip } from "@/components/dashboard/charts/chart-tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { monthlyGrowth } from "@/lib/data";
import { cn, formatNumber } from "@/lib/utils";

const series = [
  { key: "leads", name: "Total leads", color: "#10b981" },
  { key: "qualified", name: "Qualified", color: "#06b6d4" },
  { key: "closed", name: "Closed won", color: "#a78bfa" },
];

const axisStyle = { fill: "#a1a1aa", fontSize: 12 };

export function LeadGrowthChart() {
  const [hidden, setHidden] = React.useState([]);

  const toggleSeries = (key) => {
    setHidden((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key]
    );
  };

  const first = monthlyGrowth[0];
  const last = monthlyGrowth[monthlyGrowth.length - 1];
  const growth = first.leads
    ? ((last.leads - first.leads) / first.leads) * 100
    : 0;

  return (
    <Card>
      <CardHeader className="flex-col gap-4 space-y-0 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <CardTitle className="text-base">Monthly lead growth</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">
            Volume, qualification and closed-won trend across the year to date.
          </p>
        </div>
        <div className="shrink-0 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-400">
          +{growth.toFixed(0)}% YTD
        </div>
      </CardHeader>

      <CardContent>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={monthlyGrowth}
              margin={{ top: 8, right: 8, left: -18, bottom: 0 }}
            >
              <defs>
                {series.map((item) => (
                  <linearGradient
                    key={item.key}
                    id={`growth-${item.key}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor={item.color} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={item.color} stopOpacity={0} />
                  </linearGradient>
                ))}
              </defs>

              <CartesianGrid
                stroke="#27272a"
                strokeDasharray="3 3"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tick={axisStyle}
                tickLine={false}
                axisLine={{ stroke: "#27272a" }}
              />
              <YAxis
                tick={axisStyle}
                tickLine={false}
                axisLine={false}
                width={56}
              />
              <Tooltip
                cursor={{ stroke: "#3f3f46", strokeWidth: 1 }}
                content={<ChartTooltip formatter={(value) => formatNumber(value)} />}
              />
              <Legend content={() => null} />

              {series.map((item) =>
                hidden.includes(item.key) ? null : (
                  <Area
                    key={item.key}
                    type="monotone"
                    dataKey={item.key}
                    name={item.name}
                    stroke={item.color}
                    strokeWidth={2}
                    fill={`url(#growth-${item.key})`}
                    activeDot={{ r: 4, strokeWidth: 0 }}
                    isAnimationActive={false}
                  />
                )
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Custom legend doubles as a series toggle. */}
        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
          {series.map((item) => {
            const active = !hidden.includes(item.key);
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => toggleSeries(item.key)}
                aria-pressed={active}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  active
                    ? "border-border bg-secondary/60 text-zinc-200"
                    : "border-border/60 text-zinc-500 hover:text-zinc-300"
                )}
              >
                <span
                  className="size-2 rounded-full transition-opacity"
                  style={{
                    backgroundColor: item.color,
                    opacity: active ? 1 : 0.35,
                  }}
                  aria-hidden="true"
                />
                {item.name}
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
