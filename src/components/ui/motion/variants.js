export const staggerContainer = (stagger = 0.2) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
};
