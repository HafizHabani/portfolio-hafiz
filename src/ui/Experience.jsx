// src/components/sections/ExperienceSection.jsx
import Animblock     from "../function/Animblock";
import Experiencerow from "../function/Experiencerow";

export default function Experience({ experience }) {
  return (
    <section
      id="experience"
      style={{ padding: "120px 48px", background: "#fafaf8", borderTop: "1px solid #e8e8e8" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <Animblock>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: 6, color: "#aaa", marginBottom: 32 }}>
            04 &nbsp;/&nbsp; EXPERIENCE
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 300, letterSpacing: -1, marginBottom: 64 }}>
            Perjalanan<br />Karier.
          </h2>
        </Animblock>

        <div>
            {experience.map((exp, i) => (
                <Animblock key={i} delay={i * 0.15}>
                <Experiencerow exp={exp} isLast={i === experience.length - 1} />
            </Animblock>
          ))}
        </div>

      </div>
    </section>
  );
}
