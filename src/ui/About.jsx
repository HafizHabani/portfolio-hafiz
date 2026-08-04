// src/ui/About.jsx
import Animblock from "../function/Animblock";

export default function About({ data }) {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-10 md:py-14 bg-[#F1F6F9] border-t border-[#9BA4B5]/30 relative"
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Section label */}
        <Animblock>
          <div className="font-mono text-[12px] sm:text-[13px] tracking-[0.4em] text-[#394867] mb-10 uppercase">
            01 &nbsp;/&nbsp; About
          </div>
        </Animblock>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Left — bio */}
          <Animblock>
            <h2 className="font-serif font-light text-[38px] md:text-[46px] tracking-[-0.02em] leading-[1.15] mb-6 text-[#212A3E]">
              About Me.
            </h2>
            <p className="font-mono text-[15px] md:text-[16px] leading-[1.9] text-[#394867]">
              {data.bio}
            </p>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[data.role, data.contact.location, "Open to Work"].map(label => (
                <span
                  key={label}
                  className="font-mono text-[12px] tracking-[0.08em] px-3.5 py-2 border border-[#9BA4B5]/50 text-[#394867]"
                >
                  {label}
                </span>
              ))}
            </div>
          </Animblock>

          {/* Right — identity table */}
          <Animblock delay={0.2}>
            <div className="border border-[#9BA4B5]/40 p-8 md:p-12 relative h-full flex flex-col justify-center">

              {/* Card label */}
              <div className="absolute -top-px right-10 bg-[#F1F6F9] px-3 font-mono text-[11px] tracking-[0.2em] text-[#394867] uppercase">
                Identity
              </div>

              {/* Rows */}
              {[
                ["Name",     data.name],
                ["Role",     data.role],
                ["Location", data.contact.location],
                ["Status",   "Open to Work"],
                ["Email",    data.contact.email],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-start py-4 border-b border-[#9BA4B5]/20 last:border-0 gap-4">
                  <span className="font-mono text-[12px] tracking-[0.15em] text-[#9BA4B5] uppercase shrink-0">
                    {k}
                  </span>
                  <span className="font-mono text-[14px] text-[#212A3E] tracking-[0.01em] text-right break-all">
                    {v}
                  </span>
                </div>
              ))}

              <div className="mt-8 w-10 h-10 border border-[#212A3E] flex items-center justify-center text-lg font-serif text-[#212A3E]">
                ✦
              </div>
            </div>
          </Animblock>

        </div>
      </div>
    </section>
  );
}