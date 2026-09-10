// src/startup/Start.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/biodata";

export default function Start() {
  const navigate = useNavigate();

  const enter = () => navigate("/Dashboard");

  useEffect(() => {
    // short, calm intro — 1.2s, then in
    const timer = setTimeout(() => navigate("/Dashboard"), 1200);
    return () => clearTimeout(timer);
  }, [navigate]);

  const words = data.name.split(" ");
  const firstName = words.slice(0, 2).join(" ");
  const lastName  = words.slice(2).join(" ");

  return (
    <div
      className="relative min-h-screen cursor-pointer bg-[var(--page)] text-[var(--ink)] flex items-center justify-center"
      onClick={enter}
    >
      {/* ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-24 w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(closest-side, var(--glow-a), transparent)", animation: "orbFloat 9s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-40 -left-24 w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(closest-side, var(--glow-b), transparent)", animation: "orbFloat2 11s ease-in-out infinite" }}
        />
      </div>

      <div className="relative text-center px-6">
        <div
          className="mono inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[var(--ink-2)] border border-[var(--line)] rounded-full px-4 py-1.5 mb-7"
          style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--dot)]" style={{ animation: "pulseDot 1.8s ease-in-out infinite" }} />
          {data.role}
        </div>

        <div
          className="font-display text-[clamp(38px,8vw,84px)] font-medium tracking-[-0.03em] leading-[1.05] text-[var(--ink)]"
          style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
        >
          {firstName}
          <span className="block gradient-text">{lastName}</span>
        </div>

        <div
          className="mx-auto mt-8 h-[3px] w-44 rounded-full bg-[var(--line-2)] overflow-hidden"
          style={{ animation: "fadeUp 0.6s ease 0.35s both" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg,var(--lift),var(--accent))",
              transformOrigin: "left",
              animation: "introLine 1s cubic-bezier(0.4,0,0.2,1) 0.15s both",
            }}
          />
        </div>

        <div
          className="mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink-3)] mt-6"
          style={{ animation: "fadeUp 0.6s ease 0.5s both" }}
        >
          click anywhere to enter
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