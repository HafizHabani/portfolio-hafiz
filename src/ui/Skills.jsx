// src/components/sections/SkillsSection.jsx
import Animblock from "../function/Animblock";
import Skillbar  from "../function/Skillbar";

export default function Skills({ skills }) {
  return (
    <section
      id="skills"
      style={{ padding: "120px 48px", background: "#111", position: "relative", overflow: "hidden" }}
    >
      {/* Kanji watermark */}
      <div style={{
        position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)",
        fontSize: 260, color: "rgba(255,255,255,0.03)", lineHeight: 1,
        fontFamily: "'Noto Serif JP', serif", userSelect: "none",
      }}>術</div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <Animblock>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: 6, color: "#555", marginBottom: 32 }}>
            02 &nbsp;/&nbsp; SKILLS
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 300, letterSpacing: -1, color: "#fff", marginBottom: 64 }}>
            Code<br />
          </h2>
        </Animblock>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }}>
          {skills.map((skill, i) => (
            <Skillbar key={skill.cat} skill={skill} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
