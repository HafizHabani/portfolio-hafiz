// src/components/Navbar.jsx
import { useState, useEffect } from "react";

export default function Navbar({ kanji, sections, scrollY, onNav }) {
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

  const floating = scrollY > 40;

  return (
    <nav
      className={`
        fixed z-50
        transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
        bg-[#212A3E]/95
        ${menuOpen ? "border-b border-[#394867]/50 backdrop-blur-md" : ""}
        ${floating
          ? "top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-fit rounded-[2rem] border border-[#394867]/50 shadow-2xl backdrop-blur-xl"
          : "top-0 left-0 right-0 w-full rounded-none"
        }
      `}
    >

      {/* ── Top bar ── */}
      <div
        className={`
          flex items-center justify-between
          transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${floating
            ? "px-5 py-2.5 md:gap-8"
            : "px-6 py-4 md:px-12 md:py-[18px]"
          }
        `}
      >

        {/* Kanji logo */}
        <div className="font-mono text-xl tracking-[0.25em] text-[#F1F6F9]">
          {kanji}
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-1">
          {sections.map(s => (
            <button
              key={s}
              onClick={() => handleNav(s)}
              className={`
                font-mono uppercase tracking-[0.2em]
                transition-all duration-300 cursor-pointer
                bg-transparent border-none
                text-[#9BA4B5] hover:text-[#F1F6F9]
                ${floating
                  ? "text-sm px-4 py-2 rounded-full hover:bg-[#394867]/50"
                  : "text-lg px-5"
                }
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
            block h-px bg-[#F1F6F9] w-5
            transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-y-[6px] rotate-45" : ""}
          `} />
          <span className={`
            block h-px bg-[#F1F6F9]
            transition-all duration-300 ease-in-out
            ${menuOpen ? "w-0 opacity-0" : "w-3.5 opacity-100"}
          `} />
          <span className={`
            block h-px bg-[#F1F6F9] w-5
            transition-transform duration-300 ease-in-out
            ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}
          `} />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div className={`
        md:hidden overflow-hidden
        transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        ${menuOpen ? "max-h-[400px] border-t border-[#394867]/50" : "max-h-0"}
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
              text-[#9BA4B5] hover:text-[#F1F6F9]
              ${i < sections.length - 1 ? "border-b border-[#394867]/40" : ""}
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
            <span className="text-[9px] tracking-wide font-mono text-[#9BA4B5]/50">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}