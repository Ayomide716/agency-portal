import { AuthForm } from "@/components/auth/auth-form";
import { AuthShowcase } from "@/components/auth/auth-showcase";

export const metadata = {
  title: "Sign in",
  description:
    "Sign in to your Apex Leads agency workspace or register a new account.",
};

export default function AuthPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <AuthShowcase />
      <AuthForm />
    </div>
  );
}
