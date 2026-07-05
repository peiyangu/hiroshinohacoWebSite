"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type FadeInSectionProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  distance?: number;
}>;

const baseTransition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1] as const
};

export function FadeInSection({ children, className, delay = 0, distance = 18 }: FadeInSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </motion.section>
  );
}
