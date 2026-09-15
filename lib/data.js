/**
 * Demo dataset for the Apex Leads portal.
 *
 * Everything here is deterministic dummy data shaped like a real B2B lead-gen
 * agency book of business, so the UI can be exercised end-to-end without a
 * backend. Swap these exports for API calls when wiring a real data source.
 */

export const LEAD_STATUSES = ["Hot", "Warm", "Cold", "Closed", "Lost"];

export const LEAD_SOURCES = ["LinkedIn", "Cold Email", "Meta Ads", "Referral", "Webinar"];

export const statusVariant = {
  Hot: "hot",
  Warm: "warm",
  Cold: "cold",
  Closed: "closed",
  Lost: "lost",
};

export const leads = [
  {
    id: "LD-4821",
    name: "Marcus Whitfield",
    company: "Northgate Logistics",
    title: "VP of Operations",
    email: "m.whitfield@northgatelog.com",
    status: "Hot",
    source: "LinkedIn",
    value: 48000,
    owner: "Dana Reyes",
    dateAdded: "2026-09-11",
  },
  {
    id: "LD-4815",
    name: "Priya Raghunathan",
    company: "Cobalt Health Systems",
    title: "Director of Growth",
    email: "priya.r@cobalthealth.io",
    status: "Warm",
    source: "Cold Email",
    value: 31500,
    owner: "Dana Reyes",
    dateAdded: "2026-09-10",
  },
  {
    id: "LD-4807",
    name: "Tobias Lindqvist",
    company: "Meridian Robotics",
    title: "Head of Revenue",
    email: "t.lindqvist@meridianrobotics.se",
    status: "Hot",
    source: "LinkedIn",
    value: 76000,
    owner: "Owen Castillo",
    dateAdded: "2026-09-09",
  },
  {
    id: "LD-4798",
    name: "Alicia Mendoza",
    company: "Brightpath Legal",
    title: "Managing Partner",
    email: "amendoza@brightpathlegal.com",
    status: "Closed",
    source: "Referral",
    value: 92000,
    owner: "Owen Castillo",
    dateAdded: "2026-09-08",
  },
  {
    id: "LD-4790",
    name: "Devon Blackwell",
    company: "Summit Ridge Capital",
    title: "Principal",
    email: "dblackwell@summitridge.vc",
    status: "Warm",
    source: "Webinar",
    value: 54000,
    owner: "Mira Okafor",
    dateAdded: "2026-09-07",
  },
  {
    id: "LD-4783",
    name: "Hannah Sorenson",
    company: "Vertex Manufacturing",
    title: "COO",
    email: "h.sorenson@vertexmfg.com",
    status: "Cold",
    source: "Meta Ads",
    value: 22000,
    owner: "Mira Okafor",
    dateAdded: "2026-09-06",
  },
  {
    id: "LD-4776",
    name: "Julian Ferreira",
    company: "Atlas Freight Group",
    title: "Director of Sales",
    email: "j.ferreira@atlasfreight.com",
    status: "Hot",
    source: "Cold Email",
    value: 64500,
    owner: "Dana Reyes",
    dateAdded: "2026-09-05",
  },
  {
    id: "LD-4769",
    name: "Renata Kovač",
    company: "Lumen Biotech",
    title: "VP Commercial",
    email: "renata.kovac@lumenbio.eu",
    status: "Warm",
    source: "LinkedIn",
    value: 88000,
    owner: "Owen Castillo",
    dateAdded: "2026-09-04",
  },
  {
    id: "LD-4761",
    name: "Grant Okonkwo",
    company: "Ironclad Security",
    title: "Chief Revenue Officer",
    email: "gokonkwo@ironcladsec.com",
    status: "Closed",
    source: "Referral",
    value: 120000,
    owner: "Mira Okafor",
    dateAdded: "2026-09-03",
  },
  {
    id: "LD-4754",
    name: "Sofia Almeida",
    company: "Harborview Realty",
    title: "Head of Acquisitions",
    email: "salmeida@harborviewrealty.com",
    status: "Lost",
    source: "Meta Ads",
    value: 18000,
    owner: "Dana Reyes",
    dateAdded: "2026-09-02",
  },
  {
    id: "LD-4747",
    name: "Nathan Pryce",
    company: "Cascade Cloud Services",
    title: "VP Partnerships",
    email: "n.pryce@cascadecloud.io",
    status: "Hot",
    source: "LinkedIn",
    value: 71000,
    owner: "Owen Castillo",
    dateAdded: "2026-09-01",
  },
  {
    id: "LD-4739",
    name: "Imani Bello",
    company: "Ridgeline Insurance",
    title: "Director of Distribution",
    email: "ibello@ridgelineins.com",
    status: "Warm",
    source: "Cold Email",
    value: 42500,
    owner: "Mira Okafor",
    dateAdded: "2026-08-30",
  },
  {
    id: "LD-4731",
    name: "Felix Guerrero",
    company: "Dockside Hospitality",
    title: "Founder & CEO",
    email: "felix@docksidehospitality.com",
    status: "Cold",
    source: "Webinar",
    value: 26500,
    owner: "Dana Reyes",
    dateAdded: "2026-08-29",
  },
  {
    id: "LD-4724",
    name: "Claire Vandenberg",
    company: "Orchid Dental Group",
    title: "Regional Director",
    email: "c.vandenberg@orchiddental.com",
    status: "Closed",
    source: "Meta Ads",
    value: 38000,
    owner: "Owen Castillo",
    dateAdded: "2026-08-28",
  },
  {
    id: "LD-4716",
    name: "Samuel Achterberg",
    company: "Pinnacle Facilities",
    title: "SVP Operations",
    email: "sachterberg@pinnaclefm.com",
    status: "Warm",
    source: "LinkedIn",
    value: 59000,
    owner: "Mira Okafor",
    dateAdded: "2026-08-27",
  },
  {
    id: "LD-4708",
    name: "Yuki Tanabe",
    company: "Silverline Analytics",
    title: "Head of Demand Gen",
    email: "y.tanabe@silverlineanalytics.jp",
    status: "Hot",
    source: "Cold Email",
    value: 83000,
    owner: "Dana Reyes",
    dateAdded: "2026-08-26",
  },
  {
    id: "LD-4699",
    name: "Bianca Moretti",
    company: "Crestwood Education",
    title: "Director of Enrollment",
    email: "bmoretti@crestwoodedu.org",
    status: "Cold",
    source: "Meta Ads",
    value: 15500,
    owner: "Owen Castillo",
    dateAdded: "2026-08-25",
  },
  {
    id: "LD-4691",
    name: "Desmond Hale",
    company: "Trailhead Outdoor Co.",
    title: "VP Wholesale",
    email: "dhale@trailheadoutdoor.com",
    status: "Warm",
    source: "Referral",
    value: 47000,
    owner: "Mira Okafor",
    dateAdded: "2026-08-24",
  },
  {
    id: "LD-4684",
    name: "Aurelia Novak",
    company: "Quantum Ledger Fintech",
    title: "Chief Growth Officer",
    email: "a.novak@quantumledger.co",
    status: "Hot",
    source: "LinkedIn",
    value: 105000,
    owner: "Dana Reyes",
    dateAdded: "2026-08-23",
  },
  {
    id: "LD-4676",
    name: "Colin Brathwaite",
    company: "Fairmount Property Group",
    title: "Managing Director",
    email: "cbrathwaite@fairmountpg.com",
    status: "Lost",
    source: "Cold Email",
    value: 21000,
    owner: "Owen Castillo",
    dateAdded: "2026-08-22",
  },
  {
    id: "LD-4668",
    name: "Nadia Chaudhry",
    company: "Everline Staffing",
    title: "VP Client Solutions",
    email: "n.chaudhry@everlinestaffing.com",
    status: "Warm",
    source: "Webinar",
    value: 36500,
    owner: "Mira Okafor",
    dateAdded: "2026-08-21",
  },
  {
    id: "LD-4659",
    name: "Étienne Beaulieu",
    company: "Granite Peak Energy",
    title: "Director of Development",
    email: "e.beaulieu@granitepeak.ca",
    status: "Closed",
    source: "LinkedIn",
    value: 98000,
    owner: "Dana Reyes",
    dateAdded: "2026-08-20",
  },
  {
    id: "LD-4651",
    name: "Rosalind Fairweather",
    company: "Beacon Home Services",
    title: "Owner",
    email: "ros@beaconhomeservices.com",
    status: "Cold",
    source: "Meta Ads",
    value: 12500,
    owner: "Owen Castillo",
    dateAdded: "2026-08-19",
  },
  {
    id: "LD-4643",
    name: "Victor Ozawa",
    company: "Stratos Aerospace Parts",
    title: "Head of Procurement",
    email: "v.ozawa@stratosaero.com",
    status: "Hot",
    source: "Referral",
    value: 67500,
    owner: "Mira Okafor",
    dateAdded: "2026-08-18",
  },
  {
    id: "LD-4635",
    name: "Leila Haddad",
    company: "Westbrook Wealth Advisors",
    title: "Partner",
    email: "lhaddad@westbrookwealth.com",
    status: "Warm",
    source: "Cold Email",
    value: 52500,
    owner: "Dana Reyes",
    dateAdded: "2026-08-17",
  },
  {
    id: "LD-4627",
    name: "Owen Delacroix",
    company: "Redstone Construction",
    title: "Director of Preconstruction",
    email: "odelacroix@redstonebuild.com",
    status: "Cold",
    source: "LinkedIn",
    value: 29500,
    owner: "Owen Castillo",
    dateAdded: "2026-08-16",
  },
  {
    id: "LD-4618",
    name: "Simone Lefevre",
    company: "Verdant Agriculture",
    title: "VP of Sales",
    email: "s.lefevre@verdantag.com",
    status: "Closed",
    source: "Webinar",
    value: 74000,
    owner: "Mira Okafor",
    dateAdded: "2026-08-15",
  },
  {
    id: "LD-4610",
    name: "Kwame Addo",
    company: "Lakeshore Medical Devices",
    title: "Commercial Director",
    email: "kaddo@lakeshoremed.com",
    status: "Hot",
    source: "Cold Email",
    value: 89500,
    owner: "Dana Reyes",
    dateAdded: "2026-08-14",
  },
  {
    id: "LD-4602",
    name: "Tessa Van Dyke",
    company: "Copperfield Retail Group",
    title: "Head of Merchandising",
    email: "tvandyke@copperfieldretail.com",
    status: "Lost",
    source: "Meta Ads",
    value: 16500,
    owner: "Owen Castillo",
    dateAdded: "2026-08-13",
  },
  {
    id: "LD-4594",
    name: "Ibrahim Nasser",
    company: "Sentinel Data Centers",
    title: "SVP Infrastructure",
    email: "i.nasser@sentineldc.com",
    status: "Warm",
    source: "LinkedIn",
    value: 113000,
    owner: "Mira Okafor",
    dateAdded: "2026-08-12",
  },
];

