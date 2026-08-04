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
      className="px-6 md:px-12 py-10 md:py-14 bg-[#212A3E] relative overflow-hidden"
    >
      {/* Kanji watermark */}
      <div
        className="absolute -left-8 -bottom-16 select-none pointer-events-none font-serif leading-none"
        style={{ fontSize: "clamp(120px, 22vw, 280px)", color: "rgba(241,246,249,0.025)" }}
      >繋</div>

      <div className="max-w-[1100px] mx-auto relative z-10">

        <Animblock>
          <div className="font-mono text-[12px] sm:text-[13px] tracking-[0.4em] text-[#9BA4B5] mb-8 uppercase">
            05 &nbsp;/&nbsp; Contact
          </div>
          <h2 className="font-serif font-light text-[40px] md:text-[58px] tracking-[-0.02em] text-[#F1F6F9] mb-4 leading-[1.1]">
            Let's<br />Collaborate.
          </h2>
          <p className="font-mono text-[15px] md:text-[16px] text-[#9BA4B5] mb-14 max-w-md leading-[1.8]">
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
              className="inline-block font-mono text-[13px] tracking-[0.2em] uppercase text-[#F1F6F9] border border-[#394867] px-8 py-4 transition-all duration-300 hover:bg-[#F1F6F9] hover:text-[#212A3E] mb-4"
              style={{ cursor: "none" }}
            >
              Send Me an Email →
            </a>
            <a
              href="https://wa.me/6285173077553"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-[13px] tracking-[0.2em] uppercase text-[#F1F6F9] border border-[#394867] px-8 py-4 transition-all duration-300 hover:bg-[#F1F6F9] hover:text-[#212A3E] mb-12"
              style={{ cursor: "none" }}
            >
              Chat Me on WhatsApp →
            </a>
            {/* Social links */}
            <div className="flex flex-col gap-1">
              {links.map(({ key, val, href }) => (
                <div key={key} className="flex justify-between items-center py-4 border-b border-[#394867]/40">
                  <span className="font-mono text-[12px] tracking-[0.25em] text-[#9BA4B5] uppercase">
                    {key}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] text-[#9BA4B5] hover:text-[#F1F6F9] transition-colors duration-200 tracking-[0.01em]"
                      style={{ cursor: "none" }}
                    >
                      {val}
                    </a>
                  ) : (
                    <span className="font-mono text-[13px] text-[#9BA4B5] tracking-[0.01em]">{val}</span>
                  )}
                </div>
              ))}
            </div>
          </Animblock>

          {/* Availability card */}
          <Animblock delay={0.25}>
            <div className="border border-[#394867]/50 p-8 relative">
              <div className="absolute -top-px left-8 bg-[#212A3E] px-3 font-mono text-[11px] tracking-[0.2em] text-[#9BA4B5] uppercase">
                Status
              </div>

              {/* Green dot + status */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[13px] tracking-[0.1em] text-[#9BA4B5]">
                  Available for Work
                </span>
              </div>

              <p className="font-mono text-[14px] text-[#9BA4B5] leading-[1.8] mb-6">
                Currently open to IT Engineering roles, freelance web projects, and infrastructure consulting engagements.
              </p>

              {/* Response time */}
              <div className="border-t border-[#394867]/40 pt-6">
                <div className="font-mono text-[11px] tracking-[0.25em] text-[#9BA4B5] uppercase mb-1">
                  Avg. Response Time
                </div>
                <div className="font-serif font-light text-[24px] text-[#F1F6F9] tracking-[-0.02em]">
                  &lt; 24 hours
                </div>
              </div>
            </div>
          </Animblock>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-[#394867]/40 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <span className="font-serif text-[18px] text-[#394867]">{data.kanji}</span>
          <span className="font-mono text-[12px] tracking-[0.1em] text-[#9BA4B5]">
            © 2025 {data.name} — All rights reserved
          </span>
        </div>

      </div>
    </section>
  );
}