import Image from "next/image";

const navLinks = [
  { label: "Platform", href: "#product" },
  { label: "Capabilities", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-4 z-40 px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-neutral-100 bg-white/90 px-4 py-3 text-neutral-900 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-neutral-100">
            <Image
              src="/shopal.jpeg"
              alt="Shoppal logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="display-text text-lg font-semibold tracking-tight">
              Shoppal
            </p>
            <p className="text-[11px] uppercase tracking-[0.45em] text-neutral-400">
              SOCIAL SELLING OS
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-neutral-500 sm:flex">
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
          <span className="rounded-full border border-neutral-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-500">
            Beta
          </span>
          <a
            href="#demo"
            className="rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] px-5 py-2 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(228,63,108,0.35)] transition hover:-translate-y-0.5"
          >
            Request a walkthrough
          </a>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-3 py-2 text-sm font-semibold text-neutral-700 sm:hidden"
          aria-label="Open navigation menu"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