/** Monthly lead volume and conversion trend for the analytics page. */
export const monthlyGrowth = [
  { month: "Jan", leads: 184, qualified: 71, closed: 22 },
  { month: "Feb", leads: 212, qualified: 84, closed: 27 },
  { month: "Mar", leads: 241, qualified: 98, closed: 31 },
  { month: "Apr", leads: 228, qualified: 91, closed: 29 },
  { month: "May", leads: 276, qualified: 117, closed: 38 },
  { month: "Jun", leads: 312, qualified: 139, closed: 44 },
  { month: "Jul", leads: 349, qualified: 158, closed: 51 },
  { month: "Aug", leads: 387, qualified: 176, closed: 58 },
  { month: "Sep", leads: 421, qualified: 198, closed: 67 },
];

/** Acquisition channel mix — spend, volume and efficiency per source. */
export const channelBreakdown = [
  {
    channel: "LinkedIn",
    leads: 1284,
    spend: 96300,
    closed: 187,
    color: "#10b981",
  },
  {
    channel: "Cold Email",
    leads: 968,
    spend: 42600,
    closed: 131,
    color: "#06b6d4",
  },
  {
    channel: "Meta Ads",
    leads: 742,
    spend: 71400,
    closed: 74,
    color: "#8b5cf6",
  },
  {
    channel: "Referral",
    leads: 318,
    spend: 12100,
    closed: 89,
    color: "#f59e0b",
  },
  {
    channel: "Webinar",
    leads: 264,
    spend: 23800,
    closed: 46,
    color: "#f43f5e",
  },
];

