import Image from "next/image";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/80 px-4 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="InstaFlow AI logo"
            width={40}
            height={40}
            priority
          />
          <div>
            <p className="display-text text-lg font-semibold text-neutral-900">
              Shoppal
            </p>
            <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">
              DM AGENT
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-neutral-600 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <span className="rounded-full bg-neutral-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Beta
          </span>
          <a
            href="#demo"
            className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Book a demo
          </a>
        </div>
      </div>
    </header>
  );
}
