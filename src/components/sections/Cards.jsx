import Card from "../ui/Card";

import { SITE } from "../../data/site";

const HIGHLIGHT_DIVIDERS = [
  "border-b sm:border-r lg:border-b-0",
  "border-b md:border-r lg:border-b-0",
  "border-b sm:border-b-0 sm:border-r",
  "",
];

export default function Cards() {
  console.log(SITE.highlights);
  return (
    <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-24 pb-12 px-6 sm:px-10 md:px-20 lg:px-40">
      {SITE.highlights.map((highlight, index) => (
        <Card
          title={highlight.title}
          subtitle={highlight.subtitle}
          className={`w-full md:w-auto border-line ${HIGHLIGHT_DIVIDERS[index]}`}
        />
      ))}
    </div>
  );
}
