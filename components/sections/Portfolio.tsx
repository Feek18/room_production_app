"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioItems } from "@/data/portfolioData";

export default function Portfolio() {
  const { t } = useLanguage();
  const items = getPortfolioItems(t);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 md:mb-24">
          <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#06B6D4] mb-4 inline-block font-bold">
            {t("port.badge")}
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#1E293B]">
            {t("port.title")}
          </h2>
          <p className="font-sans text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
            {t("port.desc")}
          </p>
        </div>

        {/* Portfolio Asymmetrical Lookbook Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative aspect-[3/4] bg-stone-100 overflow-hidden border border-[#E5E7EB] group cursor-pointer ${item.spanClass}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Elegant Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#06B6D4] mb-2 font-bold">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-xl text-[#FAF9F6] tracking-wide leading-tight">
                  {item.title}
                </h3>
                <span className="text-[10px] tracking-widest uppercase text-stone-400 mt-4 border-t border-stone-850 pt-3 flex items-center gap-2">
                  {t("port.view")} &rarr;
                </span>
              </div>

              {/* Minimalist Corner Label (visible by default) */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-[#E5E7EB] px-3 py-1 text-[9px] tracking-widest uppercase font-sans font-bold text-[#1E293B] group-hover:opacity-0 transition-opacity duration-300">
                {item.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
