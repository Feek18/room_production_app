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
    <section id="faq" className="py-24 md:py-36 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Title & Still Have Questions Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#06B6D4] mb-4 inline-block font-bold">
              {t("faq.badge")}
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#1E293B] mb-6">
              {t("faq.title")}
            </h2>
            <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed mb-10">
              {language === "id"
                ? "Temukan jawaban cepat untuk pertanyaan yang sering diajukan mengenai MOQ, jasa jahitan makloon, proses reseller, dan lainnya."
                : "Find quick answers to frequently asked questions about MOQ, CMT sewing services, reseller program, and more."}
            </p>

            {/* Support Call-out Card */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl flex flex-col items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-[#1E293B] mb-1">
                  {language === "id" ? "Masih punya pertanyaan?" : "Still have questions?"}
                </h3>
                <p className="font-sans text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
                  {language === "id"
                    ? "Hubungi tim support kami langsung untuk mendapatkan konsultasi gratis."
                    : "Contact our support team directly to get a free consultation."}
                </p>
              </div>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Room%20Production,%20saya%20memiliki%20pertanyaan%20mengenai%20produksi."
                target="_blank"
                rel="noopener noreferrer"
                className="group font-sans text-xs tracking-widest uppercase bg-[#1E293B] text-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-[#06B6D4] transition-colors duration-300 rounded-lg font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Premium Accordion Cards Stack */}
          <div className="lg:col-span-7 flex flex-col gap-4">
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
      className={`border rounded-2xl p-6 transition-all duration-300 select-none ${
        isOpen
          ? "bg-slate-50/50 border-[#06B6D4]/40 shadow-sm"
          : "bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/20"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
      >
        <span className="font-display font-bold text-base md:text-lg text-[#1E293B] pr-6 group-hover:text-slate-600 transition-colors duration-200">
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
            isOpen
              ? "border-[#06B6D4] bg-[#06B6D4] text-white rotate-180"
              : "border-slate-200 text-[#1E293B] group-hover:border-slate-300 group-hover:bg-slate-50"
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
            className="overflow-hidden"
          >
            <p className="font-sans text-slate-600 text-xs md:text-sm leading-relaxed pt-4 border-t border-slate-200/40 mt-4 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
