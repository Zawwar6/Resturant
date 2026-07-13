import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuCategories, menuData } from "@/data/menu";

export default function MenuSection() {
  const [active, setActive] = useState(menuCategories[0]);

  return (
    <section id="menu" className="relative py-28 md:py-40 bg-charcoal">
      <div className="container-px">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow justify-center mb-6"
          >
            Our Menu
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-title"
          >
            Curated <span className="gold-text italic">Selections</span>
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              data-cursor="hover"
              onClick={() => setActive(cat)}
              className={`relative px-6 py-3 rounded-full text-sm tracking-wide uppercase transition-colors duration-300 ${
                active === cat ? "text-ink" : "text-cream/70 hover:text-gold"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="menu-tab-bg"
                  className="absolute inset-0 bg-gold-gradient rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid sm:grid-cols-2 gap-x-10 gap-y-8"
            >
              {menuData[active].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="group"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-display text-lg text-cream group-hover:text-gold transition-colors">
                      {item.name}
                    </h4>
                    <span className="flex-1 border-b border-dotted border-white/15 mx-2 mb-1" />
                    <span className="text-gold font-medium whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-sm text-smoke mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
