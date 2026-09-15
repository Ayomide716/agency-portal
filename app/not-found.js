import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-50"
      />
      <div className="relative">
        <Logo />
        <p className="mt-10 font-mono text-sm text-emerald-400">Error 404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          This page isn&apos;t in the pipeline
        </h1>
        <p className="mx-auto mt-3 max-w-md text-pretty text-zinc-400">
          The link may be stale, or the workspace it pointed at has been
          archived.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="gradient">
            <Link href="/">Back to homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">Open the portal</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
