export default function SectionTitle({ titles }) {
  return (
    <div>
      {titles.map((item, index) => (
        <h2 key={index} className="text-fg font-display text-5xl tracking-wide ">
          {item}
        </h2>
      ))}
    </div>
  );
}
