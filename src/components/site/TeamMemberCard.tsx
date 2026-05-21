import { useState } from "react";

export type TeamMember = {
  name: string;
  title: string;
  image: string;
};

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <figure className="group">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-muted">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted via-muted/60 to-muted" />
        )}
        <img
          src={member.image}
          alt={`${member.name} — ${member.title}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <figcaption className="mt-4">
        <div className="font-display text-lg leading-tight">{member.name}</div>
        <div className="mt-1 text-sm text-muted-foreground">{member.title}</div>
      </figcaption>
    </figure>
  );
}
