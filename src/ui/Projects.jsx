// src/components/sections/ProjectsSection.jsx
import Animblock   from "../function/Animblock";
import Projectcard from "../function/Projectcard";

export default function Projects({ projects }) {
  return (
    <section id="projects" style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <Animblock>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: 6, color: "#aaa", marginBottom: 32 }}>
            03 &nbsp;/&nbsp; PROJECTS
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 300, letterSpacing: -1, marginBottom: 64 }}>
            Repository<br />Projects
          </h2>
        </Animblock>

        {/* 2-col grid separated by 1px #e8e8e8 lines */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#e8e8e8" }}>
          {projects.map((p, i) => (
            <Animblock key={p.id} delay={i * 0.1}>
              <Projectcard project={p} />
            </Animblock>
          ))}
        </div>

      </div>
    </section>
  );
}