/** Weekly pipeline velocity used by the analytics area chart. */
export const pipelineVelocity = [
  { week: "W1", pipeline: 412000, won: 68000 },
  { week: "W2", pipeline: 468000, won: 84000 },
  { week: "W3", pipeline: 503000, won: 76000 },
  { week: "W4", pipeline: 561000, won: 112000 },
  { week: "W5", pipeline: 598000, won: 97000 },
  { week: "W6", pipeline: 644000, won: 131000 },
  { week: "W7", pipeline: 712000, won: 124000 },
  { week: "W8", pipeline: 786000, won: 158000 },
];

/** Funnel stages from raw contact to signed deal. */
export const funnelStages = [
  { stage: "Contacted", count: 3576 },
  { stage: "Engaged", count: 1842 },
  { stage: "Qualified", count: 1132 },
  { stage: "Proposal", count: 614 },
  { stage: "Closed Won", count: 527 },
];

export const teamPerformance = [
  { rep: "Dana Reyes", closed: 41, pipeline: 486000, winRate: 34.2 },
  { rep: "Owen Castillo", closed: 36, pipeline: 412000, winRate: 29.8 },
  { rep: "Mira Okafor", closed: 44, pipeline: 528000, winRate: 37.6 },
];

/** Landing page marketing content. */
export const landingStats = [
  { label: "Leads tracked", value: 2400000, suffix: "+", prefix: "", decimals: 1 },
  { label: "Agencies onboarded", value: 640, suffix: "", prefix: "" },
  { label: "Pipeline managed", value: 1.8, suffix: "B", prefix: "$", decimals: 1 },
  { label: "Avg. reporting hours saved", value: 19, suffix: "/wk", prefix: "" },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: 299,
    tagline: "For boutique agencies proving out their first retainers.",
    highlight: false,
    cta: "Start free trial",
    features: [
      "Up to 5 client workspaces",
      "2,500 tracked leads / month",
      "Branded client dashboards",
      "CSV + Zapier lead import",
      "Standard email support",
    ],
  },
  {
    name: "Growth",
    price: 599,
    tagline: "For scaling teams running multi-channel outbound at volume.",
    highlight: true,
    cta: "Start free trial",
    features: [
      "Up to 25 client workspaces",
      "25,000 tracked leads / month",
      "Full white-label domain + logo",
      "Attribution across every channel",
      "Automated weekly client reports",
      "Priority support with 4h SLA",
    ],
  },
  {
    name: "Agency Scale",
    price: 999,
    tagline: "For established agencies with enterprise reporting demands.",
    highlight: false,
    cta: "Talk to sales",
    features: [
      "Unlimited client workspaces",
      "Unlimited tracked leads",
      "SSO, audit logs & role controls",
      "Custom API + webhook pipelines",
      "Revenue attribution modelling",
      "Dedicated success manager",
    ],
  },
];

