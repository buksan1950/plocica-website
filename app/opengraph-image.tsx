import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pločica — Pula Market Hall";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background:
            "radial-gradient(ellipse at 30% 75%, rgba(216, 84, 30, 0.45) 0%, transparent 55%), #14201A",
          color: "#F2EBDD",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              background: "#D8541E",
              borderRadius: 999,
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              color: "#B8AC9C",
              textTransform: "uppercase",
            }}
          >
            Pula Market Hall · Narodni trg 9
          </div>
        </div>
        <div
          style={{
            fontSize: 220,
            lineHeight: 0.9,
            letterSpacing: -1,
            fontWeight: 700,
          }}
        >
          Pločica
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            color: "#D8541E",
          }}
        >
          The belly of the city runs on fire.
        </div>
      </div>
    ),
    { ...size }
  );
}
