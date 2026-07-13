import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { chefs } from "@/data/chefs";

function ChefCard({ chef, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        data-cursor="hover"
        className="relative rounded-3xl overflow-hidden bg-graphite border border-white/5 group"
      >
        <div className="relative h-80 overflow-hidden">
          <img
            src={chef.image}
            alt={chef.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

          {/* Social icons, revealed on hover */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            {[FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-ink/70 backdrop-blur border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="p-6 text-center" style={{ transform: "translateZ(30px)" }}>
          <h3 className="font-display text-xl text-cream">{chef.name}</h3>
          <p className="text-gold text-sm tracking-wide mt-1">{chef.role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Chefs() {
  return (
    <section id="chefs" className="relative py-28 md:py-40 bg-ink">
      <div className="container-px">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow justify-center mb-6"
          >
            Meet The Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-title"
          >
            Culinary <span className="gold-text italic">Masters</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, i) => (
            <ChefCard key={chef.id} chef={chef} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
