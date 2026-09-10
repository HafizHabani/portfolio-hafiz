// src/ui/Projects.jsx
import Animblock from "../function/Animblock";
import ProjectGridCard from "../function/ProjectGridCard";

export default function Projects({ projects }) {
  const total = projects.length;

  return (
    <section id="projects" className="px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[var(--page)] border-t border-[var(--line)]">
      <div className="max-w-[1120px] mx-auto">
        <Animblock>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="mono text-[12px] tracking-[0.18em] uppercase text-[var(--accent)] mb-4">
                My Latest Works
              </div>
              <h2 className="font-display font-semibold text-[36px] md:text-[46px] tracking-[-0.03em] leading-[1.1] text-[var(--ink)]">
                Featured<br />projects.
              </h2>
              <p className="font-sans text-[16px] md:text-[17px] text-[var(--ink-2)] mt-4 max-w-lg leading-[1.8]">
                A selection of web and system projects — hover a preview to scroll
                through it, or open the repo link to see more.
              </p>
            </div>
            <a
              href="https://github.com/HafizHabani"
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[13px] tracking-[0.1em] text-[var(--accent)] hover:text-[var(--accent-h)] transition-colors duration-200 shrink-0 pb-1 hover:underline underline-offset-4"
            >
              Explore more works →
            </a>
          </div>
        </Animblock>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 items-start">
          {projects.map((project, i) => (
            <Animblock key={project.id} delay={(i % 2) * 0.08}>
              <ProjectGridCard project={project} index={i} total={total} />
            </Animblock>
          ))}
        </div>
      </div>
    </section>
  );
}