const steps = [
  {
    title: "Connect your Instagram page",
    description:
      "Securely authorize InstaFlow AI with Meta so the agent replies directly in your DM threads.",
  },
  {
    title: "Feed it your catalog + tone",
    description:
      "Upload spreadsheets or Notion docs and set brand voice guidelines. The agent trains in minutes.",
  },
  {
    title: "Launch smart DM flows",
    description:
      "Preset flows for product discovery, price quotes, delivery options, and order capture go live instantly.",
  },
  {
    title: "Monitor & take over anytime",
    description:
      "Route tricky chats to a human, leave notes, and let the agent resume. Full transcripts stay inside the inbox.",
  },
];

export function Workflow() {
  return (
    <section
      id="workflow"
      className="rounded-[32px] border border-white/60 bg-white px-6 py-16 shadow-[0_50px_120px_rgba(15,23,42,0.08)]"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-neutral-400">
          Workflow
        </p>
        <h2 className="display-text mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Launch the agent in four simple steps
        </h2>
        <p className="mt-3 text-lg text-neutral-600">
          Built for non-technical founders: we do the setup with you and keep
          the entire flow inside Instagram.
        </p>
      </div>
      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-6">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="relative flex gap-6 rounded-3xl border border-neutral-100 bg-gradient-to-br from-white to-neutral-50 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
          >
            <div className="relative flex flex-col items-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white">
                {index + 1}
              </span>
              {index !== steps.length - 1 && (
                <span className="mt-2 h-full w-px bg-neutral-200" />
              )}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                Phase {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
