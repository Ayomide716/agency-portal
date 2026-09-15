import { SettingsPanels } from "@/components/dashboard/settings-panels";
import { PageHeader } from "@/components/dashboard/page-header";

export const metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Workspace branding, client access and notification preferences."
      />
      <SettingsPanels />
    </div>
  );
}
