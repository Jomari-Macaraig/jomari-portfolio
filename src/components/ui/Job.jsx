import Paragraph from "./Paragraph";
import ParagraphAccent from "./ParagraphAccent";

export default function Job({ date, company, jobTitle, description, place, isCurrent, className = "" }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-2 py-5 hover:bg-bg-elevated focus-visible:bg-bg-elevated ${className}`}>
      <div className="flex flex-col flex-1 gap-3 p-3">
        <ParagraphAccent className="uppercase tracking-widest">{date}</ParagraphAccent>
        <span className="uppercase font-mono text-xs tracking-widest font-thin">{isCurrent && "NOW"}</span>
      </div>
      <div className="flex flex-col flex-2 ">
        <article>
          <div className="flex flex-col gap-2 items-start md:flex-row md:items-center md:justify-between p-3">
            <h4 className="font-display text-3xl">{company}</h4>
            <p className="md:self-end font-mono text-xs font-extralight text-muted uppercase">{place}</p>
          </div>
          <div className="flex flex-col gap-3 p-3">
            <h5 className="font-sans">{jobTitle}</h5>
            <Paragraph>{description}</Paragraph>
          </div>
        </article>
      </div>
    </div>
  );
}
