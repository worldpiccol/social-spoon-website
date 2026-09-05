const buckets = new Map<string, number[]>()

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
) {
  const now = Date.now()
  const windowStart = now - windowMs
  const recent = (buckets.get(key) ?? []).filter((time) => time > windowStart)

  if (recent.length >= limit) {
    buckets.set(key, recent)
    return { success: false, remaining: 0 }
  }

  recent.push(now)
  buckets.set(key, recent)
  return { success: true, remaining: limit - recent.length }
}
