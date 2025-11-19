const footerLinks = {
  Product: [
    { label: "Features", href: "#product" },
    { label: "Workflow", href: "#workflow" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About", href: "#why-us" },
    { label: "Partners", href: "#demo" },
    { label: "Contact", href: "mailto:hello@shopal.ai" },
  ],
  Support: [
    { label: "Help center", href: "#faq" },
    { label: "Status", href: "#demo" },
    { label: "Security", href: "#security" },
  ],
};

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl text-neutral-600">
      <div className="grid gap-10 border-b border-neutral-100 pb-12 sm:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-semibold text-neutral-900">Shoppal</p>
          <p className="mt-3 text-sm">
            Instagram DM assistant that feels like a human teammate and closes orders inside the thread.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-neutral-400">hello@shopal.ai</p>
        </div>
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-neutral-400">
              {group}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-neutral-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-neutral-400 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Shoppal. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-neutral-900">
            Privacy
          </a>
          <a href="#terms" className="hover:text-neutral-900">
            Terms
          </a>
          <a href="#security" className="hover:text-neutral-900">
            Security
          </a>
        </div>
      </div>
    </footer>
  );
}
