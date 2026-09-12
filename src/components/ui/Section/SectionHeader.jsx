import SectionTitle from "./SectionTitle";
import SectionEyebrow from "./SectionEyebrow";
export default function SectionHeader({ index, label, titles, className = "" }) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <SectionEyebrow index={index} label={label} />
      <SectionTitle titles={titles} />
    </div>
  );
}
