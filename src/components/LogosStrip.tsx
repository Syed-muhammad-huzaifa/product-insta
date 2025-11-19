const logos = [
  "Maison Lune",
  "Gilded Studio",
  "Urban Loom",
  "The Ritual Co.",
  "Velvet District",
  "Altaform",
];

export function LogosStrip() {
  return (
    <section className="rounded-[32px] border border-white/80 bg-white px-6 py-10 text-center shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-neutral-400">
        Trusted by instagram-first flagships
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-neutral-500">
        {logos.map((logo) => (
          <span key={logo} className="tracking-[0.25em] text-neutral-600">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
