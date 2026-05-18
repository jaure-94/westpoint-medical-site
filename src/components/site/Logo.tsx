export function Logo({ className = "", variant = "default" }: { className?: string; variant?: "default" | "light" }) {
  const wordColor = variant === "light" ? "text-cream" : "text-ink";
  const taglineColor = variant === "light" ? "text-cream/60" : "text-muted-foreground";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Mark: overlapping crosses — dark + lime — echoes the WestPoint signage */}
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
        <path d="M14 4h7v10h10v7H21v10h-7V21H4v-7h10z" fill="oklch(0.78 0.22 140)" />
        <path d="M18 8h7v10h10v7H25v10h-7V25H8v-7h10z" fill="oklch(0.32 0.09 152)" />
      </svg>
      <div className="leading-none">
        <div className={`font-display text-[1.15rem] tracking-tight ${wordColor}`}>
          West<span className="text-primary-glow font-semibold">Point</span>
          <span className={`ml-1.5 font-sans text-[0.95rem] font-light ${wordColor}`}>Medical</span>
        </div>
        <div className={`mt-1 text-[0.55rem] uppercase tracking-[0.32em] ${taglineColor}`}>
          Health · Wellness · Longevity
        </div>
      </div>
    </div>
  );
}
