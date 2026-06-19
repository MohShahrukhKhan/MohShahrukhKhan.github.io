import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#performance", label: "Performance" },
  { href: "#ai", label: "AI Workflow" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "bg-transparent border border-transparent"
          }`}
        >
          <a href="#top" data-testid="nav-logo" className="flex items-center gap-2 group">
            <span className="font-mono text-[11px] text-blue-400/80">{"</>"}</span>
            <span className="font-display font-semibold tracking-tight text-white">
              Shahrukh<span className="text-blue-500">.</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, '-')}`}
                  href={l.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            data-testid="nav-cta-contact"
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            Let's talk
            <span className="font-mono text-xs">→</span>
          </a>

          <button
            data-testid="nav-mobile-toggle"
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div data-testid="nav-mobile-panel" className="md:hidden mt-2 glass-strong rounded-2xl p-4">
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/\s/g, '-')}`}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-2 text-sm text-zinc-300 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  data-testid="nav-mobile-cta"
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block mt-2 text-center bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
                >
                  Let's talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
