import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Full-screen loader shown on first mount. Animates a counter from
 * 0 -> 100, reveals the wordmark letter-by-letter, then unmounts
 * itself with a curtain-wipe transition, revealing the site beneath.
 */
export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const word = "EMBERS";

  useEffect(() => {
    const start = Date.now();
    const duration = 2200;
    let raf;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onComplete, 900);
      return () => clearTimeout(t);
    }
  }, [done, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex gap-1 md:gap-3 overflow-hidden">
            {word.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl md:text-7xl tracking-widest2 gold-text"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <div className="mt-10 w-56 md:w-72 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gold-gradient"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-xs tracking-widest2 text-smoke font-body">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
