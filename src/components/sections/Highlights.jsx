import { SITE } from "../../data/site.js";
import HighlightCard from "../ui/Card/HighlightCard.jsx";
import StaggerGroup from "../ui/motion/StaggerGroup.jsx";
import StaggerItem from "../ui/motion/StaggerItem.jsx";
import { fadeRight } from "../ui/motion/variants.js";
import SectionWrapper from "../ui/Section/SectionWrapper.jsx";

const HIGHLIGHT_DIVIDERS = [
  "border-b sm:border-r lg:border-b-0",
  "border-b md:border-r lg:border-b-0",
  "border-b sm:border-b-0 sm:border-r",
  "",
];

export default function Highlights() {
  return (
    <StaggerGroup>
      <SectionWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {SITE.highlights.map((highlight, index) => (
          <StaggerItem key={`${highlight.title} - ${highlight.subtitle} animation`} variants={fadeRight()}>
            <HighlightCard
              key={`${highlight.title} - ${highlight.subtitle}`}
              title={highlight.title}
              subtitle={highlight.subtitle}
              className={`w-full md:w-auto border-line ${HIGHLIGHT_DIVIDERS[index]}`}
            />
          </StaggerItem>
        ))}
      </SectionWrapper>
    </StaggerGroup>
  );
}
