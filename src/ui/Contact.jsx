// src/ui/Contact.jsx
import Animblock from "../function/Animblock";

export default function Contact({ data }) {
  const links = [
    { key: "Email",     val: data.contact.email,      href: `mailto:${data.contact.email}` },
    { key: "GitHub",    val: data.contact.github,     href: `https://${data.contact.github}` },
    { key: "LinkedIn",  val: data.contact.linkedin,   href: `https://${data.contact.linkedin}` },
    { key: "Location",  val: data.contact.location,   href: null },
  ];

  const nav = ["About", "Services", "Works", "Experience"];

  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[var(--page)] text-[var(--ink)] overflow-hidden"
    >
      {/* ambient glow */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[760px] h-[460px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(closest-side, var(--glow-a), transparent)" }}
      />

      <div className="max-w-[1120px] mx-auto relative z-10">

        {/* Big CTA — centered, Binjan footer style */}
        <Animblock>
          <div className="text-center max-w-3xl mx-auto">
            <div className="mono text-[12px] tracking-[0.18em] uppercase text-[var(--ink-3)] mb-5">
              05 / Contact
            </div>
            <h2 className="font-display font-semibold text-[38px] md:text-[56px] tracking-[-0.03em] leading-[1.06] text-[var(--ink)]">
              Let's make something
              <br />
              <span className="gradient-text">amazing together.</span>
            </h2>

            {/* "Start by saying hi" accent link */}
            <a
              href={`mailto:${data.contact.email}`}
              className="inline-block mt-8 font-sans text-[17px] md:text-[19px] font-medium text-[var(--accent)] hover:text-[var(--accent-h)] transition-colors duration-200 pb-1 border-b border-[var(--accent)] hover:border-[var(--accent-h)]"
            >
              Start by saying hi →
            </a>

            <div className="mt-5">
              <a href="https://wa.me/6285173077553" target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex">
                Chat on WhatsApp <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </Animblock>

        {/* Contact info + status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 mt-20">
          <Animblock delay={0.1}>
            <div className="glass rounded-3xl p-8 md:p-9 h-full">
              <div className="label mb-6 text-[var(--ink-3)]">Reach me</div>
              {links.map(({ key, val, href }) => (
                <div key={key} className={`flex justify-between items-baseline py-3.5 ${key !== "Location" ? "border-b border-[var(--line-2)]" : ""}`}>
                  <span className="mono text-[11px] tracking-[0.15em] text-[var(--ink-3)] uppercase">
                    {key}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[14px] text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors duration-200 tracking-[0.01em] text-right break-all"
                    >
                      {val}
                    </a>
                  ) : (
                    <span className="font-sans text-[14px] text-[var(--ink-2)] tracking-[0.01em] text-right">{val}</span>
                  )}
                </div>
              ))}
            </div>
          </Animblock>

          <Animblock delay={0.18}>
            <div className="glass rounded-3xl p-8 md:p-9 h-full">
              <div className="label mb-6 text-[var(--ink-3)]">Status</div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--dot)]" style={{ animation: "pulseDot 1.8s ease-in-out infinite" }} />
                <span className="font-sans text-[14px] font-medium tracking-[0.04em] text-[var(--ink)]">
                  Available for Work
                </span>
              </div>
              <p className="font-sans text-[15px] text-[var(--ink-2)] leading-[1.85] mb-7">
                Currently open to IT Engineering roles, freelance web projects, and infrastructure consulting engagements.
              </p>
              <div className="border-t border-[var(--line-2)] pt-6">
                <div className="label mb-1.5 text-[var(--ink-3)]">Avg. Response Time</div>
                <div className="font-display text-[28px] font-medium text-[var(--ink)] tracking-[-0.02em]">
                  &lt; 24 hours
                </div>
              </div>
            </div>
          </Animblock>
        </div>

        {/* Footer bar */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-[var(--line)] flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-[20px] font-medium text-[var(--ink)]">
            Hafiz<span className="gradient-text">.</span>
          </span>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {nav.map((n) => (
              <a
                key={n}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const map = { About: "about", Services: "skills", Works: "projects", Experience: "experience" };
                  document.getElementById(map[n])?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-sans text-[13px] text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors duration-200"
              >
                {n}
              </a>
            ))}
          </nav>

          <span className="font-sans text-[13px] text-[var(--ink-3)]">
            © 2025 {data.name}
          </span>
        </div>

      </div>
    </section>
  );
}