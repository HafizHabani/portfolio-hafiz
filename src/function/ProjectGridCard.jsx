// src/function/ProjectGridCard.jsx
import { useState } from "react";
import ScrollPreview from "./ScrollPreview";
import { techIcon } from "../data/techIcons";
import { FiArrowUpRight, FiMonitor, FiSmartphone, FiGithub } from "react-icons/fi";

const SIMULATED_DOMAINS = {
  "01": "spbe.malangkab.go.id/portal",
  "02": "api.spbe.malangkab.go.id/v1",
  "03": "foodlink.app/canteen-order",
  "04": "api.foodlink.app/admin",
  "05": "jarang.delivery/tracking",
  "06": "admin.jarang.delivery/dashboard",
  "07": "siskamling.desa.id/patrol",
  "08": "admin.siskamling.desa.id/records",
};

export default function ProjectGridCard({ project }) {
  const hasBoth = Boolean(project.previewWeb && project.previewAndroid);
  const [viewMode, setViewMode] = useState(project.previewWeb ? "web" : "android");

  const currentPreview =
    viewMode === "android" && project.previewAndroid
      ? project.previewAndroid
      : project.previewWeb || project.previewAndroid;

  const currentLabel = viewMode === "android" ? "UI Android" : "UI Web";
  const domain = SIMULATED_DOMAINS[project.id] || "github.com/HafizHabani";

  return (
    <article className="group flex flex-col h-full rounded-3xl border border-[var(--card-border)] bg-[var(--card)] hover:border-[var(--chip-hover-line)] hover:bg-[var(--card-h)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shadow-lg">
      
      {/* Mockup Window Chrome */}
      <div className="px-4 py-3 bg-[var(--surface)] border-b border-[var(--line)] flex items-center justify-between gap-3">
        {/* Window control dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
        </div>

        {/* Simulated URL pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--page)]/70 border border-[var(--line-2)] text-[11px] mono text-[var(--ink-3)] max-w-[240px] truncate">
          <span className="text-[var(--accent)] text-[10px]">https://</span>
          <span className="truncate">{domain}</span>
        </div>

        {/* View Switcher Tabs (if both exist) */}
        {hasBoth ? (
          <div className="flex items-center gap-1 bg-[var(--page)]/80 p-0.5 rounded-lg border border-[var(--line-2)]">
            <button
              onClick={() => setViewMode("web")}
              className={`
                flex items-center gap-1 px-2 py-0.5 rounded text-[10px] mono transition-all cursor-pointer border-none
                ${
                  viewMode === "web"
                    ? "bg-[var(--accent)] text-white font-medium"
                    : "text-[var(--ink-3)] hover:text-[var(--ink)] bg-transparent"
                }
              `}
              title="Switch to Web UI preview"
            >
              <FiMonitor size={11} />
              <span className="hidden xs:inline">Web</span>
            </button>
            <button
              onClick={() => setViewMode("android")}
              className={`
                flex items-center gap-1 px-2 py-0.5 rounded text-[10px] mono transition-all cursor-pointer border-none
                ${
                  viewMode === "android"
                    ? "bg-[var(--accent)] text-white font-medium"
                    : "text-[var(--ink-3)] hover:text-[var(--ink)] bg-transparent"
                }
              `}
              title="Switch to Android UI preview"
            >
              <FiSmartphone size={11} />
              <span className="hidden xs:inline">App</span>
            </button>
          </div>
        ) : (
          <span className="mono text-[10px] text-[var(--ink-3)] uppercase tracking-wider">
            {currentLabel}
          </span>
        )}
      </div>

      {/* Frame with ScrollPreview */}
      <div className="relative bg-[var(--surface)] overflow-hidden">
        {currentPreview ? (
          <ScrollPreview
            src={currentPreview}
            label={currentLabel}
            height={320}
            className="w-full"
          />
        ) : (
          <div className="h-64 flex items-center justify-center bg-[var(--surface)] text-[var(--ink-3)] mono text-[13px]">
            No Preview Available
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Row */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="mono text-[11px] font-semibold text-[var(--accent)] px-2 py-0.5 rounded-md bg-[var(--surface)] border border-[var(--line)]">
                {project.id}
              </span>
              <span className="mono text-[11px] text-[var(--ink-3)]">
                {project.year}
              </span>
            </div>

            <a
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open repository: ${project.name}`}
              className="inline-flex items-center gap-1 text-[12px] mono text-[var(--accent)] hover:text-[var(--accent-h)] hover:underline underline-offset-4 transition-colors"
            >
              <FiGithub size={13} />
              <span>Source</span>
              <FiArrowUpRight size={13} />
            </a>
          </div>

          {/* Title */}
          <h3 className="font-display text-[20px] sm:text-[22px] font-semibold text-[var(--ink)] tracking-tight leading-snug group-hover:text-[var(--accent)] transition-colors duration-200 mb-3">
            {project.name}
          </h3>

          {/* Description */}
          <p className="font-sans text-[14px] leading-relaxed text-[var(--ink-2)] mb-5">
            {project.desc}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--line-2)] mt-auto">
          {project.tags.map((t) => {
            const Icon = techIcon(t);
            return (
              <span key={t} className="chip">
                {Icon ? <Icon size={12} className="text-[var(--accent)]" /> : null}
                <span>{t}</span>
              </span>
            );
          })}
        </div>
      </div>

    </article>
  );
}
