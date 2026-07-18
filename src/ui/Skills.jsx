// src/ui/Skills.jsx
import Animblock from "../function/Animblock";
import Skillbar  from "../function/Skillbar";

export default function Skills({ skills }) {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 py-10 md:py-14 bg-[#111] relative overflow-hidden"
    >
      {/* Kanji watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none font-serif leading-none"
        style={{ fontSize: "clamp(120px, 20vw, 260px)", color: "rgba(255,255,255,0.025)" }}
      >術</div>

      <div className="max-w-[1100px] mx-auto relative z-10">

        <Animblock>
          <div className="font-mono text-[10px] tracking-[0.5em] text-[#444] mb-8 uppercase">
            02 &nbsp;/&nbsp; Skills
          </div>
          <h2 className="font-serif font-light text-[36px] md:text-[42px] tracking-[-0.03em] text-white mb-4 leading-[1.15]">
            Technical<br />Stack.
          </h2>
          <p className="font-mono text-[12px] text-[#444] mb-14 max-w-md leading-[1.8]">
            Tools and technologies I use to build, configure, and maintain systems.
          </p>
        </Animblock>

        {/* 2-col on desktop, 1-col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
          {skills.map((skill, i) => (
            <Skillbar key={skill.cat} skill={skill} delay={i * 0.1} />
          ))}
        </div>

      </div>
    </section>
  );
}
