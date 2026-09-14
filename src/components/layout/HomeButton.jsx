import Logo from "../ui/Logo.jsx";
export default function HomeButton() {
  return (
    <a href="#hero" className="group flex items-center gap-3">
      <Logo />{" "}
      <span className="font-display text-sm text-fg transition-colors duration-200 group-hover:text-accent group-focus-visible:text-accent hidden lg:flex">
        Jomari Macaraig
      </span>
    </a>
  );
}
