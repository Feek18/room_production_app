"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getFaqs } from "@/data/faqData";

export default function Faq() {
  const { t, language } = useLanguage();
  const faqs = getFaqs(t);

  return (
    <section id="faq" className="py-24 md:py-36 bg-[#FAF9F5] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Title & Atelier Consultation Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#0097C2]" />
              <span className="text-[11px] uppercase font-sans tracking-[0.3em] text-[#0097C2] font-bold">
                {t("faq.badge")}
              </span>
            </div>
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#111C2B] mb-6">
              {t("faq.title")}
            </h2>
            <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed mb-10">
              {language === "id"
                ? "Pertanyaan umum mengenai spesifikasi MOQ, jasa jahit makloon/CMT, sampling, hingga program reseller."
                : "Frequently asked questions regarding MOQ specifications, CMT sewing services, sampling, and reseller programs."}
            </p>

            {/* Support Call-out Card */}
            <div className="bg-white border border-[#E5E7EB] p-8 flex flex-col items-start gap-4 shadow-sm">
              <div className="w-9 h-9 rounded bg-[#111C2B] text-white flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-[#FAF9F5]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-[#111C2B] mb-1">
                  {language === "id" ? "Butuh konsultasi khusus?" : "Need a custom consultation?"}
                </h3>
                <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed mb-4">
                  {language === "id"
                    ? "Diskusikan langsung kebutuhan apparel, pemilihan bahan kain, dan estimasi waktu pengerjaan."
                    : "Discuss your apparel needs, fabric swatches, and timeline directly with our team."}
                </p>
              </div>
              <a
                href="https://wa.me/6289644005097?text=Halo%20Room%20Production,%20saya%20memiliki%20pertanyaan%20mengenai%20produksi."
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-widest uppercase bg-[#111C2B] text-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-[#0097C2] transition-colors duration-300 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Chat WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border transition-all duration-300 select-none ${
        isOpen
          ? "bg-white border-[#0097C2]/60 shadow-sm"
          : "bg-white border-[#E5E7EB] hover:border-neutral-300"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
      >
        <span className="font-display font-bold text-base md:text-lg text-[#111C2B] pr-6 group-hover:text-neutral-700 transition-colors duration-200">
          {question}
        </span>
        <div
          className={`w-7 h-7 rounded border flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
            isOpen
              ? "border-[#0097C2] bg-[#0097C2] text-white rotate-180"
              : "border-neutral-200 text-[#111C2B] group-hover:border-neutral-300 group-hover:bg-neutral-50"
          }`}
        >
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden px-6 pb-6"
          >
            <p className="font-sans text-neutral-600 text-xs md:text-sm leading-relaxed pt-3 border-t border-neutral-100 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
