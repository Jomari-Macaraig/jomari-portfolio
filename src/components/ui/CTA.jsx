export default function CTA({ title, link }) {
  return (
    <a
      href={link}
      className="px-4 py-4 bg-bg border border-fg font-sans text-shadow-mauve-700 text-fg transition-colors duration-200 hover:text-accent hover:border-accent"
    >
      {title}
    </a>
  );
}
