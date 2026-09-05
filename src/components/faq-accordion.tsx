import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FaqItem } from "@/content/faq"

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion multiple className="divide-y divide-border border-y">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-0">
          <AccordionTrigger className="py-5 text-base font-medium hover:no-underline sm:text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
            <div className="space-y-4">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {item.bullets ? (
                <ul className="list-disc space-y-2 pl-5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {item.note ? <p>{item.note}</p> : null}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
