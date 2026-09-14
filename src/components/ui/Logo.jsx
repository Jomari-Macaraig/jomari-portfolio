import { motion } from "motion/react";

export default function Logo() {
  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-hidden="true"
      className="flex h-8 w-8 items-center justify-center border border-accent bg-accent font-display text-[11px] font-bold tracking-tight text-accent-ink transition-colors duration-200 group-hover:bg-accent-light group-focus-visible:bg-accent-light"
    >
      JM
    </motion.span>
  );
}
