import "./globals.css";

export const metadata = {
  title: {
    default: "Apex Leads — Client Lead-Tracking Portal for B2B Agencies",
    template: "%s · Apex Leads",
  },
  description:
    "The white-label client portal B2B lead generation agencies use to track leads, prove pipeline and report on cost per lead in real time.",
  keywords: [
    "lead tracking",
    "B2B lead generation",
    "agency portal",
    "client reporting",
    "white label dashboard",
  ],
  openGraph: {
    title: "Apex Leads — Client Lead-Tracking Portal",
    description:
      "Track leads, prove pipeline and report cost per lead from one branded client portal.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans">{children}</body>
    </html>
  );
}
