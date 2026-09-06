import { ButtonLink } from "@/components/button-link"
import { YoutubeEmbed } from "@/components/youtube-embed"
import type { Service } from "@/content/services"

export function FeaturedService({ service }: { service: Service }) {
  return (
    <article
      id={service.id}
      className="grid items-center gap-8 rounded-3xl bg-white p-5 shadow-[0_8px_30px_rgba(0,1,32,0.06)] ring-1 ring-border sm:p-8 lg:grid-cols-12 lg:gap-12"
    >
      <div className="lg:col-span-7">
        <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
          {service.number}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {service.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {service.description}
        </p>
        {service.notes?.map((note) => (
          <p
            key={note}
            className="mt-3 text-sm leading-relaxed text-muted-foreground"
          >
            {note}
          </p>
        ))}
        <ButtonLink
          href="/contact"
          className="mt-6 w-full sm:w-auto"
          size="lg"
        >
          Ask about recovery
        </ButtonLink>
      </div>
      {service.youtubeId ? (
        <div className="lg:col-span-5">
          <YoutubeEmbed
            videoId={service.youtubeId}
            title={`${service.title} video`}
          />
        </div>
      ) : null}
    </article>
  )
}
