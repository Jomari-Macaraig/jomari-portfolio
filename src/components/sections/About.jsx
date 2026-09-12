import { SITE } from "../../data/site";
import SectionWrapper from "../ui/Section/SectionWrapper";
import SectionHeader from "../ui/Section/SectionHeader";

export default function About() {
  return (
    <SectionWrapper id="about" className="flex flex-col lg:flex-row gap-15 text-fg">
      <SectionHeader index={SITE.about.section[0]} label={SITE.about.section[1]} titles={SITE.about.title} className="flex-1" />
      <div className="flex flex-col gap-5 flex-2">
        <div className="font-sans font-light tracking-wide text-3xl px-5 py-3 border-l-2 border-accent">
          {SITE.about.highlight}
        </div>
        <div>
          {SITE.about.description.map((item, index) => (
            <>
              <p key={index} className="text-muted font-sans font-light">
                {item}
              </p>
              <br />
            </>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
