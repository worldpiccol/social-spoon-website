"use client"

import { useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { WorkProof } from "@/content/work-proof"

export function WorkProofSlider({ items }: { items: WorkProof[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByPage = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const distance = scroller.clientWidth * 0.9 * direction
    scroller.scrollBy({ left: distance, behavior: "smooth" })
  }, [])

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <figure
            key={item.src}
            className="w-[min(100%,20rem)] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,1,32,0.06)] ring-1 ring-border sm:w-[calc((100%-1.25rem)/2)]"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={item.width}
              height={item.height}
              sizes="(min-width: 640px) 40vw, 90vw"
              className="aspect-[4/5] h-auto w-full object-cover object-top"
            />
            <figcaption className="space-y-1.5 px-5 py-4">
              <p className="font-medium text-foreground">{item.title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.caption}
              </p>
            </figcaption>
          </figure>
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
