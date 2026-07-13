import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Chefs", href: "#chefs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Reserve", href: "#reservation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el && window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    } else if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ink/80 backdrop-blur-md border-b border-white/5 py-3" : "py-6"
        }`}
      >
        <nav className="container-px flex items-center justify-between">
          <a href="#hero" onClick={(e) => { e.preventDefault(); goTo("#hero"); }} data-cursor="hover" className="font-display text-2xl tracking-widest2 gold-text">
            EMBERS
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {links.slice(0, -1).map((link) => (
              <li key={link.href}>
                <button
                  data-cursor="hover"
                  onClick={() => goTo(link.href)}
                  className="text-sm tracking-wide text-cream/80 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton>
              <Button variant="gold" size="sm" onClick={() => goTo("#reservation")}>
                Book a Table
              </Button>
            </MagneticButton>
          </div>

          <button
            className="lg:hidden text-cream text-2xl"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className="font-display text-3xl text-cream hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
