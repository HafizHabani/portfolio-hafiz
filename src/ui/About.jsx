// src/ui/About.jsx
import Animblock from "../function/Animblock";

export default function About({ data }) {
  return (
    <section
      id="about"
      className="relative px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[var(--page)] border-t border-[var(--line)]"
    >
      <div className="max-w-[1120px] mx-auto">

        <Animblock>
          <div className="mono text-[12px] tracking-[0.18em] uppercase text-[var(--accent)] mb-4">
            01 / About
          </div>
        </Animblock>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-16 items-start mt-4">

          {/* Left — bio */}
          <Animblock>
            <h2 className="font-display font-semibold text-[36px] md:text-[46px] tracking-[-0.03em] leading-[1.1] mb-7 text-[var(--ink)]">
              A bit<br />about me.
            </h2>
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.85] text-[var(--ink-2)] max-w-[58ch]">
              {data.bio}
            </p>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-2.5 mt-9">
              {[data.role, data.contact.location, "Open to Work"].map(label => (
                <span key={label} className="chip">
                  {label}
                </span>
              ))}
            </div>
          </Animblock>

          {/* Right — identity card */}
          <Animblock delay={0.15}>
            <div className="glass rounded-3xl p-8 md:p-10">
              <div className="label mb-7 text-[var(--ink-3)]">Identity</div>
              {[
                ["Name",     data.name],
                ["Role",     data.role],
                ["Location", data.contact.location],
                ["Status",   "Open to Work"],
                ["Email",    data.contact.email],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex justify-between items-baseline gap-4 py-3.5 ${i < 4 ? "border-b border-[var(--line-2)]" : ""}`}
                >
                  <span className="mono text-[11px] tracking-[0.12em] text-[var(--ink-3)] uppercase shrink-0">
                    {k}
                  </span>
                  <span className="font-sans text-[14px] text-[var(--ink)] tracking-[0.01em] text-right break-all">
                    {v}
                  </span>
                </div>
              ))}

              <div className="mt-8 flex items-center gap-3" aria-hidden>
                <span className="h-[3px] w-9 rounded-full bg-[var(--accent)]" />
                <span className="mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-3)]">{data.role}</span>
              </div>
            </div>
          </Animblock>

        </div>
      </div>
    </section>
  );
}