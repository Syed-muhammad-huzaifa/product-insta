import Image from "next/image";

const stats = [
  { label: "Reply time", value: "9s" },
  { label: "DM conversions", value: "82%" },
  { label: "Manual handoffs", value: "<3%" },
];

export function Hero() {
  return (
    <section
      id="product"
      className="rounded-[32px] border border-white/70 bg-white px-6 py-12 shadow-[0_35px_90px_rgba(247,166,201,0.3)]"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-neutral-500">
            Instagram DM agent
          </span>
          <h1 className="display-text text-4xl font-semibold leading-tight text-neutral-900 sm:text-[44px]">
            Shoppal replies to every Instagram DM with pricing, stock, and delivery in seconds.
          </h1>
          <p className="text-base text-neutral-600 sm:text-lg">
            The official Shoppal assistant sits inside your DMs, understands context, and closes orders
            without sending buyers away from Instagram.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-start">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] px-7 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(221,42,123,0.35)] transition hover:-translate-y-0.5"
            >
              Book a Shoppal walkthrough
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-7 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50"
            >
              See how it works
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-neutral-100 bg-white/80 p-4 text-left shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
              >
                <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-neutral-900">{stat.value}</p>
                <div className="mt-3 h-1 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4]" />
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-4 h-28 w-28 rounded-full bg-[#ffd877]/50 blur-[120px]" />
          <div className="absolute right-0 bottom-4 h-36 w-36 rounded-full bg-[#dd2a7b]/30 blur-[140px]" />
          <div className="relative rounded-[28px] border border-white shadow-[0_35px_80px_rgba(15,23,42,0.12)]">
            <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4 text-[11px] uppercase tracking-[0.45em] text-neutral-500">
              <p>Official logo</p>
              <span className="rounded-full bg-neutral-900/5 px-3 py-1 text-[10px] font-semibold text-neutral-600">
                Verified
              </span>
            </div>
            <div className="flex items-center gap-4 px-5 py-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-neutral-100">
                <Image
                  src="/shopal.jpeg"
                  alt="Shoppal official badge"
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">Shoppal Command</p>
                <p className="text-xs text-neutral-500">
                  Built for social commerce teams scaling through Instagram.
                </p>
              </div>
            </div>
            <Image
              src="/hero-mock.svg"
              alt="Shoppal DM experience preview"
              width={420}
              height={500}
              className="w-full rounded-b-[28px] bg-white"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
