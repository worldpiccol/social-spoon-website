import { ServiceCard } from "@/components/service-card"
import { YoutubeEmbed } from "@/components/youtube-embed"
import type { Service } from "@/content/services"

export function FeaturedService({ service }: { service: Service }) {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
      <ServiceCard
        service={service}
        featured
        className="lg:col-span-7"
      />
      {service.youtubeId ? (
        <div className="flex items-center justify-center lg:col-span-5">
          <YoutubeEmbed
            videoId={service.youtubeId}
            title={`${service.title} video`}
          />
        </div>
      ) : null}
    </div>
  )
}
