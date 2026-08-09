// src/function/Projectcard.jsx
import { useState } from "react";

export default function Projectcard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col justify-between p-8 md:p-10 min-h-[280px] no-underline transition-colors duration-300"
      style={{ background: hovered ? "#212A3E" : "#F1F6F9", cursor: "none" }}
    >
      {/* Top */}
      <div>
        {/* ID + Year */}
        <div className="flex justify-between items-center mb-5">
          <span
            className="font-mono text-[10px] tracking-[0.25em]"
            style={{ color: hovered ? "#9BA4B5" : "#9BA4B5" }}
          >
            {project.id}
          </span>
          <span
            className="font-mono text-[10px] tracking-[0.15em]"
            style={{ color: hovered ? "#9BA4B5" : "#9BA4B5" }}
          >
            {project.year}
          </span>
        </div>

        {/* Name */}
        <h3
          className="font-serif font-light text-[18px] md:text-[20px] tracking-[-0.02em] mb-3 leading-[1.3] transition-colors duration-300"
          style={{ color: hovered ? "#F1F6F9" : "#212A3E" }}
        >
          {project.name}
        </h3>

        {/* Description — more readable size */}
        <p
          className="font-mono text-[12px] leading-[1.75] transition-colors duration-300"
          style={{ color: hovered ? "#9BA4B5" : "#394867" }}
        >
          {project.desc}
        </p>
      </div>

      {/* Bottom — tags + arrow */}
      <div className="flex justify-between items-end mt-6 gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span
              key={t}
              className="font-mono text-[9px] tracking-[0.12em] px-2.5 py-1 transition-all duration-300"
              style={{
                border: `1px solid ${hovered ? "#394867" : "#9BA4B5"}`,
                color:  hovered ? "#9BA4B5" : "#394867",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <span
          className="font-mono text-[13px] shrink-0 transition-all duration-300"
          style={{
            color:     hovered ? "#F1F6F9" : "#394867",
            transform: hovered ? "translate(3px, -3px)" : "translate(0,0)",
            display:   "inline-block",
          }}
        >↗</span>
      </div>
    </a>
  );
}