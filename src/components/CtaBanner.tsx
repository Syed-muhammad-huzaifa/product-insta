export function CtaBanner() {
  return (
    <section
      id="demo"
      className="rounded-3xl bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] px-6 py-16 text-center text-white shadow-[0_50px_120px_rgba(221,42,123,0.35)]"
    >
      <h2 className="text-3xl font-semibold sm:text-4xl">
        Ready to make every DM count?
      </h2>
      <p className="mt-3 text-lg text-white/85">
        Join the waitlist and get a done-for-you setup call. We connect your
        Instagram, sync your catalog, and launch the agent in under a day.
      </p>
      <form className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
        <input
          type="email"
          placeholder="work@email.com"
          className="w-full rounded-full border border-white/30 bg-white/15 px-6 py-3 text-base text-white placeholder:text-white/60 focus:border-white focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-white px-6 py-3 font-semibold text-[#dd2a7b] shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
        >
          Join waitlist
        </button>
      </form>
      <p className="mt-4 text-xs uppercase tracking-[0.4em] text-white/70">
        limited beta invites weekly
      </p>
    </section>
  );
}
