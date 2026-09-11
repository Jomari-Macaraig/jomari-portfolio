import Logo from "./ui/Logo";
export default function HomeButton() {
  return (
    <a href="#" className="group flex items-center gap-3">
      <Logo />{" "}
      <span className="font-display text-sm text-fg transition-colors duration-200 group-hover:text-accent group-focus-visible:text-accent">
        Jomari Macaraig
      </span>
    </a>
  );
}
