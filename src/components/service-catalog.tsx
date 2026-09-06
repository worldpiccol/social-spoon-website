import { SectionHeading } from "@/components/section-heading"
import { ServiceGrid } from "@/components/service-grid"
import { serviceGroups, services } from "@/content/services"

export function ServiceCatalog() {
  return (
    <div className="space-y-16 lg:space-y-20">
      {serviceGroups.map((group) => {
        const items = services.filter((service) => service.group === group.id)

        return (
          <section key={group.id} aria-labelledby={`${group.id}-heading`}>
            <SectionHeading
              eyebrow={group.eyebrow}
              heading={group.heading}
              description={group.description}
            />
            <div className="mt-8">
              <ServiceGrid items={items} />
            </div>
          </section>
        )
      })}
    </div>
  )
}
