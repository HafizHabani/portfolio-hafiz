// src/components/sections/ContactSection.jsx
import Animblock from "../function/Animblock";

export default function Contact({ data }) {
  return (
    <section
      id="contact"
      style={{ padding: "120px 48px", background: "#111", position: "relative", overflow: "hidden" }}
    >
      {/* Kanji watermark */}
      <div style={{
        position: "absolute", left: -40, bottom: -80,
        fontSize: 280, color: "rgba(255,255,255,0.03)", lineHeight: 1,
        fontFamily: "'Noto Serif JP', serif", userSelect: "none",
      }}>繋</div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>

        <Animblock>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: 6, color: "#555", marginBottom: 32 }}>
            05 &nbsp;/&nbsp; CONTACT
          </div>
          <h2 style={{ fontSize: 64, fontWeight: 300, letterSpacing: -2, color: "#fff", lineHeight: 1.1, marginBottom: 64 }}>
            Mari<br />Berkolaborasi.
          </h2>
        </Animblock>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>

          {/* CTA */}
          <Animblock delay={0.2}>
            <p style={{ fontFamily: "'Courier New', monospace", fontSize: 13, color: "#555", lineHeight: 1.8, marginBottom: 40 }}>
              Terbuka untuk project freelance, full-time opportunity, atau sekadar diskusi teknologi.
            </p>
            <a
              href={`mailto:${data.contact.email}`}
              style={{
                display: "inline-block",
                fontFamily: "'Courier New', monospace", fontSize: 12, letterSpacing: 3,
                color: "#fff", textDecoration: "none",
                border: "1px solid #333", padding: "16px 32px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => { e.target.style.background = "#fff"; e.target.style.color = "#111"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#fff"; }}
            >
              KIRIM PESAN →
            </a>
          </Animblock>

          {/* Contact list */}
          <Animblock delay={0.3}>
            {[
              ["Email",    data.contact.email],
              ["GitHub",   data.contact.github],
              ["LinkedIn", data.contact.linkedin],
              ["Location", data.contact.location],
            ].map(([k, v]) => (
              <div key={k} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "20px 0", borderBottom: "1px solid #222",
              }}>
                <span style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: 3, color: "#444" }}>
                  {k.toUpperCase()}
                </span>
                <span style={{ fontFamily: "'Courier New', monospace", fontSize: 12, color: "#888" }}>
                  {v}
                </span>
              </div>
            ))}
          </Animblock>

        </div>

        {/* Footer */}
        <div style={{
          marginTop: 80, paddingTop: 40,
          borderTop: "1px solid #222",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 18, color: "#333" }}>
            {data.kanji}
          </span>
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: 2, color: "#444" }}>
            © 2025 {data.name} — All rights reserved
          </span>
        </div>

      </div>
    </section>
  );
}
