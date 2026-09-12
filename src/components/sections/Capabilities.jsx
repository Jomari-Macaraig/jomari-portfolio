import SectionWrapper from "../ui/Section/SectionWrapper";
import SectionHeader from "../ui/Section/SectionHeader";
import { SITE } from "../../data/site";

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
      <div></div>
      <div></div>
    </SectionWrapper>
  );
}
