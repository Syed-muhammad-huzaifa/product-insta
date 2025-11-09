const differentiators = [
  {
    title: "Direct Instagram DM agent",
    description:
      "Connects straight to your Instagram inbox and replies inside the DM thread with no middleman experience or clunky landing pages.",
    badge: "Native IG",
  },
  {
    title: "Agent-driven conversations",
    description:
      "Understands sizes, colors, delivery preferences, and follow-up questions so every thread feels like a real human assistant.",
    badge: "Context aware",
  },
  {
    title: "Built-for-sellers workflow",
    description:
      "Checks lightweight inventory, shares updated price lists, collects delivery details, and hands off to a human when needed.",
    badge: "Seller ready",
  },
];

export function Differentiators() {
  return (
    <section
      id="differentiators"
      className="rounded-[32px] border border-white/60 bg-white px-6 py-16 shadow-[0_50px_120px_rgba(15,23,42,0.08)]"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-neutral-400">
          Why we&apos;re different
        </p>
        <h2 className="display-text mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Built specifically for Instagram-first businesses
        </h2>
        <p className="mt-3 text-lg text-neutral-600">
          No generic chatbot scripts. InstaFlow AI understands DM etiquette,
          remembers context, and stays ready for human takeover.
        </p>
      </div>
      <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-3">
        {differentiators.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-neutral-100 bg-gradient-to-br from-white to-neutral-50 p-6 text-left shadow-[0_20px_40px_rgba(15,23,42,0.05)]"
          >
            <span className="inline-flex items-center rounded-full bg-neutral-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
              {item.badge}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-neutral-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
