import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/15 text-emerald-400",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "border-border text-muted-foreground",
        hot: "border-orange-500/25 bg-orange-500/10 text-orange-400",
        warm: "border-amber-500/25 bg-amber-500/10 text-amber-300",
        cold: "border-sky-500/25 bg-sky-500/10 text-sky-300",
        closed: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
        lost: "border-zinc-500/25 bg-zinc-500/10 text-zinc-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
