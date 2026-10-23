// src/ui/Skills.jsx
import Animblock from "../function/Animblock";
import Skillbar from "../function/Skillbar";

export default function Skills({ skills }) {
  return (
    <section
      id="skills"
      className="px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[var(--surface)] border-t border-[var(--line)] relative overflow-hidden"
    >
      {/* Ambient center backlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] rounded-full pointer-events-none opacity-40"
        style={{ background: "radial-gradient(closest-side, var(--glow-a), transparent)" }}
      />

      <div className="max-w-[1120px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <Animblock>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="mono text-[12px] tracking-[0.18em] uppercase text-[var(--accent)] mb-3">
                02 / Technical Skills
              </div>
              <h2 className="font-display font-bold text-[34px] sm:text-[44px] md:text-[50px] tracking-tight leading-[1.08] text-[var(--ink)]">
                Technical <span className="gradient-text">Capabilities.</span>
              </h2>
            </div>
            <p className="font-sans text-[16px] text-[var(--ink-2)] max-w-md leading-relaxed">
              Curated toolset and technologies leveraged across production systems, enterprise networks, and web development.
            </p>
          </div>
        </Animblock>

        {/* 4-column modern card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {skills.map((skill, i) => (
            <Animblock key={skill.cat} delay={i * 0.08}>
              <Skillbar skill={skill} delay={i * 0.08} />
            </Animblock>
          ))}
        </div>

      </div>
    </section>
  );
}
