export function YoutubeEmbed({
  videoId,
  title,
}: {
  videoId: string
  title: string
}) {
  return (
    <div className="mx-auto w-full max-w-[20rem]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-ink shadow-[0_16px_40px_rgba(0,1,32,0.12)] ring-1 ring-border">
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
    </div>
  )
}
