import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Service } from "@/content/services"
import { cn } from "cn"

export function ServiceCard({
  service,
  className,
}: {
  service: Service
  className?: string
}) {
  return (
    <article id={service.id}>
      <Card
        className={cn(
          "h-full border-0 bg-card shadow-none ring-1 ring-border/80 transition-all hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none",
          className,
        )}
      >
        <CardHeader>
          <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
            {service.number}
          </p>
          <CardTitle className="mt-3 text-xl text-balance">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          {service.platforms ? (
            <ul className="flex flex-wrap gap-2">
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
          {service.notes?.map((note) => (
            <p
              key={note}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {note}
            </p>
          ))}
        </CardContent>
      </Card>
    </article>
  )
}
