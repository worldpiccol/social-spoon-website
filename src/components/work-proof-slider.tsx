"use client"

import { useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WorkProofCard } from "@/components/work-proof-card"
import type { WorkProof } from "@/content/work-proof"

export function WorkProofSlider({ items }: { items: WorkProof[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByPage = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const distance = scroller.clientWidth * 0.9 * direction
    scroller.scrollBy({ left: distance, behavior: "smooth" })
  }, [])

  if (items.length === 0) {
    return null
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <WorkProofCard
            key={item.youtube ?? item.src ?? item.title}
            item={item}
            className="w-[min(100%,20rem)] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)]"
          />
        ))}
      </div>
      {items.length > 1 ? (
        <div className="mt-5 flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            aria-label="Previous testimonials"
            onClick={() => scrollByPage(-1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            aria-label="Next testimonials"
            onClick={() => scrollByPage(1)}
          >
            <ChevronRight />
          </Button>
        </div>
      ) : null}
    </div>
  )
}
