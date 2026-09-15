"use client";

/**
 * Shared Recharts tooltip. `formatter` receives the raw numeric value so each
 * chart can render currency, counts or percentages without its own component.
 */
export function ChartTooltip({ active, payload, label, formatter }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-border bg-popover/95 px-3 py-2.5 shadow-xl shadow-black/50 backdrop-blur">
      <p className="text-xs font-medium text-zinc-300">{label}</p>
      <ul className="mt-2 space-y-1.5">
        {payload.map((entry) => (
          <li
            key={`${entry.dataKey}-${entry.name}`}
            className="flex items-center gap-2.5 text-xs"
          >
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: entry.color || entry.payload?.color }}
              aria-hidden="true"
            />
            <span className="text-muted-foreground">{entry.name}</span>
            <span className="ml-auto font-mono text-zinc-100 tabular-nums">
              {formatter ? formatter(entry.value, entry) : entry.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
