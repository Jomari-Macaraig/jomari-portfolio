import { motion } from "motion/react";

import { SITE } from "../../data/site.js";
import Paragraph from "../ui/Paragraph/Paragraph.jsx";
import SectionHeader from "../ui/Section/SectionHeader.jsx";
import SectionWrapper from "../ui/Section/SectionWrapper.jsx";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.2 } },
};

const paragraph = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: "easeIn", duration: 0.2 } },
};

export default function About() {
  return (
    <motion.div variants={container} initial="hidden" whileInView="visible">
      <SectionWrapper id="about" className="flex flex-col lg:flex-row gap-15 text-fg">
        <motion.div variants={child}>
          <SectionHeader
            index={SITE.about.section[0]}
            label={SITE.about.section[1]}
            titles={SITE.about.title}
            className="flex-1"
          />
        </motion.div>

        <motion.div className="flex flex-col gap-5 flex-2" variants={child}>
          <motion.div className="font-sans font-light tracking-wide text-2xl sm:text-3xl px-5 py-3 border-l-2 border-accent">
            {SITE.about.highlight}
          </motion.div>
          <motion.div variants={container}>
            {SITE.about.description.map((item, index) => (
              <motion.span key={`about-${index}`} variants={paragraph}>
                <Paragraph key={index}>{item}</Paragraph>
                <br />
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </motion.div>
  );
}
