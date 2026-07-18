// src/function/Experiencerow.jsx
import { useState } from "react";

export default function Experiencerow({ exp, isLast }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="grid gap-6 md:gap-10 py-8 md:py-10 transition-all duration-300"
      style={{
        gridTemplateColumns: "1fr",
        borderBottom: isLast ? "none" : "1px solid #e8e8e8",
        paddingLeft: hovered ? 16 : 0,
        cursor: "none",
      }}
    >
      {/* Mobile: stacked. Desktop: side-by-side via inner grid */}
      <div className="md:grid md:gap-10" style={{ gridTemplateColumns: "180px 1fr" }}>

        {/* Left — year + company */}
        <div className="mb-2 md:mb-0">
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#aaa] mb-1">
            {exp.year}
          </div>
          <div className="font-mono text-[11px] tracking-[0.15em] text-[#888] uppercase">
            {exp.company}
          </div>
        </div>

        {/* Right — role + desc */}
        <div>
          <div className="font-serif font-light text-[20px] md:text-[22px] tracking-[-0.02em] text-[#111] mb-2 leading-[1.3]">
            {exp.role}
          </div>
          <div className="font-mono text-[12px] text-[#888] leading-[1.75]">
            {exp.desc}
          </div>

          {/* Optional: tech tags */}
          {exp.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.tags.map(t => (
                <span key={t} className="font-mono text-[9px] tracking-[0.1em] px-2.5 py-1 border border-[#e8e8e8] text-[#aaa]">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
