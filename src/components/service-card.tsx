"use client"

import { useEffect, useState } from "react"
import { cn } from "cn"
import { ContactButton } from "@/components/contact-popup"
import type { Service } from "@/content/services"

export function ServiceCard({
  service,
  featured = false,
  className,
}: {
  service: Service
  featured?: boolean
  className?: string
}) {
  const [flipped, setFlipped] = useState(false)
  const [hoverable, setHoverable] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)")
    const sync = () => setHoverable(media.matches)
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  function toggle() {
    setFlipped((current) => !current)
  }

  return (
    <article
      id={service.id}
      aria-expanded={flipped}
      className={cn("h-full cursor-pointer [perspective:1200px]", className)}
      onMouseEnter={() => {
        if (hoverable) setFlipped(true)
      }}
      onMouseLeave={() => {
        if (hoverable) setFlipped(false)
      }}
      onFocus={() => {
        if (hoverable) setFlipped(true)
      }}
      onBlur={(event) => {
        if (!hoverable) return
        const next = event.relatedTarget
        if (next instanceof Node && event.currentTarget.contains(next)) return
        setFlipped(false)
      }}
      onClick={() => {
        if (!hoverable) toggle()
      }}
    >
      <div
        className={cn(
          "relative h-full transition-transform duration-500 [transform-style:preserve-3d]",
          featured ? "min-h-[32rem]" : "min-h-[26rem]",
          flipped && "[transform:rotateY(180deg)]",
        )}
      >
        <div className="absolute inset-0 flex flex-col rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(0,1,32,0.06)] ring-1 ring-border [backface-visibility:hidden] sm:p-6">
          <h3 className="text-xl font-semibold tracking-tight text-balance">
            {service.title}
          </h3>
          <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
            {service.summary}
          </p>
          {service.platforms ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.platforms.map((platform) => (
                <li
                  key={platform}
                  className="rounded-full border border-border bg-muted/70 px-3 py-1 text-xs text-foreground"
                >
                  {platform}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="absolute inset-0 flex flex-col overflow-y-auto rounded-2xl bg-ink p-5 text-ink-foreground shadow-[0_8px_30px_rgba(0,1,32,0.12)] ring-1 ring-white/10 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-6">
          <h3 className="text-xl font-semibold tracking-tight text-balance">
            {service.title}
          </h3>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/90 sm:text-base">
            {service.details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {service.plans?.map((plan) => (
              <div
                key={plan.name}
                className="rounded-xl bg-white/10 p-3 ring-1 ring-white/10"
              >
                <p className="font-medium text-primary">{plan.name}</p>
                <ul className="mt-2 list-disc space-y-1 pl-4">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <button
              type="button"
              className="text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
              onClick={(event) => {
                event.stopPropagation()
                setFlipped(false)
              }}
            >
              Back
            </button>
            <ContactButton
              variant="link"
              size="sm"
              className="h-auto px-0 text-sm font-medium text-primary"
              onClick={(event) => event.stopPropagation()}
            >
              Contact us
            </ContactButton>
          </div>
        </div>
      </div>
    </article>
  )
}
