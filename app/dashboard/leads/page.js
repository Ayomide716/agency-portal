import { Flame, HandCoins, Snowflake, Users } from "lucide-react";

import { LeadsTable } from "@/components/dashboard/leads-table";
import { MetricCard } from "@/components/dashboard/metric-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { leads } from "@/lib/data";
import { getOverviewMetrics } from "@/lib/metrics";
import { formatCompactCurrency } from "@/lib/utils";

export const metadata = {
  title: "Leads",
};

export default function LeadsPage() {
  const metrics = getOverviewMetrics();
  const coldCount = leads.filter((lead) => lead.status === "Cold").length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Leads"
        description="Every lead in the workspace, searchable and filterable by status, channel and owner."
        actions={
          <Button variant="outline" size="sm">
            Import CSV
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="All Leads"
          value={metrics.totalLeads}
          icon={Users}
          accent="emerald"
          caption="in this workspace"
        />
        <MetricCard
          label="Hot"
          value={metrics.hotCount}
          icon={Flame}
          accent="amber"
          caption="ready for outreach"
        />
        <MetricCard
          label="Cold"
          value={coldCount}
          icon={Snowflake}
          accent="cyan"
          caption="awaiting nurture"
        />
        <MetricCard
          label="Open Pipeline"
          value={formatCompactCurrency(metrics.pipelineValue)}
          icon={HandCoins}
          accent="violet"
          caption="unclosed deal value"
        />
      </div>

      <LeadsTable
        leads={leads}
        title="All leads"
        description="Sort any column, filter by status or channel, then export the exact view as CSV."
      />
    </div>
  );
}
