"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts } from "@/data/productsData";

export default function Products() {
  const { t } = useLanguage();
  const products = getProducts(t);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="products" className="py-24 md:py-36 bg-[#FAF9F5] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#0097C2]" />
              <span className="text-[11px] uppercase font-sans tracking-[0.3em] text-[#0097C2] font-bold">
                {t("prod.badge")}
              </span>
            </div>
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#111C2B]">
              {t("prod.title")}
            </h2>
          </div>
          <div>
            <p className="font-sans text-neutral-600 text-sm md:text-base max-w-md leading-relaxed">
              {t("prod.desc")}
            </p>
          </div>
        </div>

        {/* Product Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {products.map((prod, index) => {
            const indexFormatted = String(index + 1).padStart(2, "0");
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex flex-col bg-white border border-[#E5E7EB] hover:border-[#0097C2]/70 transition-all duration-300 group shadow-sm"
              >
                {/* Product Lookbook Image */}
                <div className="relative w-full aspect-[4/5] bg-neutral-100 overflow-hidden border-b border-[#E5E7EB]">
                  <Image
                    src={prod.image}
                    alt={`${prod.title} Lookbook`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                  <div className="absolute top-4 left-4 bg-[#FAF9F5]/90 backdrop-blur-sm border border-[#E5E7EB] px-3 py-1 font-mono text-[9px] uppercase tracking-widest font-bold text-[#111C2B]">
                    CAT {indexFormatted} // SPEC
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-display font-black text-2xl tracking-tight text-[#111C2B] mb-3">
                      {prod.title}
                    </h3>
                    <p className="font-sans text-neutral-600 text-xs md:text-sm leading-relaxed mb-6">
                      {prod.description}
                    </p>

                    {/* Bullet Specs */}
                    <ul className="space-y-2.5 mb-8 border-t border-neutral-100 pt-5">
                      {prod.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2.5 text-neutral-700 text-xs md:text-sm">
                          <span className="w-1.5 h-1.5 bg-[#0097C2] rotate-45 flex-shrink-0" />
                          <span className="font-sans">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/6289644005097?text=${encodeURIComponent(prod.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full font-sans text-xs tracking-widest uppercase border border-[#111C2B] bg-[#111C2B] text-[#FAF9F5] hover:bg-[#0097C2] hover:border-[#0097C2] py-3.5 flex items-center justify-center gap-2 transition-all duration-300 font-semibold"
                  >
                    {t("prod.cta")}
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
