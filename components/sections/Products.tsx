"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Products() {
  const { t } = useLanguage();

  const products = [
    {
      title: t("prod.1.title"),
      image: "/uniform.png",
      description: t("prod.1.desc"),
      items: t("prod.1.items").split("|"),
      waText: t("prod.1.wa")
    },
    {
      title: t("prod.2.title"),
      image: "/brand_apparel.png",
      description: t("prod.2.desc"),
      items: t("prod.2.items").split("|"),
      waText: t("prod.2.wa")
    },
    {
      title: t("prod.3.title"),
      image: "/merchandise.png",
      description: t("prod.3.desc"),
      items: t("prod.3.items").split("|"),
      waText: t("prod.3.wa")
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="products" className="py-24 md:py-36 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#06B6D4] mb-4 inline-block font-bold">
              {t("prod.badge")}
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#1E293B]">
              {t("prod.title")}
            </h2>
          </div>
          <div>
            <p className="font-sans text-slate-600 text-sm md:text-base max-w-md leading-relaxed">
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {products.map((prod, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col bg-white border border-[#E5E7EB] hover:border-[#06B6D4] hover:shadow-lg transition-all duration-300 group"
            >
              {/* Product Lookbook Image */}
              <div className="relative w-full aspect-[4/5] bg-stone-100 overflow-hidden border-b border-[#E5E7EB]">
                <Image
                  src={prod.image}
                  alt={`${prod.title} Lookbook`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 350px"
                />
              </div>

              {/* Product Info */}
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight text-[#1E293B] mb-4">
                    {prod.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                    {prod.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-3 text-slate-600 text-sm">
                        <Check className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
                        <span className="font-sans">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(prod.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full font-sans text-xs tracking-widest uppercase border border-[#1E293B] text-[#1E293B] hover:bg-[#1E293B] hover:text-white py-3.5 flex items-center justify-center gap-2 transition-all duration-300 font-semibold"
                >
                  {t("prod.cta")}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
