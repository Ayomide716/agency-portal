# Apex Leads — Client Lead-Tracking Portal

A production-ready prototype of a white-label client portal for B2B lead
generation agencies. Agencies give each client a live dashboard of the leads
being generated for them — pipeline value, conversion rate and cost per lead —
instead of another static PDF.

Built with Next.js (App Router), Tailwind CSS, Shadcn-style components on Radix
primitives, Lucide icons and Recharts.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

## Routes

| Route                  | What it is                                                                 |
| ---------------------- | -------------------------------------------------------------------------- |
| `/`                    | Marketing homepage — hero, live stat counters, features, pricing, FAQ       |
| `/auth`                | Split-pane mock sign-in and registration                                    |
| `/dashboard`           | Client overview — KPI cards, status mix, channel snapshot, recent leads     |
| `/dashboard/leads`     | Full searchable, filterable, sortable lead table with CSV export            |
| `/dashboard/analytics` | Monthly growth, channel acquisition, spend mix, pipeline velocity, funnel   |
| `/dashboard/settings`  | Agency branding, notifications, plan usage, client access                   |

The auth screen is a prototype: any valid-looking email with an 8+ character
password opens the portal. No credentials leave the browser and there is no
backend.

## Project structure

```
app/
  layout.js               Root layout, metadata, theme
  globals.css             Design tokens and utility layers
  page.js                 Landing page
  auth/page.js            Authentication
  dashboard/
    layout.js             Sidebar + topbar shell
    page.js               Overview
    leads/page.js         Lead management
    analytics/page.js     Charts and attribution
    settings/page.js      Workspace settings
components/
  ui/                     Shadcn-style primitives (Radix + CVA)
  landing/                Marketing sections
  auth/                   Split-pane auth panels
  dashboard/              Shell, metric cards, leads table
  dashboard/charts/       Recharts and SVG visualisations
lib/
  data.js                 Demo dataset — leads, channels, pricing, FAQ copy
  metrics.js              Derived KPIs computed from the dataset
  utils.js                cn() plus number, currency and date formatters
```

## Design system

A dark agency aesthetic: zinc and slate surfaces with emerald and cyan reserved
for performance signals. Tokens live as HSL CSS custom properties in
`app/globals.css` and are consumed through Tailwind's theme in
`tailwind.config.js`, so re-theming means editing one block of variables.

## Working with the data

Every number in the portal is derived from `lib/data.js`. `lib/metrics.js`
computes the headline KPIs from that dataset rather than hard-coding them, so
editing the leads array updates the metric cards, the status distribution and
the channel tables together. To wire a real backend, replace the exports in
`lib/data.js` with API calls and keep the `lib/metrics.js` signatures intact.
