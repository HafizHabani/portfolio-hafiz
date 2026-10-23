// src/ui/Hero.jsx
import { useState } from "react";
import me1 from "../assets/png/Me.png";
import me2 from "../assets/png/Me2.jpg";
import me3 from "../assets/png/Me3.jpg";
import cvPdf from "../assets/pdf/CV Indonesia.pdf";
import { FiDownload, FiArrowUpRight, FiCopy, FiCheck, FiServer, FiCode, FiWifi } from "react-icons/fi";

const PHOTOS = [
  { id: "1", label: "01", src: me1, title: "Studio" },
  { id: "2", label: "02", src: me2, title: "Formal" },
  { id: "3", label: "03", src: me3, title: "Casual" },
];

export default function Hero({ data }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(data.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const words = data.name.split(" ");
  const firstName = words.slice(0, 2).join(" ");
  const lastName = words.slice(2).join(" ");

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[var(--page)] pt-24 sm:pt-28 pb-14"
    >
      {/* Ambient glow backgrounds */}
      <div
        className="absolute -top-32 right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-80"
        style={{
          background: "radial-gradient(closest-side, var(--glow-a), transparent)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] rounded-full pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(closest-side, var(--glow-b), transparent)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle modern background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1120px] mx-auto px-5 sm:px-8 md:px-12 flex-1 flex flex-col justify-center">
        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center pt-4 sm:pt-8">
          
          {/* Left Column — Text & CTAs */}
          <div className="flex flex-col items-start">
            
            {/* Status chip */}
            <div
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--card)]/80 backdrop-blur-md text-[12px] mono text-[var(--ink-2)]"
              style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
              </span>
              <span>Available for Opportunities</span>
              <span className="text-[var(--ink-3)]">·</span>
              <span className="text-[var(--ink-3)] hidden sm:inline">Palangkaraya, ID</span>
            </div>

            {/* Main Name */}
            <h1
              className="font-display font-bold tracking-tight text-[clamp(40px,6.8vw,82px)] leading-[1.02] mt-6 text-[var(--ink)]"
              style={{ animation: "fadeUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              {firstName}
              <span className="block gradient-text italic font-medium tracking-normal">
                {lastName}
              </span>
            </h1>

            {/* Headline / Role description */}
            <p
              className="font-sans text-[17px] sm:text-[19px] text-[var(--ink-2)] mt-5 max-w-xl leading-[1.75]"
              style={{ animation: "fadeUp 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              {data.role} —{" "}
              <span className="text-[var(--ink)] font-medium">
                {data.tagline}
              </span>{" "}
              Specializing in enterprise IT infrastructure, hardware reliability, and modern fullstack web solutions.
            </p>

            {/* Quick interactive email copy chip */}
            <div
              className="mt-5 flex items-center gap-2"
              style={{ animation: "fadeUp 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              <button
                onClick={copyEmail}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--chip-hover-line)] hover:bg-[var(--card-h)] text-[var(--ink-2)] hover:text-[var(--ink)] font-mono text-[13px] transition-all duration-200 cursor-pointer"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <FiCheck size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy size={13} className="text-[var(--accent)] group-hover:scale-110 transition-transform" />
                    <span>{data.contact.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Action buttons */}
            <div
              className="flex flex-wrap items-center gap-3.5 mt-8"
              style={{ animation: "fadeUp 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              <a href={cvPdf} download className="btn-primary">
                Download CV
                <FiDownload size={14} />
              </a>

              <a href="#projects" className="btn-ghost">
                Explore Projects
                <FiArrowUpRight size={14} />
              </a>
            </div>

            {/* Quick feature tags */}
            <div
              className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-[var(--line-2)]"
              style={{ animation: "fadeUp 0.7s 0.55s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              <span className="inline-flex items-center gap-1.5 text-[11px] mono text-[var(--ink-3)] mr-1">
                Core focus:
              </span>
              <span className="chip !text-[11px]">
                <FiServer size={11} className="text-[var(--accent)]" /> IT Infrastructure
              </span>
              <span className="chip !text-[11px]">
                <FiCode size={11} className="text-[var(--accent)]" /> React 19 & Tailwind
              </span>
              <span className="chip !text-[11px]">
                <FiWifi size={11} className="text-[var(--accent)]" /> MikroTik & Network
              </span>
            </div>

          </div>

          {/* Right Column — Modern Interactive Portrait Stage */}
          <div
            className="flex flex-col items-center justify-center relative py-4 lg:py-0"
            style={{ animation: "fadeUp 0.8s 0.25s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {/* Card frame */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] rounded-3xl p-3 sm:p-4 bg-[var(--card)] border border-[var(--card-border)] backdrop-blur-xl shadow-2xl">
              
              {/* Image viewport with subtle inner glow */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[var(--surface)] to-[var(--page)] border border-[var(--line-2)] aspect-[4/5] flex items-end justify-center">
                
                {/* Backlight gradient aura */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 60%, rgba(44,52,128,0.55) 0%, transparent 75%)",
                  }}
                />

                <img
                  src={PHOTOS[activePhoto].src}
                  alt={data.name}
                  className="relative z-10 w-[88%] h-auto max-h-[92%] object-contain select-none transition-all duration-300 transform hover:scale-[1.02]"
                  draggable={false}
                />

                {/* Floating Open-to-work tag */}
                <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--page-80)] border border-[var(--line)] backdrop-blur-md shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] mono font-medium text-[var(--ink)]">Open to Work</span>
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-3.5 right-3.5 z-20 px-3 py-1.5 rounded-xl bg-[var(--page-80)] border border-[var(--line)] backdrop-blur-md shadow-lg">
                  <div className="text-[10px] mono text-[var(--ink-3)] uppercase tracking-wider">Status</div>
                  <div className="text-[12px] font-medium text-[var(--ink)]">IT Staff @ TOP</div>
                </div>
              </div>

              {/* Photo switcher footer */}
              <div className="mt-3.5 px-2 flex items-center justify-between">
                <span className="text-[11px] mono text-[var(--ink-3)]">
                  Portrait View:
                </span>
                <div className="flex items-center gap-1.5">
                  {PHOTOS.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePhoto(idx)}
                      className={`
                        text-[11px] mono px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer
                        ${
                          activePhoto === idx
                            ? "bg-[var(--btn-grad)] text-[var(--btn-ink)] font-semibold shadow-sm"
                            : "bg-[var(--card)] text-[var(--ink-2)] hover:text-[var(--ink)] border border-[var(--line)]"
                        }
                      `}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bento Metric Strip */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-14 sm:mt-18 pt-8 border-t border-[var(--line)]"
          style={{ animation: "fadeUp 0.7s 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          {data.stats.map((s) => (
            <div
              key={s.label}
              className="group p-4 sm:p-5 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--chip-hover-line)] hover:bg-[var(--card-h)] transition-all duration-300"
            >
              <div className="font-display text-[26px] sm:text-[30px] font-bold tracking-tight text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                {s.value}
              </div>
              <div className="font-sans text-[12px] text-[var(--ink-3)] mt-1.5 group-hover:text-[var(--ink-2)] transition-colors">
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
