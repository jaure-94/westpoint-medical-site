import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="[&_*]:!text-cream"><Logo /></div>
          <p className="mt-4 max-w-sm text-sm text-cream/70">
            Health. Wellness. Longevity. A modern medical and wellness facility designed around the people who walk through our doors.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary-glow">
            <span className="inline-block h-2 w-2 rounded-full bg-primary-glow animate-pulse" />
            Open 24 hours
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-cream/50 mb-4">Visit</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary-glow" /> WestPoint Centre, Harare, Zimbabwe</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary-glow" /> +263 780 969 577</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary-glow" /> care@westpointmedical.co</li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 text-primary-glow" /> 24 / 7 emergency care</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-cream/50 mb-4">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-primary-glow">About</Link></li>
            <li><Link to="/services" className="hover:text-primary-glow">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary-glow">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} WestPoint Medical. All rights reserved.
      </div>
    </footer>
  );
}
