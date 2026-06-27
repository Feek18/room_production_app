"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-slate-50/50">
      {/* Background Subtle Texture/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Typography and Content */}
        <div className="lg:col-span-7 flex flex-col justify-center select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#06B6D4] mb-4 inline-block font-bold">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-5xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight text-[#1E293B]"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl md:text-3xl text-slate-700 mt-4 font-light tracking-wide"
          >
            {t("hero.subtitle")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-slate-600 text-base md:text-lg leading-relaxed mt-6 max-w-xl font-normal"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#choose-path"
              className="group font-sans text-xs tracking-widest uppercase bg-[#1E293B] text-white border border-[#1E293B] px-8 py-4 flex items-center justify-center gap-3 hover:bg-transparent hover:text-[#1E293B] transition-all duration-300"
            >
              {t("hero.cta.start")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            <a
              href="#why-us"
              className="font-sans text-xs tracking-widest uppercase border border-slate-300 text-slate-600 px-8 py-4 text-center hover:border-[#1E293B] hover:text-[#1E293B] transition-all duration-300"
            >
              {t("hero.cta.learn")}
            </a>
          </motion.div>
        </div>

        {/* Right Side: Editorial Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[400px] aspect-[3/4] bg-stone-100 overflow-hidden border border-[#E5E7EB] group shadow-sm"
          >
            <Image
              src="/hero_apparel.png"
              alt="Room Production Apparel Mockup"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            {/* Minimalist Overlay Label */}
            <div className="absolute bottom-6 left-6 bg-white border border-[#E5E7EB] px-4 py-2 text-[10px] tracking-widest uppercase font-sans font-medium text-[#1E293B]">
              {t("hero.location")}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
