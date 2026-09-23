"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-[#FAF9F5] border-b border-[#E5E7EB]">
      {/* Subtle Hairline Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_60%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center relative z-10">
        
        {/* Left Side: Editorial Typography & Workshop Context */}
        <div className="lg:col-span-7 flex flex-col justify-center select-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 mb-5"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#111C2B] text-[#FAF9F5] text-[10px] font-sans uppercase tracking-[0.25em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0097C2]" />
              {t("hero.badge")}
            </span>
            <span className="text-[11px] font-sans tracking-widest text-neutral-400 uppercase hidden sm:inline-block">
              // {t("hero.location")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-[76px] leading-[1.04] tracking-tight text-[#111C2B]"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl sm:text-3xl text-neutral-600 mt-4 font-light tracking-tight"
          >
            {t("hero.subtitle")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed mt-6 max-w-xl font-normal"
          >
            {t("hero.desc")}
          </motion.p>

          {/* Key Atelier Spec Tags */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 pt-6 border-t border-[#E5E7EB] grid grid-cols-3 gap-4 max-w-lg"
          >
            <div>
              <span className="block font-sans text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">Min. Order</span>
              <span className="block font-display font-bold text-sm text-[#111C2B] mt-0.5">24 Pcs / Design</span>
            </div>
            <div>
              <span className="block font-sans text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">Services</span>
              <span className="block font-display font-bold text-sm text-[#111C2B] mt-0.5">Full Makloon / CMT</span>
            </div>
            <div>
              <span className="block font-sans text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">Branding</span>
              <span className="block font-display font-bold text-sm text-[#111C2B] mt-0.5">Custom White Label</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
          >
            <a
              href="#choose-path"
              className="group font-sans text-xs tracking-widest uppercase bg-[#111C2B] text-[#FAF9F5] px-8 py-4 flex items-center justify-center gap-3 hover:bg-[#0097C2] transition-all duration-300 font-semibold shadow-sm"
            >
              {t("hero.cta.start")}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            <a
              href="#products"
              className="font-sans text-xs tracking-widest uppercase border border-[#111C2B] text-[#111C2B] px-7 py-4 text-center hover:bg-neutral-200/60 transition-all duration-300 font-semibold"
            >
              {t("hero.cta.learn")}
            </a>
          </motion.div>
        </div>

        {/* Right Side: Editorial Lookbook Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] aspect-[4/5] bg-neutral-200 overflow-hidden border border-[#E5E7EB] group shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
          >
            <Image
              src="/images/SAVE_20260628_165959.jpg"
              alt="Room Production Apparel Mockup"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
            
            {/* Editorial Lookbook Tag */}
            <div className="absolute top-4 left-4 bg-[#FAF9F5]/95 backdrop-blur-sm border border-[#E5E7EB] px-3.5 py-1.5 text-[10px] tracking-widest uppercase font-sans font-bold text-[#111C2B]">
              LOOKBOOK // ARCHIVE 01
            </div>

            {/* Bottom Atelier Spec Sheet Stamp */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#111C2B]/90 backdrop-blur-md text-[#FAF9F5] border border-white/10 p-3.5 flex items-center justify-between">
              <div>
                <span className="block text-[9px] uppercase tracking-widest text-neutral-400 font-sans">Craftsmanship</span>
                <span className="block text-xs font-display font-bold text-white">Denpasar Garment Studio</span>
              </div>
              <div className="text-right">
                <span className="block text-[9px] uppercase tracking-widest text-neutral-400 font-sans">Standard</span>
                <span className="block text-xs font-display font-bold text-[#0097C2]">High Boutique QC</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
