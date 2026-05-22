import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "ul" | "li" | "h2" | "p";
  delay?: number; // ms
  /** Reduce y-distance on mobile per design spec */
  y?: number;
};

/**
 * IntersectionObserver-based reveal. Content renders visible by default in SSR
 * (no inline opacity:0), so a slow/failed JS bundle never hides the page.
 * Once JS runs and the element scrolls into view, we add `.is-in` which plays
 * the CSS keyframe animation. Hardware-accelerated (opacity + transform) only.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "-80px 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref as React.Ref<HTMLElement>}
      className={cn("reveal", mounted && !inView && "reveal-pending", inView && "reveal-in", className)}
      style={{ ...style, animationDelay: inView ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
