// src/ui/Experience.jsx
import Animblock     from "../function/Animblock";
import Experiencerow from "../function/Experiencerow";

export default function Experience({ experience }) {
  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[var(--surface)] border-t border-[var(--line)]"
    >
      <div className="max-w-[1120px] mx-auto">

        <Animblock>
          <div className="mono text-[12px] tracking-[0.18em] uppercase text-[var(--accent)] mb-4">
            My Work Experience
          </div>
          <h2 className="font-display font-semibold text-[36px] md:text-[46px] tracking-[-0.03em] leading-[1.1] text-[var(--ink)] mb-4">
            Where I've worked.
          </h2>
          <p className="font-sans text-[16px] md:text-[17px] text-[var(--ink-2)] mb-14 max-w-lg leading-[1.8]">
            Roles and responsibilities across IT support, infrastructure, and development.
          </p>
        </Animblock>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)]/70 via-[var(--ink-3)]/40 to-transparent" />

          <div>
            {experience.map((exp, i) => (
              <Animblock key={i} delay={(i % 2) * 0.07}>
                <Experiencerow exp={exp} isLast={i === experience.length - 1} />
              </Animblock>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}