import { motion } from "framer-motion";
import { GiFruitBowl, GiChefToque } from "react-icons/gi";
import { HiOutlineSparkles, HiOutlineClock } from "react-icons/hi";

const features = [
  {
    icon: GiFruitBowl,
    title: "Premium Ingredients",
    desc: "Sourced daily from trusted local farms and global artisans for peak freshness.",
  },
  {
    icon: HiOutlineClock,
    title: "Attentive Service",
    desc: "Our team anticipates every need, delivering warmth without ever intruding.",
  },
  {
    icon: GiChefToque,
    title: "Award-Winning Chefs",
    desc: "A team recognized internationally for culinary innovation and mastery.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Luxury Ambience",
    desc: "Refined interiors and cinematic lighting crafted for unforgettable evenings.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 md:py-40 bg-ink">
      <div className="container-px">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow justify-center mb-6"
          >
            The Embers Difference
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-title"
          >
            Why Guests <span className="gold-text italic">Choose Us</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              data-cursor="hover"
              className="group p-8 rounded-3xl border border-white/5 bg-graphite hover:border-gold/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="text-ink text-2xl" />
              </div>
              <h3 className="font-display text-lg text-cream mb-2">{f.title}</h3>
              <p className="text-sm text-smoke leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
