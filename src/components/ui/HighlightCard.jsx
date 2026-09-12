export default function HighlightCard({ title, subtitle, className = "" }) {
  return (
    <div className={`flex flex-col gap-2 justify-start text-fg uppercase p-4 py-7 bg-bg ${className}`}>
      <h2 className="font-display tracking-wide text-fg text-4xl lg:text-5xl">{title}</h2>
      <p className="font-mono text-sm font-extralight text-muted">{subtitle}</p>
    </div>
  );
}
