import Paragraph from "./Paragraph";
export default function CapabilityCard({ index, title, description, stacks, className = "" }) {
  return (
    <div className={`flex flex-col gap-4 text-fg p-5 bg-bg ${className}`}>
      <div className="text-accent font-light font-mono text-xs">{index}</div>
      <h4 className="text-2xl font-display">{title}</h4>
      <Paragraph>{description}</Paragraph>
      <ul className="flex flex-wrap gap-2">
        {stacks.map((item) => (
          <li key={item} className="font-mono uppercase font-light text-muted text-xs border border-line p-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
