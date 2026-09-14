import { SITE } from "../../data/site.js";
import HighlightCard from "../ui/Card/HighlightCard.jsx";
import SectionWrapper from "../ui/Section/SectionWrapper.jsx";

const HIGHLIGHT_DIVIDERS = [
  "border-b sm:border-r lg:border-b-0",
  "border-b md:border-r lg:border-b-0",
  "border-b sm:border-b-0 sm:border-r",
  "",
];

export default function Highlights() {
  return (
    <SectionWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {SITE.highlights.map((highlight, index) => (
        <HighlightCard
          key={`${highlight.title} - ${highlight.subtitle}`}
          title={highlight.title}
          subtitle={highlight.subtitle}
          className={`w-full md:w-auto border-line ${HIGHLIGHT_DIVIDERS[index]}`}
        />
      ))}
    </SectionWrapper>
  );
}
