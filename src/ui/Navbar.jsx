// src/components/Navbar.jsx
import { useState, useEffect } from "react";

export default function Navbar({ kanji, sections, activeNav, scrollY, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNav = (id) => {
    onNav(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      bg-black/95
      transition-all duration-400 ease-in-out
      ${scrollY > 40 || menuOpen ? "border-b border-white/10 backdrop-blur-md" : ""}
    `}>

      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-6 py-4 md:px-12 md:py-[18px]">

        {/* Kanji logo */}
        <div className="font-mono text-xl tracking-[0.25em] text-white">
          {kanji}
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {sections.map(s => (
            <button
              key={s}
              onClick={() => handleNav(s)}
              className={`
                font-mono text-xl tracking-[0.2em] uppercase
                transition-colors duration-300 cursor-pointer
                bg-transparent border-none p-0
                ${activeNav === s ? "text-white" : "text-white/40 hover:text-white/70"}
              `}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] items-end bg-transparent border-none p-1 cursor-pointer"
        >
          <span className={`
            block h-px bg-white w-5
            transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-y-[6px] rotate-45" : ""}
          `} />
          <span className={`
            block h-px bg-white
            transition-all duration-300 ease-in-out
            ${menuOpen ? "w-0 opacity-0" : "w-3.5 opacity-100"}
          `} />
          <span className={`
            block h-px bg-white w-5
            transition-transform duration-300 ease-in-out
            ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}
          `} />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div className={`
        md:hidden overflow-hidden
        transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        ${menuOpen ? "max-h-[400px] border-t border-white/10" : "max-h-0"}
      `}>
        {sections.map((s, i) => (
          <button
            key={s}
            onClick={() => handleNav(s)}
            className={`
              flex items-center justify-between w-full
              px-6 py-4 bg-transparent border-none cursor-pointer
              font-mono text-[10px] tracking-[0.2em] uppercase text-left
              transition-colors duration-200
              ${i < sections.length - 1 ? "border-b border-white/5" : ""}
              ${activeNav === s ? "text-white" : "text-white/40 hover:text-white/60"}
            `}
            style={{
              opacity:          menuOpen ? 1 : 0,
              transform:        menuOpen ? "translateY(0)" : "translateY(-8px)",
              transitionDelay:  menuOpen ? `${i * 0.05 + 0.08}s` : "0s",
              transitionProperty: "opacity, transform, color",
              transitionDuration: "0.35s",
              transitionTimingFunction: "ease",
            }}
          >
            <span>{s}</span>
            <span className={`
              text-[9px] tracking-wide font-mono
              ${activeNav === s ? "text-white/50" : "text-white/20"}
            `}>
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}