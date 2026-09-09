import { WorkProofCard } from "@/components/work-proof-card"
import type { WorkProof } from "@/content/work-proof"

export function WorkProofGrid({ items }: { items: WorkProof[] }) {
  if (items.length === 0) {
    return (
      <p className="text-base text-muted-foreground sm:text-lg">
        Testimonials will appear here as they are added.
      </p>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <WorkProofCard
          key={item.youtube ?? item.src ?? item.title}
          item={item}
        />
      ))}
    </div>
  )
}
