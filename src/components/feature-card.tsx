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
        "h-full border-0 bg-white shadow-[0_8px_30px_rgba(0,1,32,0.06)] ring-1 ring-border transition-shadow hover:ring-primary/50 hover:shadow-[0_16px_40px_rgba(0,1,32,0.08)]",
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
