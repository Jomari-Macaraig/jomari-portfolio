import SectionHeader from "../ui/Section/SectionHeader";
import SectionWrapper from "../ui/Section/SectionWrapper";
import Paragraph from "../ui/Paragraph";
import Job from "../ui/Job";
import { SITE } from "../../data/site";

export default function Career() {
  return (
    <SectionWrapper id="journey" className="flex flex-col gap-5">
      <div className="flex flex-col xl:flex-row gap-y-7 justify-between items-center gap-x-40">
        <SectionHeader index={SITE.career.section[0]} label={SITE.career.section[1]} titles={SITE.career.title} />
        <Paragraph>{SITE.career.description}</Paragraph>
      </div>
      <div className="flex flex-col text-fg mt-5">
        {SITE.career.jobs.map((job, index) => (
          <Job
            className={`border-line border-t ${SITE.career.jobs.length - 1 == index ? "border-b" : ""}`}
            key={job.company}
            company={job.company}
            date={job.date}
            jobTitle={job.jobTitle}
            description={job.description}
            place={job.place}
            isCurrent={job.isCurrent}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
