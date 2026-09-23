"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioItems } from "@/data/portfolioData";

export default function Portfolio() {
  const { t } = useLanguage();
  const items = getPortfolioItems(t);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-[#FAF9F5] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#0097C2]" />
            <span className="text-[11px] uppercase font-sans tracking-[0.3em] text-[#0097C2] font-bold">
              {t("port.badge")}
            </span>
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#111C2B]">
            {t("port.title")}
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base mt-4 leading-relaxed">
            {t("port.desc")}
          </p>
        </div>

        {/* Portfolio Lookbook Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {items.map((item, index) => {
            const indexFormatted = String(index + 1).padStart(2, "0");
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={`https://wa.me/6289644005097?text=${encodeURIComponent(`Halo Room Production, saya tertarik dengan produksi seperti ${item.title} (${item.category}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative aspect-[3/4] bg-neutral-200 overflow-hidden border border-[#E5E7EB] group cursor-pointer block ${item.spanClass}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Minimalist Top Corner Label (default state) */}
                <div className="absolute top-4 left-4 bg-[#FAF9F5]/90 backdrop-blur-sm border border-[#E5E7EB] px-3 py-1 text-[9px] tracking-widest uppercase font-mono font-bold text-[#111C2B] group-hover:opacity-0 transition-opacity duration-300">
                  {item.category} // #{indexFormatted}
                </div>

                {/* Elegant Editorial Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111C2B]/95 via-[#111C2B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                    <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#0097C2] mb-1 font-bold block">
                      {item.category}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <div className="text-[11px] tracking-widest uppercase text-slate-300 mt-4 border-t border-white/15 pt-3 flex items-center justify-between font-sans">
                      <span>{t("port.view")}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0097C2]" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
