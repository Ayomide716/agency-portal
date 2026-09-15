"use client";

import * as React from "react";
import Link from "next/link";
import { Check, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { pricingTiers } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Annual billing takes two months off the yearly total. */
const ANNUAL_DISCOUNT = 10 / 12;

const comparisonRows = [
  { feature: "Client workspaces", values: ["5", "25", "Unlimited"] },
  { feature: "Tracked leads / month", values: ["2,500", "25,000", "Unlimited"] },
  { feature: "Branded client dashboards", values: [true, true, true] },
  { feature: "Custom domain white-label", values: [false, true, true] },
  { feature: "Channel attribution & CPL", values: [false, true, true] },
  { feature: "Automated client reports", values: [false, true, true] },
  { feature: "SSO & audit logs", values: [false, false, true] },
  { feature: "REST API & webhooks", values: [false, false, true] },
  { feature: "Dedicated success manager", values: [false, false, true] },
];

export function Pricing() {
  const [annual, setAnnual] = React.useState(false);

  const priceFor = (base) =>
    annual ? Math.round(base * ANNUAL_DISCOUNT) : base;

  return (
    <section id="pricing" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Pricing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One flat fee. Bill it straight through to the client.
          </h2>
          <p className="mt-4 text-pretty text-zinc-400">
            Every plan includes unlimited seats for your team. Cancel any time —
            your data exports in one click.
          </p>
        </div>

        <div className="mt-9 flex items-center justify-center gap-3">
          <span
            className={cn(
              "text-sm transition-colors",
              annual ? "text-zinc-500" : "text-zinc-100"
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((value) => !value)}
            className={cn(
              "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              annual ? "bg-emerald-500" : "bg-zinc-700"
            )}
          >
            <span
              className={cn(
                "pointer-events-none block size-5 rounded-full bg-zinc-950 shadow-lg transition-transform",
                annual ? "translate-x-5" : "translate-x-0"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm transition-colors",
              annual ? "text-zinc-100" : "text-zinc-500"
            )}
          >
            Annual
          </span>
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
            2 months free
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-7 transition-colors",
                tier.highlight
                  ? "border-emerald-500/40 bg-gradient-to-b from-emerald-500/[0.07] to-card shadow-2xl shadow-emerald-500/10 lg:-mt-4 lg:mb-[-1rem]"
                  : "border-border bg-card hover:border-zinc-700"
              )}
            >
              {tier.highlight ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-3 py-1 text-xs font-semibold text-zinc-950">
                  Most popular
                </span>
              ) : null}

              <h3 className="text-lg font-semibold text-zinc-100">{tier.name}</h3>
              <p className="mt-1.5 min-h-[40px] text-sm leading-relaxed text-zinc-400">
                {tier.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tight text-zinc-50 tabular-nums">
                  ${priceFor(tier.price)}
                </span>
                <span className="text-sm text-muted-foreground">/ month</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {annual
                  ? `Billed annually at $${priceFor(tier.price) * 12}`
                  : "Billed monthly, cancel any time"}
              </p>

              <Button
                asChild
                variant={tier.highlight ? "gradient" : "outline"}
                size="lg"
                className="mt-6 w-full"
              >
                <Link href="/auth">{tier.cta}</Link>
              </Button>

              <ul className="mt-7 space-y-3 border-t border-border pt-7">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full comparison matrix — collapses to horizontal scroll on mobile. */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="border-b border-border px-6 py-5">
            <h3 className="text-base font-semibold text-zinc-100">
              Compare every plan
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Scroll horizontally on smaller screens.
            </p>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="min-w-[220px]">Feature</TableHead>
                {pricingTiers.map((tier) => (
                  <TableHead
                    key={tier.name}
                    className={cn(
                      "min-w-[130px] text-center",
                      tier.highlight && "text-emerald-400"
                    )}
                  >
                    {tier.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonRows.map((row) => (
                <TableRow key={row.feature}>
                  <TableCell className="font-medium text-zinc-300">
                    {row.feature}
                  </TableCell>
                  {row.values.map((value, index) => (
                    <TableCell
                      key={`${row.feature}-${pricingTiers[index].name}`}
                      className="text-center text-sm text-zinc-400"
                    >
                      {value === true ? (
                        <Check className="mx-auto size-4 text-emerald-400" />
                      ) : value === false ? (
                        <Minus className="mx-auto size-4 text-zinc-700" />
                      ) : (
                        value
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
