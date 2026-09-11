import { ArrowUpRight } from "lucide-react";

export default function Link({ title, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex font-sans text-fg">
      {title} <ArrowUpRight size={16} aria-hidden />
    </a>
  );
}
