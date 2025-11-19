const problems = [
  {
    title: "Replies rely on screenshots and guesswork",
    description:
      "Teams juggle spreadsheets, WhatsApp notes, and saved replies. Buyers feel the lag and question availability.",
    metric: "72% of teams",
  },
  {
    title: "Order capture gets messy past 100 DMs",
    description:
      "Sizes, addresses, and payment confirmations are scattered across threads, so fulfillment turns into detective work.",
    metric: "3x rework",
  },
  {
    title: "Expensive hiring just to copy + paste",
    description:
      "Scaling headcount for every drop kills margins. Leaders need leverage, not another night shift in the inbox.",
    metric: "$4.2K / mo",
  },
];

export function ProblemSection() {
  return (
    <section
      id="why-us"
      className="rounded-[40px] border border-white/70 bg-white px-6 py-16 shadow-[0_50px_120px_rgba(15,23,42,0.08)]"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-neutral-400">
            The bottleneck we solve
          </p>
          <h2 className="display-text text-3xl font-semibold text-neutral-900 sm:text-[40px]">
            Manual DM workflows fall apart the second your reel goes viral.
          </h2>
          <p className="text-lg text-neutral-600">
            Shoppal is the Instagram-native command center. It listens, reasons, and answers
            like your best seller while giving your team one structured inbox for catalog data,
            delivery logistics, and warm handoffs.
          </p>
          <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <p className="text-[11px] uppercase tracking-[0.45em] text-neutral-400">
              What founders tell us
            </p>
            <p className="mt-3 text-lg text-neutral-700">
              &ldquo;Shoppal feels like our sharpest stylist living in the DMs. Customers get answers
              instantly, and our team finally sleeps on launch nights.&rdquo;
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {problems.map((problem, index) => (
            <article
              key={problem.title}
              className="flex gap-5 rounded-3xl border border-neutral-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="text-right">
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-neutral-400">
                  0{index + 1}
                </p>
                <p className="text-2xl font-semibold text-[#dd2a7b]">{problem.metric}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">{problem.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{problem.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
