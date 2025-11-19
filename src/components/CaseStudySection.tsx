import Image from "next/image";

export function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="rounded-[40px] border border-white/80 bg-gradient-to-br from-[#fff] via-[#fff3ef] to-[#f5f3ff] px-6 py-16 text-neutral-900 shadow-[0_60px_140px_rgba(245,133,41,0.15)]"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-[11px] uppercase tracking-[0.5em] text-neutral-500">
            Case study · Atelier Lune
          </p>
          <h2 className="display-text text-3xl font-semibold sm:text-[40px]">
            +52% launch-week revenue by letting Shoppal guard the inbox.
          </h2>
          <p className="text-lg text-neutral-600">
            Two of Atelier Lune&apos;s Instagram boutiques plugged into Shoppal. The agent now answers 1.6K
            daily questions, qualifies VIP orders, and only flags finance for final confirmation.
          </p>
          <div className="space-y-5 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_30px_70px_rgba(15,23,42,0.12)] backdrop-blur">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">Reply time</p>
                <p className="mt-2 text-3xl font-semibold text-neutral-900">11s</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">Order uplift</p>
                <p className="mt-2 text-3xl font-semibold text-neutral-900">+52%</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">Ops savings / mo</p>
                <p className="mt-2 text-3xl font-semibold text-neutral-900">$4.1K</p>
              </div>
            </div>
            <p className="text-sm text-neutral-600">
              &ldquo;Launch drops used to mean four stylists staying up till 3am. With Shoppal we wake up to clean
              transcripts, tracked orders, and buyers who feel seen.&rdquo; — Mira, Founder
            </p>
          </div>
        </div>
        <div className="rounded-[32px] border border-white/70 bg-white/80 p-5 text-center shadow-[0_35px_90px_rgba(15,23,42,0.12)] backdrop-blur">
          <Image
            src="/dashboard-mock.svg"
            alt="Shoppal live dashboard"
            width={560}
            height={380}
            className="w-full"
          />
          <p className="mt-4 text-sm text-neutral-600">
            Live control room: watch Shoppal qualify buyers and escalate with context.
          </p>
        </div>
      </div>
    </section>
  );
}
