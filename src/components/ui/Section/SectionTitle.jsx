export default function SectionTitle({ titles }) {
  return (
    <div className="max-w-4xl">
      {titles.map((item, index) => (
        <h2 key={index} className="text-fg font-display text-4xl sm:text-5xl tracking-wide ">
          {item}
        </h2>
      ))}
    </div>
  );
}
