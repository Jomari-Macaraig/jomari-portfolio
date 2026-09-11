import Hero from "../sections/Hero";
import Marquee from "../ui/Marquee";
import { SITE } from "../../data/site.js";
export default function Main() {
  return (
    <main className="flex min-h-dvh flex-col flex-1">
      <Hero />
      <Marquee items={SITE.skills} />
    </main>
  );
}
