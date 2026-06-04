"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  duration?: number;
};

/**
 * Subtle scroll-reveal wrapper. Triggers once when the element enters the
 * viewport. Keep usage sparing — every reveal adds client-side JS.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 16,
  duration = 0.5,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
