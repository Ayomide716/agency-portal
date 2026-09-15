import { Quote, ShieldCheck, TrendingUp, Users } from "lucide-react";

import { Logo } from "@/components/logo";

const proofPoints = [
  {
    icon: Users,
    title: "640 agencies onboarded",
    description: "From two-person shops to 80-seat outbound teams.",
  },
  {
    icon: TrendingUp,
    title: "$1.8B pipeline tracked",
    description: "Attributed down to the channel that produced it.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II aligned",
    description: "SSO, audit logs and scoped client access as standard.",
  },
];

/**
 * Left-hand aesthetic panel of the auth split-pane. Purely decorative content
 * plus social proof; hidden below the lg breakpoint so mobile gets the form.
 */
export function AuthShowcase() {
  return (
    <div className="relative hidden overflow-hidden border-r border-border bg-zinc-950 lg:flex lg:flex-col lg:justify-between lg:p-12">
      {/* Aesthetic grid graphic */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute inset-0 bg-grid-sm opacity-30" />
        <div className="absolute left-[-8rem] top-[-8rem] size-[32rem] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute bottom-[-10rem] right-[-6rem] size-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />

        {/* Accent nodes pinned to grid intersections. */}
        <span className="absolute left-[168px] top-[224px] size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_2px] shadow-emerald-500/60" />
        <span className="absolute left-[336px] top-[392px] size-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_2px] shadow-cyan-500/60" />
        <span className="absolute left-[280px] top-[560px] size-1.5 rounded-full bg-emerald-400/70 shadow-[0_0_10px_2px] shadow-emerald-500/40" />
      </div>

      <div className="relative">
        <Logo />
      </div>

      <div className="relative max-w-md">
        <Quote className="size-7 text-emerald-500/50" aria-hidden="true" />
        <blockquote className="mt-5 text-pretty text-2xl font-medium leading-snug tracking-tight text-zinc-100">
          We replaced eleven spreadsheets and a Notion board with one portal.
          Churn dropped because clients finally see the work landing in real
          time.
        </blockquote>
        <figcaption className="mt-5 text-sm text-zinc-400">
          <span className="font-medium text-zinc-200">Dana Reyes</span> · Founder,
          Northbound Demand
        </figcaption>
      </div>

      <dl className="relative grid gap-5">
        {proofPoints.map((point) => (
          <div key={point.title} className="flex items-start gap-3.5">
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <point.icon className="size-4" />
            </span>
            <div>
              <dt className="text-sm font-medium text-zinc-100">{point.title}</dt>
              <dd className="mt-0.5 text-sm text-zinc-500">{point.description}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
