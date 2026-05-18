import logoUrl from "@/assets/clinic/logo.svg";

export function Logo({ className = "", variant = "default" }: { className?: string; variant?: "default" | "light" }) {
  return (
    <img
      src={logoUrl}
      alt="WestPoint Medical — Health · Wellness · Longevity"
      className={`h-12 w-auto md:h-14 ${variant === "light" ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
