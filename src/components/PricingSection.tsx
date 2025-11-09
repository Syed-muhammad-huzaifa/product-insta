const plans = [
  {
    title: "Starter",
    price: "$149",
    cadence: "/month",
    description: "For solo sellers and home businesses getting DM automation in place.",
    includes: [
      "Up to 2 Instagram pages",
      "Catalog + FAQ syncing",
      "Smart DM workflows",
      "Email & chat support",
    ],
    accent: "from-[#ffe0b0] to-[#ff9bd8]",
  },
  {
    title: "Growth",
    price: "$349",
    cadence: "/month",
    description: "For growing shops handling hundreds of conversations per day.",
    includes: [
      "Unlimited agent replies",
      "Inventory lookups & Sheets sync",
      "Advanced workflow builder",
      "Priority success manager",
    ],
    spotlight: true,
    accent: "from-[#f58529] via-[#dd2a7b] to-[#515bd4]",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="rounded-[32px] bg-white px-6 py-16 shadow-[0_50px_120px_rgba(0,0,0,0.07)]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-[#dd2a7b]">
          Pricing
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Plans that scale with your inbox
        </h2>
        <p className="mt-3 text-lg text-neutral-600">
          No per-seat fees. Launch in under a day and pay month-to-month.
        </p>
      </div>
      <div className="mx-auto mt-12 grid gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`rounded-[28px] border border-neutral-100 p-8 ${plan.spotlight ? "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-white shadow-[0_30px_80px_rgba(221,42,123,0.45)]" : "bg-gradient-to-br from-white to-neutral-50"}`}
          >
            <p className="text-sm uppercase tracking-[0.4em] opacity-70">
              {plan.title}
            </p>
            <div className="mt-5 flex items-baseline gap-2">
              <p className="text-4xl font-semibold">{plan.price}</p>
              <p className="text-sm opacity-70">{plan.cadence}</p>
            </div>
            <p className={`mt-3 text-sm ${plan.spotlight ? "text-white/85" : "text-neutral-600"}`}>
              {plan.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {plan.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${plan.accent} text-xs font-semibold text-neutral-900 ${plan.spotlight ? "text-white" : ""}`}
                  >
                    {"\u2713"}
                  </span>
                  <span className={plan.spotlight ? "text-white/90" : "text-neutral-700"}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#demo"
              className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${plan.spotlight ? "bg-white text-[#d63383]" : "bg-neutral-900 text-white"} transition hover:-translate-y-0.5`}
            >
              Start with {plan.title}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
