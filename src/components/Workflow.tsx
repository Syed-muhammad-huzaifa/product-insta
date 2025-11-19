const steps = [
  {
    title: "Connect Instagram + guardrails",
    description:
      "Authorize via Meta and define tone packs, escalation rules, and phrases Shoppal should mirror or avoid.",
  },
  {
    title: "Sync catalog, promos, & delivery logic",
    description:
      "Attach Sheets, Notion, or your OMS. Shoppal ingests sizing charts, bundles, SLAs, and VIP tags.",
  },
  {
    title: "Publish tailored DM flows",
    description:
      "Out-of-the-box flows for discovery, price quotes, delivery options, and order capture with your branding.",
  },
  {
    title: "Monitor, learn, and take over",
    description:
      "Get live signal alerts, handoff threads in one tap, and review summaries with full compliance logs.",
  },
];

export function Workflow() {
  return (
    <section
      id="workflow"
      className="rounded-[40px] border border-white/80 bg-white px-6 py-16 shadow-[0_50px_120px_rgba(15,23,42,0.08)]"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-neutral-400">
          Workflow
        </p>
        <h2 className="display-text mt-4 text-3xl font-semibold text-neutral-900 sm:text-[40px]">
          Launch Shoppal in four simple steps.
        </h2>
        <p className="mt-3 text-lg text-neutral-600">
          Built for non-technical founders: we co-pilot the setup and keep everything inside Instagram.
        </p>
      </div>
      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-6">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="relative flex gap-6 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="relative flex flex-col items-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-lg font-semibold text-white">
                {index + 1}
              </span>
              {index !== steps.length - 1 && <span className="mt-2 h-full w-px bg-neutral-200" />}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">Phase {index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
