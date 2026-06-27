"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/common/Logo";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.about"), href: "#why-us" },
    { name: t("nav.services"), href: "#products" },
    { name: t("nav.portfolio"), href: "#portfolio" },
    { name: t("nav.faq"), href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-[#E5E7EB] py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col group py-1">
          <Logo className="h-8 md:h-10 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm tracking-wider uppercase text-slate-500 hover:text-[#1E293B] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}

          {/* Premium Language Switcher with Flags */}
          <div className="flex items-center gap-2.5 border-l border-slate-200 pl-6 ml-2 select-none">
            <button
              onClick={() => setLanguage("id")}
              className={`flex items-center gap-1.5 py-1.5 px-2.5 rounded-full transition-all duration-200 ${
                language === "id"
                  ? "bg-slate-100 ring-1 ring-slate-200/50 text-[#1E293B]"
                  : "text-slate-400 hover:text-[#1E293B] hover:bg-slate-50"
              }`}
              title="Bahasa Indonesia"
            >
              <IndonesiaFlag className="w-4 h-4 shadow-sm" />
              <span className="font-sans text-[11px] tracking-wider uppercase font-bold">ID</span>
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`flex items-center gap-1.5 py-1.5 px-2.5 rounded-full transition-all duration-200 ${
                language === "en"
                  ? "bg-slate-100 ring-1 ring-slate-200/50 text-[#1E293B]"
                  : "text-slate-400 hover:text-[#1E293B] hover:bg-slate-50"
              }`}
              title="English"
            >
              <UKFlag className="w-4 h-4 shadow-sm" />
              <span className="font-sans text-[11px] tracking-wider uppercase font-bold">EN</span>
            </button>
          </div>

          <a
            href={`https://wa.me/6281234567890?text=${encodeURIComponent(t("path.2.wa"))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-widest uppercase bg-[#1E293B] text-white border border-[#1E293B] px-6 py-2.5 hover:bg-transparent hover:text-[#1E293B] hover:border-[#1E293B] transition-all duration-300"
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1E293B] hover:bg-stone-100 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#E5E7EB] py-6 px-8 flex flex-col gap-6 shadow-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm tracking-wider uppercase text-slate-500 hover:text-[#1E293B] transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Language Switcher with Flags */}
            <div className="flex flex-col gap-3 py-3 border-t border-slate-100">
              <span className="font-sans text-xs uppercase tracking-wider text-slate-400">
                Pilih Bahasa / Select Language:
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setLanguage("id");
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 py-2 px-4 rounded-full border transition-all ${
                    language === "id"
                      ? "border-[#06B6D4] bg-cyan-50/20 text-[#1E293B] font-bold"
                      : "border-slate-200 text-slate-500"
                  }`}
                >
                  <IndonesiaFlag className="w-4 h-4 shadow-sm" />
                  <span className="font-sans text-xs tracking-wider uppercase">Indonesia</span>
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 py-2 px-4 rounded-full border transition-all ${
                    language === "en"
                      ? "border-[#06B6D4] bg-cyan-50/20 text-[#1E293B] font-bold"
                      : "border-slate-200 text-slate-500"
                  }`}
                >
                  <UKFlag className="w-4 h-4 shadow-sm" />
                  <span className="font-sans text-xs tracking-wider uppercase">English</span>
                </button>
              </div>
            </div>

            <a
              href={`https://wa.me/6281234567890?text=${encodeURIComponent(t("path.2.wa"))}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="font-sans text-xs tracking-widest uppercase bg-[#1E293B] text-white border border-[#1E293B] py-3 text-center hover:bg-transparent hover:text-[#1E293B] transition-all duration-300"
            >
              {t("nav.cta")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Vector Flags Components
const IndonesiaFlag = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`rounded-full overflow-hidden ${className}`}>
    <rect width="24" height="12" fill="#D7141A" />
    <rect y="12" width="24" height="12" fill="#FFFFFF" />
    <circle cx="12" cy="12" r="12" stroke="#E5E7EB" strokeWidth="1" fill="none" />
  </svg>
);

const UKFlag = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`rounded-full overflow-hidden ${className}`}>
    {/* Blue background */}
    <rect width="24" height="24" fill="#0A1B72" />
    {/* White diagonal saltire */}
    <path d="M0 0 L24 24 M0 24 L24 0" stroke="#FFFFFF" strokeWidth="2.5" />
    {/* Red diagonal saltire */}
    <path d="M0 0 L24 24 M0 24 L24 0" stroke="#D7141A" strokeWidth="1.2" />
    {/* White cross */}
    <path d="M12 0 V24 M0 12 H24" stroke="#FFFFFF" strokeWidth="4.5" />
    {/* Red cross */}
    <path d="M12 0 V24 M0 12 H24" stroke="#D7141A" strokeWidth="2.5" />
    {/* Outline */}
    <circle cx="12" cy="12" r="12" stroke="#E5E7EB" strokeWidth="1" fill="none" />
  </svg>
);

