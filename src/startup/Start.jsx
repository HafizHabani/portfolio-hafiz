// src/startup/Start.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/biodata";
import { FiArrowRight } from "react-icons/fi";

export default function Start() {
  const navigate = useNavigate();

  const enter = () => navigate("/Dashboard");

  useEffect(() => {
    // Quick calm loader — 1.1s, then automatic transition
    const timer = setTimeout(() => navigate("/Dashboard"), 1100);
    return () => clearTimeout(timer);
  }, [navigate]);

  const words = data.name.split(" ");
  const firstName = words.slice(0, 2).join(" ");
  const lastName = words.slice(2).join(" ");

  return (
    <div
      className="relative min-h-screen cursor-pointer bg-[var(--page)] text-[var(--ink)] flex flex-col items-center justify-center overflow-hidden select-none"
      onClick={enter}
    >
      {/* Ambient background light */}
      <div
        className="absolute top-1/4 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(closest-side, var(--glow-a), transparent)",
          animation: "orbFloat 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(closest-side, var(--glow-b), transparent)",
          animation: "orbFloat2 12s ease-in-out infinite",
        }}
      />

      {/* Modern subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(circle at 50% 50%, #000 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        {/* Role Pill */}
        <div
          className="mono inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[var(--ink-2)] border border-[var(--line)] bg-[var(--card)]/80 backdrop-blur-md rounded-full px-4 py-1.5 mb-8 shadow-lg"
          style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
          </span>
          {data.role} · Palangkaraya
        </div>

        {/* Name */}
        <div
          className="font-display text-[clamp(38px,7.5vw,76px)] font-bold tracking-tight leading-[1.05] text-[var(--ink)] mb-8"
          style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
        >
          {firstName}
          <span className="block gradient-text italic font-medium">{lastName}</span>
        </div>

        {/* Loading progress bar */}
        <div
          className="mx-auto h-[3px] w-48 rounded-full bg-[var(--line)] overflow-hidden"
          style={{ animation: "fadeUp 0.6s ease 0.35s both" }}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-[var(--lift)] via-[var(--accent)] to-[var(--accent-silver)]"
            style={{
              transformOrigin: "left",
              animation: "introLine 1.1s cubic-bezier(0.4,0,0.2,1) both",
            }}
          />
        </div>

        {/* Prompt */}
        <div
          className="inline-flex items-center gap-1.5 mono text-[11px] tracking-[0.16em] uppercase text-[var(--ink-3)] mt-7 hover:text-[var(--accent)] transition-colors"
          style={{ animation: "fadeUp 0.6s ease 0.5s both" }}
        >
          <span>Tap anywhere to enter</span>
          <FiArrowRight size={12} />
        </div>
      </div>

      <style>{`
        @keyframes introLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
