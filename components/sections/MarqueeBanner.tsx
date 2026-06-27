"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MarqueeBanner() {
  const { t } = useLanguage();
  const items = t("ticker.items").split("|");
  
  return (
    <div className="bg-[#0F172A] border-y border-slate-800/60 py-6 overflow-hidden select-none relative z-20 pointer-events-none">
      {/* Decorative gradient shadows at the edges */}
      <div className="absolute top-0 bottom-0 left-0 w-20 md:w-48 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 md:w-48 bg-gradient-to-l from-[#0F172A] via-[#0F172A]/70 to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap">
        {/* Track 1 */}
        <div className="animate-marquee flex items-center gap-6 pr-6 whitespace-nowrap flex-shrink-0">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 px-6 py-3 rounded-full backdrop-blur-sm shadow-sm"
            >
              {/* Elegant pulsing 4-point star SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-3.5 h-3.5 text-[#06B6D4] animate-pulse"
              >
                <path
                  d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-sans text-[11px] md:text-xs tracking-widest uppercase font-black text-slate-100">
                {item}
              </span>
            </div>
          ))}
        </div>
        {/* Track 2 (duplicate for seamless loop) */}
        <div className="animate-marquee flex items-center gap-6 pr-6 whitespace-nowrap flex-shrink-0" aria-hidden="true">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 px-6 py-3 rounded-full backdrop-blur-sm shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-3.5 h-3.5 text-[#06B6D4] animate-pulse"
              >
                <path
                  d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-sans text-[11px] md:text-xs tracking-widest uppercase font-black text-slate-100">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
