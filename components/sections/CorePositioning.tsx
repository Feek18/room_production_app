"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getWorkflowSteps } from "@/data/coreData";

export default function CorePositioning() {
  const { t } = useLanguage();
  const steps = getWorkflowSteps(t);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="py-24 md:py-36 bg-[#101824] text-[#FAF9F5] relative overflow-hidden border-b border-[#243042]">
      {/* Precision hairline grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#243042_1px,transparent_1px),linear-gradient(to_bottom,#243042_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Atelier Philosophy & Overview */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-[#0097C2]" />
                <span className="text-[11px] uppercase font-sans tracking-[0.3em] text-[#0097C2] font-bold">
                  {t("core.badge")}
                </span>
              </div>
              
              <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-[1.12] text-white mb-6">
                {t("core.title")}
              </h2>
              
              <p className="font-sans text-base md:text-lg text-slate-300 font-light leading-relaxed mb-8">
                {t("core.desc1")}
              </p>
              
              <div className="border-l-2 border-[#0097C2] pl-6 py-2 bg-white/[0.02]">
                <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                  {t("core.desc2")}
                </p>
              </div>

              {/* Atelier Production Standards */}
              <div className="mt-10 pt-8 border-t border-[#243042] grid grid-cols-2 gap-6">
                <div>
                  <span className="block font-mono text-[10px] uppercase text-slate-400 tracking-wider">Workmanship</span>
                  <span className="block font-sans text-sm font-semibold text-slate-200 mt-1">Boutique Standard</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase text-slate-400 tracking-wider">Quality Gate</span>
                  <span className="block font-sans text-sm font-semibold text-slate-200 mt-1">100% Hand Checked</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Spec Pipeline */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-5"
            >
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    variants={itemVariants}
                    className="group bg-[#16202E] border border-[#243042] hover:border-[#0097C2]/60 p-6 md:p-8 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Top Phase Header */}
                    <div className="flex items-center justify-between mb-4 border-b border-[#243042] pb-3.5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#0097C2] font-bold">
                          [ PHASE {step.num} ]
                        </span>
                        <h3 className="font-display font-bold text-lg md:text-xl text-white tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                      <div className="w-8 h-8 rounded bg-[#101824] border border-[#243042] group-hover:border-[#0097C2] text-slate-400 group-hover:text-[#0097C2] flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
