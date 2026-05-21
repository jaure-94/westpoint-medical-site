import { Link } from "@tanstack/react-router";

export type SubMenuItem = {
  to: string;
  label: string;
  description?: string;
};

export function SubMenuNavbar({ items }: { items: readonly SubMenuItem[] }) {
  return (
    <div
      className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
      role="menu"
    >
      <div className="mt-2 min-w-[16rem] overflow-hidden rounded-2xl border border-border/60 bg-background/95 p-2 shadow-glow backdrop-blur-xl">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            role="menuitem"
            className="group/item block rounded-xl px-4 py-3 transition-colors hover:bg-accent/60"
          >
            <div className="text-sm font-medium text-foreground transition-colors group-hover/item:text-primary">
              {item.label}
            </div>
            {item.description && (
              <div className="mt-0.5 text-xs text-muted-foreground">{item.description}</div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
