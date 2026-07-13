import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { instagramPosts } from "@/data/instagram";

export default function InstagramFeed() {
  // Duplicate list for seamless infinite marquee loop
  const looped = [...instagramPosts, ...instagramPosts];

  return (
    <section className="relative py-24 bg-charcoal overflow-hidden">
      <div className="container-px text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow justify-center mb-4"
        >
          Follow Our Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-title text-3xl md:text-5xl"
        >
          <span className="gold-text italic">@embers.restaurant</span>
        </motion.h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-charcoal to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-charcoal to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {looped.map((src, i) => (
            <a
              key={i}
              href="#"
              onClick={(e) => e.preventDefault()}
              data-cursor="hover"
              className="relative w-56 h-56 md:w-64 md:h-64 flex-shrink-0 mx-2 rounded-2xl overflow-hidden group"
            >
              <img src={src} alt="Embers Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 flex items-center justify-center transition-colors duration-300">
                <FaInstagram className="text-gold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
