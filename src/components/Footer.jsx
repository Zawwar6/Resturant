import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday — Thursday", time: "5:00 PM – 10:00 PM" },
  { day: "Friday — Saturday", time: "5:00 PM – 11:30 PM" },
  { day: "Sunday", time: "4:00 PM – 9:00 PM" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="relative bg-ink border-t border-white/5 pt-24 pb-10">
      <div className="container-px grid md:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* Logo & blurb */}
        <div>
          <a href="#hero" className="font-display text-3xl tracking-widest2 gold-text">
            EMBERS
          </a>
          <p className="mt-5 text-smoke text-sm leading-relaxed max-w-xs">
            An award-winning fine dining destination — where every dish is
            crafted with passion, precision, and the finest ingredients.
          </p>
          <div className="flex gap-3 mt-6">
            {[FaInstagram, FaFacebookF, FaTwitter, FaPinterestP].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                whileHover={{ y: -4, scale: 1.1 }}
                data-cursor="hover"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg text-cream mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-smoke">
            <li className="flex items-start gap-3">
              <HiOutlineLocationMarker className="text-gold mt-0.5 flex-shrink-0" />
              88 Ember Lane, New York, NY 10001
            </li>
            <li className="flex items-center gap-3">
              <HiOutlinePhone className="text-gold flex-shrink-0" />
              +1 (555) 010-2024
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineMail className="text-gold flex-shrink-0" />
              reservations@embers.com
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-lg text-cream mb-6">Opening Hours</h4>
          <ul className="space-y-4 text-sm">
            {hours.map((h) => (
              <li key={h.day} className="flex flex-col">
                <span className="text-cream/80">{h.day}</span>
                <span className="text-gold">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-display text-lg text-cream mb-6">Newsletter</h4>
          <p className="text-sm text-smoke mb-4">
            Subscribe for seasonal menus, private events, and exclusive offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-cream outline-none focus:border-gold transition-colors"
            />
            <Button type="submit" variant="gold" size="sm" className="flex-shrink-0">
              {subscribed ? "Sent!" : "Join"}
            </Button>
          </form>
        </div>
      </div>

      <div className="container-px mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-smoke">
        <p>© {new Date().getFullYear()} Embers Fine Dining. All rights reserved.</p>
        <p>Designed with passion for exceptional experiences.</p>
      </div>
    </footer>
  );
}
