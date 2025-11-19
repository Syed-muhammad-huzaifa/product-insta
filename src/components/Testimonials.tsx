type Testimonial = {
  quote: string;
  author: string;
  handle: string;
  metric: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "We went from 4-hour reply times to instant answers. Customers trust us more and jump straight into ordering.",
    author: "Ria Santos",
    handle: "@homebatch.bakes",
    metric: "+42% repeat buyers",
  },
  {
    quote:
      "Shoppal handles launch-day floods better than any freelancer we hired and still sounds like me.",
    author: "Dev Malik",
    handle: "@gearloop.shop",
    metric: "DMs cleared 5x faster",
  },
];

export function Testimonials() {
  return (
    <section className="rounded-[40px] border border-white/80 bg-white px-6 py-16 shadow-[0_50px_120px_rgba(15,23,42,0.08)]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">Testimonials</p>
        <h2 className="display-text mt-4 text-3xl font-semibold text-neutral-900">
          Trusted by high-volume Instagram sellers.
        </h2>
      </div>
      <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.handle}
            className="flex h-full flex-col rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
            <p className="text-lg text-neutral-700">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="mt-auto pt-6 text-sm text-neutral-500">
              <p className="font-semibold text-neutral-900">{testimonial.author}</p>
              <p>{testimonial.handle}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#dd2a7b]">
                {testimonial.metric}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
