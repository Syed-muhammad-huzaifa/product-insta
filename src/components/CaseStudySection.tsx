import Image from "next/image";

export function CaseStudySection() {
  return (
    <section className="rounded-[32px] bg-gradient-to-br from-[#100624] via-[#1b0b3c] to-[#3a1770] px-6 py-16 text-white shadow-[0_60px_120px_rgba(21,6,50,0.45)]">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60">
            Case study
          </p>
          <h2 className="display-text text-3xl font-semibold sm:text-4xl">
            How BakeBay doubled DM conversions during launch weeks
          </h2>
          <p className="text-lg text-white/80">
            BakeBay plugs InstaFlow AI into two of their busiest Instagram pages.
            The agent now handles 1.4K questions every day, qualifies order
            details, and loops a human in only for payment confirmation.
          </p>
          <div className="space-y-4 rounded-3xl border border-white/15 bg-white/10 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                  Reply time
                </p>
                <p className="text-3xl font-semibold">14s</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                  Order uplift
                </p>
                <p className="text-3xl font-semibold">+52%</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                  Ops cost saved
                </p>
                <p className="text-3xl font-semibold">$1.4K</p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              &ldquo;Launch drops used to mean four of us spamming replies. Now
              the agent handles it, captures delivery info, and the chat still
              feels personal.&rdquo; &mdash; Ria, BakeBay founder
            </p>
          </div>
        </div>
        <div className="rounded-[28px] border border-white/15 bg-white/5 p-4 backdrop-blur">
          <Image
            src="/dashboard-mock.svg"
            alt="Case study dashboard"
            width={520}
            height={340}
            className="w-full"
          />
          <p className="mt-4 text-center text-sm text-white/70">
            Live view of InstaFlow AI handling BakeBay inquiries
          </p>
        </div>
      </div>
    </section>
  );
}
