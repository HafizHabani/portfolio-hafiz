// src/ui/Projects.jsx
import Animblock   from "../function/Animblock";
import Projectcard from "../function/Projectcard";

export default function Projects({ projects }) {
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
          <p className="font-mono text-[15px] md:text-[16px] text-[#394867] mb-14 max-w-lg leading-[1.8]">
            A selection of web and system projects — click any card to view the repository.
          </p>
        </Animblock>

        {/* Grid: 1 col mobile, 2 col desktop, separated by 1px borders */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 1, background: "#9BA4B5" }}
        >
          {projects.map((p, i) => (
            <Animblock key={p.id} delay={(i % 2) * 0.1}>
              <Projectcard project={p} />
            </Animblock>
          ))}
        </div>

      </div>
    </section>
  );
}