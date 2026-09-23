"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, Mail, Phone, Clock } from "lucide-react";
import Logo from "@/components/common/Logo";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#101824] text-[#FAF9F5] pt-20 pb-12 overflow-hidden relative border-t border-[#243042]">
      {/* Precision hairline grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#243042_1px,transparent_1px),linear-gradient(to_bottom,#243042_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Final CTA Banner Card */}
        <div className="mb-20">
          <div className="bg-[#182232] border border-[#243042] p-8 md:p-12 shadow-xl relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 bg-[#0097C2]" />
                  <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-[#0097C2] font-bold">
                    {t("foot.cta.badge")}
                  </span>
                </div>
                <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight text-white">
                  {t("foot.cta.title")}
                </h2>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <a
                  href={`https://wa.me/6289644005097?text=${encodeURIComponent(t("foot.cta.title"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-sans text-xs tracking-widest uppercase bg-[#FAF9F5] text-[#111C2B] px-8 py-4 flex items-center justify-center gap-3 hover:bg-[#0097C2] hover:text-white transition-all duration-300 w-full sm:w-auto font-bold shadow-md"
                >
                  {t("foot.cta.btn")}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Logo light={true} className="h-8 md:h-9 w-auto mb-6" />
              <p className="font-sans text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm">
                {t("foot.desc")}
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-[#182232] border border-[#243042] flex items-center justify-center hover:bg-[#FAF9F5] hover:text-[#111C2B] hover:border-[#FAF9F5] transition-all duration-300 text-slate-400"
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
                href="https://wa.me/6289644005097"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-[#182232] border border-[#243042] flex items-center justify-center hover:bg-[#0097C2] hover:text-white hover:border-[#0097C2] transition-all duration-300 text-slate-400"
                aria-label="WhatsApp Room Production"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 col-start-auto">
            <h3 className="font-mono font-bold text-xs uppercase tracking-[0.25em] text-[#0097C2] mb-6">
              {t("foot.nav")}
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="#why-us"
                  className="font-sans text-xs tracking-wider uppercase text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="font-sans text-xs tracking-wider uppercase text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="font-sans text-xs tracking-wider uppercase text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {t("nav.portfolio")}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-sans text-xs tracking-wider uppercase text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {t("nav.faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="lg:col-span-3">
            <h3 className="font-mono font-bold text-xs uppercase tracking-[0.25em] text-[#0097C2] mb-6">
              {language === "id" ? "Kontak & Jam Kerja" : "Contact & Hours"}
            </h3>
            <ul className="space-y-3.5 text-slate-400 text-xs md:text-sm font-sans">
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
                <a href="mailto:Youniform.bali@gmail.com" className="hover:text-white transition-colors">
                  Youniform.bali@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a href="tel:+6289644005097" className="hover:text-white transition-colors">
                  +62 896-4400-5097
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Workspace Address */}
          <div className="lg:col-span-3">
            <h3 className="font-mono font-bold text-xs uppercase tracking-[0.25em] text-[#0097C2] mb-6">
              {t("foot.hq")}
            </h3>
            <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed mb-4 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
              <a
                href="https://maps.google.com?q=Konveksi%20Bali%20-%20Youniform%20konveksi%20office,%20Jalan%20Tukad%20Batanghari%20VII,%20Dauh%20Puri%20Klod,%20Kota%20Denpasar,%20Bali&ftid=0x2dd23f3bff39c059:0xfdad05db63a4952d&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100813469,94286869&g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {t("map.addr.content")}
              </a>
            </p>
            <p className="font-sans text-[11px] text-slate-500 mt-4 leading-relaxed border-t border-[#243042] pt-3">
              {t("foot.notice")}
            </p>
          </div>

        </div>

        {/* Bottom Copyright Area */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[#243042] pt-8">
          <span className="font-mono text-[11px] text-slate-500">
            &copy; {new Date().getFullYear()} ROOM PRODUCTION. ALL RIGHTS RESERVED.
          </span>
          <span className="font-mono text-[10px] text-slate-600 tracking-wider uppercase">
            STUDIO DENPASAR // BALI
          </span>
        </div>
      </div>
    </footer>
  );
}
