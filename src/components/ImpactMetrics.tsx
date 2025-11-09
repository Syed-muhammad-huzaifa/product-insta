const metrics = [
  {
    label: "DMs auto-answered per day",
    value: "1.8K",
    detail: "Average for busy sellers",
  },
  {
    label: "Orders captured inside DMs",
    value: "73%",
    detail: "No checkout drop-offs",
  },
  {
    label: "Ops cost saved / month",
    value: "$1.2K",
    detail: "Versus hiring DM staff",
  },
  {
    label: "CSAT after automation",
    value: "4.9/5",
    detail: "Buyers love instant replies",
  },
];

export function ImpactMetrics() {
  return (
    <section className="rounded-[32px] border border-white/50 bg-white/80 px-6 py-10 shadow-[0_40px_90px_rgba(15,23,42,0.08)]">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-2xl bg-gradient-to-br from-white to-[#f8f2ff] p-6 shadow-[0_20px_40px_rgba(15,23,42,0.05)]"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-[#a855f7]">
              {metric.label}
            </p>
            <p className="mt-4 text-3xl font-semibold text-neutral-900">
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-neutral-500">{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
