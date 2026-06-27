"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MapSection() {
  const { t } = useLanguage();

  const contactDetails = [
    {
      icon: MapPin,
      title: t("map.addr.title"),
      content: t("map.addr.content")
    },
    {
      icon: Phone,
      title: t("map.phone.title"),
      content: "+62 812-3456-7890"
    },
    {
      icon: Mail,
      title: t("map.email.title"),
      content: "hello@roomproduction.com"
    },
    {
      icon: Clock,
      title: t("map.hours.title"),
      content: t("map.hours.content")
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-white border-b border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Contact Info (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#06B6D4] mb-4 inline-block font-bold">
              {t("map.badge")}
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#1E293B] mb-8 leading-tight">
              {t("map.title")}
            </h2>
            <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed mb-10">
              {t("map.desc")}
            </p>

            <div className="flex flex-col gap-6 border-t border-slate-200/80 pt-8">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group cursor-pointer">
                    {/* Premium icon container */}
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-[#1E293B] group-hover:bg-[#06B6D4]/10 group-hover:text-[#06B6D4] group-hover:border-[#06B6D4]/30 transition-all duration-300 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Text Details */}
                    <div className="flex-1">
                      <span className="font-display font-bold text-[10px] tracking-widest text-slate-400 uppercase block mb-1">
                        {detail.title}
                      </span>
                      <span className="font-sans text-sm md:text-base text-[#1E293B] font-semibold leading-relaxed block group-hover:text-[#06B6D4] transition-colors duration-200">
                        {detail.content}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Map Display (Right Column) */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[380px] md:h-[480px] relative bg-slate-50 border border-slate-200/80 p-2.5 rounded-3xl shadow-sm"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126210.15849880175!2d115.1437172822791!3d-8.672583852077977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f717f4b3f87%3A0x6b0933cb66cb1e8b!2sDenpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale filter contrast-110 opacity-95"
                  title="Google Maps Room Production"
                />
                
                {/* Decorative minimalist floating caption */}
                <div className="absolute bottom-4 right-4 bg-[#1E293B] border border-slate-800 px-4 py-2.5 text-[9px] tracking-widest uppercase font-sans font-bold text-white shadow-lg pointer-events-none rounded-lg select-none">
                  Denpasar, Bali
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
