"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 100);
      mouseY.set(e.clientY - 100);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="pointer-events-none fixed top-0 left-0 w-[200px] h-[200px] rounded-full bg-white/10 blur-3xl z-[9999]"
    />
  );
}