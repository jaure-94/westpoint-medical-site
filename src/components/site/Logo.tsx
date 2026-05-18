export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
        <path d="M13 4h6v9h9v6h-9v9h-6v-9H4v-6h9z" fill="oklch(0.52 0.16 152)" />
        <path d="M13 4h6v9h9v6h-9v9h-6v-9H4v-6h9z" fill="url(#g)" opacity=".55" />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="oklch(0.78 0.22 140)" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-lg tracking-tight">
        West<span className="text-primary font-semibold">Point</span>
        <span className="ml-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Medical</span>
      </span>
    </div>
  );
}
