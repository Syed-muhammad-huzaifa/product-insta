const metrics = [
  {
    label: "DMs resolved daily",
    value: "1.9K",
    detail: "Average per flagship handle running Shoppal",
    trend: "+68%",
  },
  {
    label: "Revenue closed in DM",
    value: "8/10",
    detail: "Orders complete without checkout links",
    trend: "+43%",
  },
  {
    label: "Ops hours returned weekly",
    value: "38h",
    detail: "No overnight staffing required",
    trend: "-5 FTEs",
  },
  {
    label: "CSAT after automation",
    value: "4.9/5",
    detail: "Buyers say it feels human + premium",
    trend: "+0.7",
  },
];

export function ImpactMetrics() {
  return (
    <section className="rounded-[32px] border border-white/80 bg-white px-6 py-12 shadow-[0_35px_90px_rgba(15,23,42,0.08)]">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-3xl border border-neutral-100 bg-neutral-50/50 p-6 text-left shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">
              {metric.label}
            </p>
            <p className="mt-4 text-3xl font-semibold text-neutral-900">{metric.value}</p>
            <p className="mt-1 text-sm text-neutral-500">{metric.detail}</p>
            <div className="mt-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#dd2a7b]">
              {metric.trend}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
