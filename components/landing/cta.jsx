import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-card px-6 py-16 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid-sm opacity-40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[120px]"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Your next client call could be a link instead of a deck
            </h2>
            <p className="mt-4 text-pretty text-zinc-400">
              Spin up a branded portal, import your leads and see the whole
              pipeline in under ten minutes. Free for 14 days, no card needed.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="gradient" className="w-full sm:w-auto">
                <Link href="/auth">
                  Start free trial
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/dashboard">Browse the demo data</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
