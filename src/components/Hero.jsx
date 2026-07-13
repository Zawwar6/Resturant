import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";

const words = ["Experience", "Fine", "Dining", "Like", "Never", "Before"];

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current.querySelectorAll(".word"),
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.08,
          delay: 0.3,
        }
      );
    }, titleRef);
    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -60 });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background video — replace src with a real cinematic food/restaurant reel */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop"
      >
        <source src="/videos/hero-food.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
      <div className="absolute inset-0 bg-ink/20" />

      {/* Floating decorative food elements */}
      <motion.img
        src="https://images.unsplash.com/photo-1611142594505-32ea9f8cf78f?q=80&w=300&auto=format&fit=crop"
        alt=""
        aria-hidden
        className="hidden md:block absolute top-[22%] left-[8%] w-24 h-24 rounded-full object-cover border border-gold/30 shadow-2xl animate-floaty"
      />
      <motion.img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=300&auto=format&fit=crop"
        alt=""
        aria-hidden
        className="hidden md:block absolute bottom-[26%] right-[10%] w-28 h-28 rounded-full object-cover border border-gold/30 shadow-2xl animate-floaty"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 container-px text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="eyebrow mb-6"
        >
          Est. 2009 — Michelin Recognized
        </motion.p>

        <h1
          ref={titleRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl text-cream"
        >
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-top mr-3 md:mr-5">
              <span className={`word inline-block ${i === 2 || i === 5 ? "gold-text italic" : ""}`}>{w}</span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-6 max-w-xl text-smoke text-base md:text-lg"
        >
          A cinematic culinary journey — seasonal ingredients, masterful technique,
          and an atmosphere built for unforgettable evenings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton>
            <Button variant="gold">Book a Table</Button>
          </MagneticButton>
          <MagneticButton>
            <Button variant="outline">View Menu</Button>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        data-cursor="hover"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-smoke"
      >
        <span className="text-[10px] tracking-widest2 uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <HiOutlineChevronDown className="text-xl text-gold" />
        </motion.span>
      </motion.button>
    </section>
  );
}
