import { FeaturedService } from "@/components/featured-service"
import { SectionHeading } from "@/components/section-heading"
import { ServiceGrid } from "@/components/service-grid"
import { serviceGroups, services } from "@/content/services"

export function ServiceCatalog() {
  return (
    <div className="space-y-16 lg:space-y-20">
      {serviceGroups.map((group) => {
        const items = services.filter((service) => service.group === group.id)
        const featured = items.find((service) => service.youtubeId)
        const rest = items.filter((service) => service.id !== featured?.id)

        return (
          <section key={group.id} aria-labelledby={`${group.id}-heading`}>
            <SectionHeading
              eyebrow={group.eyebrow}
              heading={group.heading}
              description={group.description}
            />
            {featured ? (
              <div className="mt-8">
                <FeaturedService service={featured} />
              </div>
            ) : null}
            {rest.length > 0 ? (
              <div className={featured ? "mt-6" : "mt-8"}>
                <ServiceGrid items={rest} />
              </div>
            ) : null}
          </section>
        )
      })}
    </div>
  )
}
