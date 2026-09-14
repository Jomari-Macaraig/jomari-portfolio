export const staggerContainer = (stagger = 0.2) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});

export const fadeRight = (duration = 0.5) => ({
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: duration } },
});

export const fadeUp = (duration = 0.5) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: duration } },
});
