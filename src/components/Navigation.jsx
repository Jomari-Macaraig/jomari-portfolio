import NavigationItem from "./NavigationItem";
const NAVIGATIONITEMS = ["ABOUT", "JOURNEY", "WORK", "CONTACT"];

export default function Navigation() {
  return (
    <nav className="flex items-center justify-center">
      {NAVIGATIONITEMS.map((item) => (
        <NavigationItem key={item} title={item} />
      ))}
    </nav>
  );
}
