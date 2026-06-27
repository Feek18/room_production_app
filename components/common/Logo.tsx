"use client";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "h-12", light = false }: LogoProps) {
  const navyColor = light ? "#FAF9F6" : "#1E293B";
  const cyanColor = "#06B6D4";
  const textColor = light ? "#A8A29E" : "#1E293B";

  return (
    <svg
      viewBox="0 0 320 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* --- LETTER R --- */}
      {/* Left bar of R */}
      <path
        d="M20 20 L20 54 M20 20 H28 C35 20 40 23 40 29.5 C40 36 34 38.5 28 38.5 H20"
        stroke={navyColor}
        strokeWidth="6.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* Slanted leg of R (slightly offset for stylized gap) */}
      <path
        d="M27 38.5 L39.5 54"
        stroke={navyColor}
        strokeWidth="6.5"
        strokeLinecap="square"
      />
      {/* Stylized notch cutout on R */}
      <path
        d="M20 31.5 L12 37"
        stroke={navyColor}
        strokeWidth="4"
        strokeLinecap="square"
      />

      {/* --- INFINITY OO SYMBOL --- */}
      {/* High-fidelity custom infinity path representing the double O */}
      <path
        d="M75 37 C67.5 27 54 27 46.5 37 C39 47 52.5 47 60 37 L90 37 C97.5 27 111 27 118.5 37 C126 47 112.5 47 105 37 L75 37 Z"
        stroke={cyanColor}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* --- LETTER M --- */}
      {/* Left and middle parts of M */}
      <path
        d="M125 54 V20 L138 38 L151 20 V54"
        stroke={navyColor}
        strokeWidth="6.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* Right leg cyan highlight on M */}
      <path
        d="M151 32 L156 20 M151 54 V34"
        stroke={cyanColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* --- PRODUCTION SUBTEXT --- */}
      <text
        x="15"
        y="75"
        fill={navyColor}
        fontFamily="var(--font-outfit), sans-serif"
        fontSize="12.5"
        fontWeight="900"
        letterSpacing="9"
      >
        PRODUCTION
      </text>

      {/* --- PARTNER PRODUKSIMU FOOTER --- */}
      {/* Left Cyan Line */}
      <line
        x1="15"
        y1="90"
        x2="45"
        y2="90"
        stroke={cyanColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Centered text */}
      <text
        x="53"
        y="93"
        fill={textColor}
        fontFamily="var(--font-jakarta), sans-serif"
        fontSize="8"
        fontWeight="800"
        letterSpacing="2.5"
      >
        PARTNER PRODUKSIMU
      </text>
      {/* Right Cyan Line */}
      <line
        x1="183"
        y1="90"
        x2="213"
        y2="90"
        stroke={cyanColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
