// src/ui/Contact.jsx
import Animblock from "../function/Animblock";

export default function Contact({ data }) {
  const links = [
    { key: "Email",    val: data.contact.email,    href: `mailto:${data.contact.email}` },
    { key: "GitHub",   val: data.contact.github,   href: `https://${data.contact.github}` },
    { key: "LinkedIn", val: data.contact.linkedin, href: `https://${data.contact.linkedin}` },
    { key: "Location", val: data.contact.location, href: null },
  ];

  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-24 md:py-32 bg-[#111] relative overflow-hidden"
    >
      {/* Kanji watermark */}
      <div
        className="absolute -left-8 -bottom-16 select-none pointer-events-none font-serif leading-none"
        style={{ fontSize: "clamp(120px, 22vw, 280px)", color: "rgba(255,255,255,0.025)" }}
      >繋</div>

      <div className="max-w-[1100px] mx-auto relative z-10">

        <Animblock>
          <div className="font-mono text-[10px] tracking-[0.5em] text-[#444] mb-8 uppercase">
            05 &nbsp;/&nbsp; Contact
          </div>
          <h2 className="font-serif font-light text-[36px] md:text-[56px] tracking-[-0.03em] text-white mb-4 leading-[1.1]">
            Let's<br />Collaborate.
          </h2>
          <p className="font-mono text-[13px] text-[#444] mb-14 max-w-md leading-[1.8]">
            Open for freelance projects, full-time opportunities, or a casual tech discussion.
          </p>
        </Animblock>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* CTA button */}
          <Animblock delay={0.15}>
            <a
              href={`mailto:${data.contact.email}`}
              className="inline-block font-mono text-[11px] tracking-[0.25em] uppercase text-white border border-[#333] px-8 py-4 transition-all duration-300 hover:bg-white hover:text-[#111] mb-12"
              style={{ cursor: "none" }}
            >
              Send a Message →
            </a>

            {/* Social links */}
            <div className="flex flex-col gap-1">
              {links.map(({ key, val, href }) => (
                <div key={key} className="flex justify-between items-center py-4 border-b border-[#1a1a1a]">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[#444] uppercase">
                    {key}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-[#666] hover:text-white transition-colors duration-200 tracking-[0.02em]"
                      style={{ cursor: "none" }}
                    >
                      {val}
                    </a>
                  ) : (
                    <span className="font-mono text-[11px] text-[#555] tracking-[0.02em]">{val}</span>
                  )}
                </div>
              ))}
            </div>
          </Animblock>

          {/* Availability card */}
          <Animblock delay={0.25}>
            <div className="border border-[#1e1e1e] p-8 relative">
              <div className="absolute -top-px left-8 bg-[#111] px-3 font-mono text-[9px] tracking-[0.25em] text-[#333] uppercase">
                Status
              </div>

              {/* Green dot + status */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[11px] tracking-[0.15em] text-[#555]">
                  Available for Work
                </span>
              </div>

              <p className="font-mono text-[12px] text-[#333] leading-[1.8] mb-6">
                Currently open to IT Engineering roles, freelance web projects, and infrastructure consulting engagements.
              </p>

              {/* Response time */}
              <div className="border-t border-[#1a1a1a] pt-6">
                <div className="font-mono text-[9px] tracking-[0.3em] text-[#333] uppercase mb-1">
                  Avg. Response Time
                </div>
                <div className="font-serif font-light text-[22px] text-white tracking-[-0.02em]">
                  &lt; 24 hours
                </div>
              </div>
            </div>
          </Animblock>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <span className="font-serif text-[18px] text-[#2a2a2a]">{data.kanji}</span>
          <span className="font-mono text-[10px] tracking-[0.15em] text-[#333]">
            © 2025 {data.name} — All rights reserved
          </span>
        </div>

      </div>
    </section>
  );
}
