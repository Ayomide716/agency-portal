import { Quote } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/lib/data";
import { initialsOf } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Operators, not reviewers
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Agencies running their whole client book on it
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-colors hover:border-emerald-500/25"
            >
              <Quote className="size-6 text-emerald-500/40" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-zinc-300">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <Avatar>
                  <AvatarFallback>{initialsOf(item.name)}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-zinc-100">
                    {item.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {item.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
