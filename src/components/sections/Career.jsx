import { SITE } from "../../data/site.js";
import Job from "../ui/Job.jsx";
import StaggerGroup from "../ui/motion/StaggerGroup.jsx";
import StaggerItem from "../ui/motion/StaggerItem.jsx";
import Paragraph from "../ui/Paragraph/Paragraph.jsx";
import SectionHeader from "../ui/Section/SectionHeader.jsx";
import SectionWrapper from "../ui/Section/SectionWrapper.jsx";

export default function Career() {
  return (
    <StaggerGroup>
      <SectionWrapper id="journey" className="flex flex-col gap-5">
        <StaggerItem className="flex flex-col xl:flex-row gap-y-7 justify-between items-start xl:items-center gap-x-40">
          <SectionHeader index={SITE.career.section[0]} label={SITE.career.section[1]} titles={SITE.career.title} />
          <Paragraph className="max-w-2xl">{SITE.career.description}</Paragraph>
        </StaggerItem>
        <StaggerItem>
          <StaggerGroup className="flex flex-col text-fg mt-5">
            {SITE.career.jobs.map((job, index) => (
              <StaggerItem key={job.company}>
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
              </StaggerItem>
            ))}
          </StaggerGroup>
        </StaggerItem>
      </SectionWrapper>
    </StaggerGroup>
  );
}
