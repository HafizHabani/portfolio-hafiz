import Animblock from "../function/Animblock";

export default function About({ data }) {
  return (
    <section
      id="about"
      style={{ padding: "120px 48px", borderTop: "1px solid #e8e8e8", position: "relative" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, maxWidth: 1100, margin: "0 auto" }}>

        {/* Left — bio */}
        <Animblock>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: 6, color: "#aaa", marginBottom: 32 }}>
            01 &nbsp;/&nbsp; ABOUT
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 300, letterSpacing: -1, lineHeight: 1.2, marginBottom: 28 }}>
            About Me.<br />
          </h2>
          <p style={{ lineHeight: 1.9, color: "#555", fontFamily: "'Courier New', monospace", fontSize: 13 }}>
            {data.bio}
          </p>
        </Animblock>

        {/* Right — identity card */}
        <Animblock delay={0.2}>
          <div style={{
            border: "1px solid #e8e8e8", padding: 48,
            position: "relative", height: "100%",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <div style={{
              position: "absolute", top: -1, right: 48,
              background: "#fafaf8", padding: "0 12px",
              fontFamily: "'Courier New', monospace", fontSize: 9, letterSpacing: 3, color: "#ccc",
            }}>Identity</div>

            {[
              ["名前", data.name],
              ["役割", data.role],
              ["所在地", data.contact.location],
              ["状態",  "Open to work"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid #f0f0ee" }}>
                <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 14, color: "#aaa" }}>{k}</span>
                <span style={{ fontFamily: "'Courier New', monospace", fontSize: 12, color: "#111", letterSpacing: 1 }}>{v}</span>
              </div>
            ))}

            <div style={{
              marginTop: 32, width: 40, height: 40,
              border: "1px solid #111",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, fontFamily: "'Noto Serif JP', serif",
            }}>✦</div>
          </div>
        </Animblock>

      </div>
    </section>
  );
}
