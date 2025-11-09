import Image from "next/image";

const stats = [
  { label: "Reply time", value: "12s" },
  { label: "Orders closed", value: "73%" },
  { label: "DMs/day", value: "1.8K" },
];

export function Hero() {
  return (
    <section id="product" className="px-4 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row">
        <div className="flex-1 space-y-6 text-center lg:text-left animate-fade-up">
          <span className="inline-flex items-center justify-center rounded-full border border-neutral-900/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
            AI DM assistant
          </span>
          <h1 className="display-text text-4xl font-semibold text-neutral-900 sm:text-[44px]">
            Turn every Instagram DM into a fast, on-brand reply.
          </h1>
          <p className="text-base text-neutral-600">
            InstaFlow AI responds instantly with pricing, stock, and delivery
            info so customers get answers without leaving the chat.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-start sm:text-left lg:justify-start">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Book a demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-7 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
            >
              See features
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-neutral-100 bg-white/70 p-4 text-left shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-neutral-900">
                  {stat.value}
                </p>
                <div
                  className={`mt-3 h-1 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] ${index === 1 ? "w-2/3" : "w-1/2"}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-center animate-fade-up animate-delay-1">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-[#ffd3ef] via-[#d7c3ff] to-[#bde1ff] blur-3xl opacity-60" />
            <div className="relative rounded-[32px] border border-white/60 bg-white/80 p-5 shadow-[0_30px_60px_rgba(15,23,42,0.15)] backdrop-blur">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <p className="uppercase tracking-[0.4em]">DM preview</p>
                <span className="rounded-full bg-neutral-900/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.4em] text-neutral-500">
                  Live
                </span>
              </div>
              <Image
                src="/hero-mock.svg"
                alt="DM automation mockup"
                width={360}
                height={460}
                className="mt-4 w-full"
                priority
              />
              <p className="mt-3 text-xs text-neutral-500">
                AI replies in the DM thread with price, availability, and
                delivery info in seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
