import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "cn"

export function FeatureCard({
  number,
  title,
  description,
  className,
}: {
  number: string
  title: string
  description: string
  className?: string
}) {
  return (
    <Card
      className={cn(
        "h-full border-0 bg-card shadow-none ring-1 ring-border/80 transition-shadow hover:shadow-md",
        className,
      )}
    >
      <CardHeader>
        <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
          {number}
        </p>
        <CardTitle className="mt-3 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
