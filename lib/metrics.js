import { channelBreakdown, leads, monthlyGrowth } from "@/lib/data";

/**
 * All dashboard headline numbers are derived from the lead dataset rather than
 * hard-coded, so editing `lib/data.js` keeps the metric cards honest.
 */
export function getOverviewMetrics() {
  const totalLeads = leads.length;
  const closed = leads.filter((lead) => lead.status === "Closed");
  const openPipeline = leads.filter(
    (lead) => lead.status !== "Closed" && lead.status !== "Lost"
  );

  const pipelineValue = openPipeline.reduce((sum, lead) => sum + lead.value, 0);
  const closedValue = closed.reduce((sum, lead) => sum + lead.value, 0);
  const conversionRate = totalLeads ? (closed.length / totalLeads) * 100 : 0;

  const totalSpend = channelBreakdown.reduce((sum, row) => sum + row.spend, 0);
  const totalChannelLeads = channelBreakdown.reduce(
    (sum, row) => sum + row.leads,
    0
  );
  const costPerLead = totalChannelLeads ? totalSpend / totalChannelLeads : 0;

  return {
    totalLeads,
    closedCount: closed.length,
    conversionRate,
    pipelineValue,
    closedValue,
    costPerLead,
    totalSpend,
    hotCount: leads.filter((lead) => lead.status === "Hot").length,
    warmCount: leads.filter((lead) => lead.status === "Warm").length,
  };
}

/** Month-over-month delta in lead volume, used for the trend chips. */
export function getMonthlyDelta() {
  if (monthlyGrowth.length < 2) return 0;
  const current = monthlyGrowth[monthlyGrowth.length - 1].leads;
  const previous = monthlyGrowth[monthlyGrowth.length - 2].leads;
  return previous ? ((current - previous) / previous) * 100 : 0;
}

/** Channel rows enriched with derived CPL and close-rate columns. */
export function getChannelMetrics() {
  return channelBreakdown.map((row) => ({
    ...row,
    costPerLead: row.leads ? row.spend / row.leads : 0,
    closeRate: row.leads ? (row.closed / row.leads) * 100 : 0,
  }));
}

/** Count of leads per status, ordered for the status distribution bar. */
export function getStatusDistribution() {
  const order = ["Hot", "Warm", "Cold", "Closed", "Lost"];
  const palette = {
    Hot: "#fb923c",
    Warm: "#fbbf24",
    Cold: "#38bdf8",
    Closed: "#10b981",
    Lost: "#71717a",
  };

  return order.map((status) => ({
    status,
    color: palette[status],
    count: leads.filter((lead) => lead.status === status).length,
  }));
}
