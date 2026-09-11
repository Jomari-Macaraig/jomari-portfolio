export default function NavigationItem({ title, link }) {
  return (
    <a
      href={link}
      className="mx-5 font-mono text-xs text-muted hover:text-white"
    >
      {title}
    </a>
  );
}
