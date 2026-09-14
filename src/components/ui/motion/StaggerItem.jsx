import { motion } from "motion/react";

import { fadeUp } from "./variants";

export default function StaggerItem({ variants = fadeUp, className = "", children, ...rest }) {
  return (
    <motion.div variants={variants} className={className} {...rest}>
      {children}
    </motion.div>
  );
}
