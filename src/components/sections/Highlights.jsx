import { motion } from "motion/react";

import { SITE } from "../../data/site.js";
import HighlightCard from "../ui/Card/HighlightCard.jsx";
import SectionWrapper from "../ui/Section/SectionWrapper.jsx";

const HIGHLIGHT_DIVIDERS = [
  "border-b sm:border-r lg:border-b-0",
  "border-b md:border-r lg:border-b-0",
  "border-b sm:border-b-0 sm:border-r",
  "",
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cards = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.5 } },
};

export default function Highlights() {
  return (
    <motion.div variants={container} initial="hidden" whileInView="visible">
      <SectionWrapper
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        {SITE.highlights.map((highlight, index) => (
          <motion.div key={`${highlight.title} - ${highlight.subtitle} animation`} variants={cards}>
            <HighlightCard
              key={`${highlight.title} - ${highlight.subtitle}`}
              title={highlight.title}
              subtitle={highlight.subtitle}
              className={`w-full md:w-auto border-line ${HIGHLIGHT_DIVIDERS[index]}`}
              variants={cards}
            />
          </motion.div>
        ))}
      </SectionWrapper>
    </motion.div>
  );
}
