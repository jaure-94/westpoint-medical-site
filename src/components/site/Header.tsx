import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SubMenuNavbar, type SubMenuItem } from "./SubMenuNavbar";

const aboutSubMenu: readonly SubMenuItem[] = [
  { to: "/about", label: "Our Practice", description: "The clinic, our story and values" },
  { to: "/about/team", label: "Meet Our Team", description: "The people behind your care" },
];

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center"><Logo /></Link>
        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className="group relative px-4 py-2 text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground"
            activeProps={{ className: "group relative px-4 py-2 text-sm text-primary font-medium" }}
            activeOptions={{ exact: true }}
          >
            Home
            <span className="pointer-events-none absolute left-4 right-4 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="relative inline-flex items-center gap-1 px-4 py-2 text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground"
            >
              About
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
              <span className="pointer-events-none absolute left-4 right-7 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </button>
            <SubMenuNavbar items={aboutSubMenu} />
          </div>

          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative px-4 py-2 text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground"
              activeProps={{ className: "group relative px-4 py-2 text-sm text-primary font-medium" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
              <span className="pointer-events-none absolute left-4 right-4 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+263780969577" className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
            <Phone className="h-4 w-4" /> 24h Care
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-4 gap-1">
            <Link to="/" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg hover:bg-muted">
              Home
            </Link>
            <button
              onClick={() => setAboutOpen((v) => !v)}
              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted text-left"
            >
              About
              <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
            </button>
            {aboutOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                {aboutSubMenu.map((s) => (
                  <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg text-sm text-foreground/80 hover:bg-muted">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            {nav.slice(1).map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg hover:bg-muted">
                {n.label}
              </Link>
            ))}
            <a href="tel:+263780969577" className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
              <Phone className="h-4 w-4" /> Call 24h
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
