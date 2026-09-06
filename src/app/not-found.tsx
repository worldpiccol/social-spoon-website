import { ButtonLink } from "@/components/button-link"
import { ContactButton } from "@/components/contact-popup"

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-6 lg:px-8">
      <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you are looking for is not available. Return to the homepage
        or explore our services.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" className="w-full sm:w-auto">
          Back to home
        </ButtonLink>
        <ContactButton variant="outline" className="w-full sm:w-auto">
          Contact us
        </ContactButton>
      </div>
    </section>
  )
}
