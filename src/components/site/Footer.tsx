import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.25em] text-primary-glow/80">
              Let&apos;s talk
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight text-balance">
              Care that meets you.<br />
              <span className="text-cream/60">Every hour of the day.</span>
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-cream text-ink px-6 py-3.5 text-sm font-medium hover:bg-primary-glow hover:text-ink transition-colors"
            >
              Book a visit
              <span aria-hidden>→</span>
            </Link>
            <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary-glow">
              <span className="inline-block h-2 w-2 rounded-full bg-primary-glow animate-pulse" />
              Open 24 hours
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/50">Explore</p>
            <ul className="mt-6 space-y-3 text-sm">
              {([
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services"],
                ["/contact", "Contact"],
              ] as const).map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group relative inline-flex items-center text-cream/80 transition-colors duration-300 hover:text-primary-glow"
                  >
                    {label}
                    <span className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-primary-glow transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/50">Visit</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href="mailto:care@westpointmedical.co" className="text-cream/80 hover:text-primary-glow transition-colors">
                  care@westpointmedical.co.zw
                </a>
              </li>
              <li>
                <a href="tel:+263780969577" className="text-cream/80 hover:text-primary-glow transition-colors">
                  +263 780 969 577
                </a>
              </li>
              <li className="text-cream/50">WestPoint Medical</li>
              <li className="text-cream/50">Kirkman Road</li>
              <li className="text-cream/50">Harare, Zimbabwe</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-cream/10 pt-8 text-xs text-cream/50">
          <Logo variant="light" className="!h-16 md:!h-20 opacity-90" />
          <p>© {year} WestPoint Medical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
