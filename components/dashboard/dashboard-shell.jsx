"use client";

import * as React from "react";

import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";

/** Owns the mobile drawer state shared by the sidebar and topbar. */
export function DashboardShell({ children }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleOpenChange = React.useCallback((open) => setMenuOpen(open), []);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar open={menuOpen} onOpenChange={handleOpenChange} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onMenuClick={() => setMenuOpen(true)} />
        <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
