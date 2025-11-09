const faqs = [
  {
    question: "How does InstaFlow AI connect to my Instagram?",
    answer:
      "We use Meta-approved APIs. You authorize access once, we sync your inbox, and the agent replies through the same DM thread without third-party links.",
  },
  {
    question: "Can I train the agent on my own catalog?",
    answer:
      "Yes. Upload spreadsheets, Notion docs, or simple CSVs. The agent refreshes pricing, stock, and delivery info automatically.",
  },
  {
    question: "What happens when a conversation gets complex?",
    answer:
      "Flag VIP customers and tap to take over. The agent pauses, transfers the chat to you, and hands back when you're done.",
  },
  {
    question: "Is there support for multiple team members?",
    answer:
      "Growth plan includes multi-user access with roles, conversation routing, and shared notes so your whole crew stays in sync.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="rounded-[32px] bg-neutral-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">
          FAQ
        </p>
        <h2 className="mt-4 text-3xl font-semibold">Answers at a glance</h2>
      </div>
      <div className="mx-auto mt-12 space-y-4 max-w-4xl">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left"
          >
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            <p className="mt-2 text-sm text-white/80">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
