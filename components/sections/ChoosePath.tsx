"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getChoosePaths } from "@/data/choosePathData";

export default function ChoosePath() {
  const { t } = useLanguage();
  const paths = getChoosePaths(t);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="choose-path" className="py-24 md:py-36 bg-[#FAF9F5] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#0097C2]" />
            <span className="text-[11px] uppercase font-sans tracking-[0.3em] text-[#0097C2] font-bold">
              {t("path.badge")}
            </span>
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#111C2B]">
            {t("path.title")}
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base mt-4 leading-relaxed">
            {t("path.desc")}
          </p>
        </div>

        {/* Path Grid with Swiss-style Hairline Bordering */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y lg:border-y-0 lg:border-x border-[#E5E7EB] divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB] bg-white"
        >
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <motion.a
                key={path.num}
                variants={itemVariants}
                href={`https://wa.me/6289644005097?text=${encodeURIComponent(path.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 md:p-12 flex flex-col justify-between hover:bg-[#111C2B] transition-all duration-400 bg-white text-[#111C2B] hover:text-[#FAF9F5]"
              >
                <div>
                  <div className="flex justify-between items-start mb-8 pb-4 border-b border-[#E5E7EB] group-hover:border-[#243042] transition-colors duration-400">
                    <span className="font-mono text-xs tracking-widest text-neutral-400 group-hover:text-[#0097C2] font-bold transition-colors duration-300">
                      [ PATH {path.num} ]
                    </span>
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-[#0097C2] transition-colors duration-300" />
                  </div>

                  <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight mb-4 group-hover:text-white">
                    {path.title}
                  </h3>

                  <p className="font-sans text-neutral-600 group-hover:text-slate-300 text-sm leading-relaxed mb-8 transition-colors duration-300">
                    {path.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-[#E5E7EB] group-hover:border-[#243042] transition-colors duration-400">
                  <span className="font-sans text-xs uppercase tracking-widest font-semibold group-hover:text-[#FAF9F5]">
                    {path.linkText}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-neutral-300 group-hover:border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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
