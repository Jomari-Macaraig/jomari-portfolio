export default function NavigationItem({ title, link }) {
  return (
    <a
      href={link}
      className="mx-5 font-mono font-light tracking-xl text-xs text-muted transition-colors duration-200 hover:text-fg focus-visible:text-fg"
    >
      {title}
    </a>
  );
}
