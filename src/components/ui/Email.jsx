import { SITE } from "../../data/site";

export default function Email() {
  return (
    <a
      href={SITE.email}
      className="px-4 py-2 bg-accent font-display text-accent-ink"
    >
      Email
    </a>
  );
}
