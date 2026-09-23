"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getWhyUsReasons } from "@/data/whyUsData";

export default function WhyUs() {
  const { t } = useLanguage();
  const reasons = getWhyUsReasons(t);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="why-us" className="py-24 md:py-36 bg-[#FAF9F5] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#0097C2]" />
            <span className="text-[11px] uppercase font-sans tracking-[0.3em] text-[#0097C2] font-bold">
              {t("why.badge")}
            </span>
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#111C2B]">
            {t("why.title")}
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base mt-4 leading-relaxed">
            {t("why.desc")}
          </p>
        </div>

        {/* Reasons Grid with Crisp Minimalist Styling */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const indexFormatted = String(index + 1).padStart(2, "0");
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-[#E5E7EB] p-8 flex flex-col justify-between hover:border-[#0097C2]/70 transition-colors duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                    <span className="font-mono text-xs text-neutral-400 font-bold group-hover:text-[#0097C2] transition-colors">
                      [ SPEC {indexFormatted} ]
                    </span>
                    <div className="w-9 h-9 rounded bg-neutral-50 border border-neutral-200 flex items-center justify-center text-[#111C2B] group-hover:bg-[#111C2B] group-hover:text-white group-hover:border-[#111C2B] transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <h3 className="font-display font-bold text-lg md:text-xl tracking-tight text-[#111C2B] mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="font-sans text-neutral-600 text-xs md:text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
