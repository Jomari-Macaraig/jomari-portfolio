import { SITE } from "../../data/site.js";

export default function Footer() {
  return (
    <footer className="z-20 flex justify-between border-t border-line items-center gap-4 pb-5 py-5 px-5 sm:px-10 md:px-20 lg:px-40 bg-bg/60 text-fg">
      <div className="flex flex-col gap-2">
        <h5 className="font-display text-2xl font-thin ">{SITE.name}</h5>
        <p className="font-mono font-thin text-xs tracking-widest">{SITE.address}</p>
      </div>
      <div className="font-mono font-thin text-xs uppercase ">{SITE.credits}</div>
    </footer>
  );
}
