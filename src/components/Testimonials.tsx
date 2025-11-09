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
      "InstaFlow AI handles launch-day floods better than any freelancer we hired and still sounds like me.",
    author: "Dev Malik",
    handle: "@gearloop.shop",
    metric: "DMs cleared 5x faster",
  },
];

export function Testimonials() {
  return (
    <section className="rounded-[32px] bg-neutral-900 px-6 py-16 text-white shadow-[0_50px_120px_rgba(0,0,0,0.35)]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">
          Social proof
        </p>
        <h2 className="display-text mt-4 text-3xl font-semibold">
          Trusted by high-volume Instagram sellers
        </h2>
      </div>
      <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.handle}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          >
            <p className="text-lg text-white/90">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-auto pt-6 text-sm text-white/70">
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p>{testimonial.handle}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">
                {testimonial.metric}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
