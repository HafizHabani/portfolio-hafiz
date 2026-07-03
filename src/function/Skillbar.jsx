// src/components/SkillBar.jsx
import { useInView } from "../features/useInView";

export default function Skillbar({ skill, delay }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} style={{ marginBottom: 28 }}>
      {/* Label row */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{
          fontSize: 11, letterSpacing: 3,
          color: "#fff", fontFamily: "'Courier New', monospace",
        }}>
          {skill.cat.toUpperCase()}
        </span>
        <span style={{
          fontSize: 11, letterSpacing: 2,
          color: "#555", fontFamily: "'Courier New', monospace",
        }}>
          {skill.level}%
        </span>
      </div>

      {/* Bar */}
      <div style={{ height: 1, background: "#222", position: "relative" }}>
        <div style={{
          position:   "absolute",
          left: 0, top: 0,
          height:     1,
          background: "#fff",
          width:      inView ? `${skill.level}%` : "0%",
          transition: `width 1.2s ${delay}s cubic-bezier(0.4,0,0.2,1)`,
        }} />
      </div>

      {/* Tech chips */}
      <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
        {skill.items.map(item => (
          <span key={item} style={{
            fontSize: 10, letterSpacing: 1,
            color: "#555", fontFamily: "'Courier New', monospace",
            border: "1px solid #2a2a2a", padding: "2px 8px",
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
