"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MarqueeBanner() {
  const { t } = useLanguage();
  const rawItems = t("ticker.items").split("|");
  
  const items = [
    ...rawItems,
    "PATTERN MAKING",
    "SCREEN PRINTING & EMBROIDERY",
    "BOUTIQUE FINISHING",
  ];
  
  return (
    <div className="bg-[#101824] border-y border-[#243042] py-4 overflow-hidden select-none relative z-20">
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#101824] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#101824] to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap">
        {/* Track 1 */}
        <div className="animate-marquee flex items-center gap-8 pr-8 whitespace-nowrap flex-shrink-0">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 bg-[#0097C2] rotate-45 flex-shrink-0" />
              <span className="font-sans text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-slate-200">
                {item}
              </span>
            </div>
          ))}
        </div>
        {/* Track 2 */}
        <div className="animate-marquee flex items-center gap-8 pr-8 whitespace-nowrap flex-shrink-0" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 bg-[#0097C2] rotate-45 flex-shrink-0" />
              <span className="font-sans text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-slate-200">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
