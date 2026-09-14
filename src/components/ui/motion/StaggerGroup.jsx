import { motion } from "motion/react";

import { staggerContainer } from "./variants.js";

export default function StaggerGroup({ stagger = 0.3, className = "", children, ...rest }) {
  return (
    <motion.div
      variants={staggerContainer(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
