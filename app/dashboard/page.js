import Link from "next/link";
import { CalendarRange, DollarSign, Plus, Target, Users, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ChannelSnapshot } from "@/components/dashboard/channel-snapshot";
import { LeadsTable } from "@/components/dashboard/leads-table";
import { MetricCard } from "@/components/dashboard/metric-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBreakdown } from "@/components/dashboard/status-breakdown";
import { leads, monthlyGrowth } from "@/lib/data";
import { getMonthlyDelta, getOverviewMetrics } from "@/lib/metrics";
import { formatCompactCurrency, formatCurrency, formatPercent } from "@/lib/utils";

export default function DashboardOverviewPage() {
  const metrics = getOverviewMetrics();
  const monthlyDelta = getMonthlyDelta();
  const leadTrend = monthlyGrowth.map((row) => row.leads);
  const closedTrend = monthlyGrowth.map((row) => row.closed);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Overview"
        description="Live performance for Northgate Logistics · 1 – 15 September 2026"
        actions={
          <>
            <Button variant="outline" size="sm">
              <CalendarRange />
              Last 30 days
            </Button>
            <Button asChild variant="gradient" size="sm">
              <Link href="/dashboard/leads">
                <Plus />
                Add lead
              </Link>
            </Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Total Leads"
          value={metrics.totalLeads}
          delta={monthlyDelta}
          positive
          caption="vs. last month"
          icon={Users}
          accent="emerald"
          sparkline={leadTrend}
        />
        <MetricCard
          label="Conversion Rate"
          value={formatPercent(metrics.conversionRate)}
          delta={3.4}
          positive
          caption={`${metrics.closedCount} deals closed`}
          icon={Target}
          accent="cyan"
          sparkline={closedTrend}
        />
        <MetricCard
          label="Pipeline Value"
          value={formatCompactCurrency(metrics.pipelineValue)}
          delta={12.8}
          positive
          caption={`${formatCompactCurrency(metrics.closedValue)} closed won`}
          icon={DollarSign}
          accent="violet"
          sparkline={[412, 468, 503, 561, 598, 644, 712, 786]}
        />
        <MetricCard
          label="Cost Per Lead"
          value={formatCurrency(Math.round(metrics.costPerLead))}
          delta={-6.2}
          positive
          caption={`${formatCompactCurrency(metrics.totalSpend)} channel spend`}
          icon={Wallet}
          accent="amber"
          sparkline={[52, 49, 47, 48, 44, 41, 39, 36, 34]}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <StatusBreakdown />
        <ChannelSnapshot />
      </div>

      <LeadsTable
        leads={leads}
        title="Recent leads"
        description="Every lead delivered this billing period, newest first."
      />
    </div>
  );
}
