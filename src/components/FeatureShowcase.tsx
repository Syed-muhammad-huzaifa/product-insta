import Image from "next/image";

const features = [
  {
    badge: "Context brain",
    title: "Understands every nuance in the thread",
    description:
      "Shoppal keeps track of sizes, currencies, promo codes, and VIP preferences so replies always sound bespoke.",
  },
  {
    badge: "Commerce routing",
    title: "Pulls live pricing + delivery promises",
    description:
      "Connect Sheets, Notion, Airtable, or your OMS. The agent references stock levels and upsells bundles without leaving Instagram.",
  },
  {
    badge: "Concierge control",
    title: "Humans step in without breaking the vibe",
    description:
      "Tap to take over, leave notes, and reassign threads. Shoppal logs every action for ops and CX reporting.",
  },
];

export function FeatureShowcase() {
  return (
    <section
      id="features"
      className="rounded-[40px] border border-white/80 bg-white px-6 py-16 shadow-[0_50px_120px_rgba(15,23,42,0.08)]"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-neutral-400">
            Agent operating system
          </p>
          <h2 className="display-text text-3xl font-semibold text-neutral-900 sm:text-[40px]">
            Feels native in Instagram, powered by your proprietary data.
          </h2>
          <p className="text-lg text-neutral-600">
            We mapped every Shoppal response to what Instagram shoppers expect: lightning-fast clarity,
            empathy in tone, and zero redirects. The agent thinks like your senior stylist.
          </p>
          <div className="space-y-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-neutral-100 bg-neutral-50 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-neutral-400">
                  {feature.badge}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-neutral-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[40px] bg-gradient-to-br from-[#f58529]/25 via-[#dd2a7b]/25 to-[#515bd4]/25 blur-3xl" />
          <div className="relative rounded-[40px] border border-white bg-white p-6 shadow-[0_40px_100px_rgba(15,23,42,0.12)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.45em] text-neutral-500">
              <p>Conversation intelligence</p>
              <span className="rounded-full bg-neutral-900/5 px-3 py-1 text-[10px]">Real time</span>
            </div>
            <Image
              src="/chat-preview.svg"
              alt="Shoppal conversation preview"
              width={520}
              height={360}
              className="mt-6 w-full"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4 text-sm text-neutral-600">
                <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">Flow step</p>
                <p className="mt-1 text-neutral-800">Discovery → offer → delivery promise</p>
              </div>
              <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4 text-sm text-neutral-600">
                <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">Live data</p>
                <p className="mt-1 text-neutral-800">Inventory, lookbook, waitlist priority</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
