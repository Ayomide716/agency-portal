"use client";

import * as React from "react";
import { Check, Loader2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const notificationSettings = [
  {
    key: "newLead",
    title: "New lead delivered",
    description: "Notify the workspace the moment a lead lands from any channel.",
    defaultOn: true,
  },
  {
    key: "statusChange",
    title: "Status changes",
    description: "Alert the lead owner when a lead moves to Hot or Closed.",
    defaultOn: true,
  },
  {
    key: "weeklyDigest",
    title: "Weekly client digest",
    description: "Send every client a Monday recap of last week's performance.",
    defaultOn: true,
  },
  {
    key: "budgetAlerts",
    title: "Budget pacing alerts",
    description: "Warn when a channel is on track to overspend its monthly cap.",
    defaultOn: false,
  },
];

const accentSwatches = [
  { name: "Emerald", value: "#10b981" },
  { name: "Cyan", value: "#06b6d4" },
  { name: "Violet", value: "#8b5cf6" },
  { name: "Amber", value: "#f59e0b" },
  { name: "Rose", value: "#f43f5e" },
];

export function SettingsPanels() {
  const [accent, setAccent] = React.useState(accentSwatches[0].value);
  const [saving, setSaving] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const handleSave = (event) => {
    event.preventDefault();
    // Mock persistence — the prototype keeps everything in component state.
    setSaving(true);
    setSaved(false);
    window.setTimeout(() => {
      setSaving(false);
      setSaved(true);
      window.setTimeout(() => setSaved(false), 2400);
    }, 800);
  };

  return (
    <form onSubmit={handleSave} className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Agency profile</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Shown to every client across their portal and reports.
            </p>
          </CardHeader>
          <CardContent className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="agency-name">Agency name</Label>
              <Input id="agency-name" defaultValue="Northbound Demand" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Reply-to email</Label>
              <Input
                id="contact-email"
                type="email"
                defaultValue="reports@northbounddemand.com"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="portal-domain">Portal domain</Label>
              <Input id="portal-domain" defaultValue="leads.northbounddemand.com" />
              <p className="text-xs text-muted-foreground">
                CNAME verified · SSL certificate active
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Reporting timezone</Label>
              <Select defaultValue="america-new_york">
                <SelectTrigger id="timezone">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="america-new_york">
                    America / New York
                  </SelectItem>
                  <SelectItem value="america-chicago">America / Chicago</SelectItem>
                  <SelectItem value="europe-london">Europe / London</SelectItem>
                  <SelectItem value="europe-berlin">Europe / Berlin</SelectItem>
                  <SelectItem value="asia-singapore">Asia / Singapore</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Reporting currency</Label>
              <Select defaultValue="usd">
                <SelectTrigger id="currency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="gbp">GBP (£)</SelectItem>
                  <SelectItem value="cad">CAD ($)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2.5 sm:col-span-2">
              <Label>Portal accent colour</Label>
              <div className="flex flex-wrap gap-2.5">
                {accentSwatches.map((swatch) => (
                  <button
                    key={swatch.value}
                    type="button"
                    onClick={() => setAccent(swatch.value)}
                    aria-label={swatch.name}
                    aria-pressed={accent === swatch.value}
                    className={cn(
                      "flex size-9 items-center justify-center rounded-lg border-2 transition-transform hover:scale-105",
                      accent === swatch.value
                        ? "border-zinc-200"
                        : "border-transparent"
                    )}
                    style={{ backgroundColor: `${swatch.value}26` }}
                  >
                    <span
                      className="flex size-5 items-center justify-center rounded-md"
                      style={{ backgroundColor: swatch.value }}
                    >
                      {accent === swatch.value ? (
                        <Check className="size-3 text-zinc-950" />
                      ) : null}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="gap-3 border-t border-border pt-6">
            <Button type="submit" variant="gradient" disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Saving…
                </>
              ) : (
                "Save changes"
              )}
            </Button>
            <Button type="reset" variant="ghost" disabled={saving}>
              Discard
            </Button>
            {saved ? (
              <span className="flex items-center gap-1.5 text-sm text-emerald-400">
                <Check className="size-4" />
                Saved
              </span>
            ) : null}
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Notifications</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Control what your team and your clients hear about.
            </p>
          </CardHeader>
          <CardContent className="divide-y divide-border">
            {notificationSettings.map((setting) => (
              <div
                key={setting.key}
                className="flex items-start justify-between gap-6 py-4 first:pt-0 last:pb-0"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-zinc-200">
                    {setting.title}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {setting.description}
                  </p>
                </div>
                <Switch
                  defaultChecked={setting.defaultOn}
                  aria-label={setting.title}
                  className="mt-0.5 shrink-0"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Plan & usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Current plan</span>
              <Badge>Growth · $599/mo</Badge>
            </div>
            <Separator />
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Client workspaces</dt>
                <dd className="font-mono text-zinc-200 tabular-nums">11 / 25</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Leads this month</dt>
                <dd className="font-mono text-zinc-200 tabular-nums">
                  17,042 / 25,000
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Team seats</dt>
                <dd className="font-mono text-zinc-200 tabular-nums">Unlimited</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Renews</dt>
                <dd className="font-mono text-zinc-200 tabular-nums">1 Oct 2026</dd>
              </div>
            </dl>
            <Button variant="outline" type="button" className="w-full">
              Manage billing
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Client access</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Read-only logins scoped to a single workspace.
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Northgate Logistics", seats: 3 },
              { name: "Cobalt Health Systems", seats: 2 },
              { name: "Meridian Robotics", seats: 4 },
            ].map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-between gap-3 rounded-lg border border-border bg-secondary/25 px-3.5 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-zinc-200">
                    {client.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {client.seats} client seats
                  </p>
                </div>
                <Badge variant="outline">Active</Badge>
              </div>
            ))}
            <Button variant="outline" type="button" className="w-full">
              Invite a client
            </Button>
          </CardContent>
        </Card>

        <Card className="border-red-500/20">
          <CardHeader>
            <CardTitle className="text-base text-red-400">Danger zone</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Deleting a workspace removes every lead and report it contains.
            </p>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" type="button" className="w-full">
              Delete workspace
            </Button>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
