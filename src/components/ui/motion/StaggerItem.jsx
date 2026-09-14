import { motion } from "motion/react";

import { fadeUp } from "./variants";

export default function StaggerItem({ variants = fadeUp(), className = "", children, ...props }) {
  return (
    <motion.div variants={variants} className={className} {...props}>
      {children}
    </motion.div>
  );
}
