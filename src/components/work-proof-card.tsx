import Image from "next/image"
import { cn } from "cn"
import { YoutubeEmbed } from "@/components/youtube-embed"
import { type WorkProof, workProofYoutubeId } from "@/content/work-proof"

export function WorkProofCard({
  item,
  className,
}: {
  item: WorkProof
  className?: string
}) {
  const youtubeId = workProofYoutubeId(item)

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,1,32,0.06)] ring-1 ring-border",
        className,
      )}
    >
      {youtubeId ? (
        <YoutubeEmbed
          videoId={youtubeId}
          title={item.title}
          aspect={item.videoAspect ?? "portrait"}
          className="rounded-none ring-0"
        />
      ) : item.src ? (
        <Image
          src={item.src}
          alt={item.title}
          width={item.width ?? 1080}
          height={item.height ?? 1350}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="aspect-[4/5] h-auto w-full object-cover object-top"
        />
      ) : null}
      <figcaption className="space-y-1.5 px-5 py-4">
        <p className="font-medium text-foreground">{item.title}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.caption}
        </p>
      </figcaption>
    </figure>
  )
}
