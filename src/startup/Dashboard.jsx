import { useEffect, useState } from "react";
import data from "../data/biodata";

import Navbar     from "../ui/Navbar";
import Hero       from "../ui/Hero";
import About      from "../ui/About";
import Skills     from "../ui/Skills";
import Projects   from "../ui/Projects";
import Experience from "../ui/Experience";
import Contact    from "../ui/Contact";

export default function Dashboard() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [scrollY,   setScrollY]   = useState(0);
  const [activeNav, setActiveNav] = useState("hero");

  useEffect(() => {
    const onMove   = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    const onScroll = ()  => setScrollY(window.scrollY);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll",    onScroll);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll",    onScroll);
    };
  }, []);

  const sections = ["hero", "about", "skills", "projects", "experience", "contact"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
  };

  return (
    <div style={{ background: "#fafaf8", color: "#111", minHeight: "100vh", fontFamily: "'Noto Serif JP', Georgia, serif", cursor: "none" }}>

      {/* Custom cursor */}
      <div style={{
        position: "fixed", pointerEvents: "none", zIndex: 9999,
        left: cursorPos.x - 6, top: cursorPos.y - 6,
        width: 12, height: 12,
        border: "1px solid #111", borderRadius: "50%",
        mixBlendMode: "difference",
        background: "white",
      }} />

      <Navbar
        kanji={data.kanji}
        sections={sections}
        activeNav={activeNav}
        scrollY={scrollY}
        onNav={scrollTo}
      />

      <Hero     data={data}               scrollY={scrollY} />
      <About      data={data}                                  />
      <Skills     skills={data.skills}                         />
      <Projects   projects={data.projects}                     />
      <Experience experience={data.experience}                 />
      <Contact    data={data}                                  />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50%       { transform: scaleY(0.3); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
