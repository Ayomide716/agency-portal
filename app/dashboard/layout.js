import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export const metadata = {
  title: "Client portal",
  description:
    "Live lead pipeline, conversion and cost-per-lead reporting for your agency clients.",
};

export default function DashboardLayout({ children }) {
  return <DashboardShell>{children}</DashboardShell>;
}
