import Hero from "../sections/Hero.jsx";
import Marquee from "../ui/Marquee.jsx";
import Highlights from "../sections/Highlights.jsx";
import About from "../sections/About.jsx";
import Capabilities from "../sections/Capabilities.jsx";
import Career from "../sections/Career.jsx";
import { SITE } from "../../data/site.js";
import Contact from "../sections/Contact.jsx";
import Projects from "../sections/Projects.jsx";

export default function Main() {
  return (
    <main className="flex min-h-dvh flex-col flex-1">
      <Hero />
      <Marquee items={SITE.skills} />
      <Highlights />
      <About />
      <Capabilities />
      <Career />
      <Projects />
      <Contact />
    </main>
  );
}
