import { CallToAction } from "@/components/landing/cta";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { Testimonials } from "@/components/landing/testimonials";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  );
}
