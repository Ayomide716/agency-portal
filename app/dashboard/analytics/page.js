import { Activity, Download, Gauge, Percent, Timer } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MetricCard } from "@/components/dashboard/metric-card";
import { PageHeader } from "@/components/dashboard/page-header";
import {
  ChannelSpendChart,
  ChannelVolumeChart,
} from "@/components/dashboard/charts/channel-chart";
import { FunnelChart } from "@/components/dashboard/charts/funnel-chart";
import { LeadGrowthChart } from "@/components/dashboard/charts/lead-growth-chart";
import { PipelineChart } from "@/components/dashboard/charts/pipeline-chart";
import { teamPerformance } from "@/lib/data";
import { getChannelMetrics, getMonthlyDelta, getOverviewMetrics } from "@/lib/metrics";
import {
  formatCompactCurrency,
  formatCurrency,
  formatNumber,
  formatPercent,
} from "@/lib/utils";

export const metadata = {
  title: "Analytics",
};

export default function AnalyticsPage() {
  const metrics = getOverviewMetrics();
  const monthlyDelta = getMonthlyDelta();
  const channels = getChannelMetrics().sort(
    (a, b) => a.costPerLead - b.costPerLead
  );

  const totalChannelLeads = channels.reduce((sum, row) => sum + row.leads, 0);
  const totalClosed = channels.reduce((sum, row) => sum + row.closed, 0);
  const blendedCloseRate = totalChannelLeads
    ? (totalClosed / totalChannelLeads) * 100
    : 0;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="Channel attribution, growth trend and funnel efficiency for the current reporting period."
        actions={
          <>
            <Button variant="outline" size="sm">
              Last 90 days
            </Button>
            <Button variant="gradient" size="sm">
              <Download />
              Export report
            </Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Leads This Month"
          value={formatNumber(421)}
          delta={monthlyDelta}
          positive
          caption="vs. August"
          icon={Activity}
          accent="emerald"
        />
        <MetricCard
          label="Blended Close Rate"
          value={formatPercent(blendedCloseRate)}
          delta={2.1}
          positive
          caption={`${formatNumber(totalClosed)} deals won`}
          icon={Percent}
          accent="cyan"
        />
        <MetricCard
          label="Blended CPL"
          value={formatCurrency(Math.round(metrics.costPerLead))}
          delta={-6.2}
          positive
          caption="across all channels"
          icon={Gauge}
          accent="amber"
        />
        <MetricCard
          label="Avg. Time To Close"
          value="34 days"
          delta={-11.4}
          positive
          caption="first touch to signature"
          icon={Timer}
          accent="violet"
        />
      </div>

      <LeadGrowthChart />

      <div className="grid gap-4 xl:grid-cols-2">
        <ChannelVolumeChart />
        <ChannelSpendChart />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <PipelineChart />
        <FunnelChart />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Channel efficiency</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">
            Ranked by cost per lead — the cheapest source is not always the one
            that closes.
          </p>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="pl-6">Channel</TableHead>
                <TableHead className="text-right">Leads</TableHead>
                <TableHead className="text-right">Spend</TableHead>
                <TableHead className="text-right">Cost / lead</TableHead>
                <TableHead className="text-right">Closed</TableHead>
                <TableHead className="pr-6 text-right">Close rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {channels.map((row) => (
                <TableRow key={row.channel}>
                  <TableCell className="pl-6">
                    <span className="flex items-center gap-2.5">
                      <span
                        className="size-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: row.color }}
                        aria-hidden="true"
                      />
                      <span className="font-medium text-zinc-200">
                        {row.channel}
                      </span>
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm text-zinc-300">
                    {formatNumber(row.leads)}
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm text-zinc-400">
                    {formatCurrency(row.spend)}
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm text-zinc-200">
                    {formatCurrency(Math.round(row.costPerLead))}
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm text-zinc-300">
                    {formatNumber(row.closed)}
                  </TableCell>
                  <TableCell className="pr-6 text-right font-mono text-sm text-emerald-400">
                    {formatPercent(row.closeRate)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Team performance</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">
            Closed deals and open pipeline per account owner.
          </p>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-3">
          {teamPerformance.map((rep) => (
            <div
              key={rep.rep}
              className="rounded-xl border border-border bg-secondary/25 p-4"
            >
              <p className="text-sm font-medium text-zinc-100">{rep.rep}</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 tabular-nums">
                {rep.closed}
                <span className="ml-1.5 text-sm font-normal text-muted-foreground">
                  closed
                </span>
              </p>
              <dl className="mt-3 space-y-1.5 border-t border-border pt-3 text-xs">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Pipeline</dt>
                  <dd className="font-mono text-zinc-300 tabular-nums">
                    {formatCompactCurrency(rep.pipeline)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Win rate</dt>
                  <dd className="font-mono text-emerald-400 tabular-nums">
                    {formatPercent(rep.winRate)}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
