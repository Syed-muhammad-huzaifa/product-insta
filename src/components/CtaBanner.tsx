export function CtaBanner() {
  return (
    <section
      id="demo"
      className="rounded-[40px] bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] px-6 py-16 text-center text-white shadow-[0_50px_120px_rgba(221,42,123,0.35)]"
    >
      <h2 className="text-3xl font-semibold sm:text-4xl">
        Ready to make every Instagram DM feel concierge-level?
      </h2>
      <p className="mt-3 text-lg text-white/85">
        Book a working session with the Shoppal team. We&apos;ll map your flows,
        sync your catalog, and launch the DM agent in under a day.
      </p>
      <div className="mx-auto mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <a
          href="mailto:hello@shopal.ai"
          className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#dd2a7b] shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5"
        >
          Email hello@shopal.ai
        </a>
        <a
          href="#product"
          className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
        >
          View product overview
        </a>
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.4em] text-white/70">
        live onboarding sessions weekly
      </p>
    </section>
  );
}
