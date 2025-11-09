const problems = [
  {
    title: "Manual replies slow everything down",
    description:
      "Buyers wait hours for answers on pricing and delivery, you lose trust, and someone on the team is glued to the inbox.",
  },
  {
    title: "No structured order capture",
    description:
      "Details about size, color, or delivery get lost inside long threads—leading to mistakes and refunds.",
  },
  {
    title: "Hiring inbox managers is expensive",
    description:
      "Scaling headcount just to copy-paste FAQs is the opposite of leverage for a lean Instagram shop.",
  },
];

export function ProblemSection() {
  return (
    <section
      id="why-us"
      className="rounded-[32px] bg-white px-6 py-16 shadow-[0_50px_120px_rgba(15,23,42,0.08)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#a855f7]">
            The bottleneck
          </p>
          <h2 className="display-text text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Manual DM workflows collapse the moment your reels go viral.
          </h2>
          <p className="text-lg text-neutral-600">
            InstaFlow AI takes over repetitive DM work with brand-safe replies,
            pricing lookups, and instant delivery answers—so your team can focus
            on drops and fulfillment.
          </p>
          <div className="rounded-3xl bg-neutral-900 px-6 py-5 text-white shadow-[0_30px_60px_rgba(15,23,42,0.2)]">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              What sellers say
            </p>
            <p className="mt-3 text-lg text-white/90">
              “We responded faster, but we also sounded more consistent. It feels
              like our dopest team member lives inside Instagram.”
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {problems.map((problem, index) => (
            <article
              key={problem.title}
              className="flex gap-4 rounded-3xl border border-neutral-100 bg-gradient-to-br from-white to-neutral-50 p-5"
            >
              <span className="display-text text-3xl font-semibold text-neutral-300">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {problem.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
