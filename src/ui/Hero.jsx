// src/ui/Hero.jsx
import Animblock from "../function/Animblock";

export default function Hero({ data, scrollY }) {
  const stats = data.stats;

  return (
    <section
      id="hero"
      className="max-w-[1100px] mx-auto relative min-h-[100svh] flex items-center overflow-hidden px-5 sm:px-6 md:px-12"
    >
      {/* Kanji watermark */}
      <div
        className="absolute right-0 md:right-4 select-none pointer-events-none z-0"
        style={{
          fontSize: "clamp(90px, 28vw, 320px)",
          color: "rgba(0,0,0,0.06)",
          fontFamily: "'Noto Serif JP', serif",
          lineHeight: 1,
          transform: `translateY(calc(-50% + ${scrollY * 0.15}px))`,
        }}
      >
        飛
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-[#e8e8e8] z-0" />
      <div className="absolute inset-x-0 top-[30%] h-px bg-[#f0f0ee] z-0" />

      {/* Content — full width of section now */}
      <div className="relative z-10 w-full pt-14 pb-8">

        {/* Text block stays narrower for readability */}
        <div className="max-w-3xl">
          {/* Role label */}
          <div
            className="font-mono text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-[#888] mb-5 md:mb-6 break-words"
            style={{ animation: "fadeUp 0.8s 0.2s ease both" }}
          >
            {data.role.toUpperCase()} &nbsp;/&nbsp; PORTFOLIO
          </div>

          {/* Name */}
          <h1
            className="font-serif font-light leading-[1.05] tracking-[-0.02em] sm:tracking-[-0.03em] mb-4"
            style={{
              fontSize: "clamp(34px, 12vw, 88px)",
              animation: "fadeUp 0.8s 0.4s ease both",
            }}
          >
            {data.name.split(" ").map((w, i) => (
              <span key={i} className="block">
                {w}
              </span>
            ))}
          </h1>

          {/* Tagline */}
          <div
            className="font-mono text-[15px] sm:text-[17px] md:text-[20px] text-[#888] tracking-[0.03em] sm:tracking-[0.05em] mt-4"
            style={{ animation: "fadeUp 0.8s 0.6s ease both" }}
          >
            — {data.tagline}
          </div>
        </div>

        {/* Stats — spans full width of the section */}
        <div
          className="grid mt-10 mx-auto md:mt-12 border-t border-[#e8e8e8]"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(110px, 1fr))`,
            
            animation: "fadeUp 0.8s 0.8s ease both",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="pt-5 sm:pt-6 pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8"
              style={{
                borderRightWidth: i === stats.length - 1 ? 0 : 1,
              }}
            >
              <div className="font-serif font-light text-[22px] sm:text-[26px] md:text-[32px] tracking-[-0.02em] sm:tracking-[-0.03em] leading-none">
                {s.value}
              </div>
              <div className="font-mono text-[10px] sm:text-[12px] md:text-[14px] tracking-[0.15em] sm:tracking-[0.3em] text-[#aaa] mt-2 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hidden xs:flex absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        style={{ animation: "fadeUp 1s 1.2s ease both" }}
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-[#ccc]">SCROLL</span>
        <div
          className="w-px h-6 bg-[#ccc]"
          style={{ animation: "scrollLine 1.5s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}