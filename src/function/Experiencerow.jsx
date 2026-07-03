// src/components/ExperienceRow.jsx
import { useState } from "react";

export default function Experiencerow({ exp, isLast }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:             "grid",
        gridTemplateColumns: "200px 1fr",
        padding:             "40px 0",
        paddingLeft:         hovered ? 16 : 0,
        borderBottom:        isLast ? "none" : "1px solid #e8e8e8",
        gap:                 40,
        cursor:              "none",
        transition:          "padding-left 0.3s ease",
      }}
    >
      {/* Year */}
      <div>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 11, letterSpacing: 2, color: "#aaa",
        }}>
          {exp.year}
        </div>
      </div>

      {/* Detail */}
      <div>
        <div style={{ fontSize: 18, fontWeight: 300, letterSpacing: -0.5, marginBottom: 4 }}>
          {exp.role}
        </div>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 11, letterSpacing: 2,
          color: "#aaa", marginBottom: 12,
        }}>
          {exp.company.toUpperCase()}
        </div>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 12, color: "#888", lineHeight: 1.7,
        }}>
          {exp.desc}
        </div>
      </div>
    </div>
  );
}
