/** Accept a YouTube video ID or a watch / shorts / embed URL. */
export function parseYouTubeId(value: string): string | null {
  const trimmed = value.trim()
  if (!trimmed) return null
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed

  try {
    const url = new URL(trimmed)
    const host = url.hostname.replace(/^www\./, "")

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0]
      return id && /^[\w-]{11}$/.test(id) ? id : null
    }

    if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
      const shorts = url.pathname.match(/\/shorts\/([\w-]{11})/)
      if (shorts) return shorts[1]
      const embed = url.pathname.match(/\/embed\/([\w-]{11})/)
      if (embed) return embed[1]
      const v = url.searchParams.get("v")
      if (v && /^[\w-]{11}$/.test(v)) return v
    }
  } catch {
    return null
  }

  return null
}
