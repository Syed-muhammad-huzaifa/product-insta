const differentiators = [
  {
    badge: "Native DM intelligence",
    title: "Replies in the Instagram thread. Always on-brand.",
    description:
      "No redirects, no clunky chat widgets. Shoppal reads the reel, the swipe-up, and the buyer profile before typing a word.",
  },
  {
    badge: "Commerce-aware brain",
    title: "Understands merch rules, sizing, promos, and SLAs.",
    description:
      "It ingests your ops handbook, checks stock buffers, and protects margins when it proposes bundles.",
  },
  {
    badge: "Operator-first control",
    title: "Humans, AI, and data in one control room.",
    description:
      "Intent routing, instant summaries, compliance logging, and one-click human takeovers built-in.",
  },
];

export function Differentiators() {
  return (
    <section
      id="differentiators"
      className="rounded-[40px] border border-white/80 bg-white px-6 py-16 shadow-[0_50px_120px_rgba(15,23,42,0.08)]"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-neutral-400">
          Why Shoppal wins
        </p>
        <h2 className="display-text mt-4 text-3xl font-semibold text-neutral-900 sm:text-[40px]">
          Crafted for Instagram-first boutiques, built with enterprise rigor.
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          Shoppal isn&apos;t a generic chatbot. It&apos;s the only DM-native agent with a commerce brain,
          compliance guardrails, and a beautiful operator cockpit.
        </p>
      </div>
      <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-3">
        {differentiators.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-neutral-100 bg-neutral-50 p-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
            <span className="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-500">
              {item.badge}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-neutral-900">{item.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
