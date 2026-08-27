// src/function/ProjectGridCard.jsx
import ScrollPreview from "./ScrollPreview";
import { techIcon } from "../data/techIcons";

export default function ProjectGridCard({ project, index, total }) {
  const hasPreview = Boolean(project.previewWeb || project.previewAndroid);

  return (
    <div
      className="flex flex-col h-full border bg-white/0"
      style={{ borderColor: "#9BA4B5" }}
    >
      {/* header */}
      <div
        className="flex items-start justify-between gap-4 px-5 py-4 border-b"
        style={{ borderColor: "#9BA4B5" }}
      >
        <div className="min-w-0">
          <span className="font-mono text-[11px] tracking-[0.25em] text-[#9BA4B5]">
            {project.id} &nbsp;·&nbsp; {String(index + 1).padStart(2, "0")}/
            {String(total).padStart(2, "0")} &nbsp;·&nbsp; {project.year}
          </span>
          <h3 className="font-serif font-light text-[18px] md:text-[20px] text-[#212A3E] tracking-[-0.01em] leading-[1.25] mt-1 truncate">
            {project.name}
          </h3>
        </div>
        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[12px] tracking-[0.15em] text-[#394867] hover:text-[#212A3E] transition-colors duration-300 shrink-0 mt-1"
        >
          ↗
        </a>
      </div>

      {/* preview */}
      {hasPreview && (
        <div className="flex" style={{ background: "#9BA4B5", gap: 1 }}>
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
      )}

      {/* description */}
      <p
        className="font-mono text-[12px] leading-[1.75] text-[#394867] px-5 py-4 border-b"
        style={{ borderColor: "#9BA4B5" }}
      >
        {project.desc}
      </p>

      {/* tags */}
      <div className="flex flex-wrap gap-2 px-5 py-4 mt-auto">
        {project.tags.map((t) => {
          const Icon = techIcon(t);
          return (
            <span
              key={t}
              className="font-mono text-[11px] tracking-[0.1em] px-2.5 py-1 border flex items-center gap-1.5"
              style={{ borderColor: "#9BA4B5", color: "#394867" }}
            >
              {Icon ? <Icon size={12} /> : null}
              {t}
            </span>
          );
        })}
      </div>
    </div>
  );
}
