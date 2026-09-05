/**
 * Testimonials have not been supplied. Keep this array empty until
 * the client provides real reviews. Do not invent testimonials.
 */
export type Testimonial = {
  name: string
  quote: string
  photo?: string
  service?: string
  location?: string
  rating?: number
}

export const testimonials: Testimonial[] = []
