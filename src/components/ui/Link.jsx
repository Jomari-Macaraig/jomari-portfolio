import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Link({ title, link, className = "" }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-2 font-sans text-fg transition-colors duration-200 hover:text-accent focus-visible:text-accent ${className}`}
    >
      {title} <ArrowUpRight size={16} aria-hidden />
    </motion.a>
  );
}
