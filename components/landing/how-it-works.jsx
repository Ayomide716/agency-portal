const steps = [
  {
    step: "01",
    title: "Create the client workspace",
    description:
      "Name the client, upload their logo and pick the accent colour. The portal is branded as yours, not ours, from the first screen they see.",
  },
  {
    step: "02",
    title: "Connect your lead sources",
    description:
      "Point LinkedIn, Meta Lead Ads, your cold email tool or your CRM at the workspace — or drop in a CSV. Leads start flowing within minutes.",
  },
  {
    step: "03",
    title: "Choose what the client sees",
    description:
      "Toggle metric cards, table columns and channel breakdowns per client. Sensitive margin data stays on your side of the wall.",
  },
  {
    step: "04",
    title: "Share the link and stop reporting",
    description:
      "Your client logs in whenever they want the numbers. Automated weekly recaps handle everyone who would rather read an email.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden border-t border-border py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-sm opacity-30 mask-fade-b"
      />

      <div className="container relative">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
              How it works
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              From signed contract to live client portal in an afternoon
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-zinc-400">
              No implementation project, no developer, no data warehouse. Four
              steps, done once per client, and the reporting runs itself from
              then on.
            </p>
          </div>

          <ol className="relative space-y-10 border-l border-border pl-8">
            {steps.map((item) => (
              <li key={item.step} className="relative">
                <span className="absolute -left-[41px] flex size-[26px] items-center justify-center rounded-full border border-emerald-500/30 bg-background font-mono text-[11px] font-semibold text-emerald-400">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
