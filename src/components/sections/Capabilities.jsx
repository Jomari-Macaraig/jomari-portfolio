import { SITE } from "../../data/site.js";
import Card from "../ui/Card/Card.jsx";
import SectionHeader from "../ui/Section/SectionHeader.jsx";
import SectionWrapper from "../ui/Section/SectionWrapper.jsx";

const HIGHLIGHT_DIVIDERS = [
  "border-b sm:border-r ",
  "border-b md:border-r-0 lg:border-r ",
  "border-b sm:border-r sm:border-r lg:border-r-0",
  "border-b md:border-r-0 lg:border-r lg:border-b-0",
  "border-b sm:border-b-0 sm:border-r md:border-r lg:border-b-0",
  "",
];

export default function Capabilities() {
  return (
    <SectionWrapper className="flex flex-col gap-4 text-fg">
      <div>
        <SectionHeader
          index={SITE.capabilities.section[0]}
          label={SITE.capabilities.section[1]}
          titles={SITE.capabilities.title}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {SITE.capabilities.items.map((item, index) => (
          <Card
            key={item.index}
            index={item.index}
            title={item.title}
            description={item.description}
            stacks={item.stacks}
            className={`border-line ${HIGHLIGHT_DIVIDERS[index]}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
