import { cn } from "cn"

export function YoutubeEmbed({
  videoId,
  title,
  className,
  aspect = "portrait",
}: {
  videoId: string
  title: string
  className?: string
  aspect?: "portrait" | "landscape"
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-ink ring-1 ring-border",
        aspect === "landscape" ? "aspect-video" : "aspect-[9/16]",
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
