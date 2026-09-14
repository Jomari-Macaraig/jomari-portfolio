import { SITE } from "../../data/site.js";
import Card from "../ui/Card/Card.jsx";
import StaggerGroup from "../ui/motion/StaggerGroup.jsx";
import StaggerItem from "../ui/motion/StaggerItem.jsx";
import { fadeRight } from "../ui/motion/variants.js";
import Paragraph from "../ui/Paragraph/Paragraph.jsx";
import SectionHeader from "../ui/Section/SectionHeader.jsx";
import SectionWrapper from "../ui/Section/SectionWrapper.jsx";

export default function Projects() {
  return (
    <StaggerGroup>
      <SectionWrapper id="work">
        <StaggerItem className="flex flex-col gap-7">
          <SectionHeader index={SITE.projects.section[0]} label={SITE.projects.section[1]} titles={SITE.projects.title} />
          <Paragraph className="max-w-4xl">{SITE.projects.description}</Paragraph>
          <StaggerGroup className="grid grid-cols-1 lg:grid-cols-3 ">
            {SITE.projects.items.map((item) => (
              <StaggerItem key={item.index} variants={fadeRight()}>
                <Card
                  key={item.index}
                  index={item.index}
                  title={item.title}
                  description={item.description}
                  stacks={item.stacks}
                  github={item.github}
                  className="border-line border h-full w-full"
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </StaggerItem>
      </SectionWrapper>
    </StaggerGroup>
  );
}
