import Link from "next/link";
import { ArrowRight, CircleCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatCounter } from "@/components/landing/stat-counter";
import { HeroPreview } from "@/components/landing/hero-preview";
import { landingStats } from "@/lib/data";

const trustPoints = [
  "14-day free trial",
  "No credit card required",
  "Live in under 10 minutes",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Layered ambience: blueprint grid, emerald bloom, cyan counter-bloom. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-12rem] size-[38rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-40 size-[28rem] rounded-full bg-cyan-500/10 blur-[130px]"
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
            <Sparkles className="size-3.5" />
            Built for B2B lead generation agencies
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Stop sending screenshots.</span>
            <br />
            <span className="text-gradient-accent">Send them a portal.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            Apex Leads gives every client a live, white-labelled dashboard of the
            leads you generate — pipeline value, conversion rate and cost per lead
            updating in real time, under your agency&apos;s brand.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="gradient" className="w-full sm:w-auto">
              <Link href="/dashboard">
                Explore the live demo
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/auth">Create free account</Link>
            </Button>
          </div>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <CircleCheck className="size-4 text-emerald-500" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <HeroPreview />

        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {landingStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-card px-4 py-7 text-center"
            >
              <dt className="order-2 text-xs uppercase tracking-wider text-muted-foreground sm:text-[13px]">
                {stat.label}
              </dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                <StatCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
