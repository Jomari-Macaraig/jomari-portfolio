import { SITE } from "../../data/site";
import Email from "../ui/Email";
import CTA from "../ui/CTA";
import Link from "../ui/Link";
import SectionWrapper from "../ui/Section/SectionWrapper";

export default function Hero() {
  return (
    <SectionWrapper id="hero" className="relative flex flex-col flex-1 justify-end z-10 text-muted">
      <div className="flex flex-col gap-4 lg:flex-row items-start lg:items-center lg:justify-between font-mono font-extralight text-xs lg:text-sm tracking-xl uppercase">
        <div>REMOTE · PYTHON · REACT · AWS · AI</div>
        <div className="text-accent tracking-widest">OPEN TO REMOTE · PART-TIME OR FULL-TIME</div>
      </div>
      <div className="mt-10 font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-9xl">
        <div className="text-fg">Software</div>
        <div className="block stroke-title">Engineer</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:justify-between gap-4 mt-10 pt-10 font-display border-t border-line">
        <div className="space-y-4">
          <h1 className="text-fg text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{SITE.name}</h1>
          <p className="text-xl font-sans font-thin text-sm">{SITE.description}</p>
          <p className="font-mono font-light text-sm uppercase">CURRENTLY · {SITE.job}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-end items-center sm:self-end">
          <Email title="Start a conversation" className="w-full md:w-auto text-center text-xs md:text-sm" />
          <CTA title="View Work" link="#work" className="w-full md:w-auto text-center text-xs md:text-sm" />
          <Link
            title="Linkedin"
            link={SITE.linkedin}
            className="w-full md:w-auto justify-center text-center text-xs md:text-sm"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
