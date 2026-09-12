import Hero from "../sections/Hero";
import Marquee from "../ui/Marquee";
import Cards from "../sections/Cards.jsx";
import About from "../sections/About.jsx";
import Capabilities from "../sections/Capabilities.jsx";
import Career from "../sections/Career.jsx";
import { SITE } from "../../data/site.js";

export default function Main() {
  return (
    <main className="flex min-h-dvh flex-col flex-1">
      <Hero />
      <Marquee items={SITE.skills} />
      <Cards />
      <About />
      <Capabilities />
      <Career />
    </main>
  );
}
