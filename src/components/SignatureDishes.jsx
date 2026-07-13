import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { dishes } from "@/data/dishes";

export default function SignatureDishes() {
  return (
    <section id="dishes" className="relative py-28 md:py-40 bg-ink overflow-hidden">
      <div className="container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-6"
            >
              Chef's Selection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="section-title"
            >
              Signature <span className="gold-text italic">Dishes</span>
            </motion.h2>
          </div>

          <div className="flex gap-3">
            <button data-cursor="hover" className="dish-prev w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
              <HiArrowLongLeft />
            </button>
            <button data-cursor="hover" className="dish-next w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
              <HiArrowLongRight />
            </button>
          </div>
        </div>
      </div>

      <div className="container-px">
        <Swiper
          modules={[FreeMode, Navigation]}
          navigation={{ prevEl: ".dish-prev", nextEl: ".dish-next" }}
          freeMode
          spaceBetween={24}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1400: { slidesPerView: 4 },
          }}
        >
          {dishes.map((dish) => (
            <SwiperSlide key={dish.id}>
              <DishCard dish={dish} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function DishCard({ dish }) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      data-cursor="hover"
      className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer"
    >
      <motion.img
        src={dish.image}
        alt={dish.name}
        variants={{ rest: { scale: 1 }, hover: { scale: 1.12 } }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl text-cream">{dish.name}</h3>
          <span className="font-display text-lg text-gold">{dish.price}</span>
        </div>

        <motion.p
          variants={{
            rest: { height: 0, opacity: 0, marginTop: 0 },
            hover: { height: "auto", opacity: 1, marginTop: 10 },
          }}
          transition={{ duration: 0.4 }}
          className="text-sm text-smoke overflow-hidden leading-relaxed"
        >
          {dish.description}
        </motion.p>
      </div>

      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        className="absolute inset-0 ring-1 ring-inset ring-gold/50 rounded-3xl pointer-events-none"
      />
    </motion.div>
  );
}
