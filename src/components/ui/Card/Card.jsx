import { siGithub } from "simple-icons";
import Paragraph from "../Paragraph/Paragraph";

export default function Card({ index, title, description, stacks, github = "", className = "" }) {
  return (
    <div className={`flex flex-col gap-4 text-fg p-5 bg-bg hover:bg-bg-elevated focus-visible::bg-bg-elevated ${className}`}>
      <div className="flex justify-between text-accent">
        <div className="font-light font-mono text-xs">{index}</div>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-accent focus-visible:text-accent transition-colors duration-200"
          >
            <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d={siGithub.path} />
            </svg>
          </a>
        )}
      </div>

      <h4 className="text-2xl font-display">{title}</h4>
      <Paragraph>{description}</Paragraph>
      <ul className="flex flex-wrap gap-2">
        {stacks.map((item) => (
          <li key={item} className="font-mono uppercase font-light text-muted text-xs border border-line p-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
