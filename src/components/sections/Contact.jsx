import { ArrowUpRight } from "lucide-react";

import { SITE } from "../../data/site.js";
import SectionHeader from "../ui/Section/SectionHeader.jsx";
import SectionWrapper from "../ui/Section/SectionWrapper.jsx";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="flex flex-col gap-5">
      <SectionHeader index={SITE.contact.section[0]} label={SITE.contact.section[1]} titles={SITE.contact.title} />
      <a
        href={SITE.mailto}
        className="flex justify-between items-center border-y border-line hover:border-accent focus-visible:border-accent py-10"
      >
        <span className="text-fg font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{SITE.email}</span>
        <ArrowUpRight className="text-accent" size={30} aria-hidden />
      </a>
    </SectionWrapper>
  );
}
