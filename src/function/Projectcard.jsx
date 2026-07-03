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
      style={{
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "space-between",
        background:     hovered ? "#111" : "#fafaf8",
        padding:        48,
        minHeight:      260,
        textDecoration: "none",
        cursor:         "none",
        transition:     "background 0.4s ease",
      }}
    >
      {/* Top meta */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
          <span style={{
            fontFamily: "'Courier New', monospace", fontSize: 10,
            color: hovered ? "#555" : "#ccc", letterSpacing: 3,
          }}>
            {project.id}
          </span>
          <span style={{
            fontFamily: "'Courier New', monospace", fontSize: 10,
            color: hovered ? "#555" : "#ccc", letterSpacing: 2,
          }}>
            {project.year}
          </span>
        </div>

        <h3 style={{
          fontSize: 22, fontWeight: 300, letterSpacing: -0.5,
          color: hovered ? "#fff" : "#111",
          marginBottom: 12,
          transition: "color 0.4s ease",
        }}>
          {project.name}
        </h3>

        <p style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 12, lineHeight: 1.7,
          color: hovered ? "#666" : "#888",
          transition: "color 0.4s ease",
        }}>
          {project.desc}
        </p>
      </div>

      {/* Bottom — tags + link arrow */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 24 }}>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {project.tags.map(t => (
            <span key={t} style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 9, letterSpacing: 2,
              padding: "4px 10px",
              border: `1px solid ${hovered ? "#333" : "#e0e0e0"}`,
              color:  hovered ? "#555" : "#aaa",
              transition: "all 0.4s ease",
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Arrow indicator */}
        <span style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 11,
          color: hovered ? "#fff" : "#ddd",
          letterSpacing: 1,
          transition: "all 0.4s ease",
          transform: hovered ? "translate(3px, -3px)" : "translate(0, 0)",
          display: "inline-block",
          flexShrink: 0,
          marginLeft: 16,
        }}>
          ↗
        </span>

      </div>
    </a>
  );
}