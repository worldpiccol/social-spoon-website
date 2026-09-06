import Image from "next/image"
import Link from "next/link"
import { cn } from "cn"
import { SITE_NAME } from "@/content/site"

export function Logo({
  className,
  onDark = false,
}: {
  className?: string
  onDark?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center rounded-md focus-visible:outline-offset-4",
        className,
      )}
      aria-label={`${SITE_NAME} home`}
    >
      <Image
        src={
          onDark
            ? "/brand/social-spoon-wordmark.png"
            : "/brand/social-spoon-wordmark-navy.png"
        }
        alt="Social Spoon"
        width={360}
        height={120}
        className="h-9 w-auto sm:h-10"
        priority
      />
    </Link>
  )
}
