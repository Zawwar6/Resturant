import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Dot-and-ring cursor follower. The ring lags behind the dot via spring
 * physics for a premium, weighty feel. Scales up over interactive elements
 * (anything with [data-cursor="hover"]).
 */
export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 25, stiffness: 300, mass: 0.5 });
  const springY = useSpring(y, { damping: 25, stiffness: 300, mass: 0.5 });
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = window.matchMedia("(hover: none)").matches;
    if (isTouch.current) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const overHandler = (e) => {
      if (e.target.closest('[data-cursor="hover"]')) setHovering(true);
    };
    const outHandler = (e) => {
      if (e.target.closest('[data-cursor="hover"]')) setHovering(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overHandler);
    window.addEventListener("mouseout", outHandler);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overHandler);
      window.removeEventListener("mouseout", outHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (isTouch.current) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[999] hidden lg:block transition-opacity ${visible ? "opacity-100" : "opacity-0"}`}>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-gold/60"
        animate={{ width: hovering ? 64 : 36, height: hovering ? 64 : 36, opacity: hovering ? 0.9 : 0.5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
}
