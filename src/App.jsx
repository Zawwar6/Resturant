import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "@/hooks/useLenis";

import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SignatureDishes from "@/components/SignatureDishes";
import MenuSection from "@/components/MenuSection";
import Chefs from "@/components/Chefs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
import WhyChooseUs from "@/components/WhyChooseUs";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll + GSAP ScrollTrigger sync globally.
  useLenis();

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <MenuSection />
        <Chefs />
        <Gallery />
        <Testimonials />
        <Reservation />
        <WhyChooseUs />
        <InstagramFeed />
      </main>

      <Footer />
    </>
  );
}
