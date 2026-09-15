import Link from "next/link";

import { cn } from "@/lib/utils";

/** Wordmark + geometric "ascending pipeline" glyph used across the product. */
export function Logo({ className, href = "/", showWordmark = true }) {
  const content = (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="relative flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="size-[18px] text-zinc-950"
        >
          <path
            d="M4 18V13M10 18V8M16 18V11M20 18V4"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {showWordmark ? (
        <span className="text-[17px] font-semibold tracking-tight text-zinc-50">
          Apex<span className="text-emerald-400">Leads</span>
        </span>
      ) : null}
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="inline-flex" aria-label="Apex Leads home">
      {content}
    </Link>
  );
}
