import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "Room Production | Premium Apparel & Uniform Production Partner";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      // Image HTML template rendered as PNG
      <div
        style={{
          background: "#FFFFFF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Centered ROOM PRODUCTION SVG logo mark - cropped without color palette */}
          <svg
            viewBox="0 0 250 100"
            style={{ width: "640px", height: "256px" }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* --- LETTER R --- */}
            <path
              d="M20 20 L20 54 M20 20 H28 C35 20 40 23 40 29.5 C40 36 34 38.5 28 38.5 H20"
              stroke="#1E293B"
              strokeWidth="6.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            <path
              d="M27 38.5 L39.5 54"
              stroke="#1E293B"
              strokeWidth="6.5"
              strokeLinecap="square"
            />
            <path
              d="M20 31.5 L12 37"
              stroke="#1E293B"
              strokeWidth="4"
              strokeLinecap="square"
            />

            {/* --- INFINITY OO SYMBOL --- */}
            <path
              d="M75 37 C67.5 27 54 27 46.5 37 C39 47 52.5 47 60 37 L90 37 C97.5 27 111 27 118.5 37 C126 47 112.5 47 105 37 L75 37 Z"
              stroke="#06B6D4"
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* --- LETTER M --- */}
            <path
              d="M125 54 V20 L138 38 L151 20 V54"
              stroke="#1E293B"
              strokeWidth="6.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            <path
              d="M151 32 L156 20 M151 54 V34"
              stroke="#06B6D4"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* --- PRODUCTION SUBTEXT --- */}
            <text
              x="15"
              y="75"
              fill="#1E293B"
              fontFamily="sans-serif"
              fontSize="12.5"
              fontWeight="900"
              letterSpacing="9"
            >
              PRODUCTION
            </text>

            {/* --- PARTNER PRODUKSIMU FOOTER --- */}
            <line
              x1="15"
              y1="90"
              x2="45"
              y2="90"
              stroke="#06B6D4"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <text
              x="53"
              y="93"
              fill="#A8A29E"
              fontFamily="sans-serif"
              fontSize="8"
              fontWeight="800"
              letterSpacing="2.5"
            >
              PARTNER PRODUKSIMU
            </text>
            <line
              x1="183"
              y1="90"
              x2="213"
              y2="90"
              stroke="#06B6D4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
