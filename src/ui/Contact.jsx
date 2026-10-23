// src/ui/Contact.jsx
import { useState } from "react";
import Animblock from "../function/Animblock";
import {
  FiMail,
  FiMessageSquare,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiClock,
  FiArrowUpRight,
  FiCopy,
  FiCheck,
  FiArrowUp,
} from "react-icons/fi";

export default function Contact({ data }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(data.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 md:px-12 pt-20 md:pt-28 pb-12 bg-[var(--page)] text-[var(--ink)] overflow-hidden"
    >
      {/* Ambient background light */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-50"
        style={{ background: "radial-gradient(closest-side, var(--glow-a), transparent)" }}
      />

      <div className="max-w-[1120px] mx-auto relative z-10">
        
        {/* Main CTA Centerpiece */}
        <Animblock>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mono text-[12px] tracking-[0.18em] uppercase text-[var(--accent)] mb-4">
              05 / Get In Touch
            </div>
            <h2 className="font-display font-bold text-[36px] sm:text-[50px] md:text-[60px] tracking-tight leading-[1.05] text-[var(--ink)]">
              Let's build something
              <span className="block gradient-text italic">resilient together.</span>
            </h2>
            <p className="font-sans text-[16px] sm:text-[18px] text-[var(--ink-2)] mt-5 leading-relaxed max-w-xl mx-auto">
              Whether you need scalable IT infrastructure, network optimization, or a high-performance modern web application, I'm ready to collaborate.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
              <a
                href={`mailto:${data.contact.email}`}
                className="btn-primary"
              >
                <FiMail size={15} />
                Send An Email
              </a>

              <a
                href="https://wa.me/6285173077553"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FiMessageSquare size={15} className="text-emerald-400" />
                Chat on WhatsApp
                <FiArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </Animblock>

        {/* 4-Bento Contact Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-20">
          
          {/* Card 1: Email */}
          <Animblock delay={0.05}>
            <div className="h-full p-6 rounded-3xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--chip-hover-line)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[var(--surface)] text-[var(--accent)] border border-[var(--line)] mb-4">
                  <FiMail size={18} />
                </div>
                <div className="mono text-[11px] uppercase tracking-wider text-[var(--ink-3)] mb-1">Email Channel</div>
                <div className="font-sans text-[14px] font-medium text-[var(--ink)] break-all mb-4">
                  {data.contact.email}
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="w-full py-2 px-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--card-h)] text-[var(--ink-2)] hover:text-[var(--ink)] mono text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <FiCheck size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy size={12} />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </Animblock>

          {/* Card 2: WhatsApp & Quick Msg */}
          <Animblock delay={0.1}>
            <div className="h-full p-6 rounded-3xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--chip-hover-line)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[var(--surface)] text-emerald-400 border border-[var(--line)] mb-4">
                  <FiMessageSquare size={18} />
                </div>
                <div className="mono text-[11px] uppercase tracking-wider text-[var(--ink-3)] mb-1">Instant Messaging</div>
                <div className="font-sans text-[14px] font-medium text-[var(--ink)] mb-1">
                  +62 851-7307-7553
                </div>
                <div className="text-[12px] text-[var(--ink-3)] mb-4">Fastest response for urgent projects.</div>
              </div>
              <a
                href="https://wa.me/6285173077553"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--card-h)] text-[var(--ink-2)] hover:text-[var(--ink)] mono text-[11px] flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Direct Message</span>
                <FiArrowUpRight size={12} />
              </a>
            </div>
          </Animblock>

          {/* Card 3: Profiles */}
          <Animblock delay={0.15}>
            <div className="h-full p-6 rounded-3xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--chip-hover-line)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[var(--surface)] text-[var(--accent)] border border-[var(--line)] mb-4">
                  <FiGithub size={18} />
                </div>
                <div className="mono text-[11px] uppercase tracking-wider text-[var(--ink-3)] mb-1">Code & Network</div>
                <div className="space-y-2 mt-2">
                  <a
                    href={`https://${data.contact.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[13px] text-[var(--ink-2)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span className="flex items-center gap-1.5"><FiGithub size={13} /> GitHub Profile</span>
                    <FiArrowUpRight size={12} />
                  </a>
                  <a
                    href={`https://${data.contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[13px] text-[var(--ink-2)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span className="flex items-center gap-1.5"><FiLinkedin size={13} /> LinkedIn Profile</span>
                    <FiArrowUpRight size={12} />
                  </a>
                </div>
              </div>
              <div className="pt-3 border-t border-[var(--line-2)] text-[11px] mono text-[var(--ink-3)]">
                Active repositories & updates
              </div>
            </div>
          </Animblock>

          {/* Card 4: Location & Availability */}
          <Animblock delay={0.2}>
            <div className="h-full p-6 rounded-3xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--chip-hover-line)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[var(--surface)] text-[var(--accent)] border border-[var(--line)] mb-4">
                  <FiClock size={18} />
                </div>
                <div className="mono text-[11px] uppercase tracking-wider text-[var(--ink-3)] mb-1">Response Guarantee</div>
                <div className="font-display text-[22px] font-bold text-[var(--ink)] mb-1">
                  &lt; 24 Hours
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-[var(--ink-3)] mt-2">
                  <FiMapPin size={12} className="text-[var(--accent)] shrink-0" />
                  <span className="truncate">{data.contact.location}</span>
                </div>
              </div>
              <div className="pt-3 border-t border-[var(--line-2)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] mono text-emerald-400 font-medium">Available for hire</span>
              </div>
            </div>
          </Animblock>

        </div>

        {/* Modern Footer Bar */}
        <footer className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="font-display text-[20px] font-bold text-[var(--ink)]">
              Hafiz<span className="gradient-text">.</span>
            </span>
            <span className="text-[var(--line)]">|</span>
            <span className="text-[12px] mono text-[var(--ink-3)]">
              © {new Date().getFullYear()} Muhammad Hafiz Habani Nelwan
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] mono text-[var(--ink-3)] hidden md:inline">
              Built with React 19 · Vite 8 · Tailwind 3.4
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full flex items-center justify-center border border-[var(--line)] bg-[var(--card)] hover:bg-[var(--card-h)] text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors cursor-pointer"
              title="Back to top"
            >
              <FiArrowUp size={14} />
            </button>
          </div>
        </footer>

      </div>
    </section>
  );
}
