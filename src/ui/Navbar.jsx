// src/ui/Navbar.jsx
import { useState } from "react";
import { FiSun, FiMoon, FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const LABELS = {
  hero:       "Home",
  about:      "About",
  skills:     "Services",
  projects:   "Works",
  experience: "Experience",
  contact:    "Contact",
};

export default function Navbar({
  sections,
  activeNav,
  scrollY,
  onNav,
  name,
  theme,
  onToggleTheme,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    onNav(id);
    setMenuOpen(false);
  };

  const scrolled = scrollY > 20;
  const firstName = (name || "Hafiz").split(" ")[1] || "Hafiz";
  const isDark = theme !== "light";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 md:px-8 pt-3 md:pt-4 pointer-events-none transition-all duration-300">
      <nav
        aria-label="Primary Navigation"
        className={`
          pointer-events-auto max-w-[1120px] mx-auto rounded-full
          px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between
          transition-all duration-300 border
          ${
            scrolled || menuOpen
              ? "bg-[var(--page-80)] backdrop-blur-2xl border-[var(--line)] shadow-2xl shadow-black/40"
              : "bg-[var(--page)]/60 backdrop-blur-md border-[var(--line-2)]"
          }
        `}
      >
        {/* Wordmark + Status dot */}
        <button
          onClick={() => handleNav("hero")}
          className="flex items-center gap-2.5 font-display text-[19px] sm:text-[21px] font-bold tracking-tight text-[var(--ink)] bg-transparent border-none cursor-pointer group"
          aria-label="Back to top"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
          </span>
          <span className="group-hover:text-[var(--accent)] transition-colors duration-200">
            {firstName}
          </span>
          <span className="gradient-text">.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 bg-[var(--card)]/60 border border-[var(--line-2)] rounded-full px-2 py-1">
          {sections.map((id) => {
            const active = activeNav === id;
            return (
              <button
                key={id}
                onClick={() => handleNav(id)}
                aria-current={active ? "true" : undefined}
                className={`
                  text-[13px] font-medium px-3.5 py-1.5 rounded-full
                  transition-all duration-200 cursor-pointer border-none
                  ${
                    active
                      ? "text-[var(--btn-ink)] bg-[var(--btn-grad)] font-semibold shadow-sm"
                      : "text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--card-h)]"
                  }
                `}
              >
                {LABELS[id] || id}
              </button>
            );
          })}
        </div>

        {/* Right action group */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme switcher */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--line)] bg-[var(--card)] hover:bg-[var(--card-h)] hover:border-[var(--chip-hover-line)] text-[var(--ink-2)] hover:text-[var(--ink)] transition-all duration-200 cursor-pointer"
          >
            {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={() => handleNav("contact")}
            className="btn-primary !px-4 !py-2 !text-[12px] !gap-1.5"
          >
            Let's Talk
            <FiArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full flex items-center justify-center border border-[var(--line)] bg-[var(--card)] text-[var(--ink-2)]"
          >
            {isDark ? <FiSun size={13} /> : <FiMoon size={13} />}
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] cursor-pointer"
          >
            {menuOpen ? <FiX size={15} /> : <FiMenu size={15} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`
          pointer-events-auto sm:hidden mt-2 max-w-[1120px] mx-auto rounded-3xl
          overflow-hidden bg-[var(--page-80)] backdrop-blur-2xl border border-[var(--line)]
          shadow-2xl shadow-black/60 transition-all duration-300
          ${menuOpen ? "max-h-[420px] opacity-100 p-4" : "max-h-0 opacity-0 p-0 border-transparent"}
        `}
      >
        <div className="flex flex-col gap-1">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`
                flex items-center justify-between w-full px-4 py-3 rounded-xl
                text-left text-[14px] font-medium transition-colors border-none cursor-pointer
                ${
                  activeNav === id
                    ? "bg-[var(--card-h)] text-[var(--ink)] font-semibold"
                    : "text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--card)]"
                }
              `}
            >
              <span>{LABELS[id] || id}</span>
              {activeNav === id && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              )}
            </button>
          ))}
          <div className="pt-3 mt-2 border-t border-[var(--line)] flex items-center justify-between">
            <span className="text-[12px] mono text-[var(--ink-3)]">
              Palangkaraya • UTC+7
            </span>
            <a
              href="#contact"
              onClick={() => handleNav("contact")}
              className="btn-primary !px-3.5 !py-1.5 !text-[11px]"
            >
              Contact Me ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
