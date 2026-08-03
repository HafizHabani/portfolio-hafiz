// src/components/Start.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/biodata";

export default function Start() {
  const navigate = useNavigate();

  useEffect(() => {
    // total sekuens ~4.8s (tebasan sekarang 2 detik), redirect setelah dashboard terungkap
    const timer = setTimeout(() => navigate("/Dashboard"), 4200);
    return () => clearTimeout(timer);
  }, [navigate]);

  const sparks = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * 360 + (i % 2 === 0 ? 10 : -6);
    const dist = 50 + ((i * 37) % 60);
    const dx = Math.cos((angle * Math.PI) / 180) * dist;
    const dy = Math.sin((angle * Math.PI) / 180) * dist;
    return { id: i, dx, dy, delay: 3.3 + i * 0.02 };
  });

  return (
    <div style={s.stage}>

      {/* Grid background */}
      <div style={s.gridBg} />
      <div style={s.scanline} />

      {/* Corner brackets */}
      <div style={{ ...s.corner, top: 20, left: 20, borderTop: "1px solid rgba(255,255,255,0.15)", borderLeft: "1px solid rgba(255,255,255,0.15)" }} />
      <div style={{ ...s.corner, top: 20, right: 20, borderTop: "1px solid rgba(255,255,255,0.15)", borderRight: "1px solid rgba(255,255,255,0.15)" }} />
      <div style={{ ...s.corner, bottom: 20, left: 20, borderBottom: "1px solid rgba(255,255,255,0.15)", borderLeft: "1px solid rgba(255,255,255,0.15)" }} />
      <div style={{ ...s.corner, bottom: 20, right: 20, borderBottom: "1px solid rgba(255,255,255,0.15)", borderRight: "1px solid rgba(255,255,255,0.15)" }} />

      {/* Dashboard peek */}
      <div style={s.dashPeek}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 64, fontWeight: 300, color: "rgba(0,0,0,0.06)", marginBottom: 8 }}>
            {data.kanji}
          </div>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: 9, letterSpacing: 5, color: "#070707", textTransform: "uppercase" }}>
            — dashboard loaded —
          </div>
        </div>
      </div>

      {/* Kanji watermark */}
      <div style={s.kanjiBg}>技</div>

      {/* Center identity */}
      <div style={s.centerContent}>
        <div style={s.mainLabel}>portfolio</div>
        <div style={s.mainName}>
          {data.name.split(" ").map((w, i) => (
            <span key={i} style={{ display: "block" }}>{w}</span>
          ))}
        </div>
        <div style={s.mainRole}>{data.role}</div>

        

        {/* Wrapper tetap, dua teks status ditumpuk absolute di dalamnya — tidak saling ganggu posisi */}
        <div style={s.statusWrap}>
          <div style={s.statusText}>— ENTERING SYSTEM —</div>
          <div style={s.statusText2}>— ACCESS GRANTED —</div>
        </div>
      </div>

      {/* ── Katana slash — sekarang berlangsung 2 detik ── */}
      <div style={s.bladeTrack}>
        <div style={{ ...s.bladeGlow, filter: "blur(18px)", opacity: 0.22, width: 40, animation: "bladeSweep 2s cubic-bezier(0.45,0,0.4,1) 1.3s forwards" }} />
        <div style={{ ...s.bladeGlow, filter: "blur(9px)", opacity: 0.35, width: 16, animation: "bladeSweep 2s cubic-bezier(0.45,0,0.4,1) 1.34s forwards" }} />
        <div style={s.blade} />
      </div>

      {/* Seam glow — menyala saat bilah hampir tuntas menyayat */}
      <div style={s.cutSeam} />

      {/* Impact flash */}
      <div style={s.flash} />

      {/* Sparks */}
      <div style={s.sparkOrigin}>
        {sparks.map(sp => (
          <span
            key={sp.id}
            style={{
              ...s.spark,
              "--dx": `${sp.dx}px`,
              "--dy": `${sp.dy}px`,
              animation: `sparkBurst 0.55s ease-out ${sp.delay}s forwards`,
            }}
          />
        ))}
      </div>

      {/* Split halves */}
      <div style={{ ...s.half, clipPath: "polygon(0 0, 58% 0, 42% 100%, 0% 100%)", animation: "slideLeftCut 0.85s cubic-bezier(0.76,0,0.24,1) 3.45s forwards" }} />
      <div style={{ ...s.half, clipPath: "polygon(58% 0, 100% 0, 100% 100%, 42% 100%)", animation: "slideRightCut 0.85s cubic-bezier(0.76,0,0.24,1) 3.45s forwards" }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400&display=swap');

        @keyframes gridShift {
          to { transform: translateY(48px); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          to { opacity: 0; }
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

        /* Bilah menyayat diagonal — sekarang 2 detik, gerakan lebih terasa & dramatis */
        @keyframes bladeSweep {
          0%   { transform: translateX(-50%) rotate(-12deg) translateY(-130%); opacity: 0; }
          4%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateX(-50%) rotate(-12deg) translateY(130%); opacity: 0; }
        }

        @keyframes flashPulse {
          0%   { opacity: 0; }
          25%  { opacity: 0.85; }
          100% { opacity: 0; }
        }

        @keyframes seamGlow {
          0%   { opacity: 0; }
          40%  { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes sparkBurst {
          0%   { transform: translate(0,0) scale(1);   opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)) scale(0); opacity: 0; }
        }

        @keyframes slideLeftCut {
          to { transform: translate(-115%, 12%) rotate(-4deg); }
        }
        @keyframes slideRightCut {
          to { transform: translate(115%, -12%) rotate(4deg); }
        }

        @keyframes stageShake {
          0%, 100% { transform: translate(0,0); }
          20%  { transform: translate(-2px, 1px); }
          40%  { transform: translate(2px, -1px); }
          60%  { transform: translate(-1px, 2px); }
          80%  { transform: translate(1px, -2px); }
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
    animation: "stageShake 0.25s ease 3.3s",
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

  dashPeek: {
    position: "absolute", inset: 0,
    background: "#fafaf8",
    zIndex: 1,
    display: "flex", alignItems: "center", justifyContent: "center",
    opacity: 0,
    animation: "revealDash 0.6s ease 3.45s forwards",
  },

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

  bladeTrack: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 25,
  },
  blade: {
    position: "absolute",
    top: "-20%", left: "50%",
    width: 2, height: "160%",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(220,230,255,0.9) 12%, #ffffff 50%, rgba(220,230,255,0.9) 88%, rgba(255,255,255,0) 100%)",
    transform: "translateX(-50%) rotate(-12deg) translateY(-130%)",
    boxShadow: "0 0 16px 3px rgba(255,255,255,0.7), 0 0 46px 8px rgba(180,200,255,0.3)",
    animation: "bladeSweep 2s cubic-bezier(0.45,0,0.4,1) 1.38s forwards",
  },
  bladeGlow: {
    position: "absolute",
    top: "-20%", left: "50%",
    height: "160%",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,0) 100%)",
    opacity: 0,
  },

  cutSeam: {
    position: "absolute",
    top: 0, bottom: 0, left: "50%",
    width: 3,
    background: "#ffffff",
    boxShadow: "0 0 24px 6px rgba(255,255,255,0.8)",
    transform: "translateX(-50%) rotate(-12deg) scaleY(1.15)",
    transformOrigin: "center",
    opacity: 0,
    zIndex: 22,
    pointerEvents: "none",
    animation: "seamGlow 0.35s ease 3.35s forwards",
  },

  flash: {
    position: "absolute", inset: 0,
    background: "#ffffff",
    zIndex: 30,
    pointerEvents: "none",
    opacity: 0,
    animation: "flashPulse 0.32s ease 3.28s forwards",
  },

  sparkOrigin: {
    position: "absolute",
    top: "50%", left: "50%",
    width: 0, height: 0,
    zIndex: 26,
    pointerEvents: "none",
  },
  spark: {
    position: "absolute",
    top: 0, left: 0,
    width: 3, height: 3,
    borderRadius: "50%",
    background: "#ffffff",
    boxShadow: "0 0 6px 1px rgba(255,255,255,0.9)",
    opacity: 0,
  },

  half: {
    position: "absolute",
    inset: 0,
    background: "#060810",
    zIndex: 20,
    animationFillMode: "forwards",
  },

  centerContent: {
    position: "relative",
    zIndex: 5,
    textAlign: "center",
    opacity: 0,
    animation: "fadeIn 0.4s ease 0.3s forwards",
  },
  mainLabel: {
  fontSize: 10, letterSpacing: 8,
  color: "rgba(255,255,255,0.35)",
  textTransform: "uppercase",
  marginBottom: 12,
  animation: "fadeUp 0.5s 0.4s ease both, colorFlipToDark 0.4s ease 3.45s forwards",
},
mainName: {
  fontFamily: "'Noto Serif JP', serif",
  fontSize: 28, fontWeight: 300,
  color: "#ffffff",
  letterSpacing: -0.5,
  lineHeight: 1.3,
  animation: "fadeUp 0.5s 0.5s ease both, colorFlipToDark 0.4s ease 3.45s forwards",
},
mainRole: {
  fontSize: 9, letterSpacing: 5,
  color: "rgba(255,255,255,0.3)",
  textTransform: "uppercase",
  margin: "28px auto 0",
  marginTop: 10,
  animation: "fadeUp 0.5s 0.6s ease both, colorFlipToDark 0.4s ease 3.45s forwards",
},
statusWrap: {
  position: "relative",
  height: 14,
  marginTop: 20,
  animation: "fadeUp 0.5s 0.8s ease both",
},
statusText: {
  position: "absolute",
  top: 0, left: 0, right: 0,
  fontSize: 9, letterSpacing: 4,
  color: "rgba(255,255,255,0.35)",
  textAlign: "center",
  animation: "blinkThenFadeOut 2.45s 0.8s ease forwards",
},
statusText2: {
  position: "absolute",
  top: 0, left: 0, right: 0,
  fontSize: 9, letterSpacing: 4,
  color: "rgba(17,17,17,0.5)",
  textAlign: "center",
  opacity: 0,
  animation: "fadeUp 0.4s 3.45s ease forwards",
},
};