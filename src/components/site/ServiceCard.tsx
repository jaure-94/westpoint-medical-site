import { type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  img: string;
  tag: string;
  blurb: string;
}

export function ServiceCard({ icon: Icon, title, img, tag, blurb }: ServiceCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-soft transition-shadow"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="h-full w-full object-cover"
        />

        {/* Swipe-up reveal overlay */}
        <div
          className="absolute inset-0 flex translate-y-full flex-col justify-end bg-primary p-6 text-primary-foreground transition-transform duration-500 ease-out will-change-transform group-hover:translate-y-0"
        >
          <div className="space-y-4 opacity-100 transition-opacity duration-300">
            <Icon className="h-6 w-6" />
            <h3 className="font-display text-2xl leading-tight">{title}</h3>
            <p className="text-sm text-primary-foreground/85 leading-relaxed">{blurb}</p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] ring-1 ring-primary-foreground/30 hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Explore <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <Icon className="h-5 w-5 text-primary" />
          <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <div className="mt-3 font-display text-xl">{title}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{tag}</div>
      </div>
    </div>
  );
}
