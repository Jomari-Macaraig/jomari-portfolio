import { motion } from "motion/react";

export default function CTA({ title, link, className = "" }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={link}
      className={`px-4 py-4 bg-bg border border-fg font-sans text-fg transition-colors duration-200 hover:text-accent hover:border-accent focus-visible:text-accent focus-visible:border-accent ${className}`}
    >
      {title}
    </motion.a>
  );
}
