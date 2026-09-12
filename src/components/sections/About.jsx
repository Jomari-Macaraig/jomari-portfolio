import { SITE } from "../../data/site";

export default function About() {
  return (
    <div id="about" className="flex flex-col lg:flex-row gap-15 px-6 pt-24 pb-12 sm:px-10 md:px-20 lg:px-40 text-fg">
      <div className="flex flex-col gap-5 flex-1">
        <div className="flex items-center gap-4 font-mono font-light text-sm tracking-wide">
          <span className="text-accent ">{SITE.about.section[0]}</span>
          <span className="h-px flex-1 max-w-12 border-t border-line" aria-hidden></span>
          <span className="text-muted uppercase">{SITE.about.section[1]}</span>
        </div>
        <div>
          {SITE.about.title.map((item, index) => (
            <h2 key={index} className="font-display text-5xl tracking-wide ">
              {item}
            </h2>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 flex-2">
        <div className="font-sans font-light tracking-wide text-3xl px-5 py-3 border-l-2 border-accent">
          {SITE.about.highlight}
        </div>
        <div>
          {SITE.about.description.map((item, index) => (
            <>
              <p key={index} className="text-muted font-sans font-light">
                {item}
              </p>
              <br />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
