// src/ui/Experience.jsx
import Animblock     from "../function/Animblock";
import Experiencerow from "../function/Experiencerow";

export default function Experience({ experience }) {
  return (
    <section
      id="experience"
      className="px-5 sm:px-6 md:px-12 py-10 md:py-14 bg-[#F1F6F9] border-t border-[#9BA4B5]/30"
    >
      <div className="max-w-[1100px] mx-auto">

        <Animblock>
          {/* Section label */}
          <div className="font-mono text-[12px] sm:text-[13px] tracking-[0.3em] sm:tracking-[0.4em] text-[#394867] mb-6 md:mb-8 uppercase">
            04 &nbsp;/&nbsp; Experience
          </div>

          {/* Heading */}
          <h2
            className="font-serif font-light leading-[1.15] tracking-[-0.02em] mb-3 text-[#212A3E]"
            style={{
              fontSize: "clamp(32px, 6vw, 46px)",
            }}
          >
            Work<br />Experience.
          </h2>

          {/* Description */}
          <p className="font-mono text-[15px] md:text-[16px] text-[#394867] tracking-[0.01em] mb-10 md:mb-14 max-w-lg leading-[1.8]">
            Roles and responsibilities across IT support, infrastructure, and development.
          </p>
        </Animblock>

        <div>
          {experience.map((exp, i) => (
            <Animblock key={i} delay={i * 0.12}>
              <Experiencerow exp={exp} isLast={i === experience.length - 1} />
            </Animblock>
          ))}
        </div>

      </div>
    </section>
  );
}