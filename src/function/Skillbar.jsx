// src/function/Skillbar.jsx
import { useInView } from "../features/useInView";
import { SiJavascript, SiReact, SiFirebase, SiGooglegemini } from "react-icons/si";

const CAT_ICON = {
  Languages:         SiJavascript,
  Frameworks:        SiReact,
  "Cloud & Data":    SiFirebase,
  "AI & Automation": SiGooglegemini,
};

const CAT_GRAD = [
  "linear-gradient(135deg, var(--lift), var(--accent))",
  "linear-gradient(135deg, var(--accent), var(--lift))",
  "linear-gradient(135deg, var(--accent-h), var(--accent))",
  "linear-gradient(135deg, var(--ink-2), var(--accent-h))",
];

export default function Skillbar({ skill, index = 0, delay = 0 }) {
  const [ref, inView] = useInView();
  const Icon = CAT_ICON[skill.cat] || null;
  const grad = CAT_GRAD[index % CAT_GRAD.length];

  return (
    <div
      ref={ref}
      className="group h-full rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-7 hover:border-[var(--chip-hover-line)] hover:bg-[var(--card-h)] hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* circular icon */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-[var(--ink)] shadow-lg mb-6"
        style={{ background: grad, boxShadow: "0 10px 26px -8px var(--btn-shadow)" }}
      >
        {Icon ? <Icon size={22} /> : <span className="font-display text-xl font-semibold">{skill.items.length}</span>}
      </div>

      {/* category + count */}
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-[19px] font-medium tracking-[-0.01em] text-[var(--ink)] leading-snug">
          {skill.cat}
        </h3>
        <span className="mono text-[10px] text-[var(--ink-3)] shrink-0">
          {String(skill.items.length).padStart(2, "0")} tools
        </span>
      </div>

      {/* chips */}
      <div className="flex flex-wrap gap-2 mt-5">
        {skill.items.map((item) => (
          <span
            key={item}
            className="chip"
            style={{
              opacity:    inView ? 1 : 0,
              transform:  inView ? "translateY(0)" : "translateY(8px)",
              transition: `opacity 0.45s ${delay}s ease, transform 0.45s ${delay}s ease`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}