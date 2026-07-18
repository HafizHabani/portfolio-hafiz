// src/ui/About.jsx
import Animblock from "../function/Animblock";

export default function About({ data }) {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-24 md:py-32 border-t border-[#e8e8e8] relative"
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Section label */}
        <Animblock>
          <div className="font-mono text-[10px] tracking-[0.5em] text-[#bbb] mb-10 uppercase">
            01 &nbsp;/&nbsp; About
          </div>
        </Animblock>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Left — bio */}
          <Animblock>
            <h2 className="font-serif font-light text-[36px] md:text-[42px] tracking-[-0.03em] leading-[1.15] mb-6">
              About Me.
            </h2>
            <p className="font-mono text-[13px] leading-[1.9] text-[#555]">
              {data.bio}
            </p>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[data.role, data.contact.location, "Open to Work"].map(label => (
                <span
                  key={label}
                  className="font-mono text-[10px] tracking-[0.1em] px-3 py-1.5 border border-[#e0e0e0] text-[#666]"
                >
                  {label}
                </span>
              ))}
            </div>
          </Animblock>

          {/* Right — identity table */}
          <Animblock delay={0.2}>
            <div className="border border-[#e8e8e8] p-8 md:p-12 relative h-full flex flex-col justify-center">

              {/* Card label */}
              <div className="absolute -top-px right-10 bg-[#fafaf8] px-3 font-mono text-[9px] tracking-[0.25em] text-[#ccc] uppercase">
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
                <div key={k} className="flex justify-between items-start py-4 border-b border-[#f0f0ee] last:border-0 gap-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#aaa] uppercase shrink-0">
                    {k}
                  </span>
                  <span className="font-mono text-[12px] text-[#111] tracking-[0.02em] text-right break-all">
                    {v}
                  </span>
                </div>
              ))}

              <div className="mt-8 w-9 h-9 border border-[#111] flex items-center justify-center text-base font-serif">
                ✦
              </div>
            </div>
          </Animblock>

        </div>
      </div>
    </section>
  );
}
