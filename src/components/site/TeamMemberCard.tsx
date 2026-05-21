import { useEffect, useRef, useState } from "react";

export type TeamMember = {
  name: string;
  title: string;
  image: string;
};

export function TeamMemberCard({
  member,
  hideCaption = false,
  className = "aspect-[3/4]",
}: {
  member: TeamMember;
  hideCaption?: boolean;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <figure className="group">
      <div className={`relative w-full overflow-hidden rounded-2xl bg-muted ${className}`}>
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted via-muted/60 to-muted" />
        )}
        <img
          ref={imgRef}
          src={member.image}
          alt={`${member.name} — ${member.title}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      {!hideCaption && (
        <figcaption className="mt-4">
          <div className="font-display text-lg leading-tight">{member.name}</div>
          <div className="mt-1 text-sm text-muted-foreground">{member.title}</div>
        </figcaption>
      )}
    </figure>
  );
}
