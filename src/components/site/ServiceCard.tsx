import { useEffect, useRef, type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

interface ServiceCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  img: string;
  tag: string;
  blurb: string;
}

export function ServiceCard({ icon: Icon, title, img, tag, blurb }: ServiceCardProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, { yPercent: 100 });
      gsap.set(contentRef.current?.children ?? [], { yPercent: 40, opacity: 0 });

      const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
      tl.to(overlayRef.current, { yPercent: 0, duration: 0.7 })
        .to(
          contentRef.current?.children ?? [],
          { yPercent: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
          "-=0.35",
        );
      tlRef.current = tl;
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = () => tlRef.current?.timeScale(1).play();
  const handleLeave = () => tlRef.current?.timeScale(1.4).reverse();

  return (
    <div
      ref={rootRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
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
          ref={overlayRef}
          className="absolute inset-0 bg-primary text-primary-foreground flex flex-col justify-end p-6 will-change-transform"
        >
          <div ref={contentRef} className="space-y-4">
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
