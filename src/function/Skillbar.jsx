// src/function/Skillbar.jsx
import { useInView } from "../features/useInView";

export default function Skillbar({ skill, delay }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="mb-10">
      {/* Category + level */}
      <div className="flex justify-between items-center mb-3">
        <span className="font-mono text-[11px] tracking-[0.25em] text-white uppercase">
          {skill.cat}
        </span>
        <span className="font-mono text-[11px] tracking-[0.1em] text-[#444]">
          {skill.level}%
        </span>
      </div>

      {/* Bar track */}
      <div className="h-px bg-[#1e1e1e] relative mb-3">
        <div
          className="absolute top-0 left-0 h-px bg-white"
          style={{
            width: inView ? `${skill.level}%` : "0%",
            transition: `width 1.2s ${delay}s cubic-bezier(0.4,0,0.2,1)`,
          }}
        />
      </div>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-2">
        {skill.items.map(item => (
          <span
            key={item}
            className="font-mono text-[10px] tracking-[0.05em] text-[#555] border border-[#2a2a2a] px-2.5 py-1 hover:text-[#aaa] hover:border-[#444] transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
