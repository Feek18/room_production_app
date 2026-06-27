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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="py-24 md:py-36 bg-[#1E293B] text-white relative overflow-hidden">
      {/* Premium Background Mesh Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06B6D4]/10 rounded-full blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-900/60 rounded-full blur-[100px] pointer-events-none select-none" />

      {/* Decorative vertical guide lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-slate-800/40 opacity-50 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-slate-800/40 opacity-50 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Sticky Header Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <span className="text-xs uppercase font-sans tracking-[0.35em] text-[#06B6D4] mb-6 font-bold">
                {t("core.badge")}
              </span>
              <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-[1.15] text-white mb-6">
                {t("core.title")}
              </h2>
              <p className="font-sans text-lg text-slate-200 font-light leading-relaxed mb-8">
                {t("core.desc1")}
              </p>
              <div className="border-l-2 border-[#06B6D4] pl-6 py-1">
                <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed italic">
                  {t("core.desc2")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Interactive Timeline */}
          <div className="lg:col-span-7 relative">
            {/* Central vertical connecting line */}
            <div className="absolute left-[31px] md:left-[39px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#06B6D4]/60 via-slate-800 to-slate-800 pointer-events-none" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-8 md:gap-10"
            >
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    variants={itemVariants}
                    className="flex items-start gap-4 md:gap-8 group"
                  >
                    {/* Circle icon marker on the timeline */}
                    <div className="w-[64px] h-[64px] md:w-[78px] md:h-[78px] rounded-full bg-slate-900 border-2 border-slate-800 group-hover:border-[#06B6D4] flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:text-[#06B6D4] shadow-md transition-all duration-500 z-10 relative">
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      {/* Step badge absolute */}
                      <span className="absolute -top-1 -right-1 bg-[#06B6D4] text-[#1E293B] font-display text-[9px] md:text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border border-slate-900">
                        {step.num}
                      </span>
                    </div>

                    {/* Step Card */}
                    <div className="flex-1 bg-slate-900/40 border border-slate-800/60 group-hover:border-slate-700/80 px-6 py-6 md:px-8 md:py-7 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300">
                      <h3 className="font-display font-bold text-lg md:text-xl text-white tracking-wide mb-2 group-hover:text-[#06B6D4] transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
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
