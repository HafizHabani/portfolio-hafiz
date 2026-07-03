// src/components/sections/HeroSection.jsx
import Animblock from "../function/Animblock";

export default function Hero({ data, scrollY }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center",
        padding: "0 48px",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Kanji watermark */}
      <div style={{
        position: "absolute", right: 10, top: "50%",
        fontSize: 320, color: "rgba(0,0,0,0.09)", lineHeight: 1,
        fontFamily: "'Noto Serif JP', serif", userSelect: "none",
        transform: `translateY(calc(-50% + ${scrollY * 0.2}px))`,
      }}>飛</div>

      {/* Horizontal decorative lines */}
      <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: "#e8e8e8", zIndex: 0 }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: "30%", height: 1, background: "#f0f0ee", zIndex: 0 }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 700 }}>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 20, letterSpacing: 6, color: "#888",
          marginBottom: 24, animation: "fadeUp 0.8s 0.2s ease both",
        }}>
          {data.role.toUpperCase()} &nbsp;/&nbsp; PORTFOLIO
        </div>

        <h1 style={{
          fontSize: "clamp(52px, 8vw, 96px)",
          fontWeight: 300, lineHeight: 1.05, letterSpacing: -2,
          marginBottom: 8, animation: "fadeUp 0.8s 0.4s ease both",
        }}>
          {data.name.split(" ").map((w, i) => (
            <span key={i} style={{ display: "block" }}>{w}</span>
          ))}
        </h1>

        <div style={{
          fontSize: 20, color: "#888", letterSpacing: 1, marginTop: 20,
          fontFamily: "'Courier New', monospace",
          animation: "fadeUp 0.8s 0.6s ease both",
        }}>
          — {data.tagline}
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: 0, marginTop: 56,
          borderTop: "1px solid #e8e8e8",
          animation: "fadeUp 0.8s 0.8s ease both",
        }}>
          {data.stats.map((s, i) => (
            <div key={s.label} style={{
              padding: "24px 36px 0 0",
              borderRight: i < data.stats.length - 1 ? "1px solid #e8e8e8" : "none",
              marginRight: i < data.stats.length - 1 ? 36 : 0,
            }}>
              <div style={{ fontSize: 32, fontWeight: 300, letterSpacing: -1 }}>{s.value}</div>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#aaa", fontFamily: "'Courier New', monospace", marginTop: 4 }}>
                {s.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        animation: "fadeUp 1s 1.2s ease both",
      }}>
        <div style={{ fontFamily: "'Courier New', monospace", fontSize: 9, letterSpacing: 4, color: "#ccc" }}>SCROLL</div>
        <div style={{ width: 1, height: 40, background: "#ccc", animation: "scrollLine 1.5s ease-in-out infinite" }} />
      </div>
    </section>
  );
}
