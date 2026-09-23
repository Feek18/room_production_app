"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getContactDetails } from "@/data/mapData";

export default function MapSection() {
  const { t } = useLanguage();
  const contactDetails = getContactDetails(t);

  return (
    <section className="py-24 md:py-36 bg-[#FAF9F5] border-b border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Contact Info (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#0097C2]" />
              <span className="text-[11px] uppercase font-sans tracking-[0.3em] text-[#0097C2] font-bold">
                {t("map.badge")}
              </span>
            </div>
            
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#111C2B] mb-6 leading-tight">
              {t("map.title")}
            </h2>
            
            <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed mb-10">
              {t("map.desc")}
            </p>

            <div className="flex flex-col gap-5 border-t border-[#E5E7EB] pt-8">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                const contentEl = (
                  <>
                    {/* Atelier Icon Container */}
                    <div className="w-10 h-10 rounded bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111C2B] group-hover:bg-[#111C2B] group-hover:text-[#FAF9F5] group-hover:border-[#111C2B] transition-all duration-300 flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    {/* Text Details */}
                    <div className="flex-1">
                      <span className="font-mono font-bold text-[10px] tracking-widest text-neutral-400 uppercase block mb-0.5">
                        {detail.title}
                      </span>
                      <span className="font-sans text-sm md:text-base text-[#111C2B] font-semibold leading-relaxed block group-hover:text-[#0097C2] transition-colors duration-200">
                        {detail.content}
                      </span>
                    </div>
                  </>
                );

                if (detail.link) {
                  return (
                    <a
                      key={index}
                      href={detail.link}
                      target={detail.link.startsWith("http") ? "_blank" : undefined}
                      rel={detail.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      {contentEl}
                    </a>
                  );
                }

                return (
                  <div key={index} className="flex items-start gap-4 group">
                    {contentEl}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Map Display (Right Column) */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[380px] md:h-[480px] relative bg-white border border-[#E5E7EB] p-2 shadow-sm"
            >
              <div className="w-full h-full overflow-hidden relative">
                <iframe
                  src="https://maps.google.com/maps?q=Konveksi%20Bali%20-%20Youniform%20konveksi%20office,%20Jalan%20Tukad%20Batanghari%20VII,%20Dauh%20Puri%20Klod,%20Kota%20Denpasar,%20Bali&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale filter contrast-105 opacity-90"
                  title="Google Maps Room Production"
                />
                
                {/* Atelier Location Badge */}
                <div className="absolute bottom-4 right-4 bg-[#111C2B] border border-[#243042] px-3.5 py-2 font-mono text-[9px] tracking-widest uppercase font-bold text-[#FAF9F5] shadow-md pointer-events-none select-none">
                  DENPASAR // BALI
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
