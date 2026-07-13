import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const prev = (e) => {
    e.stopPropagation();
    setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setActiveIndex((i) => (i + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="relative py-28 md:py-40 bg-charcoal">
      <div className="container-px">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow justify-center mb-6"
          >
            Ambience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-title"
          >
            Moments at <span className="gold-text italic">Embers</span>
          </motion.h2>
        </div>

        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.id}
              onClick={() => setActiveIndex(i)}
              data-cursor="hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className={`block w-full mb-4 rounded-2xl overflow-hidden ${img.tall ? "h-80 md:h-[26rem]" : "h-56 md:h-64"}`}
            >
              <img
                src={img.src}
                alt="Embers restaurant ambience"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[150] bg-ink/95 backdrop-blur-md flex items-center justify-center p-6"
          >
            <button onClick={close} className="absolute top-6 right-6 text-cream text-3xl hover:text-gold">
              <HiOutlineX />
            </button>
            <button onClick={prev} className="absolute left-4 md:left-10 text-cream text-3xl hover:text-gold">
              <HiChevronLeft />
            </button>
            <motion.img
              key={activeIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              src={galleryImages[activeIndex].src}
              alt="Embers gallery preview"
              className="max-h-[80vh] max-w-full rounded-2xl object-contain"
            />
            <button onClick={next} className="absolute right-4 md:right-10 text-cream text-3xl hover:text-gold">
              <HiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
