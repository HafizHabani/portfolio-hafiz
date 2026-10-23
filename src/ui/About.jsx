// src/ui/About.jsx
import Animblock from "../function/Animblock";
import cvPdf from "../assets/pdf/CV Indonesia.pdf";
import { FiDownload, FiCheckCircle, FiShield, FiCpu, FiGlobe } from "react-icons/fi";

export default function About({ data }) {
  const identityRows = [
    { label: "Name", val: data.name },
    { label: "Role", val: data.role },
    { label: "Location", val: data.contact.location },
    { label: "Status", val: "Available for Work" },
    { label: "Contact", val: data.contact.email },
  ];

  const pillars = [
    {
      icon: FiShield,
      title: "Infrastructure & Security",
      desc: "Deploying enterprise-grade CCTV surveillance (300+ points), MikroTik routing, LAN/Fiber Optic cabling, and IP networks with zero downtime mentality.",
    },
    {
      icon: FiGlobe,
      title: "Modern Web Engineering",
      desc: "Developing fast, responsive single-page web applications with React 19, Tailwind CSS, REST APIs, and modern component-driven architectures.",
    },
    {
      icon: FiCpu,
      title: "Hardware Diagnostics",
      desc: "8+ years of hands-on hardware experience troubleshooting, assembling, and maintaining 400+ client devices, servers, and office peripherals.",
    },
  ];

  return (
    <section
      id="about"
      className="relative px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[var(--page)] border-t border-[var(--line)] overflow-hidden"
    >
      <div className="max-w-[1120px] mx-auto relative z-10">
        
        {/* Section Header */}
        <Animblock>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="mono text-[12px] tracking-[0.18em] uppercase text-[var(--accent)] mb-3">
                01 / About Me
              </div>
              <h2 className="font-display font-bold text-[34px] sm:text-[44px] md:text-[50px] tracking-tight leading-[1.08] text-[var(--ink)]">
                Dual-Discipline <span className="gradient-text">Engineer.</span>
              </h2>
            </div>
            <p className="font-sans text-[16px] text-[var(--ink-2)] max-w-md leading-relaxed">
              Bridging the gap between physical systems infrastructure, network security, and high-performance digital web applications.
            </p>
          </div>
        </Animblock>

        {/* Modern Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Bio & Philosophy (8 cols on lg) */}
          <div className="lg:col-span-8">
            <Animblock>
              <div className="h-full rounded-3xl p-7 sm:p-9 bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--chip-hover-line)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mono text-[11px] tracking-wider uppercase text-[var(--ink-3)] mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    Background & Mission
                  </div>
                  <h3 className="font-display text-[22px] sm:text-[26px] font-semibold text-[var(--ink)] leading-snug tracking-tight mb-5">
                    "I build technology solutions that are dependable on the ground and intuitive on the screen."
                  </h3>
                  <p className="font-sans text-[15px] sm:text-[16px] text-[var(--ink-2)] leading-[1.85] mb-6">
                    {data.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--line-2)] flex flex-wrap items-center gap-2">
                  <span className="mono text-[11px] text-[var(--ink-3)] mr-2">Focus areas:</span>
                  {["Systems Administration", "Network Infrastructure", "React.js Frontend", "Hardware Maintenance", "CCTV Deployment"].map((tag) => (
                    <span key={tag} className="chip">
                      <FiCheckCircle size={11} className="text-[var(--accent)]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Animblock>
          </div>

          {/* Card 2: Identity & Location (4 cols on lg) */}
          <div className="lg:col-span-4">
            <Animblock delay={0.1}>
              <div className="h-full rounded-3xl p-7 sm:p-8 bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--chip-hover-line)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="mono text-[11px] tracking-wider uppercase text-[var(--ink-3)]">
                      Identity Matrix
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {identityRows.map((row, i) => (
                      <div
                        key={row.label}
                        className={`flex justify-between items-baseline gap-3 pb-3 ${
                          i < identityRows.length - 1 ? "border-b border-[var(--line-2)]" : ""
                        }`}
                      >
                        <span className="mono text-[11px] uppercase tracking-wider text-[var(--ink-3)] shrink-0">
                          {row.label}
                        </span>
                        <span className="font-sans text-[13px] font-medium text-[var(--ink)] text-right break-all">
                          {row.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-[var(--line-2)]">
                  <a
                    href={cvPdf}
                    download
                    className="w-full btn-ghost !py-2.5 !text-[12px] flex items-center justify-center gap-2 text-center"
                  >
                    <FiDownload size={13} />
                    Download Full CV
                  </a>
                </div>
              </div>
            </Animblock>
          </div>

          {/* Card 3: Engineering Pillars (3-column subgrid across 12 cols) */}
          <div className="lg:col-span-12">
            <Animblock delay={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {pillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="p-6 sm:p-7 rounded-3xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--chip-hover-line)] hover:bg-[var(--card-h)] transition-all duration-300 group"
                    >
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-[var(--surface)] border border-[var(--line)] text-[var(--accent)] group-hover:scale-110 transition-transform mb-5">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-display text-[18px] font-semibold text-[var(--ink)] tracking-tight mb-2.5">
                        {p.title}
                      </h4>
                      <p className="font-sans text-[14px] text-[var(--ink-2)] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Animblock>
          </div>

        </div>

      </div>
    </section>
  );
}
