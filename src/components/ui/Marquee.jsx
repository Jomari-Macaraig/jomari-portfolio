export default function Marquee({ items }) {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-line py-4">
      <div className="flex w-max animate-marquee gap-10 text-muted text-xs font-mono font-thin tracking-xl">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 uppercase">
            {item}
            <span className="text-accent" aria-hidden>
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
