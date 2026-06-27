"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Shirt, Compass, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ChoosePath() {
  const { t } = useLanguage();

  const paths = [
    {
      num: "01",
      title: t("path.1.title"),
      icon: Users,
      description: t("path.1.desc"),
      linkText: t("path.1.cta"),
      waText: t("path.1.wa")
    },
    {
      num: "02",
      title: t("path.2.title"),
      icon: Shirt,
      description: t("path.2.desc"),
      linkText: t("path.2.cta"),
      waText: t("path.2.wa")
    },
    {
      num: "03",
      title: t("path.3.title"),
      icon: Compass,
      description: t("path.3.desc"),
      linkText: t("path.3.cta"),
      waText: t("path.3.wa")
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="choose-path" className="py-24 md:py-36 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 md:mb-24">
          <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#06B6D4] mb-4 inline-block font-bold">
            {t("path.badge")}
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#1E293B]">
            {t("path.title")}
          </h2>
          <p className="font-sans text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
            {t("path.desc")}
          </p>
        </div>

        {/* Path Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y lg:border-y-0 lg:border-x border-[#E5E7EB] divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]"
        >
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <motion.a
                key={path.num}
                variants={itemVariants}
                href={`https://wa.me/6281234567890?text=${encodeURIComponent(path.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 md:p-12 flex flex-col justify-between hover:bg-[#1E293B] transition-colors duration-500 bg-white text-[#1E293B] hover:text-white"
              >
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <span className="font-display text-sm tracking-widest text-slate-400 group-hover:text-slate-400 font-semibold transition-colors duration-300">
                      {path.num}
                    </span>
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-[#06B6D4] transition-colors duration-300" />
                  </div>

                  <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight mb-4">
                    {path.title}
                  </h3>

                  <p className="font-sans text-slate-600 group-hover:text-slate-200 text-sm md:text-base leading-relaxed mb-8 transition-colors duration-300">
                    {path.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#E5E7EB] group-hover:border-slate-800 transition-colors duration-500">
                  <span className="font-sans text-xs uppercase tracking-widest font-semibold">
                    {path.linkText}
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
