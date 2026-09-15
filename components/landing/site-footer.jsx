import Link from "next/link";

import { Logo } from "@/components/logo";

const footerNav = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Demo portal", href: "/dashboard" },
      { label: "Analytics", href: "/dashboard/analytics" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API reference", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "DPA", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2.6fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              The white-label client lead-tracking portal for B2B lead generation
              agencies. Track, prove and report — under your own brand.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((group) => (
              <div key={group.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  {group.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={`${group.heading}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Apex Leads. A demonstration product
            prototype.
          </p>
          <p className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-emerald-500" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
