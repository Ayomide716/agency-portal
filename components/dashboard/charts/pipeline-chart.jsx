"use client";

import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartTooltip } from "@/components/dashboard/charts/chart-tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pipelineVelocity } from "@/lib/data";
import { formatCompactCurrency, formatCurrency } from "@/lib/utils";

const axisStyle = { fill: "#a1a1aa", fontSize: 12 };

/** Open pipeline as an area, closed-won stacked as bars on the same axis. */
export function PipelineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Pipeline velocity</CardTitle>
        <p className="mt-1 text-sm text-muted-foreground">
          Open pipeline against revenue closed, week by week.
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={pipelineVelocity}
              margin={{ top: 8, right: 8, left: -8, bottom: 0 }}
            >
              <defs>
                <linearGradient id="pipelineFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="#27272a" strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="week"
                tick={axisStyle}
                tickLine={false}
                axisLine={{ stroke: "#27272a" }}
              />
              <YAxis
                tick={axisStyle}
                tickLine={false}
                axisLine={false}
                width={64}
                tickFormatter={(value) => formatCompactCurrency(value)}
              />
              <Tooltip
                cursor={{ fill: "#ffffff0a" }}
                content={
                  <ChartTooltip formatter={(value) => formatCurrency(value)} />
                }
              />

              <Area
                type="monotone"
                dataKey="pipeline"
                name="Open pipeline"
                stroke="#06b6d4"
                strokeWidth={2}
                fill="url(#pipelineFill)"
                isAnimationActive={false}
              />
              <Bar
                dataKey="won"
                name="Closed won"
                fill="#10b981"
                radius={[4, 4, 0, 0]}
                barSize={22}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="won"
                name="Closed won trend"
                stroke="#34d399"
                strokeWidth={1.5}
                strokeDasharray="4 4"
                dot={false}
                isAnimationActive={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
