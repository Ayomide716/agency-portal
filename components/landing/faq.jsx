"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              FAQ
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Questions agencies ask before they switch
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-zinc-400">
              Still stuck on something?{" "}
              <a
                href="mailto:hello@apexleads.io"
                className="text-emerald-400 underline-offset-4 hover:underline"
              >
                hello@apexleads.io
              </a>{" "}
              gets a reply from a human the same working day.
            </p>
          </div>

          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
