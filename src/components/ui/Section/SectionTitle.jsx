export default function SectionTitle({ titles }) {
  return (
    <div className="max-w-4xl">
      <h2 className="text-fg font-display text-4xl sm:text-5xl tracking-wide ">
        {titles.map((item, index) => (
          <span key={index} className="block">
            {item}
          </span>
        ))}
      </h2>
    </div>
  );
}
