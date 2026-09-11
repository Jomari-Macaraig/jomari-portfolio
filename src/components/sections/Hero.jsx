import { SITE } from "../../data/site";
import Email from "../ui/Email";
import CTA from "../ui/CTA";
import Link from "../ui/Link";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col justify-end z-10 min-h-dvh pt-24 pb-40 px-40 text-muted">
      <div className="flex items-center justify-between font-mono font-extralight text-sm tracking-xl uppercase">
        <div>REMOTE · PYTHON · REACT · AWS · AI</div>
        <div className="text-accent tracking-widest">OPEN TO REMOTE · PART-TIME OR FULL-TIME</div>
      </div>
      <div className="mt-10 font-display font-bold text-9xl">
        <div className="text-fg">Software</div>
        <div className="block stroke-title">Engineer</div>
      </div>
      <div className="grid grid-cols-2 justify-between gap-4 mt-10 pt-10 font-display border-t border-line">
        <div className="space-y-4">
          <h1 className="text-fg text-5xl">{SITE.name}</h1>
          <p className="text-xl font-sans">{SITE.description}</p>
          <p className="font-mono font-light text-sm uppercase">CURRENTLY · {SITE.job}</p>
        </div>
        <div className="flex gap-4 justify-end items-center self-end">
          <Email title="Start a conversation" />
          <CTA title="View Work" link="#work" />
          <Link title="Linkedin" link={SITE.linkedin} />
        </div>
      </div>
    </section>
  );
}
