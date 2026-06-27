"use client";

import { motion } from "framer-motion";
import { Scale, MessageCircle, BarChart3, Tag, RotateCcw, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Scale,
      title: t("why.1.title"),
      description: t("why.1.desc")
    },
    {
      icon: MessageCircle,
      title: t("why.2.title"),
      description: t("why.2.desc")
    },
    {
      icon: BarChart3,
      title: t("why.3.title"),
      description: t("why.3.desc")
    },
    {
      icon: Tag,
      title: t("why.4.title"),
      description: t("why.4.desc")
    },
    {
      icon: RotateCcw,
      title: t("why.5.title"),
      description: t("why.5.desc")
    },
    {
      icon: HeartHandshake,
      title: t("why.6.title"),
      description: t("why.6.desc")
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="why-us" className="py-24 md:py-36 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 md:mb-24">
          <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#06B6D4] mb-4 inline-block font-bold">
            {t("why.badge")}
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#1E293B]">
            {t("why.title")}
          </h2>
          <p className="font-sans text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
            {t("why.desc")}
          </p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col select-none border-t border-slate-200 pt-6"
              >
                <div className="w-10 h-10 rounded-full border border-[#1E293B] flex items-center justify-center mb-6 bg-transparent text-[#1E293B] hover:bg-[#1E293B] hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg md:text-xl tracking-tight text-[#1E293B] mb-3">
                  {reason.title}
                </h3>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
