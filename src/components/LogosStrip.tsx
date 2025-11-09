const logos = ["@loomcraft", "@urbanbakes", "@musewear", "@glam.studio", "@parcelandco"];

export function LogosStrip() {
  return (
    <section className="rounded-3xl border border-white/50 bg-white/80 px-6 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.5em] text-neutral-400">
        Loved by insta-first teams
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-neutral-500 sm:gap-10">
        {logos.map((logo) => (
          <span key={logo} className="text-neutral-600 opacity-80">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
