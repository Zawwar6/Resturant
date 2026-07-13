import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Expert Chefs" },
  { value: 10, suffix: "K+", label: "Happy Customers" },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => {
          if (ref.current) ref.current.textContent = Math.floor(v) + suffix;
        },
      });
      return controls.stop;
    }
  }, [isInView, value, suffix, count]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl gold-text">
      0{suffix}
    </span>
  );
}

export default function About() {
  const imgWrapRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: imgWrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative py-28 md:py-40 bg-charcoal overflow-hidden">
      <div className="container-px grid lg:grid-cols-2 gap-16 items-center">
        {/* Image column with parallax */}
        <div ref={imgWrapRef} className="relative h-[420px] md:h-[560px] rounded-3xl overflow-hidden">
          <img
            ref={imgRef}
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
            alt="Elegant restaurant interior at Embers"
            className="absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute -bottom-6 -right-6 glass-card p-6 hidden sm:block"
          >
            <p className="font-script italic text-2xl text-gold">"Every plate, a memory."</p>
          </motion.div>
        </div>

        {/* Content column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-6"
          >
            Our Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-title"
          >
            A Legacy of <span className="gold-text italic">Culinary Artistry</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-smoke text-base md:text-lg leading-relaxed max-w-xl"
          >
            Since 2009, Embers has been a sanctuary for those who seek more than a meal —
            an experience. Our kitchen blends time-honored technique with bold, modern
            creativity, sourcing the finest seasonal ingredients from trusted local artisans
            to craft dishes that linger in memory long after the last bite.
          </motion.p>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-xs md:text-sm text-smoke tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
