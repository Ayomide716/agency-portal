"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartColumnIncreasing,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Settings,
  Users,
  X,
} from "lucide-react";

import { Logo } from "@/components/logo";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Leads", href: "/dashboard/leads", icon: Users },
  { label: "Analytics", href: "/dashboard/analytics", icon: ChartColumnIncreasing },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

function NavLinks({ pathname, onNavigate }) {
  return (
    <nav className="flex flex-1 flex-col gap-1">
      {navItems.map((item) => {
        // `/dashboard` must not stay active on its own child routes.
        const active =
          item.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              active
                ? "bg-emerald-500/10 text-emerald-400"
                : "text-zinc-400 hover:bg-secondary hover:text-zinc-100"
            )}
          >
            {active ? (
              <span className="absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-emerald-400" />
            ) : null}
            <item.icon className="size-[18px] shrink-0" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarBody({ pathname, onNavigate }) {
  return (
    <div className="flex h-full flex-col gap-6 p-4">
      <div className="px-2 pt-2">
        <Logo />
      </div>

      <div className="rounded-xl border border-border bg-secondary/30 p-3">
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
          Active client
        </p>
        <p className="mt-1 truncate text-sm font-medium text-zinc-100">
          Northgate Logistics
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Retainer · Growth plan
        </p>
      </div>

      <NavLinks pathname={pathname} onNavigate={onNavigate} />

      <div className="space-y-4">
        <div className="rounded-xl border border-border bg-secondary/30 p-3.5">
          <div className="flex items-baseline justify-between">
            <p className="text-xs font-medium text-zinc-300">Monthly lead quota</p>
            <p className="font-mono text-xs text-emerald-400">68%</p>
          </div>
          <Progress value={68} className="mt-2.5 h-1.5" />
          <p className="mt-2 text-[11px] text-muted-foreground">
            17,042 of 25,000 leads used
          </p>
        </div>

        <div className="space-y-1 border-t border-border pt-3">
          <Link
            href="#"
            onClick={onNavigate}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-secondary hover:text-zinc-100"
          >
            <LifeBuoy className="size-[18px]" />
            Support
          </Link>
          <Link
            href="/auth"
            onClick={onNavigate}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-secondary hover:text-zinc-100"
          >
            <LogOut className="size-[18px]" />
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Sticky sidebar on desktop; slide-over drawer below the lg breakpoint,
 * driven by the topbar's menu button through `open` / `onOpenChange`.
 */
export function Sidebar({ open, onOpenChange }) {
  const pathname = usePathname();

  // Hold the latest callback in a ref so the route effect below can depend on
  // the pathname alone — otherwise a parent re-render would slam the drawer shut.
  const closeRef = React.useRef(onOpenChange);
  React.useEffect(() => {
    closeRef.current = onOpenChange;
  }, [onOpenChange]);

  // Close the drawer whenever the route changes.
  React.useEffect(() => {
    closeRef.current(false);
  }, [pathname]);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeRef.current(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <aside className="sticky top-0 hidden h-screen w-[268px] shrink-0 border-r border-border bg-card/40 lg:block">
        <SidebarBody pathname={pathname} />
      </aside>

      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close navigation"
          onClick={() => onOpenChange(false)}
          className={cn(
            "absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          role="dialog"
          aria-modal={open}
          aria-label="Navigation"
          className={cn(
            "absolute inset-y-0 left-0 w-[280px] max-w-[85vw] border-r border-border bg-card shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <button
            type="button"
            tabIndex={open ? 0 : -1}
            onClick={() => onOpenChange(false)}
            aria-label="Close navigation"
            className="absolute right-3 top-4 flex size-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-secondary hover:text-zinc-100"
          >
            <X className="size-4" />
          </button>
          <SidebarBody
            pathname={pathname}
            onNavigate={() => onOpenChange(false)}
          />
        </div>
      </div>
    </>
  );
}
