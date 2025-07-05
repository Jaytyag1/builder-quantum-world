import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* Single smooth transparent gradient circle */}
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle,
            hsl(var(--brand-purple) / 0.15) 0%,
            hsl(var(--brand-blue) / 0.08) 30%,
            hsl(var(--brand-cyan) / 0.04) 60%,
            transparent 100%)`,
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
        }}
      />
    </div>
  );
}
