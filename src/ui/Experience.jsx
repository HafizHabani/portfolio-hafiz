// src/ui/Experience.jsx
import Animblock     from "../function/Animblock";
import Experiencerow from "../function/Experiencerow";

export default function Experience({ experience }) {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 py-10 md:py-14 bg-[#fafaf8] border-t border-[#e8e8e8]"
    >
      <div className="max-w-[1100px] mx-auto">

        <Animblock>
          <div className="font-mono text-[10px] tracking-[0.5em] text-[#bbb] mb-8 uppercase">
            04 &nbsp;/&nbsp; Experience
          </div>
          <h2 className="font-serif font-light text-[36px] md:text-[42px] tracking-[-0.03em] mb-3 leading-[1.15]">
            Work<br />Experience.
          </h2>
          <p className="font-mono text-[12px] text-[#888] mb-14 max-w-lg leading-[1.8]">
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
