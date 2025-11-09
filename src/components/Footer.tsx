const footerLinks = {
  Product: [
    { label: "Features", href: "#product" },
    { label: "Workflow", href: "#workflow" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About", href: "#why-us" },
    { label: "Careers", href: "mailto:hey@instaflow.ai" },
    { label: "Partner", href: "#demo" },
  ],
  Support: [
    { label: "Help center", href: "#faq" },
    { label: "Status", href: "#demo" },
    { label: "Contact", href: "mailto:support@instaflow.ai" },
  ],
};

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl text-white/80">
      <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-semibold text-white">InstaFlow AI</p>
          <p className="mt-3 text-sm">
            Automated Instagram DM assistant that feels like a human teammate.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-white/60">
            hello@instaflow.ai
          </p>
        </div>
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
              {group}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-white/60 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} InstaFlow AI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-white">
            Privacy
          </a>
          <a href="#terms" className="hover:text-white">
            Terms
          </a>
          <a href="#security" className="hover:text-white">
            Security
          </a>
        </div>
      </div>
    </footer>
  );
}
