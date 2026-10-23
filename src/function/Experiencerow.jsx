// src/function/Experiencerow.jsx
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const HIGHLIGHT_TAGS = {
  "Tata Optima Property Palangkaraya": [
    "CCTV (300+ Points)",
    "MikroTik Routing",
    "LAN & Fiber Optic",
    "100+ Perangkat IT",
  ],
  "Dinas Komunikasi dan Informatika Kabupaten Malang": [
    "React.js",
    "e-Government",
    "UI Testing",
    "Laravel API",
  ],
  "Infinite Learning Indonesia": [
    "Web Development",
    "UI/UX Implementation",
    "QA & Component Testing",
  ],
  "Project Website Development": [
    "React.js",
    "Tailwind CSS",
    "REST API Integration",
    "Git",
  ],
  "Project Mobile Application Development": [
    "Flutter & Dart",
    "Android Development",
    "Firebase & Firestore",
  ],
  "Self-employed": [
    "Diagnosis Hardware/Software",
    "400+ Perangkat Serviced",
    "Data Recovery",
    "OS & Hardware Upgrade",
  ],
};

export default function Experiencerow({ exp, isLast }) {
  const isCurrent = exp.year.includes("Sekarang");
  const tags = HIGHLIGHT_TAGS[exp.company] || [];

  return (
    <div className={`relative pl-8 sm:pl-10 pb-10 ${isLast ? "pb-0" : ""}`}>
      {/* Timeline Node Icon */}
      <div
        className={`
          absolute -left-[11px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center
          transition-all duration-300
          ${
            isCurrent
              ? "bg-[var(--accent)] text-white ring-4 ring-[var(--accent)]/30 shadow-lg shadow-[var(--accent)]/40"
              : "bg-[var(--surface)] border-2 border-[var(--line)] text-[var(--ink-3)]"
          }
        `}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isCurrent ? "bg-white animate-pulse" : "bg-[var(--ink-3)]"
          }`}
        />
      </div>

      {/* Main Experience Card */}
      <div
        className={`
          p-6 sm:p-7 rounded-3xl border transition-all duration-300
          ${
            isCurrent
              ? "bg-[var(--card)] border-[var(--accent)]/50 shadow-xl shadow-black/20"
              : "bg-[var(--card)]/80 border-[var(--card-border)] hover:border-[var(--chip-hover-line)] hover:bg-[var(--card-h)]"
          }
        `}
      >
        {/* Top Header: Role & Period */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
          <div>
            <h3 className="font-display text-[20px] sm:text-[22px] font-semibold text-[var(--ink)] tracking-tight">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-[13px] text-[var(--accent)] font-medium">
              <FiBriefcase size={13} />
              <span>{exp.company}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--line-2)] text-[11px] mono text-[var(--ink-2)] self-start sm:self-auto shrink-0">
            <FiCalendar size={12} className="text-[var(--accent)]" />
            <span>{exp.year}</span>
            {isCurrent && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1 animate-pulse" />
            )}
          </div>
        </div>

        {/* Scope description */}
        <p className="font-sans text-[14px] leading-[1.8] text-[var(--ink-2)] mt-3">
          {exp.desc}
        </p>

        {/* Highlight Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-[var(--line-2)]">
            {tags.map((t) => (
              <span key={t} className="chip !text-[11px]">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
