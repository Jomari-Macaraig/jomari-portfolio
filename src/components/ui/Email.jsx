import { motion } from "motion/react";

import { SITE } from "../../data/site.js";

export default function Email({ title, className = "" }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={SITE.mailto}
      className={`px-4 py-4 bg-accent font-sans text-accent-ink hover:bg-accent-light focus-visible:bg-accent-light ${className}`}
    >
      {title}
    </motion.a>
  );
}
