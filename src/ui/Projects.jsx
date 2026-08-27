// src/ui/Projects.jsx
import { useState } from "react";
import Animblock from "../function/Animblock";
import ProjectShowcase from "../function/ProjectShowcase";

export default function Projects({ projects }) {
  const [index, setIndex] = useState(0);
  const total = projects.length;
  const project = projects[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="projects" className="px-6 md:px-12 py-10 md:py-14 bg-[#F1F6F9]">
      <div className="max-w-[1100px] mx-auto">
        <Animblock>
          <div className="font-mono text-[12px] sm:text-[13px] tracking-[0.4em] text-[#394867] mb-8 uppercase">
            03 &nbsp;/&nbsp; Projects
          </div>
          <h2 className="font-serif font-light text-[38px] md:text-[46px] tracking-[-0.02em] mb-3 leading-[1.15] text-[#212A3E]">
            Repository<br />Projects.
          </h2>
          <p className="font-mono text-[15px] md:text-[16px] text-[#394867] mb-10 max-w-lg leading-[1.8]">
            A selection of web and system projects — hover a preview to scroll
            through it, or use the arrows to browse projects.
          </p>
        </Animblock>

        <Animblock key={project.id}>
          <div className="flex items-stretch gap-3 md:gap-6">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="shrink-0 w-9 md:w-11 flex items-center justify-center border font-mono text-[18px] transition-colors duration-300"
              style={{ borderColor: "#9BA4B5", color: "#394867" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#212A3E";
                e.currentTarget.style.color = "#F1F6F9";
                e.currentTarget.style.borderColor = "#212A3E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#394867";
                e.currentTarget.style.borderColor = "#9BA4B5";
              }}
            >
              ‹
            </button>

            <ProjectShowcase project={project} index={index} total={total} />

            <button
              onClick={next}
              aria-label="Next project"
              className="shrink-0 w-9 md:w-11 flex items-center justify-center border font-mono text-[18px] transition-colors duration-300"
              style={{ borderColor: "#9BA4B5", color: "#394867" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#212A3E";
                e.currentTarget.style.color = "#F1F6F9";
                e.currentTarget.style.borderColor = "#212A3E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#394867";
                e.currentTarget.style.borderColor = "#9BA4B5";
              }}
            >
              ›
            </button>
          </div>
        </Animblock>

        {/* progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${p.name}`}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{ background: i === index ? "#212A3E" : "#9BA4B5" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
