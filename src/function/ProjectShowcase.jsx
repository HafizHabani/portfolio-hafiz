// src/function/ProjectShowcase.jsx
import ScrollPreview from "./ScrollPreview";
import { techIcon } from "../data/techIcons";

export default function ProjectShowcase({ project, index, total }) {
  const hasPreview = Boolean(project.previewWeb || project.previewAndroid);

  return (
    <div className="flex-1 min-w-0 border" style={{ borderColor: "#9BA4B5" }}>
      {/* header */}
      <div
        className="flex items-start justify-between gap-4 px-5 md:px-8 py-4 border-b"
        style={{ borderColor: "#9BA4B5" }}
      >
        <div className="min-w-0">
          <span className="font-mono text-[11px] tracking-[0.25em] text-[#9BA4B5]">
            {project.id} &nbsp;·&nbsp; {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")} &nbsp;·&nbsp; {project.year}
          </span>
          <h3 className="font-serif font-light text-[20px] md:text-[24px] text-[#212A3E] tracking-[-0.01em] leading-[1.25] mt-1 truncate">
            {project.name}
          </h3>
        </div>
        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[12px] tracking-[0.15em] text-[#394867] hover:text-[#212A3E] transition-colors duration-300 shrink-0 mt-1"
        >
          Repo ↗
        </a>
      </div>

      <p
        className="font-mono text-[12px] leading-[1.75] text-[#394867] px-5 md:px-8 py-4 border-b"
        style={{ borderColor: "#9BA4B5" }}
      >
        {project.desc}
      </p>

      {/* preview */}
      {hasPreview ? (
        <div className="flex flex-col sm:flex-row" style={{ background: "#9BA4B5", gap: 1 }}>
          {project.previewWeb && (
            <ScrollPreview src={project.previewWeb} label="UI Web" className="flex-[1.6]" />
          )}
          {project.previewAndroid && (
            <ScrollPreview src={project.previewAndroid} label="UI Android" className="flex-[0.85]" />
          )}

          {/* tech logo strip */}
          <div
            className="flex sm:flex-col items-center justify-start gap-3 py-4 sm:py-6 px-4 sm:px-3"
            style={{ background: "#F1F6F9", minWidth: 64 }}
          >
            {project.tags.map((t) => {
              const Icon = techIcon(t);
              return (
                <span
                  key={t}
                  title={t}
                  className="w-9 h-9 rounded-full border flex items-center justify-center shrink-0"
                  style={{ borderColor: "#9BA4B5", color: "#394867" }}
                >
                  {Icon ? (
                    <Icon size={16} />
                  ) : (
                    <span className="font-mono text-[8px] tracking-[0.05em]">
                      {t.slice(0, 3)}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      ) : (
        // no screenshots yet for this project — fall back to a plain tag list
        <div className="flex flex-wrap gap-2 px-5 md:px-8 py-6">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[12px] tracking-[0.12em] px-2.5 py-1 border"
              style={{ borderColor: "#9BA4B5", color: "#394867" }}
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
