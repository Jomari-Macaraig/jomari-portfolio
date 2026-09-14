import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";
export default function SectionHeader({ index, label, titles, className = "" }) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <SectionEyebrow index={index} label={label} />
      <SectionTitle titles={titles} />
    </div>
  );
}
