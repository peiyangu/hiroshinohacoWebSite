"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type FadeInSectionProps = PropsWithChildren<{
  className?: string;
}>;

const transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1] as const
};

export function FadeInSection({ children, className }: FadeInSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={transition}
    >
      {children}
    </motion.section>
  );
}
