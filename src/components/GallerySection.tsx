import Image from "next/image";

export function GallerySection() {
  return (
    <section className="rounded-[32px] bg-gradient-to-br from-[#0d051f] via-[#1c0c3a] to-[#2e1361] px-6 py-16 text-white shadow-[0_40px_120px_rgba(14,4,38,0.8)]">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60">
            Visuals
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            See how InstaFlow AI looks in action
          </h2>
          <p className="text-lg text-white/80">
            Clean, modern UI that mirrors Instagram&apos;s native language so customers
            never feel like they are talking to a bot.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f58529]/20 to-transparent" />
            <Image
              src="/dashboard-mock.svg"
              alt="Automation dashboard preview"
              width={520}
              height={340}
              className="relative w-full"
            />
            <div className="relative mt-4 space-y-2 text-sm text-white/80">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Seller cockpit
              </p>
              <p>
                Monitor live conversations, watch the agent capture orders, and
                take over threads with one click.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="relative rounded-[28px] border border-white/15 bg-white/5 p-4 backdrop-blur">
              <Image
                src="/hero-mock.svg"
                alt="Mobile DM preview"
                width={420}
                height={520}
                className="mx-auto w-64"
              />
              <p className="mt-4 text-center text-sm text-white/80">
                Mobile-ready agent keeps pace with launch drops.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/15 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] p-6">
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">
                Human takeover
              </p>
              <p className="mt-4 text-2xl font-semibold">
                Seamless pass-the-thread flow whenever you need to step in.
              </p>
              <p className="mt-3 text-sm text-white/85">
                Tap to take control, leave notes for teammates, and reassign
                conversations without breaking the chat history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