export const faqs = [
  {
    question: "How long does it take to onboard a new client?",
    answer:
      "Most agencies have a client workspace live in under ten minutes. You create the workspace, connect a lead source or drop in a CSV, pick the metrics the client should see, and share the branded portal link. No engineering involvement required.",
  },
  {
    question: "Can I white-label the portal for my agency?",
    answer:
      "Yes. On Growth and Agency Scale you can serve the portal from your own domain, apply your logo and brand palette, and send client notifications from your address. Your clients never see our branding anywhere in the experience.",
  },
  {
    question: "Which lead sources can I connect?",
    answer:
      "Native connectors cover LinkedIn Sales Navigator exports, Meta Lead Ads, Google Ads, HubSpot, Pipedrive, Instantly, Smartlead and Apollo. Anything else can be pushed in through the REST API, inbound webhooks, Zapier or a scheduled CSV import.",
  },
  {
    question: "How is cost per lead calculated?",
    answer:
      "You record channel spend either manually or by syncing your ad accounts, and the portal divides spend by attributed leads per channel across whichever date range is selected. Blended and per-channel CPL are both shown so you can defend the retainer with real numbers.",
  },
  {
    question: "Do my clients get their own logins?",
    answer:
      "Every client gets a scoped read-only login that exposes only their workspace. You control which metric cards, tables and reports are visible per client, and you can revoke access at any time from the settings panel.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "You keep it. Full CSV and JSON exports of every lead, note and activity record are available on demand, and we retain your workspace in cold storage for 30 days after cancellation in case you come back.",
  },
];

export const landingFeatures = [
  {
    icon: "LayoutDashboard",
    title: "Client-ready dashboards",
    description:
      "Give every client a live view of their pipeline instead of another static PDF nobody opens. Metrics update the moment a lead lands.",
  },
  {
    icon: "Filter",
    title: "Searchable lead tables",
    description:
      "Filter thousands of leads by status, channel, owner or date range in a single keystroke. Export any view as CSV for the client call.",
  },
  {
    icon: "TrendingUp",
    title: "Channel attribution",
    description:
      "See exactly which channel produced the pipeline, what it cost, and where the conversion rate falls off month over month.",
  },
  {
    icon: "Zap",
    title: "Automated reporting",
    description:
      "Weekly and monthly recaps are generated and delivered on your schedule, signed with your agency's name and branding.",
  },
  {
    icon: "ShieldCheck",
    title: "Granular access control",
    description:
      "Scoped client logins, role-based permissions, SSO and full audit logs so enterprise clients pass procurement without friction.",
  },
  {
    icon: "Plug",
    title: "Connect anything",
    description:
      "Native connectors for the tools agencies actually run on, plus a documented REST API and webhooks for everything else.",
  },
];

export const testimonials = [
  {
    quote:
      "We replaced eleven Google Sheets and a Notion board with one portal. Client churn dropped because they finally see the work landing in real time.",
    name: "Dana Reyes",
    role: "Founder, Northbound Demand",
  },
  {
    quote:
      "Being able to show cost per lead by channel on the monthly call turned our renewal conversations into upsell conversations.",
    name: "Owen Castillo",
    role: "Managing Partner, Castillo Growth",
  },
  {
    quote:
      "Onboarding a client used to take a week of dashboard building. It takes about eight minutes now, and it looks considerably better.",
    name: "Mira Okafor",
    role: "Head of Delivery, Okafor Outbound",
  },
];
