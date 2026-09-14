import { SITE } from "../../data/site.js";

export default function Email({ title, className = "" }) {
  return (
    <a
      href={SITE.mailto}
      className={`px-4 py-4 bg-accent font-sans text-accent-ink hover:bg-accent-light focus-visible:bg-accent-light ${className}`}
    >
      {title}
    </a>
  );
}
