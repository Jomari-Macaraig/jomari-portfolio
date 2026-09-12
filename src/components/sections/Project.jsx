import SectionWrapper from "../ui/Section/SectionWrapper";
import SectionHeader from "../ui/Section/SectionHeader";
import Card from "../ui/Card";
import Paragraph from "../ui/Paragraph";
import { SITE } from "../../data/site";

export default function Project() {
  return (
    <SectionWrapper id="work" className="flex flex-col gap-7">
      <SectionHeader index={SITE.projects.section[0]} label={SITE.projects.section[1]} titles={SITE.projects.title} />
      <Paragraph className="max-w-4xl">{SITE.projects.description}</Paragraph>
      <div className="grid grid-cols-1  lg:grid-cols-3 ">
        {SITE.projects.items.map((item) => (
          <Card
            key={item.index}
            index={item.index}
            title={item.title}
            description={item.description}
            stacks={item.stacks}
            github={item.github}
            className="border-line border"
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
