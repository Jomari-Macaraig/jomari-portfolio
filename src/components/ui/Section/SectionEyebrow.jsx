export default function SectionEyebrow({ index, label }) {
  return (
    <div className="flex items-center gap-4 font-mono font-light text-xs tracking-wide">
      <span className="text-accent">{index}</span>
      <span className="h-px flex-1 max-w-12 border-t border-line" aria-hidden></span>
      <span className="text-muted uppercase">{label}</span>
    </div>
  );
}
