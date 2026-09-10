import { useEffect, useState } from "react";
import data from "../data/biodata";

import Navbar     from "../ui/Navbar";
import Hero       from "../ui/Hero";
import About      from "../ui/About";
import Skills     from "../ui/Skills";
import Projects   from "../ui/Projects";
import Experience from "../ui/Experience";
import Contact    from "../ui/Contact";

const SECTIONS = ["hero", "about", "skills", "projects", "experience", "contact"];

/* pre-render: apply saved theme so there's no flash */
const initialTheme = localStorage.getItem("pf-theme") === "light" ? "light" : "dark";
document.documentElement.setAttribute("data-theme", initialTheme);

export default function Dashboard() {
  const [scrollY,   setScrollY]   = useState(0);
  const [activeNav, setActiveNav] = useState("hero");
  const [theme,     setTheme]     = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (typeof localStorage !== "undefined") localStorage.setItem("pf-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#0A0A0A" : "#F6F6F7";
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      setScrollY(window.scrollY);

      // scrollspy: highlight the section whose top is closest above the fold
      const probe = window.scrollY + Math.round(window.innerHeight * 0.32);
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      setActiveNav(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
  };

  return (
    <div className="bg-[var(--page)] text-[var(--ink)] min-h-screen font-sans antialiased">

      <Navbar
        name={data.name}
        sections={SECTIONS}
        activeNav={activeNav}
        scrollY={scrollY}
        onNav={scrollTo}
      />

      <Hero     data={data} theme={theme} onToggleTheme={toggleTheme} />
      <About    data={data}                                  />
      <Skills   skills={data.skills}                         />
      <Projects projects={data.projects}                     />
      <Experience experience={data.experience}               />
      <Contact  data={data}                                  />

    </div>
  );
}