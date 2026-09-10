// src/ui/Skills.jsx
import Animblock from "../function/Animblock";
import Skillbar  from "../function/Skillbar";

export default function Skills({ skills }) {
  return (
    <section
      id="skills"
      className="px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[var(--surface)] border-t border-[var(--line)] relative overflow-hidden"
    >
      {/* faint center glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[320px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(closest-side, var(--glow-a), transparent)" }}
      />

      <div className="max-w-[1120px] mx-auto relative z-10">

        {/* Heading — centered, Binjan style */}
        <Animblock>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="mono text-[12px] tracking-[0.18em] uppercase text-[var(--ink-3)] mb-4">
              My Services
            </div>
            <h2 className="font-display font-semibold text-[36px] md:text-[46px] tracking-[-0.03em] leading-[1.1] text-[var(--ink)]">
              What do I <span className="gradient-text">help</span> you with?
            </h2>
          </div>
        </Animblock>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {skills.map((skill, i) => (
            <Animblock key={skill.cat} delay={i * 0.08}>
              <Skillbar skill={skill} index={i} />
            </Animblock>
          ))}
        </div>

      </div>
    </section>
  );
}