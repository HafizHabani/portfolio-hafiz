// src/data/techIcons.js
// ============================================================
//  Maps a project "tag" (from portfolioData.js) to a Simple Icons
//  logo component from react-icons/si.
//  Install once:  npm install react-icons
// ============================================================
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiSqlite,
  SiGit,
  SiGithub,
  SiVite,
  SiFlutter,
  SiDart,
  SiGooglecloud,
  SiGooglegemini,
} from "react-icons/si";

const MAP = {
  "React.js": SiReact,
  "React Native": SiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  Laravel: SiLaravel,
  PHP: SiPhp,
  MySQL: SiMysql,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Firebase: SiFirebase,
  MongoDB: SiMongodb,
  SQLite: SiSqlite,
  Git: SiGit,
  GitHub: SiGithub,
  Vite: SiVite,
  Flutter: SiFlutter,
  Dart: SiDart,
  "Google Cloud": SiGooglecloud,
  "Gemini API": SiGooglegemini,
  // "REST API" has no dedicated logo on purpose — falls back to text chip
};

/** Returns an icon component for a tag, or null if none exists. */
export function techIcon(tag) {
  return MAP[tag] || null;
}
