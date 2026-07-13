import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-40 bg-ink overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-px relative">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow justify-center mb-6"
          >
            Guest Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-title"
          >
            What Our <span className="gold-text italic">Guests Say</span>
          </motion.h2>
        </div>

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 md:p-14 text-center"
              >
                <FaQuoteLeft className="text-gold text-3xl mx-auto mb-6 opacity-70" />
                <p className="font-script italic text-xl md:text-3xl text-cream leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex justify-center gap-1 mt-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="text-gold text-sm" />
                  ))}
                </div>
                <p className="mt-4 font-display text-lg text-cream">{t.name}</p>
                <p className="text-smoke text-sm">{t.role}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
