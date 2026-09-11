import { SITE } from "../../data/site";

export default function Email({ title }) {
  return (
    <a
      href={SITE.email}
      className="px-4 py-4 bg-accent font-sans text-shadow-mauve-700 text-accent-ink hover:bg-accent-light focus-visible::bg-accent-light"
    >
      {title}
    </a>
  );
}
