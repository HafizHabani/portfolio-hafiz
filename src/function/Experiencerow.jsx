// src/function/Experiencerow.jsx
export default function Experiencerow({ exp }) {
  return (
    <div className="group relative pl-10 sm:pl-12 pb-10 md:pb-12 last:pb-0">
      {/* dot */}
      <span
        className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full"
        style={{
          background: "linear-gradient(135deg,var(--lift),var(--accent))",
          boxShadow: "0 0 0 4px var(--line-2)",
        }}
      />

      {/* year */}
      <div className="mono text-[11px] tracking-[0.1em] text-[var(--accent)]">
        {exp.year}
      </div>

      {/* role */}
      <h3 className="font-display text-[20px] md:text-[23px] font-medium tracking-[-0.015em] text-[var(--ink)] mt-1.5 leading-[1.3] group-hover:text-[var(--ink)] transition-colors duration-300">
        {exp.role}
      </h3>

      {/* company */}
      <div className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--ink-3)] mt-1">
        {exp.company}
      </div>

      {/* desc */}
      <p className="font-sans text-[14px] text-[var(--ink-2)] mt-3 leading-[1.85] max-w-2xl">
        {exp.desc}
      </p>
    </div>
  );
}