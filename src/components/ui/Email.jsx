import { SITE } from "../../data/site";

export default function Email() {
  return (
    <a
      href={SITE.email}
      className="px-4 py-4 bg-accent font-sans text-accent-ink hover:bg-accent-light focus-visible::bg-accent-light"
    >
      Email
    </a>
  );
}
