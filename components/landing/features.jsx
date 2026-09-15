import {
  Filter,
  LayoutDashboard,
  Plug,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

import { landingFeatures } from "@/lib/data";

const iconMap = {
  LayoutDashboard,
  Filter,
  TrendingUp,
  Zap,
  ShieldCheck,
  Plug,
};

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            The platform
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything your client asks for on the monthly call
          </h2>
          <p className="mt-4 text-pretty text-zinc-400">
            Built from the reporting questions agencies get asked every single
            month, so you answer them before they&apos;re raised.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {landingFeatures.map((feature) => {
            const Icon = iconMap[feature.icon] ?? LayoutDashboard;
            return (
              <div
                key={feature.title}
                className="group relative bg-card p-7 transition-colors hover:bg-secondary/40"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-zinc-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
