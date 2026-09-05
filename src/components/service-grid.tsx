import { FadeIn } from "@/components/fade-in"
import { ServiceCard } from "@/components/service-card"
import type { Service } from "@/content/services"

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((service, index) => (
        <FadeIn key={service.id} delay={(index % 2) * 80}>
          <ServiceCard service={service} />
        </FadeIn>
      ))}
    </div>
  )
}
