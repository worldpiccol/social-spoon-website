import { cn } from "cn"

export function YoutubeEmbed({
  videoId,
  title,
  className,
}: {
  videoId: string
  title: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/16] overflow-hidden rounded-xl bg-ink ring-1 ring-border",
        className,
      )}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        title={title}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}
