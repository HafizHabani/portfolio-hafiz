// src/ui/Experience.jsx
import Animblock from "../function/Animblock";
import Experiencerow from "../function/Experiencerow";

export default function Experience({ experience }) {
  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[var(--surface)] border-t border-[var(--line)]"
    >
      <div className="max-w-[1120px] mx-auto">
        
        {/* Header */}
        <Animblock>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="mono text-[12px] tracking-[0.18em] uppercase text-[var(--accent)] mb-3">
                04 / Career Roadmap
              </div>
              <h2 className="font-display font-bold text-[34px] sm:text-[44px] md:text-[50px] tracking-tight leading-[1.08] text-[var(--ink)]">
                Work <span className="gradient-text">Journey.</span>
              </h2>
            </div>
            <p className="font-sans text-[16px] text-[var(--ink-2)] max-w-md leading-relaxed">
              Proven track record across corporate IT operations, government portal frontend engineering, and independent hardware services.
            </p>
          </div>
        </Animblock>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical spine line */}
          <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--line)] to-transparent" />

          <div className="space-y-2">
            {experience.map((exp, i) => (
              <Animblock key={exp.company + i} delay={(i % 2) * 0.06}>
                <Experiencerow exp={exp} isLast={i === experience.length - 1} />
              </Animblock>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
