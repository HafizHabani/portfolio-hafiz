// src/components/Start.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/biodata";

export default function Start() {
  const navigate = useNavigate();

  useEffect(() => {
    // total animation ~2.8s, redirect tepat setelah layar terbuka
    const timer = setTimeout(() => navigate("/Dashboard"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={s.stage}>

      {/* Grid background */}
      <div style={s.gridBg} />
      <div style={s.scanline} />

      {/* Corner brackets */}
      <div style={{ ...s.corner, top: 20, left: 20,  borderTop: "1px solid rgba(255,255,255,0.15)", borderLeft:  "1px solid rgba(255,255,255,0.15)" }} />
      <div style={{ ...s.corner, top: 20, right: 20, borderTop: "1px solid rgba(255,255,255,0.15)", borderRight: "1px solid rgba(255,255,255,0.15)" }} />
      <div style={{ ...s.corner, bottom: 20, left: 20,  borderBottom: "1px solid rgba(255,255,255,0.15)", borderLeft:  "1px solid rgba(255,255,255,0.15)" }} />
      <div style={{ ...s.corner, bottom: 20, right: 20, borderBottom: "1px solid rgba(255,255,255,0.15)", borderRight: "1px solid rgba(255,255,255,0.15)" }} />

      {/* Dashboard peek — sits behind everything, revealed when halves slide away */}
      <div style={s.dashPeek}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 64, fontWeight: 300, color: "rgba(0,0,0,0.06)", marginBottom: 8 }}>
            {data.kanji}
          </div>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: 9, letterSpacing: 5, color: "#ccc", textTransform: "uppercase" }}>
            — dashboard loaded —
          </div>
        </div>
      </div>

      {/* Kanji watermark */}
      <div style={s.kanjiBg}>技</div>

      {/* Vertical beam — rises from bottom to top */}
      <div style={s.lineTrack}>
        <div style={s.lineGlow} />
        <div style={s.lineBeam} />
      </div>

      {/* Split halves — slide away after beam reaches top */}
      <div style={{ ...s.half, left: 0,  animation: "slideLeft  0.9s cubic-bezier(0.76,0,0.24,1) 1.6s forwards" }} />
      <div style={{ ...s.half, right: 0, animation: "slideRight 0.9s cubic-bezier(0.76,0,0.24,1) 1.6s forwards" }} />

      {/* Center identity */}
      <div style={s.centerContent}>
        <div style={s.mainLabel}>portfolio</div>
        <div style={s.mainName}>
          {data.name.split(" ").map((w, i) => (
            <span key={i} style={{ display: "block" }}>{w}</span>
          ))}
        </div>
        <div style={s.mainRole}>{data.role}</div>

        {/* Progress bar */}
        <div style={s.progWrap}>
          <div style={s.progFill} />
        </div>
        <div style={s.statusText}>— ENTERING SYSTEM —</div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400&display=swap');

        @keyframes gridShift {
          to { transform: translateY(48px); }
        }
        @keyframes beamRise {
          0%   { height: 0;    opacity: 0; }
          5%   { opacity: 1; }
          100% { height: 100%; opacity: 1; }
        }
        @keyframes slideLeft  {
          to { transform: translateX(-100%); }
        }
        @keyframes slideRight {
          to { transform: translateX(100%); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes progFill {
          to { width: 100%; }
        }
        @keyframes revealDash {
          to { opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 0.2; }
          50%       { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

// ── Styles ──────────────────────────────────────────────────
const s = {
  stage: {
    minHeight: "100vh",
    background: "#060810",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Courier New', monospace",
    cursor: "none",
  },
  gridBg: {
    position: "absolute", inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)," +
      "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
    animation: "gridShift 10s linear infinite",
  },
  scanline: {
    position: "absolute", inset: 0, pointerEvents: "none",
    background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)",
  },
  corner: {
    position: "absolute", width: 16, height: 16,
  },

  // Dashboard behind the curtain
  dashPeek: {
    position: "absolute", inset: 0,
    background: "#fafaf8",
    zIndex: 1,
    display: "flex", alignItems: "center", justifyContent: "center",
    opacity: 0,
    animation: "revealDash 0.5s ease 2.4s forwards",
  },

  // Kanji watermark
  kanjiBg: {
    position: "absolute",
    fontFamily: "'Noto Serif JP', serif",
    fontSize: 200,
    color: "rgba(255,255,255,0.025)",
    top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    userSelect: "none", pointerEvents: "none",
    zIndex: 3, lineHeight: 1,
  },

  // Vertical beam
  lineTrack: {
    position: "absolute",
    left: "50%", transform: "translateX(-50%)",
    bottom: 0, width: 1, height: "100%",
    overflow: "visible", pointerEvents: "none",
    zIndex: 10,
  },
  lineBeam: {
    position: "absolute",
    bottom: 0, left: 0,
    width: 1, height: 0,
    background: "#ffffff",
    transformOrigin: "bottom center",
    animation: "beamRise 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards",
  },
  lineGlow: {
    position: "absolute",
    bottom: 0, left: -2,
    width: 5, height: 0,
    background: "rgba(255,255,255,0.18)",
    animation: "beamRise 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards",
  },

  // Curtain halves
  half: {
    position: "absolute",
    top: 0, bottom: 0, width: "50%",
    background: "#060810",
    zIndex: 20,
    animationFillMode: "forwards",
  },

  // Center content
  centerContent: {
    position: "relative",
    zIndex: 5,
    textAlign: "center",
    opacity: 0,
    animation: "fadeIn 0.5s ease 1s forwards",
  },
  mainLabel: {
    fontSize: 10, letterSpacing: 8,
    color: "rgba(255,255,255,0.35)",
    textTransform: "uppercase",
    marginBottom: 12,
    animation: "fadeUp 0.6s 1.1s ease both",
  },
  mainName: {
    fontFamily: "'Noto Serif JP', serif",
    fontSize: 28, fontWeight: 300,
    color: "#ffffff",
    letterSpacing: -0.5,
    lineHeight: 1.3,
    animation: "fadeUp 0.6s 1.2s ease both",
  },
  mainRole: {
    fontSize: 9, letterSpacing: 5,
    color: "rgba(255,255,255,0.3)",
    textTransform: "uppercase",
    marginTop: 10,
    animation: "fadeUp 0.6s 1.3s ease both",
  },
  progWrap: {
    width: 120, height: 1,
    background: "rgba(255,255,255,0.08)",
    margin: "28px auto 0",
    position: "relative",
    animation: "fadeUp 0.6s 1.4s ease both",
  },
  progFill: {
    position: "absolute",
    left: 0, top: 0,
    height: 1,
    background: "#fff",
    width: 0,
    animation: "progFill 1.8s cubic-bezier(0.4,0,0.2,1) 1.2s forwards",
  },
  statusText: {
    fontSize: 9, letterSpacing: 4,
    color: "rgba(255,255,255,0.2)",
    marginTop: 20,
    animation: "fadeUp 0.6s 1.5s ease both, blink 1s 1.5s step-end infinite",
  },
};
