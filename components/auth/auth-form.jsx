"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

/** Field wrapper that renders a leading icon inside the input. */
function Field({ id, label, icon: Icon, error, children, hint }) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <Label htmlFor={id}>{label}</Label>
        {hint}
      </div>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        {children}
      </div>
      {error ? (
        <p className="text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function AuthForm() {
  const router = useRouter();
  const [mode, setMode] = React.useState("login");
  const [showPassword, setShowPassword] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const [values, setValues] = React.useState({
    name: "",
    agency: "",
    email: "",
    password: "",
  });

  const update = (key) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const validate = () => {
    const next = {};
    if (!emailPattern.test(values.email.trim())) {
      next.email = "Enter a valid work email address.";
    }
    if (values.password.length < 8) {
      next.password = "Password must be at least 8 characters.";
    }
    if (mode === "register") {
      if (values.name.trim().length < 2) next.name = "Tell us your full name.";
      if (values.agency.trim().length < 2) {
        next.agency = "Your agency name is required.";
      }
    }
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Mock authentication — no credentials leave the browser in this prototype.
    setSubmitting(true);
    window.setTimeout(() => {
      router.push("/dashboard");
    }, 900);
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setErrors({});
  };

  const isRegister = mode === "register";

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-md">
        <div className="flex items-center justify-between lg:hidden">
          <Logo />
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-200 lg:mt-0"
        >
          <ArrowLeft className="size-4" />
          Back to site
        </Link>

        <div className="mt-6">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            {isRegister ? "Create your agency account" : "Welcome back"}
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            {isRegister
              ? "Free for 14 days. No credit card, no sales call."
              : "Sign in to your agency workspace to see today's leads."}
          </p>
        </div>

        <Tabs value={mode} onValueChange={switchMode} className="mt-8">
          <TabsList className="w-full">
            <TabsTrigger value="login">Sign in</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          {/* One form serves both tabs; register-only fields mount conditionally. */}
          <TabsContent value={mode} forceMount>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {isRegister ? (
                <>
                  <Field id="name" label="Full name" icon={User} error={errors.name}>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Dana Reyes"
                      className="pl-9"
                      value={values.name}
                      onChange={update("name")}
                      aria-invalid={Boolean(errors.name)}
                    />
                  </Field>

                  <Field
                    id="agency"
                    label="Agency name"
                    icon={Building2}
                    error={errors.agency}
                  >
                    <Input
                      id="agency"
                      name="agency"
                      autoComplete="organization"
                      placeholder="Northbound Demand"
                      className="pl-9"
                      value={values.agency}
                      onChange={update("agency")}
                      aria-invalid={Boolean(errors.agency)}
                    />
                  </Field>
                </>
              ) : null}

              <Field id="email" label="Work email" icon={Mail} error={errors.email}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@youragency.com"
                  className="pl-9"
                  value={values.email}
                  onChange={update("email")}
                  aria-invalid={Boolean(errors.email)}
                />
              </Field>

              <Field
                id="password"
                label="Password"
                icon={Lock}
                error={errors.password}
                hint={
                  isRegister ? null : (
                    <Link
                      href="#"
                      className="text-xs text-emerald-400 underline-offset-4 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  )
                }
              >
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={isRegister ? "new-password" : "current-password"}
                  placeholder={isRegister ? "At least 8 characters" : "••••••••"}
                  className="pl-9 pr-10"
                  value={values.password}
                  onChange={update("password")}
                  aria-invalid={Boolean(errors.password)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((shown) => !shown)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-zinc-200"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </Field>

              {isRegister ? (
                <p className="text-xs leading-relaxed text-zinc-500">
                  By registering you agree to the{" "}
                  <Link href="#" className="text-zinc-400 underline-offset-4 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-zinc-400 underline-offset-4 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              ) : (
                <label className="flex cursor-pointer items-center gap-2.5 text-sm text-zinc-400">
                  <input
                    type="checkbox"
                    name="remember"
                    defaultChecked
                    className="size-4 cursor-pointer rounded border-zinc-700 bg-secondary text-emerald-500 accent-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
                  />
                  Keep me signed in for 30 days
                </label>
              )}

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                disabled={submitting}
                className="w-full"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    {isRegister ? "Creating workspace…" : "Signing in…"}
                  </>
                ) : isRegister ? (
                  "Create account"
                ) : (
                  "Sign in to portal"
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-3 text-xs uppercase tracking-wider text-muted-foreground">
                or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Button variant="outline" type="button" className="w-full">
              <GoogleMark />
              Google
            </Button>
            <Button variant="outline" type="button" className="w-full">
              <MicrosoftMark />
              Microsoft
            </Button>
          </div>
        </div>

        <p className={cn("mt-8 text-center text-sm text-zinc-500")}>
          {isRegister ? "Already have an account?" : "New to Apex Leads?"}{" "}
          <button
            type="button"
            onClick={() => switchMode(isRegister ? "login" : "register")}
            className="font-medium text-emerald-400 underline-offset-4 hover:underline"
          >
            {isRegister ? "Sign in instead" : "Create an account"}
          </button>
        </p>

        <p className="mt-6 rounded-lg border border-border bg-secondary/30 px-3.5 py-3 text-center text-xs text-zinc-500">
          Demo prototype — any valid-looking email and an 8+ character password
          will open the portal.
        </p>
      </div>
    </div>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path
        fill="#4285F4"
        d="M23.06 12.25c0-.85-.08-1.67-.22-2.45H12v4.64h6.2a5.3 5.3 0 0 1-2.3 3.48v2.89h3.72c2.18-2 3.44-4.96 3.44-8.56Z"
      />
      <path
        fill="#34A853"
        d="M12 23.5c3.11 0 5.72-1.03 7.62-2.79l-3.72-2.89c-1.03.69-2.35 1.1-3.9 1.1-3 0-5.54-2.02-6.45-4.74H1.71v2.98A11.5 11.5 0 0 0 12 23.5Z"
      />
      <path
        fill="#FBBC05"
        d="M5.55 14.18a6.9 6.9 0 0 1 0-4.36V6.84H1.71a11.5 11.5 0 0 0 0 10.32l3.84-2.98Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.08c1.69 0 3.21.58 4.4 1.72l3.3-3.3C17.71 1.61 15.1.5 12 .5A11.5 11.5 0 0 0 1.71 6.84l3.84 2.98C6.46 7.1 9 5.08 12 5.08Z"
      />
    </svg>
  );
}

function MicrosoftMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path fill="#F25022" d="M2 2h9.5v9.5H2z" />
      <path fill="#7FBA00" d="M12.5 2H22v9.5h-9.5z" />
      <path fill="#00A4EF" d="M2 12.5h9.5V22H2z" />
      <path fill="#FFB900" d="M12.5 12.5H22V22h-9.5z" />
    </svg>
  );
}
