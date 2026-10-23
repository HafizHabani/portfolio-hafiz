// src/function/Skillbar.jsx
import { useInView } from "../features/useInView";
import { techIcon } from "../data/techIcons";
import {
  SiOpenaigym,
  SiGithubactions,
} from "react-icons/si";
import { FiCode, FiLayers, FiDatabase, FiCpu } from "react-icons/fi";

const CAT_META = {
  Languages: {
    icon: FiCode,
    badge: "Syntax & Core",
    desc: "Foundational programming languages used across scripts, frontend, and database queries.",
  },
  Frameworks: {
    icon: FiLayers,
    badge: "Web & Mobile",
    desc: "Modern reactive frameworks and libraries for building scalable cross-platform user interfaces.",
  },
  "Cloud & Data": {
    icon: FiDatabase,
    badge: "Backend & Systems",
    desc: "Databases, authentication layers, REST APIs, and cloud services powering reliable applications.",
  },
  "AI & Automation": {
    icon: FiCpu,
    badge: "Intelligence & CI/CD",
    desc: "LLM engineering, API orchestration, automated pipelines, and developer workflows.",
  },
};

const EXTRA_ICONS = {
  "OpenAI API": SiOpenaigym,
  "GitHub Actions": SiGithubactions,
};

export default function Skillbar({ skill, delay = 0 }) {
  const [ref, inView] = useInView();
  const meta = CAT_META[skill.cat] || { icon: FiCode, badge: "Tools", desc: "" };
  const Icon = meta.icon;

  return (
    <div
      ref={ref}
      className="group h-full rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 sm:p-7 hover:border-[var(--chip-hover-line)] hover:bg-[var(--card-h)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top bar: Icon + badge */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--surface)] border border-[var(--line)] text-[var(--accent)] group-hover:scale-110 group-hover:border-[var(--accent)] transition-all duration-300 shadow-lg">
            <Icon size={20} />
          </div>
          <span className="mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-[var(--surface)] text-[var(--ink-3)] border border-[var(--line-2)]">
            {String(skill.items.length).padStart(2, "0")} Tools
          </span>
        </div>

        {/* Category Title & Badge */}
        <div className="mb-3">
          <h3 className="font-display text-[20px] sm:text-[22px] font-semibold tracking-tight text-[var(--ink)] leading-snug">
            {skill.cat}
          </h3>
          <span className="mono text-[11px] text-[var(--accent)] font-medium">
            {meta.badge}
          </span>
        </div>

        {/* Description */}
        <p className="font-sans text-[13px] text-[var(--ink-2)] leading-relaxed mb-6">
          {meta.desc}
        </p>
      </div>

      {/* Tech Chips */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--line-2)]">
        {skill.items.map((item) => {
          const TechSvg = techIcon(item) || EXTRA_ICONS[item] || null;
          return (
            <span
              key={item}
              className="chip group/chip hover:border-[var(--accent)]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 0.45s ${delay}s ease, transform 0.45s ${delay}s ease`,
              }}
            >
              {TechSvg ? (
                <TechSvg size={12} className="text-[var(--accent)] group-hover/chip:scale-110 transition-transform shrink-0" />
              ) : null}
              <span>{item}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
