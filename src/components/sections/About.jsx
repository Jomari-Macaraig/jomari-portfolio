import { motion } from "motion/react";

import { SITE } from "../../data/site.js";
import StaggerGroup from "../ui/motion/StaggerGroup.jsx";
import StaggerItem from "../ui/motion/StaggerItem.jsx";
import Paragraph from "../ui/Paragraph/Paragraph.jsx";
import SectionHeader from "../ui/Section/SectionHeader.jsx";
import SectionWrapper from "../ui/Section/SectionWrapper.jsx";

export default function About() {
  return (
    <StaggerGroup>
      <SectionWrapper id="about" className="flex flex-col lg:flex-row gap-15 text-fg">
        <StaggerItem>
          <SectionHeader
            index={SITE.about.section[0]}
            label={SITE.about.section[1]}
            titles={SITE.about.title}
            className="flex-1"
          />
        </StaggerItem>

        <StaggerItem className="flex flex-col gap-5 flex-2">
          <motion.div className="font-sans font-light tracking-wide text-2xl sm:text-3xl px-5 py-3 border-l-2 border-accent">
            {SITE.about.highlight}
          </motion.div>
          <StaggerGroup stagger={0.4}>
            {SITE.about.description.map((item, index) => (
              <StaggerItem key={`about-${index}`}>
                <Paragraph key={index}>{item}</Paragraph>
                <br />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </StaggerItem>
      </SectionWrapper>
    </StaggerGroup>
  );
}
