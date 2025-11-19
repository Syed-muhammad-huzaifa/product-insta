import Image from "next/image";

export function GallerySection() {
  return (
    <section className="rounded-[40px] border border-white/80 bg-white px-6 py-16 shadow-[0_50px_120px_rgba(15,23,42,0.08)]">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-[11px] uppercase tracking-[0.5em] text-neutral-400">Experience</p>
          <h2 className="display-text text-3xl font-semibold text-neutral-900 sm:text-[38px]">
            Every control is designed for obsessive Instagram operators.
          </h2>
          <p className="text-lg text-neutral-600">
            See conversations, conversions, and service recovery in one clean canvas. The UI mirrors
            Instagram etiquette so shoppers never hit a jarring bot handoff.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-neutral-100 bg-neutral-50 p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f58529]/15 via-transparent to-[#515bd4]/15" />
            <Image
              src="/dashboard-mock.svg"
              alt="Shoppal dashboard preview"
              width={620}
              height={380}
              className="relative w-full"
            />
            <div className="relative mt-5 space-y-2 text-sm text-neutral-600">
              <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">Executive cockpit</p>
              <p>
                Live metrics, thread health, and real-time handoffs. Approve offers, watch DM revenue,
                and broadcast updated scripts instantly.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[32px] border border-neutral-100 bg-white p-6 text-center shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <Image
                src="/hero-mock.svg"
                alt="Shoppal mobile agent preview"
                width={320}
                height={540}
                className="mx-auto w-56 animate-float-soft"
              />
              <p className="mt-4 text-sm text-neutral-600">Mobile-optimized agent that keeps up with drops.</p>
            </div>
            <div className="rounded-[32px] bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] p-6 text-left text-white shadow-[0_25px_80px_rgba(221,42,123,0.45)]">
              <p className="text-[11px] uppercase tracking-[0.45em] text-white/80">Signal</p>
              <p className="mt-4 text-2xl font-semibold">
                Human takeover status, tone guardrails, and compliance logging baked in.
              </p>
              <p className="mt-3 text-sm text-white/90">
                Switch owners mid-chat, auto-summarize outcomes, and export transcripts to your CRM without
                juggling tabs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
