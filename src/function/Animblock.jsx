import { useInView } from "../features/useInView";

export default function Animblock({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
