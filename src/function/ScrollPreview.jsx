// src/function/ScrollPreview.jsx
import { useRef } from "react";

/**
 * A framed screenshot that auto-pans vertically on hover, so a full page
 * (or a tall mobile screen) can be previewed without leaving the card.
 *
 * - src   : image path (import it in portfolioData.js so Vite bundles it)
 * - label : small tag drawn top-left, e.g. "UI Web" / "UI Android"
 * - height: fixed viewport height for the frame (px)
 */
export default function ScrollPreview({ src, label, className = "", height = 360 }) {
  const imgRef = useRef(null);

  const handleEnter = () => {
    const img = imgRef.current;
    if (!img) return;
    const overflow = img.scrollHeight - img.parentElement.clientHeight;
    if (overflow > 0) {
      // taller screenshots pan slower, so the reveal always feels deliberate
      const duration = Math.min(14, Math.max(3, overflow / 70));
      img.style.transitionDuration = `${duration}s`;
      img.style.transform = `translateY(-${overflow}px)`;
    }
  };

  const handleLeave = () => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transitionDuration = "0.6s";
    img.style.transform = "translateY(0)";
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: "var(--surface)", height, cursor: "ns-resize" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span
        className="absolute top-3 left-3 z-10 mono text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-md"
        style={{ background: "var(--page-80)", color: "var(--ink-2)", backdropFilter: "blur(6px)", border: "1px solid var(--line)" }}
      >
        {label}
      </span>

      {/* scroll affordance */}
      <span
        className="absolute bottom-3 right-3 z-10 mono text-[13px]"
        style={{ color: "var(--accent)" }}
      >
        ↕
      </span>

      <img
        ref={imgRef}
        src={src}
        alt={label}
        className="w-full block select-none"
        draggable={false}
        style={{ transition: "transform ease-out", transform: "translateY(0)" }}
      />
    </div>
  );
}