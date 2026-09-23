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
          ? "bg-[#FAF9F5]/90 backdrop-blur-md border-[#E7E5DE] py-3.5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col group py-1">
          <Logo className="h-8 md:h-9 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-wider uppercase font-medium text-neutral-600 hover:text-[#141517] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}

          {/* Premium Language Switcher */}
          <div className="flex items-center gap-1.5 border-l border-[#E7E5DE] pl-6 ml-2 select-none">
            <button
              onClick={() => setLanguage("id")}
              className={`flex items-center gap-1.5 py-1 px-2.5 rounded text-[11px] font-sans tracking-wider uppercase font-semibold transition-all duration-200 ${
                language === "id"
                  ? "bg-[#141517] text-[#FAF9F5]"
                  : "text-neutral-500 hover:text-[#141517] hover:bg-neutral-200/50"
              }`}
              title="Bahasa Indonesia"
            >
              <IndonesiaFlag className="w-3.5 h-3.5 shadow-sm" />
              <span>ID</span>
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`flex items-center gap-1.5 py-1 px-2.5 rounded text-[11px] font-sans tracking-wider uppercase font-semibold transition-all duration-200 ${
                language === "en"
                  ? "bg-[#141517] text-[#FAF9F5]"
                  : "text-neutral-500 hover:text-[#141517] hover:bg-neutral-200/50"
              }`}
              title="English"
            >
              <UKFlag className="w-3.5 h-3.5 shadow-sm" />
              <span>EN</span>
            </button>
          </div>

          <a
            href={`https://wa.me/6289644005097?text=${encodeURIComponent(t("path.2.wa"))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] tracking-widest uppercase bg-[#141517] text-[#FAF9F5] border border-[#141517] px-5 py-2.5 hover:bg-transparent hover:text-[#141517] transition-all duration-300 font-semibold"
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#141517] hover:bg-neutral-100 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#FAF9F5] border-b border-[#E7E5DE] py-6 px-8 flex flex-col gap-5 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-xs tracking-wider uppercase text-neutral-600 hover:text-[#141517] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex flex-col gap-2.5 py-3 border-t border-[#E7E5DE]">
              <span className="font-sans text-[10px] uppercase tracking-wider text-neutral-400">
                Pilih Bahasa / Language:
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setLanguage("id");
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 py-1.5 px-3.5 rounded border text-xs tracking-wider uppercase font-semibold transition-all ${
                    language === "id"
                      ? "border-[#141517] bg-[#141517] text-[#FAF9F5]"
                      : "border-[#E7E5DE] text-neutral-600 bg-white"
                  }`}
                >
                  <IndonesiaFlag className="w-3.5 h-3.5" />
                  <span>Indonesia</span>
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 py-1.5 px-3.5 rounded border text-xs tracking-wider uppercase font-semibold transition-all ${
                    language === "en"
                      ? "border-[#141517] bg-[#141517] text-[#FAF9F5]"
                      : "border-[#E7E5DE] text-neutral-600 bg-white"
                  }`}
                >
                  <UKFlag className="w-3.5 h-3.5" />
                  <span>English</span>
                </button>
              </div>
            </div>

            <a
              href={`https://wa.me/6289644005097?text=${encodeURIComponent(t("path.2.wa"))}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="font-sans text-xs tracking-widest uppercase bg-[#141517] text-[#FAF9F5] border border-[#141517] py-3 text-center hover:bg-transparent hover:text-[#141517] transition-all duration-300 font-semibold mt-1"
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
    <circle cx="12" cy="12" r="12" stroke="#E7E5DE" strokeWidth="1" fill="none" />
  </svg>
);

const UKFlag = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`rounded-full overflow-hidden ${className}`}>
    <rect width="24" height="24" fill="#0A1B72" />
    <path d="M0 0 L24 24 M0 24 L24 0" stroke="#FFFFFF" strokeWidth="2.5" />
    <path d="M0 0 L24 24 M0 24 L24 0" stroke="#D7141A" strokeWidth="1.2" />
    <path d="M12 0 V24 M0 12 H24" stroke="#FFFFFF" strokeWidth="4.5" />
    <path d="M12 0 V24 M0 12 H24" stroke="#D7141A" strokeWidth="2.5" />
    <circle cx="12" cy="12" r="12" stroke="#E7E5DE" strokeWidth="1" fill="none" />
  </svg>
);
