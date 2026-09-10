// src/function/ProjectGridCard.jsx
import ScrollPreview from "./ScrollPreview";
import { techIcon } from "../data/techIcons";

// rotate accent tints per card, keeping the theme palette
const BLOCKS = [
  "linear-gradient(150deg, var(--glow-b), var(--line-2))",
  "linear-gradient(150deg, var(--ink-3), var(--line-2))",
  "linear-gradient(150deg, var(--accent-h), var(--line-2))",
  "linear-gradient(150deg, var(--accent), var(--line-2))",
];

export default function ProjectGridCard({ project, index, total }) {
  const hasPreview = Boolean(project.previewWeb || project.previewAndroid);
  const block = BLOCKS[index % BLOCKS.length];

  return (
    <article className="group flex flex-col h-full rounded-3xl border border-[var(--card-border)] bg-[var(--card)] hover:bg-[var(--card-h)] hover:border-[var(--chip-hover-line)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">

      {/* Color-blocked preview header */}
      <div className="p-3" style={{ background: block }}>
        {hasPreview ? (
          <div className="flex gap-1 rounded-2xl overflow-hidden">
            {project.previewWeb && (
              <ScrollPreview
                src={project.previewWeb}
                label="UI Web"
                className="flex-[1.6]"
              />
            )}
            {project.previewAndroid && (
              <ScrollPreview
                src={project.previewAndroid}
                label="UI Android"
                className="flex-[0.85]"
              />
            )}
          </div>
        ) : (
          <div className="h-40 rounded-2xl flex items-center justify-center border border-[var(--line)] bg-[var(--card)]/40">
            <span className="font-display text-[40px] font-semibold text-[var(--ink-3)]">
              {project.id}
            </span>
          </div>
        )}
      </div>

      {/* header row */}
      <header className="flex items-start justify-between gap-3 px-6 pt-6 pb-4">
        <div className="min-w-0">
          <span className="mono text-[11px] tracking-[0.1em] text-[var(--ink-3)]">
            {project.id} <span className="text-[var(--accent)]">/</span> {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")} <span className="text-[var(--accent)]">·</span> {project.year}
          </span>
          <h3 className="font-display text-[19px] md:text-[22px] font-medium text-[var(--ink)] tracking-[-0.01em] leading-[1.25] mt-1.5 group-hover:text-[var(--ink)] transition-colors duration-300">
            {project.name}
          </h3>
        </div>
        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open repository: ${project.name}`}
          className="w-9 h-9 shrink-0 mt-0.5 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink-3)] hover:text-[var(--ink)] hover:border-transparent hover:bg-[var(--card-h)] transition-all duration-300"
        >
          <span className="text-[15px] leading-none">↗</span>
        </a>
      </header>

      {/* description */}
      <p className="font-sans text-[13px] leading-[1.85] text-[var(--ink-2)] px-6">
        {project.desc}
      </p>

      {/* tags */}
      <div className="flex flex-wrap gap-2 px-6 py-5 mt-auto">
        {project.tags.map((t) => {
          const Icon = techIcon(t);
          return (
            <span key={t} className="chip">
              {Icon ? <Icon size={12} /> : null}
              {t}
            </span>
          );
        })}
      </div>
    </article>
  );
}