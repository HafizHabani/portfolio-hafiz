// src/ui/Projects.jsx
import { useState } from "react";
import Animblock from "../function/Animblock";
import ProjectGridCard from "../function/ProjectGridCard";
import { FiArrowUpRight, FiFilter } from "react-icons/fi";

const FILTERS = [
  { id: "all", label: "All Works" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & API" },
  { id: "gov", label: "Gov & Public" },
  { id: "logistics", label: "Logistics & Commerce" },
];

export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "frontend") return p.name.includes("Frontend");
    if (activeFilter === "backend") return p.name.includes("Backend");
    if (activeFilter === "gov") return p.name.includes("SPBE") || p.name.includes("SISKAMLING");
    if (activeFilter === "logistics") return p.name.includes("JaRang") || p.name.includes("Foodlink");
    return true;
  });

  return (
    <section id="projects" className="px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[var(--page)] border-t border-[var(--line)]">
      <div className="max-w-[1120px] mx-auto">
        
        {/* Header Row */}
        <Animblock>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="mono text-[12px] tracking-[0.18em] uppercase text-[var(--accent)] mb-3">
                03 / Featured Works
              </div>
              <h2 className="font-display font-bold text-[34px] sm:text-[44px] md:text-[50px] tracking-tight leading-[1.08] text-[var(--ink)]">
                Selected <span className="gradient-text">Projects.</span>
              </h2>
            </div>
            <p className="font-sans text-[16px] text-[var(--ink-2)] max-w-md leading-relaxed">
              Real-world systems, e-government portals, and fullstack platforms. Toggle Web/App view and hover preview to auto-scroll.
            </p>
          </div>
        </Animblock>

        {/* Filter Pills + Counter */}
        <Animblock delay={0.08}>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-10 pb-4 border-b border-[var(--line-2)]">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[12px] mono text-[var(--ink-3)] mr-1 hidden sm:inline-flex items-center gap-1">
                <FiFilter size={12} /> Filter:
              </span>
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`
                    px-3.5 py-1.5 rounded-full text-[12px] mono transition-all duration-200 cursor-pointer border
                    ${
                      activeFilter === f.id
                        ? "bg-[var(--btn-grad)] text-[var(--btn-ink)] border-transparent font-semibold shadow-sm"
                        : "bg-[var(--card)] text-[var(--ink-2)] border-[var(--line)] hover:text-[var(--ink)] hover:border-[var(--chip-hover-line)]"
                    }
                  `}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="mono text-[12px] text-[var(--ink-3)]">
              Showing <span className="text-[var(--ink)] font-semibold">{filteredProjects.length}</span> of {projects.length}
            </div>
          </div>
        </Animblock>

        {/* 2-column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 items-start">
          {filteredProjects.map((project, i) => (
            <Animblock key={project.id} delay={(i % 2) * 0.08}>
              <ProjectGridCard
                project={project}
              />
            </Animblock>
          ))}
        </div>

        {/* GitHub repository archive banner */}
        <Animblock delay={0.2}>
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[var(--card)] border border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="font-display text-[18px] sm:text-[20px] font-semibold text-[var(--ink)]">
                Want to inspect more code repositories?
              </h4>
              <p className="font-sans text-[14px] text-[var(--ink-2)] mt-1">
                Explore open-source contributions, scripts, and legacy codebases on GitHub.
              </p>
            </div>
            <a
              href="https://github.com/HafizHabani"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !gap-2 shrink-0"
            >
              <span>Explore GitHub Profile</span>
              <FiArrowUpRight size={14} />
            </a>
          </div>
        </Animblock>

      </div>
    </section>
  );
}
