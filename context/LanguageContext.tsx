"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations = {
  id: {
    // Navbar
    "nav.about": "Tentang Kami",
    "nav.services": "Layanan",
    "nav.portfolio": "Portfolio",
    "nav.faq": "FAQ",
    "nav.cta": "Mulai Produksi",

    // Hero
    "hero.badge": "Kualitas Manufaktur Premium",
    "hero.title": "ROOM PRODUCTION",
    "hero.subtitle": "Partner Produksimu.",
    "hero.desc": "Kami membantu mahasiswa, brand lokal, komunitas, dan reseller memproduksi apparel berkualitas tinggi tanpa harus memiliki pabrik sendiri. Dari konsep hingga produk jadi di tangan Anda.",
    "hero.cta.start": "Mulai Produksi",
    "hero.cta.learn": "Pelajari Lebih Lanjut",
    "hero.location": "Denpasar, Bali",
    "ticker.items": "BRAND APPAREL|MERCHANDISE|WHITE LABEL|MAKLOON|RESELLER PROGRAM",

    // Core Positioning
    "core.badge": "Visi & Positioning Kami",
    "core.title": "Lebih dari Sekadar Konveksi",
    "core.desc1": "Room Production dibangun untuk membantu generasi baru entrepreneur fashion dan apparel mewujudkan visi mereka tanpa batas.",
    "core.desc2": "Kami bukan sekadar tempat menjahit kain dan menempelkan sablon. Room Production adalah partner yang mendampingi Anda membangun dan mengembangkan bisnis apparel dari nol — mulai dari pencarian ide, pengembangan desain, pembuatan sampel (sampling), produksi massal, hingga strategi pertumbuhan brand Anda.",
    "core.step.1.title": "Pencarian Ide & Konsultasi",
    "core.step.1.desc": "Diskusi gratis konsep produk, pemilihan bahan kain, dan kalkulasi biaya awal secara transparan.",
    "core.step.2.title": "Pengembangan Desain",
    "core.step.2.desc": "Pembuatan pola pakaian dan desain mockup visual untuk detail ukuran dan potongan yang presisi.",
    "core.step.3.title": "Pembuatan Sampel (Sampling)",
    "core.step.3.desc": "Pembuatan sampel baju fisik terlebih dahulu untuk pengecekan kualitas & kelayakan sebelum naik produksi massal.",
    "core.step.4.title": "Produksi Massal",
    "core.step.4.desc": "Proses pemotongan bahan, penjahitan standar butik, sablon/bordir berkualitas tinggi, dan QC ketat.",
    "core.step.5.title": "Pelabelan & Pengiriman",
    "core.step.5.desc": "Pemasangan label kustom Anda (white label), pengemasan premium, dan pengiriman aman ke seluruh Indonesia.",

    // Choose Path
    "path.badge": "Tentukan Langkah Anda",
    "path.title": "Pilih Jalur Kolaborasi Anda",
    "path.desc": "Pilihlah jalur yang paling sesuai dengan kebutuhan Anda saat ini, dan biarkan kami mendampingi proses produksinya secara profesional.",
    "path.1.title": "Pesan Seragam",
    "path.1.desc": "Solusi produksi seragam berkualitas tinggi untuk kantor, komunitas, universitas, atau event tertentu dengan jahitan rapi dan ketepatan waktu terjamin.",
    "path.1.cta": "Mulai Pesan Seragam",
    "path.1.wa": "Halo Room Production, saya ingin memesan seragam untuk kantor/komunitas saya.",
    "path.2.title": "Buat Brand Sendiri",
    "path.2.desc": "Kembangkan lini pakaian Anda sendiri dengan opsi label kustom (white label), MOQ rendah, serta kualitas jahitan standar butik yang siap bersaing di pasar.",
    "path.2.cta": "Bangun Brand Anda",
    "path.2.wa": "Halo Room Production, saya tertarik untuk mulai membuat brand apparel sendiri.",
    "path.3.title": "Jadi Reseller",
    "path.3.desc": "Mulailah berbisnis apparel tanpa risiko besar. Cukup daftarkan diri menjadi reseller, submit order pesanan pelanggan Anda, dan langsung dapatkan cashback menarik.",
    "path.3.cta": "Daftar Jadi Reseller",
    "path.3.wa": "Halo Room Production, saya tertarik untuk bergabung menjadi reseller.",

    // Why Us
    "why.badge": "Mengapa Room Production",
    "why.title": "Kelebihan Kerja Sama Bersama Kami",
    "why.desc": "Kami merancang ekosistem manufaktur pakaian yang transparan, mudah diakses, dan berfokus pada kesuksesan jangka panjang bisnis Anda.",
    "why.1.title": "MOQ Fleksibel",
    "why.1.desc": "Minimum order kuantiti mulai dari 24 pcs per desain/warna, dengan mix ukuran. Cocok untuk brand lokal rintisan dan mahasiswa.",
    "why.2.title": "Konsultasi Gratis",
    "why.2.desc": "Diskusikan ide desain, bahan kain, teknik sablon/bordir, hingga kalkulasi harga secara transparan tanpa biaya apa pun.",
    "why.3.title": "Produksi Terukur",
    "why.3.desc": "Sistem QC terukur yang memastikan setiap lembar kain dipotong, dijahit, dan di-finishing sesuai standar kualitas tinggi.",
    "why.4.title": "White Label",
    "why.4.desc": "Produk dikirim polos tanpa brand kami, menggunakan label kustom milik Anda sendiri, siap dipasarkan dengan brand Anda.",
    "why.5.title": "Reorder Mudah",
    "why.5.desc": "Pola desain dan detail pesanan Anda tersimpan aman di database kami, memudahkan proses produksi ulang di kemudian hari.",
    "why.6.title": "Partner Ecosystem",
    "why.6.desc": "Dapatkan akses ke ekosistem mitra kami untuk pengadaan bahan khusus, desainer grafis, dan jasa logistik pengiriman.",

    // Products
    "prod.badge": "Katalog Layanan",
    "prod.title": "Kategori Produk Utama",
    "prod.desc": "Kami memadukan teknik jahit presisi dengan pemilihan bahan terbaik untuk menghasilkan produk yang tahan lama dan mewakili identitas brand Anda.",
    "prod.cta": "Konsultasi Sekarang",
    "prod.1.title": "Uniform",
    "prod.1.desc": "Solusi seragam kustom profesional dengan desain fungsional dan material kain premium tahan lama.",
    "prod.1.items": "Seragam Kantor & Korporat|Kemeja PDL / PDH Komunitas|Apron & Wear Cook / Barista|Polo Shirt & Kaos Event",
    "prod.1.wa": "Halo Room Production, saya ingin konsultasi mengenai produksi Uniform/Seragam.",
    "prod.2.title": "Brand Apparel",
    "prod.2.desc": "Produksi pakaian kualitas butik dengan cutting modern (oversized, boxy, dll.) untuk clothing brand Anda.",
    "prod.2.items": "Kaos Oversized Premium|Hoodie & Crewneck Fleece|Linen Shirts & Pants|Kemeja Kustom & Jaket Utility",
    "prod.2.wa": "Halo Room Production, saya ingin konsultasi mengenai produksi Brand Apparel kustom.",
    "prod.3.title": "Merchandise",
    "prod.3.desc": "Aksesori pendukung kustom yang dirancang elegan untuk branding korporat maupun suvenir eksklusif.",
    "prod.3.items": "Totebag Canvas Premium|Topi Bordir (Cap / Bucket Hat)|Tas Belanja Kustom (Tote Bag)|Merchandise Tekstil Lainnya",
    "prod.3.wa": "Halo Room Production, saya ingin konsultasi mengenai produksi Merchandise kustom.",

    // Portfolio
    "port.badge": "Galeri Portofolio",
    "port.title": "Karya Pilihan Kami",
    "port.desc": "Menampilkan hasil produksi kustom untuk berbagai brand fashion independen, komunitas kreatif, serta seragam eksklusif korporat.",
    "port.view": "Lihat Detail Produksi",

    // FAQ
    "faq.badge": "Pertanyaan Umum",
    "faq.title": "FAQ",
    "faq.1.q": "Berapa minimum order quantity (MOQ) untuk produksi?",
    "faq.1.a": "Minimum order kuantiti di Room Production adalah 24 pcs per desain/warna, dengan kebebasan mencampur (mix) ukuran sesuai kebutuhan Anda.",
    "faq.2.q": "Apakah Room Production menerima Jasa Jahit saja (Makloon)?",
    "faq.2.a": "Ya, kami menerima pengerjaan jasa jahit saja atau makloon terputus sesuai dengan permintaan dan spesifikasi desain dari Anda.",
    "faq.3.q": "Apa saja syarat untuk bergabung menjadi reseller?",
    "faq.3.a": "Tidak ada syarat khusus atau biaya kemitraan untuk menjadi reseller. Anda cukup mendaftarkan diri, mengirimkan detail pesanan (submit order) klien Anda, dan Anda langsung berhak mendapatkan cashback di setiap pesanan.",
    "faq.4.q": "Apakah Room Production bisa membantu proses pembuatan desain?",
    "faq.4.a": "Kami menerima bantuan desain khusus dalam bentuk mockup pakaian. Untuk logo atau aset grafis detailnya, diharapkan sudah siap cetak (siap print) dari pihak Anda.",

    // Map & Contact
    "map.badge": "Lokasi & Kontak",
    "map.title": "Kunjungi Workshop Kami",
    "map.desc": "Kami menyambut hangat kedatangan Anda untuk berkonsultasi secara langsung, melihat contoh bahan kain, dan memeriksa kualitas sampel jahitan kami.",
    "map.addr.title": "Alamat Workshop",
    "map.addr.content": "Jl. Raya Denpasar, Denpasar, Bali, Indonesia",
    "map.phone.title": "Telepon / WhatsApp",
    "map.email.title": "E-mail",
    "map.hours.title": "Jam Operasional",
    "map.hours.content": "Senin - Sabtu | 09.00 - 17.00 WITA",

    // Footer
    "foot.cta.badge": "Mulai Sekarang",
    "foot.cta.title": "Mulai Produksi Hari Ini.",
    "foot.cta.btn": "Hubungi WhatsApp",
    "foot.desc": "Room Production bukan sekadar tempat membuat baju. Kami adalah partner yang membantu membangun dan mengembangkan bisnis apparel Anda dari ide, produksi, hingga pertumbuhan brand.",
    "foot.nav": "Navigasi Cepat",
    "foot.hq": "Kantor Pusat",
    "foot.notice": "*Kunjungan langsung ke workshop harap melakukan janji temu terlebih dahulu melalui WhatsApp.",
    // "foot.rebrand": "Rebranding dari Garmentbali.id"
  },
  en: {
    // Navbar
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.faq": "FAQ",
    "nav.cta": "Start Production",

    // Hero
    "hero.badge": "Premium Manufacturing Quality",
    "hero.title": "ROOM PRODUCTION",
    "hero.subtitle": "Your Production Partner.",
    "hero.desc": "We help students, local brands, communities, and resellers produce high-quality apparel without needing their own factory. From concept to finished products in your hands.",
    "hero.cta.start": "Start Production",
    "hero.cta.learn": "Learn More",
    "hero.location": "Denpasar, Bali",
    "ticker.items": "BRAND APPAREL|MERCHANDISE|WHITE LABEL|MAKLOON|RESELLER PROGRAM",

    // Core Positioning
    "core.badge": "Our Vision & Positioning",
    "core.title": "More Than Just a Garment Maker",
    "core.desc1": "Room Production is built to help the new generation of fashion and apparel entrepreneurs realize their vision without limits.",
    "core.desc2": "We are not just a place to stitch fabric and apply prints. Room Production is a partner that guides you in building and developing your apparel business from scratch — starting from brainstorming ideas, design development, sample making (sampling), mass production, to your brand growth strategy.",
    "core.step.1.title": "Ideation & Consultation",
    "core.step.1.desc": "Free consultation about product concept, fabric sourcing, and transparent cost estimates.",
    "core.step.2.title": "Design Development",
    "core.step.2.desc": "Garment pattern drafting and visual mockup design for precise sizing and fit details.",
    "core.step.3.title": "Sampling & Quality Check",
    "core.step.3.desc": "Physical sample creation for fitting, material check, and approval before proceeding to bulk production.",
    "core.step.4.title": "Mass Production",
    "core.step.4.desc": "Fabric cutting, boutique-standard sewing, high-quality printing/embroidery, and strict QC testing.",
    "core.step.5.title": "Labeling & Delivery",
    "core.step.5.desc": "Custom label integration (white label), premium packaging, and secure shipping to your address.",

    // Choose Path
    "path.badge": "Define Your Step",
    "path.title": "Choose Your Collaboration Path",
    "path.desc": "Choose the path that best suits your current needs, and let us manage the production process professionally.",
    "path.1.title": "Order Uniforms",
    "path.1.desc": "High-quality uniform production solutions for offices, communities, universities, or specific events with neat stitching and guaranteed on-time delivery.",
    "path.1.cta": "Order Uniforms",
    "path.1.wa": "Hello Room Production, I would like to order uniforms for my office/community.",
    "path.2.title": "Build Your Own Brand",
    "path.2.desc": "Develop your own clothing line with custom label options (white label), low MOQ, and boutique-standard stitching quality ready to compete in the market.",
    "path.2.cta": "Build Your Brand",
    "path.2.wa": "Hello Room Production, I am interested in building my own apparel brand.",
    "path.3.title": "Become a Reseller",
    "path.3.desc": "Start your apparel business without big risks. Simply register as a reseller, submit your clients' orders, and immediately get attractive cashbacks.",
    "path.3.cta": "Register as Reseller",
    "path.3.wa": "Hello Room Production, I am interested in joining as a reseller.",

    // Why Us
    "why.badge": "Why Room Production",
    "why.title": "Advantages of Working With Us",
    "why.desc": "We design a transparent, accessible apparel manufacturing ecosystem focused on the long-term success of your business.",
    "why.1.title": "Flexible MOQ",
    "why.1.desc": "Minimum order quantity starts from 24 pcs per design/color, with mixed sizes. Suitable for startup local brands and students.",
    "why.2.title": "Free Consultation",
    "why.2.desc": "Discuss design ideas, fabric materials, printing/embroidery techniques, to transparent price calculations at no cost.",
    "why.3.title": "Measured Production",
    "why.3.desc": "Measured QC system that ensures every piece of fabric is cut, sewn, and finished according to high quality standards.",
    "why.4.title": "White Label",
    "why.4.desc": "Products are shipped plain without our brand, using your own custom labels, ready to be marketed under your brand.",
    "why.5.title": "Easy Reordering",
    "why.5.desc": "Your design patterns and order details are stored securely in our database, making future reorders quick and easy.",
    "why.6.title": "Partner Ecosystem",
    "why.6.desc": "Gain access to our network of partners for special fabric sourcing, graphic designers, and logistics delivery services.",

    // Products
    "prod.badge": "Service Catalog",
    "prod.title": "Main Product Categories",
    "prod.desc": "We combine precise stitching techniques with the best material choices to produce items that last and represent your brand identity.",
    "prod.cta": "Consult Now",
    "prod.1.title": "Uniforms",
    "prod.1.desc": "Professional custom uniform solutions with functional design and durable premium fabric materials.",
    "prod.1.items": "Office & Corporate Uniforms|Community PDL / PDH Shirts|Aprons & Chef / Barista Wear|Polo Shirts & Event Tees",
    "prod.1.wa": "Hello Room Production, I want to consult about producing Uniforms.",
    "prod.2.title": "Brand Apparel",
    "prod.2.desc": "Boutique-quality clothing production with modern cuts (oversized, boxy, etc.) for your clothing brand.",
    "prod.2.items": "Premium Oversized Tees|Fleece Hoodies & Crewnecks|Linen Shirts & Pants|Custom Shirts & Utility Jackets",
    "prod.2.wa": "Hello Room Production, I want to consult about producing custom Brand Apparel.",
    "prod.3.title": "Merchandise",
    "prod.3.desc": "Custom supporting accessories elegantly designed for corporate branding or exclusive souvenirs.",
    "prod.3.items": "Premium Canvas Totebags|Embroidered Caps (Cap / Bucket Hat)|Custom Shopping Bags|Other Textile Merchandise",
    "prod.3.wa": "Hello Room Production, I want to consult about producing custom Merchandise.",

    // Portfolio
    "port.badge": "Portfolio Gallery",
    "port.title": "Our Selected Work",
    "port.desc": "Showcasing custom productions for various independent fashion brands, creative communities, and exclusive corporate uniforms.",
    "port.view": "View Production Details",

    // FAQ
    "faq.badge": "Frequently Asked Questions",
    "faq.title": "FAQ",
    "faq.1.q": "What is the minimum order quantity (MOQ) for production?",
    "faq.1.a": "The minimum order quantity at Room Production is 24 pcs per design/color, with the flexibility to mix sizes to suit your needs.",
    "faq.2.q": "Does Room Production accept Cut, Make, Trim (CMT) services?",
    "faq.2.a": "Yes, we accept sewing-only jobs or CMT services according to your requests and design specifications.",
    "faq.3.q": "What are the requirements to join as a reseller?",
    "faq.3.a": "There are no special requirements or partnership fees to become a reseller. Simply register, submit your client's order details, and you will immediately be eligible for cashback on every order.",
    "faq.4.q": "Can Room Production help with the design process?",
    "faq.4.a": "We accept custom design assistance in the form of clothing mockups. For detailed logos or graphic assets, they should be print-ready from your side.",

    // Map & Contact
    "map.badge": "Location & Contact",
    "map.title": "Visit Our Workshop",
    "map.desc": "We warmly welcome you to consult directly, review fabric swatches, and check the quality of our sewing samples.",
    "map.addr.title": "Workshop Address",
    "map.addr.content": "Jl. Raya Denpasar, Denpasar, Bali, Indonesia",
    "map.phone.title": "Phone / WhatsApp",
    "map.email.title": "E-mail",
    "map.hours.title": "Operational Hours",
    "map.hours.content": "Monday - Saturday | 09:00 - 17:00 WITA",

    // Footer
    "foot.cta.badge": "Get Started",
    "foot.cta.title": "Start Production Today.",
    "foot.cta.btn": "Contact WhatsApp",
    "foot.desc": "Room Production is not just a place to make clothes. We are a partner that helps build and develop your apparel business from idea, production, to brand growth.",
    "foot.nav": "Quick Navigation",
    "foot.hq": "Headquarters",
    "foot.notice": "*Direct workshop visits require a prior appointment via WhatsApp.",
    // "foot.rebrand": "Rebranded from Garmentbali.id"
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    // Sync with local storage if available
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang === "en" || savedLang === "id") {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  const t = (key: string): string => {
    const translationSet = translations[language];
    return (translationSet as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
