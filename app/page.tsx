import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MarqueeBanner from "@/components/sections/MarqueeBanner";
import CorePositioning from "@/components/sections/CorePositioning";
import ChoosePath from "@/components/sections/ChoosePath";
import WhyUs from "@/components/sections/WhyUs";
import Products from "@/components/sections/Products";
import Portfolio from "@/components/sections/Portfolio";
import Faq from "@/components/sections/Faq";
import MapSection from "@/components/sections/MapSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <MarqueeBanner />
        <CorePositioning />
        <ChoosePath />
        <WhyUs />
        <Products />
        <Portfolio />
        <Faq />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}

