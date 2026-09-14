import { motion } from "motion/react";

import { staggerContainer } from "./variants.js";

export default function StaggerGroup({ stagger = 0.3, once = true, amount = 0.5, className = "", children, ...props }) {
  return (
    <motion.div
      variants={staggerContainer(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
