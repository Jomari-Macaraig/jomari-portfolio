export default function CTA({ title, link, className = "" }) {
  return (
    <a
      href={link}
      className={`px-4 py-4 bg-bg border border-fg font-sans text-fg transition-colors duration-200 hover:text-accent hover:border-accent focus-visible:text-accent focus-visible:border-accent ${className}`}
    >
      {title}
    </a>
  );
}
