import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Testimonial } from "@/content/testimonials"

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full border-0 bg-white shadow-[0_8px_30px_rgba(0,1,32,0.06)] ring-1 ring-border/80">
      <CardContent className="flex h-full flex-col gap-5 pt-2">
        {typeof testimonial.rating === "number" ? (
          <p className="flex items-center gap-1 text-gold" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-4"
                fill={index < testimonial.rating! ? "currentColor" : "none"}
              />
            ))}
          </p>
        ) : null}
        <blockquote className="text-base leading-relaxed text-foreground">
          “{testimonial.quote}”
        </blockquote>
        <div className="mt-auto flex items-center gap-3 pt-2">
          {testimonial.photo ? (
            <Image
              src={testimonial.photo}
              alt=""
              width={44}
              height={44}
              className="size-11 rounded-full object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex size-11 items-center justify-center rounded-full bg-muted text-sm font-medium"
            >
              {testimonial.name.slice(0, 1)}
            </span>
          )}
          <div>
            <p className="font-medium">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">
              {[testimonial.service, testimonial.location]
                .filter(Boolean)
                .join(" · ")}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
