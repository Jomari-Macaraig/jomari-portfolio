import NavigationItem from "./NavigationItem";

const NAVIGATION_ITEMS = [
  { title: "ABOUT", link: "#about" },
  { title: "JOURNEY", link: "#journey" },
  { title: "WORK", link: "#work" },
  { title: "CONTACT", link: "#contact" },
];

export default function Navigation() {
  return (
    <nav className="flex items-center justify-center">
      {NAVIGATION_ITEMS.map((item) => (
        <NavigationItem key={item.title} title={item.title} link={item.link} />
      ))}
    </nav>
  );
}
