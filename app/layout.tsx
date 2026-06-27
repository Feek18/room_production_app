import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Room Production | Premium Apparel & Uniform Production Partner",
    template: "%s | Room Production"
  },
  description: "Kami membantu mahasiswa, brand lokal, komunitas, dan reseller memproduksi apparel berkualitas tinggi tanpa harus memiliki pabrik sendiri. Berbasis di Denpasar, Bali.",
  keywords: [
    "konveksi bali",
    "konveksi denpasar",
    "garment bali",
    "sablon kaos bali",
    "custom apparel bali",
    "vendor seragam bali",
    "bikin seragam denpasar",
    "konveksi baju bali",
    "clothing vendor bali",
    "makloon jahit bali",
    "white label apparel bali"
  ],
  authors: [{ name: "Room Production" }],
  creator: "Room Production",
  publisher: "Room Production",
  metadataBase: new URL("https://room-production-app.vercel.app"), // Ganti dengan domain asli saat custom domain aktif
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/?lang=id",
      "en-US": "/?lang=en"
    }
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://room-production-app.vercel.app",
    title: "Room Production | Premium Apparel & Uniform Production Partner",
    description: "Kami membantu mahasiswa, brand lokal, komunitas, dan reseller memproduksi apparel berkualitas tinggi tanpa harus memiliki pabrik sendiri. Berbasis di Denpasar, Bali.",
    siteName: "Room Production",
  },
  twitter: {
    card: "summary_large_image",
    title: "Room Production | Premium Apparel & Uniform Partner",
    description: "Kami membantu mahasiswa, brand lokal, komunitas, dan reseller memproduksi apparel berkualitas tinggi tanpa harus memiliki pabrik sendiri.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Room Production",
  "image": "https://roomproduction.com/logo.png",
  "@id": "https://roomproduction.com/#organization",
  "url": "https://roomproduction.com",
  "telephone": "+6281234567890",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Raya Denpasar",
    "addressLocality": "Denpasar",
    "addressRegion": "Bali",
    "postalCode": "80234",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.672583852077977,
    "longitude": 115.1437172822791
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.instagram.com/roomproduction"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body 
        className="min-h-full flex flex-col bg-white text-[#1E293B] selection:bg-[#06B6D4] selection:text-white"
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

