"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, Mail, Phone, Clock } from "lucide-react";
import Logo from "@/components/common/Logo";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#0B0F19] text-white pt-24 pb-12 overflow-hidden relative border-t border-slate-900">
      {/* Background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15 pointer-events-none" />

      {/* Subtle radial cyan light flare */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#06B6D4]/5 rounded-full blur-[100px] pointer-events-none select-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#1E293B]/20 rounded-full blur-[80px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Final CTA Banner Card */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-[#1E293B] via-[#0F172A] to-[#1E293B] border border-slate-800/80 rounded-3xl px-8 py-10 md:px-12 md:py-14 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#06B6D4]/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <span className="text-xs uppercase font-sans tracking-[0.35em] text-[#06B6D4] mb-3 inline-block font-bold">
                  {t("foot.cta.badge")}
                </span>
                <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight text-white">
                  {t("foot.cta.title")}
                </h2>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(t("foot.cta.title"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-sans text-xs tracking-widest uppercase bg-white text-[#0F172A] px-8 py-4 flex items-center justify-center gap-3 hover:bg-[#06B6D4] hover:text-white transition-all duration-300 w-full sm:w-auto rounded-xl font-bold shadow-lg shadow-white/5 active:scale-95"
                >
                  {t("foot.cta.btn")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Logo light={true} className="h-8 md:h-10 w-auto mb-6" />
              <p className="font-sans text-slate-400 text-sm leading-relaxed max-w-sm">
                {t("foot.desc")}
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900/40 flex items-center justify-center hover:bg-white hover:text-[#0F172A] hover:border-white transition-all duration-300 text-slate-400"
                aria-label="Instagram Room Production"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900/40 flex items-center justify-center hover:bg-[#06B6D4] hover:text-white hover:border-[#06B6D4] transition-all duration-300 text-slate-400"
                aria-label="WhatsApp Room Production"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 col-start-auto">
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[#06B6D4] mb-6">
              {t("foot.nav")}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#why-us"
                  className="group flex items-center gap-1 font-sans text-sm text-slate-400 hover:text-white transition-all duration-200"
                >
                  <span className="w-0 h-[2px] bg-[#06B6D4] group-hover:w-2 transition-all duration-200" />
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="group flex items-center gap-1 font-sans text-sm text-slate-400 hover:text-white transition-all duration-200"
                >
                  <span className="w-0 h-[2px] bg-[#06B6D4] group-hover:w-2 transition-all duration-200" />
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="group flex items-center gap-1 font-sans text-sm text-slate-400 hover:text-white transition-all duration-200"
                >
                  <span className="w-0 h-[2px] bg-[#06B6D4] group-hover:w-2 transition-all duration-200" />
                  {t("nav.portfolio")}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="group flex items-center gap-1 font-sans text-sm text-slate-400 hover:text-white transition-all duration-200"
                >
                  <span className="w-0 h-[2px] bg-[#06B6D4] group-hover:w-2 transition-all duration-200" />
                  {t("nav.faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[#06B6D4] mb-6">
              {language === "id" ? "Kontak & Jam Kerja" : "Contact & Hours"}
            </h3>
            <ul className="space-y-4 text-slate-400 text-sm font-sans">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>
                  {language === "id"
                    ? "Senin - Sabtu: 09:00 - 18:00 WITA"
                    : "Mon - Sat: 09:00 - 18:00 GMT+8"}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a href="mailto:info@roomproduction.com" className="hover:text-white transition-colors">
                  info@roomproduction.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-white transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Workspace Address */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[#06B6D4] mb-6">
              {t("foot.hq")}
            </h3>
            <p className="font-sans text-sm text-slate-400 leading-relaxed mb-4 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
              <span>
                Jl. Raya Denpasar, Denpasar, Bali, Indonesia
              </span>
            </p>
            <p className="font-sans text-xs text-slate-500 mt-6 leading-relaxed border-t border-slate-900 pt-4">
              {t("foot.notice")}
            </p>
          </div>

        </div>

        {/* Bottom Copyright Area */}
        <div className="flex justify-center items-center border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-sans text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Room Production. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
