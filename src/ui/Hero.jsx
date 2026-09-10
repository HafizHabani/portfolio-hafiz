// src/ui/Hero.jsx
import meImg from "../assets/png/Me.png";
import cvPdf from "../assets/pdf/CV Indonesia.pdf";

/*
 * Decorative background objects:
 *  - dark mode  → round (dots / rings)
 *  - light mode → plus (✚ editorial marks)
 *  - the `toggle` object IS the light/dark switcher.
 */
const OBJECTS = [
  { id: "a", x: "10%",  y: "16%", size: 14, kind: "ring" },
  { id: "b", x: "88%",  y: "12%", size: 10, kind: "dot"  },
  { id: "c", x: "5%",   y: "74%", size: 12, kind: "dot"  },
  { id: "d", x: "44%",  y: "6%",  size: 8,  kind: "ring" },
  { id: "e", x: "72%",  y: "84%", size: 10, kind: "ring" },
  { id: "t", x: "81%",  y: "76%", size: 34, kind: "toggle", toggle: true },
];

export default function Hero({ data, theme, onToggleTheme }) {
  const stats = data.stats;
  const words = data.name.split(" ");
  const firstName = words.slice(0, 2).join(" ");
  const lastName  = words.slice(2).join(" ");
  const isDark = theme !== "light";

  /* ### -- helper: get the shape class for an object given current theme -- */
  const shapeFor = (o) => {
    if (o.kind === "toggle") return isDark ? "hero-obj-dot hero-obj-toggle" : "hero-obj-plus hero-obj-thick hero-obj-toggle";
    if (o.kind === "ring")   return isDark ? "hero-obj-ring" : "hero-obj-plus";
    return isDark ? "hero-obj-dot" : "hero-obj-plus";
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[var(--page)]"
    >

      {/* subtle grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            `linear-gradient(var(--grid-line) 1px, transparent 1px),` +
            `linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, #000 40%, transparent 100%)",
        }}
      />

      {/* ambient gradient orbs */}
      <div
        className="absolute -top-40 right-[8%] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(closest-side, var(--glow-a), transparent)",
          filter: "blur(10px)",
          animation: "orbFloat 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-48 left-[4%] w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(closest-side, var(--glow-b), transparent)",
          filter: "blur(10px)",
          animation: "orbFloat2 15s ease-in-out infinite",
        }}
      />

      {/* decorative objects — keyed by theme so they re-pop + morph */}
      <div key={theme} className="absolute inset-0 z-[6]">
        {OBJECTS.map((o) => (
          <span
            key={o.id}
            className={`hero-obj ${shapeFor(o)} ${o.toggle ? "hero-obj-toggle" : ""}`}
            style={{ left: o.x, top: o.y, width: o.size, height: o.size }}
            onClick={o.toggle ? onToggleTheme : undefined}
            role={o.toggle ? "button" : undefined}
            tabIndex={o.toggle ? 0 : undefined}
            aria-label={o.toggle
              ? (isDark ? "Switch to light mode" : "Switch to dark mode")
              : undefined}
            title={o.toggle
              ? (isDark ? "Switch to light mode" : "Switch to dark mode")
              : undefined}
          />
        ))}
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1120px] mx-auto px-5 sm:px-8 md:px-12 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center">

          {/* Left — text */}
          <div>
            {/* kicker */}
            <div
              className="mono text-[12px] tracking-[0.18em] uppercase text-[var(--ink-2)] flex items-center gap-2.5"
              style={{ animation: "fadeUp 0.7s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--dot)]" style={{ animation: "pulseDot 1.8s ease-in-out infinite" }} />
              Hey there, I'm
            </div>

            {/* Name — editorial two-line: white bold + italic gradient accent */}
            <h1
              className={`font-display font-bold tracking-[-0.03em] mt-6 text-[var(--ink)]`}
              style={{ fontSize: "clamp(42px, 7.5vw, 84px)", lineHeight: 1.02, animation: "fadeUp 0.7s 0.2s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              {firstName}
              <span
                className="block gradient-text italic"
                style={{ letterSpacing: "0.01em" }}
              >
                {lastName}
              </span>
            </h1>

            {/* Role + tagline */}
            <p
              className="font-sans text-[18px] md:text-[20px] text-[var(--ink-2)] mt-6 max-w-lg leading-[1.7]"
              style={{ animation: "fadeUp 0.7s 0.32s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              {data.role} — {data.tagline}
            </p>

            {/* Email accent */}
            <a
              href={`mailto:${data.contact.email}`}
              className="inline-flex items-center gap-2 font-mono text-[15px] md:text-[16px] text-[var(--accent)] mt-5 hover:underline underline-offset-4 transition-colors"
              style={{ animation: "fadeUp 0.7s 0.42s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              {data.contact.email} <span aria-hidden>↗</span>
            </a>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-3 mt-9"
              style={{ animation: "fadeUp 0.7s 0.5s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              <a href={cvPdf} download className="btn-primary">
                Download CV <span aria-hidden>↓</span>
              </a>
              <a href="#contact" className="btn-ghost">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right — portrait, natural (no frame) + graphic shapes */}
          <div
            className="relative flex justify-center lg:justify-end py-8"
            style={{ animation: "fadeUp 0.7s 0.3s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <div className="relative">
              {/* large decorative ring behind-left (round in dark, plus in light) */}
              <span
                key={`lg-${theme}`}
                className={`hero-obj hero-obj-lg ${isDark ? "hero-obj-ring" : "hero-obj-plus"}`}
                style={{ left: "-34%", top: "-8%", width: 300, height: 300 }}
              />

              {/* photo — bare, no frame */}
              <img
                src={meImg}
                alt={data.name}
                className="relative z-10 w-[300px] sm:w-[340px] md:w-[380px] h-auto object-cover select-none"
              />

              {/* circular "Open to Work" badge */}
              <div
                key={`badge-${theme}`}
                className="absolute z-20 left-[-2%] sm:left-[-6%] top-[14%] w-28 h-28 rounded-full flex flex-col items-center justify-center text-center gap-1"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--line)",
                  animation: "heroObjPop 0.55s var(--ease-inout)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[var(--dot)]" style={{ animation: "pulseDot 1.8s ease-in-out infinite" }} />
                <span className="mono text-[9px] tracking-[0.14em] uppercase text-[var(--ink-2)]">Open to</span>
                <span className="font-display text-[17px] font-semibold gradient-text leading-none">Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-6 mt-14 pt-8 border-t border-[var(--line)]"
          style={{ animation: "fadeUp 0.7s 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-[24px] md:text-[28px] font-semibold tracking-[-0.02em] leading-none text-[var(--ink)]">
                {s.value}
              </div>
              <div className="font-sans text-[11px] md:text-[12px] text-[var(--ink-3)] mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}