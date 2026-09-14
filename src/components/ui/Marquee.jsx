import { motion } from "motion/react";

export default function Marquee({ items }) {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-line py-4">
      <motion.div
        className="flex w-max gap-10 text-muted text-xs font-mono font-thin tracking-xl"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 uppercase">
            {item}
            <span className="text-accent" aria-hidden>
              /
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
