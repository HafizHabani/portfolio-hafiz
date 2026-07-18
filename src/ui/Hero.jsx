// src/ui/Hero.jsx
import Animblock from "../function/Animblock";

export default function Hero({ data, scrollY }) {
  // Show max 4 stats to avoid overflow
  const visibleStats = data.stats.slice(0, 4);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12"
    >
      {/* Kanji watermark */}
      <div
        className="absolute right-0 md:right-4 select-none pointer-events-none z-0"
        style={{
          top: "50%",
          fontSize: "clamp(120px, 22vw, 320px)",
          color: "rgba(0,0,0,0.06)",
          fontFamily: "'Noto Serif JP', serif",
          lineHeight: 1,
          transform: `translateY(calc(-50% + ${scrollY * 0.15}px))`,
        }}
      >飛</div>

      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-[#e8e8e8] z-0" />
      <div className="absolute inset-x-0 top-[30%] h-px bg-[#f0f0ee] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl pt-24 pb-16">

        {/* Role label */}
        <div
          className="font-mono text-[11px] tracking-[0.4em] text-[#888] mb-6"
          style={{ animation: "fadeUp 0.8s 0.2s ease both" }}
        >
          {data.role.toUpperCase()} &nbsp;/&nbsp; PORTFOLIO
        </div>

        {/* Name */}
        <h1
          className="font-serif font-light leading-[1.05] tracking-[-0.03em] mb-4"
          style={{
            fontSize: "clamp(40px, 7vw, 88px)",
            animation: "fadeUp 0.8s 0.4s ease both",
          }}
        >
          {data.name.split(" ").map((w, i) => (
            <span key={i} className="block">{w}</span>
          ))}
        </h1>

        {/* Tagline */}
        <div
          className="font-mono text-[13px] text-[#888] tracking-[0.05em] mt-4"
          style={{ animation: "fadeUp 0.8s 0.6s ease both" }}
        >
          — {data.tagline}
        </div>

        {/* Stats row — max 4, responsive */}
        <div
          className="flex flex-wrap gap-0 mt-12 border-t border-[#e8e8e8]"
          style={{ animation: "fadeUp 0.8s 0.8s ease both" }}
        >
          {visibleStats.map((s, i) => (
            <div
              key={s.label}
              className="pt-6 pr-8 mr-8"
              style={{
                borderRight: i < visibleStats.length - 1 ? "1px solid #e8e8e8" : "none",
              }}
            >
              <div className="font-serif font-light text-[28px] md:text-[32px] tracking-[-0.03em] leading-none">
                {s.value}
              </div>
              <div className="font-mono text-[9px] tracking-[0.3em] text-[#aaa] mt-2 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* More stats — collapsed on second row */}
        {data.stats.length > 4 && (
          <div
            className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-[#f0f0ee]"
            style={{ animation: "fadeUp 0.8s 1s ease both" }}
          >
            {data.stats.slice(4).map(s => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-serif font-light text-[18px] text-[#111]">{s.value}</span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#bbb] uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fadeUp 1s 1.2s ease both" }}
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-[#ccc]">SCROLL</span>
        <div className="w-px h-10 bg-[#ccc]" style={{ animation: "scrollLine 1.5s ease-in-out infinite" }} />
      </div>
    </section>
  );
}
