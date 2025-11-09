import Image from "next/image";

const features = [
  {
    badge: "Memory",
    title: "Context sticks across every thread",
    description:
      "Understands the entire conversation—sizes, colors, vouchers—and keeps tone consistent with your brand voice.",
  },
  {
    badge: "Intelligence",
    title: "Offers built from live pricing",
    description:
      "Sync Google Sheets or Notion catalogs. The agent fetches stock, bundles, and add-ons without touching another tool.",
  },
  {
    badge: "Handoff",
    title: "Humans jump in seamlessly",
    description:
      "Tap to take over, leave notes, and give the chat back to the agent without the buyer noticing the switch.",
  },
];

export function FeatureShowcase() {
  return (
    <section
      id="features"
      className="rounded-[32px] bg-white px-6 py-16 shadow-[0_50px_120px_rgba(87,0,66,0.08)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 space-y-6 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#a855f7]">
            Agent OS
          </p>
          <h2 className="display-text text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Designed to feel native inside Instagram, but powered by your data.
          </h2>
          <p className="text-lg text-neutral-600">
            Every flow is mapped to Instagram etiquette: quick replies, emoji
            cues, and offer summaries that feel human—not scripted.
          </p>
          <div className="space-y-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-neutral-100 bg-gradient-to-br from-white to-neutral-50 p-5"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
                  {feature.badge}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[32px] bg-gradient-to-br from-[#ffd3a1] via-[#f96fb0] to-[#5c4dff] opacity-60 blur-3xl" />
            <div className="relative rounded-[32px] border border-white/60 bg-white/90 p-4 shadow-[0_40px_80px_rgba(0,0,0,0.12)] backdrop-blur">
              <Image
                src="/chat-preview.svg"
                alt="Chat preview mockup"
                width={480}
                height={360}
                className="w-full"
              />
              <div className="mt-4 grid gap-3 text-sm text-neutral-600 sm:grid-cols-2">
                <div className="rounded-2xl border border-neutral-100 bg-white p-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                    Flow step
                  </p>
                  <p className="mt-2 font-semibold text-neutral-900">
                    Product discovery
                  </p>
                </div>
                <div className="rounded-2xl border border-neutral-100 bg-white p-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                    Next
                  </p>
                  <p className="mt-2 font-semibold text-neutral-900">
                    Delivery promise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
