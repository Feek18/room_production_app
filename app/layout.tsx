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
  icons: {
    icon: "icon.svg",
  },
  title: {
    default: "Room Production | Premium Apparel & Uniform Production Partner",
    template: "%s | Room Production"
  },
  description: "Kami membantu kamu, apa pun latar belakangmu: mahasiswa, brand lokal, komunitas, ataupun reseller, kami bisa bantu. Kini kamu bisa memiliki brand sendiri.",
  authors: [{ name: "Room Production" }],
  creator: "Room Production",
  publisher: "Room Production",
  metadataBase: new URL("https://www.garmentbali.id"),
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
    url: "/",
    title: "Room Production | Premium Apparel & Uniform Production Partner",
    description: "Kami membantu kamu, apa pun latar belakangmu: mahasiswa, brand lokal, komunitas, ataupun reseller, kami bisa bantu. Kini kamu bisa memiliki brand sendiri.",
    siteName: "Room Production",
    images: [
      {
        url: "/logo.jpg",
        width: 1024,
        height: 460,
        alt: "Room Production Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Room Production | Premium Apparel & Uniform Partner",
    description: "Kami membantu kamu, apa pun latar belakangmu: mahasiswa, brand lokal, komunitas, ataupun reseller, kami bisa bantu. Kini kamu bisa memiliki brand sendiri.",
    images: ["/logo.jpg"]
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
  "image": "https://www.garmentbali.id/logo.jpg",
  "@id": "https://www.garmentbali.id/#organization",
  "url": "https://www.garmentbali.id",
  "telephone": "+6289644005097",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Tukad Batanghari VII, Dauh Puri Klod",
    "addressLocality": "Denpasar",
    "addressRegion": "Bali",
    "postalCode": "80232",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.6791,
    "longitude": 115.2281
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
    "https://www.instagram.com/youniform.bali"
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
        className="min-h-full flex flex-col bg-[#FAF9F5] text-[#141517] selection:bg-[#141517] selection:text-[#FAF9F5]"
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

