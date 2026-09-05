import { FeatureCard } from "@/components/feature-card"
import { FadeIn } from "@/components/fade-in"
import { features } from "@/content/features"

export function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((feature, index) => (
        <FadeIn key={feature.number} delay={index * 70}>
          <FeatureCard {...feature} />
        </FadeIn>
      ))}
    </div>
  )
}
