// src/ui/Contact.jsx
import Animblock from "../function/Animblock";

export default function Contact({ data }) {
  const links = [
    { key: "Email", val: data.contact.email, href: `mailto:${data.contact.email}` },
    { key: "GitHub", val: data.contact.github, href: `https://${data.contact.github}` },
    { key: "LinkedIn", val: data.contact.linkedin, href: `https://${data.contact.linkedin}` },
    { key: "Location", val: data.contact.location, href: null },
  ];

  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-10 md:py-14 bg-[#111] relative overflow-hidden"
    >
      {/* Kanji watermark */}
      <div
        className="absolute -left-8 -bottom-16 select-none pointer-events-none font-serif leading-none"
        style={{ fontSize: "clamp(120px, 22vw, 280px)", color: "rgba(255,255,255,0.025)" }}
      >繋</div>

      <div className="max-w-[1100px] mx-auto relative z-10">

        <Animblock>
          <div className="font-mono text-[12px] sm:text-[13px] tracking-[0.4em] text-[#666] mb-8 uppercase">
            05 &nbsp;/&nbsp; Contact
          </div>
          <h2 className="font-serif font-light text-[40px] md:text-[58px] tracking-[-0.02em] text-white mb-4 leading-[1.1]">
            Let's<br />Collaborate.
          </h2>
          <p className="font-mono text-[15px] md:text-[16px] text-[#777] mb-14 max-w-md leading-[1.8]">
            Open for freelance projects, full-time opportunities, or a casual tech discussion.
          </p>
        </Animblock>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* CTA button */}
          <Animblock delay={0.15}>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hafizhbniwork@gmail.com&su=Let's%20Collaborate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-[13px] tracking-[0.2em] uppercase text-white border border-[#333] px-8 py-4 transition-all duration-300 hover:bg-white hover:text-[#111] mb-4"
              style={{ cursor: "none" }}
            >
              Send Me an Email →
            </a>
            <a 
              href="https://wa.me/6285173077553"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-[13px] tracking-[0.2em] uppercase text-white border border-[#333] px-8 py-4 transition-all duration-300 hover:bg-white hover:text-[#111] mb-12"
              style={{ cursor: "none" }}
            >
              Chat Me on WhatsApp →
            </a>
            {/* Social links */}
            <div className="flex flex-col gap-1">
              {links.map(({ key, val, href }) => (
                <div key={key} className="flex justify-between items-center py-4 border-b border-[#1a1a1a]">
                  <span className="font-mono text-[12px] tracking-[0.25em] text-[#666] uppercase">
                    {key}
                  </span>
                  {href ? (
                    <a 
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] text-[#888] hover:text-white transition-colors duration-200 tracking-[0.01em]"
                      style={{ cursor: "none" }}
                    >
                      {val}
                    </a>
                  ) : (
                    <span className="font-mono text-[13px] text-[#777] tracking-[0.01em]">{val}</span>
                  )}
                </div>
              ))}
            </div>
          </Animblock>

          {/* Availability card */}
          <Animblock delay={0.25}>
            <div className="border border-[#1e1e1e] p-8 relative">
              <div className="absolute -top-px left-8 bg-[#111] px-3 font-mono text-[11px] tracking-[0.2em] text-[#555] uppercase">
                Status
              </div>

              {/* Green dot + status */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[13px] tracking-[0.1em] text-[#777]">
                  Available for Work
                </span>
              </div>

              <p className="font-mono text-[14px] text-[#555] leading-[1.8] mb-6">
                Currently open to IT Engineering roles, freelance web projects, and infrastructure consulting engagements.
              </p>

              {/* Response time */}
              <div className="border-t border-[#1a1a1a] pt-6">
                <div className="font-mono text-[11px] tracking-[0.25em] text-[#555] uppercase mb-1">
                  Avg. Response Time
                </div>
                <div className="font-serif font-light text-[24px] text-white tracking-[-0.02em]">
                  &lt; 24 hours
                </div>
              </div>
            </div>
          </Animblock>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <span className="font-serif text-[18px] text-[#3a3a3a]">{data.kanji}</span>
          <span className="font-mono text-[12px] tracking-[0.1em] text-[#555]">
            © 2025 {data.name} — All rights reserved
          </span>
        </div>

      </div>
    </section>
  );
}