// src/ui/Hero.jsx
import Animblock from "../function/Animblock";
import meImg from "../assets/png/Me.png";

export default function Hero({ data, scrollY }) {
  const stats = data.stats;
  const featuredStat = stats[0];

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Animated black & white gradient background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, #ffffff 0%, #e8e8e8 20%, #ffffff 40%, #d4d4d4 60%, #ffffff 80%, #ececec 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 12s ease infinite",
        }}
      />

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

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-5 sm:px-6 md:px-12 pt-24 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — text content */}
          <div>
            {/* Role label */}
            <div
              className="font-mono text-[12px] sm:text-[14px] tracking-[0.2em] sm:tracking-[0.3em] text-[#888] mb-5 break-words"
              style={{ animation: "fadeUp 0.8s 0.2s ease both" }}
            >
              {data.role.toUpperCase()} &nbsp;/&nbsp; PORTFOLIO
            </div>

            {/* Name */}
            <h1
              className="font-serif font-light leading-[1.05] tracking-[-0.02em] sm:tracking-[-0.03em] mb-4"
              style={{
                fontSize: "clamp(34px, 8vw, 64px)",
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
              className="font-mono text-[15px] sm:text-[17px] text-[#888] tracking-[0.03em] mt-4 mb-8 max-w-md leading-[1.8]"
              style={{ animation: "fadeUp 0.8s 0.6s ease both" }}
            >
              — {data.tagline}
            </div>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-4"
              style={{ animation: "fadeUp 0.8s 0.7s ease both" }}
            >
              <a 
                href="src/assets/pdf/CV Indonesia.pdf"
                download
                className="inline-block font-mono text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-white bg-[#111] border border-[#111] px-7 py-3.5 transition-all duration-300 hover:bg-white hover:text-[#111]"
              >
                Download CV ↓
              </a>
              <a 
                href="#contact"
                className="inline-block font-mono text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[#111] border border-[#111] px-7 py-3.5 transition-all duration-300 hover:bg-[#111] hover:text-white"
              >
                Contact Me
              </a>
            </div>

            {/* Featured stat, mobile-only quick preview */}
            {featuredStat && (
              <div
                className="lg:hidden mt-10 pt-6 border-t border-[#e0e0e0]"
                style={{ animation: "fadeUp 0.8s 0.8s ease both" }}
              >
                <div className="font-serif font-light text-[28px] tracking-[-0.02em] leading-none">
                  {featuredStat.value}
                </div>
                <div className="font-mono text-[11px] tracking-[0.2em] text-[#aaa] mt-2 uppercase">
                  {featuredStat.label}
                </div>
              </div>
            )}
          </div>

          {/* Right — photo with decorative elements */}
          <div
            className="relative flex justify-center lg:justify-end"
            style={{ animation: "fadeUp 0.8s 0.5s ease both" }}
          >
            {/* Decorative circle behind photo */}
            <div
              className="absolute rounded-full bg-[#e2e2e2]"
              style={{
                width: "min(80%, 380px)",
                height: "min(80%, 380px)",
                top: "5%",
                right: "5%",
              }}
            />

            {/* Dot grid pattern */}
            <div
              className="absolute -bottom-4 -left-2 grid grid-cols-6 gap-1.5 pointer-events-none"
              aria-hidden="true"
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1 h-1 rounded-full bg-[#c9c9c9]"
                />
              ))}
            </div>

            {/* Photo */}
            <img
              src={meImg}
              alt={data.name}
              className="relative z-10 w-[240px] sm:w-[300px] md:w-[340px] h-auto -bottom-8 object-cover select-none"
              style={{ filter: "grayscale(100%)" }}
            />

            {/* Floating featured stat card — desktop only */}
            {featuredStat && (
              <div className="hidden lg:block absolute z-20 bottom-6 -right-4 bg-white shadow-lg px-6 py-5 border border-[#eee]">
                <div className="font-serif font-light text-[28px] tracking-[-0.02em] leading-none">
                  {featuredStat.value}
                </div>
                <div className="font-mono text-[11px] tracking-[0.15em] text-[#999] mt-1 uppercase">
                  {featuredStat.label}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full stats row */}
        <div
          className="grid mt-16 md:mt-20 border-t border-[#e8e8e8] pt-2"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(110px, 1fr))`,
            animation: "fadeUp 0.8s 0.9s ease both",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="pt-5 sm:pt-6 pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8"
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

      {/* Keyframes */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}