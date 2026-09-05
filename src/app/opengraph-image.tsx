import { ImageResponse } from "next/og"

export const alt = "Social Spoon — Digital Solutions. Account Recovery. Digital Growth."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1a2433",
          color: "#f4efe6",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            letterSpacing: "0.28em",
            fontSize: 22,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 10,
              background: "#2f5f57",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              letterSpacing: 0,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            SS
          </div>
          Social Spoon
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 58, fontWeight: 600, lineHeight: 1.15, maxWidth: 980 }}>
            Digital Solutions. Account Recovery. Digital Growth.
          </div>
          <div style={{ fontSize: 24, color: "#c9c3b6", maxWidth: 760 }}>
            Professional digital solutions for individuals, creators, and businesses.
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
