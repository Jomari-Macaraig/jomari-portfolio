export default function ParagraphAccent({ children, className = "" }) {
  return <p className={`text-accent font-mono font-light text-xs tracking-wide ${className}`}>{children}</p>;
}
