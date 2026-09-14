export default function Paragraph({ children, className = "" }) {
  return <p className={`text-muted font-sans font-light  ${className}`}>{children}</p>;
}
