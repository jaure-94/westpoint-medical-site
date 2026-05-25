import { useEffect, useRef, useState } from "react";

export type TeamMember = {
  name: string;
  title: string;
  image?: string;
};

export function TeamMemberCard({
  member,
  hideCaption = false,
  className = "aspect-[3/4]",
  loading = "lazy",
  fetchPriority = "auto",
}: {
  member: TeamMember;
  hideCaption?: boolean;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
}) {
  const hasImage = Boolean(member.image);
  const [loaded, setLoaded] = useState(!hasImage);
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!hasImage) {
      setLoaded(true);
      setErrored(false);
      return;
    }

    setLoaded(false);
    setErrored(false);

    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [hasImage]);

  return (
    <figure className="group">
      <div className={`relative w-full overflow-hidden rounded-2xl bg-muted ${className}`}>
        {!loaded && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 animate-pulse bg-gradient-to-br from-muted via-muted/60 to-muted"
          />
        )}
        {hasImage && !errored ? (
          <img
            ref={imgRef}
            src={member.image}
            alt={`${member.name} — ${member.title}`}
            loading={loading}
            decoding="async"
            fetchPriority={fetchPriority}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setErrored(true);
              setLoaded(true);
            }}
            className="relative z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="relative z-10 flex h-full w-full items-center justify-center bg-slate-200 text-slate-500">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-12 w-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z" />
              <path d="M4 22c0-4.418 3.582-8 8-8s8 3.582 8 8" />
            </svg>
            <span className="sr-only">No profile image available</span>
          </div>
        )}
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
