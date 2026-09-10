// src/ui/Navbar.jsx
import { useState } from "react";

const LABELS = {
  hero:       "Home",
  about:      "About",
  skills:     "Services",
  projects:   "Works",
  experience: "Experience",
  contact:    "Contact",
};

export default function Navbar({ sections, activeNav, scrollY, onNav, name }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    onNav(id);
    setMenuOpen(false);
  };

  const scrolled = scrollY > 24;
  const firstName = (name || "Hafiz").split(" ")[1] || "Hafiz";

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled || menuOpen
          ? "bg-[var(--page-80)] backdrop-blur-xl border-b border-[var(--line)]"
          : "bg-transparent border-b border-transparent"}
      `}
    >

      {/* ── Top bar ── */}
      <div className="px-5 sm:px-8 md:px-12 py-4 md:py-5 flex items-center justify-between">

        {/* Wordmark */}
        <button
          onClick={() => handleNav("hero")}
          className="font-display text-[22px] md:text-[24px] font-bold tracking-[-0.02em] text-[var(--ink)] bg-transparent border-none cursor-pointer"
          aria-label="Back to top"
        >
          {firstName}
          <span className="gradient-text">.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1.5">
          {sections.map((id) => {
            const active = activeNav === id;
            return (
              <button
                key={id}
                onClick={() => handleNav(id)}
                aria-current={active ? "true" : undefined}
                className={`
                  text-[14px] font-medium px-4 py-2 rounded-full
                  transition-all duration-200 cursor-pointer bg-transparent border-none
                  ${active
                    ? "text-[var(--ink)] bg-[var(--card-h)]"
                    : "text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--card-h)]"}
                `}
              >
                {LABELS[id] || id}
              </button>
            );
          })}
        </div>

        {/* Contact CTA — desktop */}
        <a
          href="#contact"
          onClick={() => onNav("contact")}
          className="hidden lg:inline-flex btn-primary !px-5 !py-2.5 !text-[12px]"
        >
          Let's talk
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="lg:hidden flex flex-col gap-[5px] items-end bg-transparent border-none p-1 cursor-pointer"
        >
          <span className={`block h-[2px] bg-[var(--ink)] w-5 rounded transition-transform duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-[2px] bg-[var(--ink)] rounded transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-3.5 opacity-100"}`} />
          <span className={`block h-[2px] bg-[var(--ink)] w-5 rounded transition-transform duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div className={`
        lg:hidden overflow-hidden bg-[var(--page-80)] backdrop-blur-xl
        transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        ${menuOpen ? "max-h-[460px] border-t border-[var(--line)]" : "max-h-0"}
      `}>
        {sections.map((id, i) => (
          <button
            key={id}
            onClick={() => handleNav(id)}
            className={`
              flex items-center justify-between w-full
              px-5 py-4 bg-transparent border-none cursor-pointer
              font-sans text-[14px] font-medium text-left
              transition-colors duration-200
              ${activeNav === id ? "text-[var(--ink)]" : "text-[var(--ink-2)] hover:text-[var(--ink)]"}
              ${i < sections.length - 1 ? "border-b border-[var(--line-2)]" : ""}
            `}
            style={{
              opacity:            menuOpen ? 1 : 0,
              transform:          menuOpen ? "translateY(0)" : "translateY(-8px)",
              transitionDelay:    menuOpen ? `${i * 0.04 + 0.05}s` : "0s",
              transitionProperty: "opacity, transform, color",
              transitionDuration: "0.3s",
              transitionTimingFunction: "ease",
            }}
          >
            <span>{LABELS[id] || id}</span>
            <span className="flex items-center gap-2">
              {activeNav === id && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              )}
              <span className="mono text-[10px] text-[var(--ink-3)]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </span>
          </button>
        ))}
        <div className="px-5 py-4">
          <a href="#contact" onClick={() => handleNav("contact")} className="btn-primary w-full justify-center">
            Let's talk
          </a>
        </div>
      </div>
    </nav>
  );
}