import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Wraps any child (typically a Button) and makes it "magnetic":
 * it subtly follows the cursor while hovered, then springs back.
 */
export default function MagneticButton({ children, strength = 0.4, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      data-cursor="hover"
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
