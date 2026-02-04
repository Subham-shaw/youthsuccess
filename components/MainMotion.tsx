// components/MainMotion.tsx
"use client";

import { motion } from "motion/react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export default function MainMotion() {
  return (
    <motion.div className="relative flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
      <LayoutTextFlip
        text=""
        words={["Ornament Business", "E-Commerce Business", "Insurance Broking", "Real Estate", "Land Development", "Trading"]}
      />
    </motion.div>
  );
}
