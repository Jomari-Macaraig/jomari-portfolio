export default function NavigationItem({ title, link }) {
  return (
    <a
      href={link}
      className="mx-5 font-mono text-xs text-muted transition-colors duration-200 hover:text-white focus-visible::text-white"
    >
      {title}
    </a>
  );
}
