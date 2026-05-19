import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="light" />
          <p className="mt-6 max-w-sm text-sm text-cream/70">
            A modern medical and wellness facility designed around the people who walk through our doors.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary-glow">
            <span className="inline-block h-2 w-2 rounded-full bg-primary-glow animate-pulse" />
            Open 24 hours
          </div>
        </div>
        <div>
          <h4 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-cream mb-6">Visit</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary-glow" /><span>WestPoint Centre, Harare, Zimbabwe</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary-glow" /><span>+263 780 969 577</span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary-glow" /><span>care@westpointmedical.co</span></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 text-primary-glow" /><span>24 / 7 emergency care</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-cream mb-6">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group relative inline-flex items-center text-cream/80 transition-colors duration-300 hover:text-primary-glow"
                >
                  {l.label}
                  <span className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-primary-glow transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} WestPoint Medical. All rights reserved.
      </div>
    </footer>
  );
}
