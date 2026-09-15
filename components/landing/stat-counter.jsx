"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const numberFormatter = (decimals) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/**
 * Counts up to `value` once the element scrolls into view, then stops.
 * Respects prefers-reduced-motion by jumping straight to the final figure.
 */
export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  durationMs = 1600,
  className,
}) {
  const ref = React.useRef(null);
  const [display, setDisplay] = React.useState(0);
  const format = React.useMemo(() => numberFormatter(decimals), [decimals]);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setDisplay(value);
      return undefined;
    }

    let frame;
    let start;

    const step = (timestamp) => {
      if (start === undefined) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      // Ease-out cubic keeps the final digits from ticking too fast.
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          frame = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, durationMs]);

  const shown =
    value >= 1000000
      ? `${format.format(display / 1000000)}M`
      : format.format(display);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
