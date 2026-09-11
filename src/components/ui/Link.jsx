import { ArrowUpRight } from "lucide-react";

export default function Link({ title, link, className = "" }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-2 font-sans text-fg transition-colors duration-200 hover:text-accent focus-visible:text-accent ${className}`}
    >
      {title} <ArrowUpRight size={16} aria-hidden />
    </a>
  );
}
