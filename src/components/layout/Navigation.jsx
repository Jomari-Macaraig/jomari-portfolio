import NavigationItem from "./NavigationItem.jsx";
import { NAVIGATION_ITEMS } from "../../data/site.js";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-center ">
      <ul className="flex items-center justify-center">
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.title}>
            <NavigationItem title={item.title} link={item.link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
