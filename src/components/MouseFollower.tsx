import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor circle */}
      <div
        className="absolute w-8 h-8 rounded-full border-2 border-brand-purple/60 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `scale(${isMoving ? 1.2 : 1})`,
          borderColor: isMoving
            ? "hsl(var(--brand-purple))"
            : "hsl(var(--brand-purple) / 0.6)",
        }}
      />

      {/* Inner dot */}
      <div
        className="absolute w-2 h-2 rounded-full bg-brand-purple transition-all duration-75 ease-out"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: `scale(${isMoving ? 1.5 : 1})`,
        }}
      />

      {/* Trailing glow effect */}
      <div
        className="absolute w-24 h-24 rounded-full pointer-events-none opacity-20 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle, 
            hsl(var(--brand-purple) / 0.3) 0%, 
            hsl(var(--brand-blue) / 0.15) 50%, 
            transparent 100%)`,
          left: mousePosition.x - 48,
          top: mousePosition.y - 48,
          transform: `scale(${isMoving ? 1.5 : 1})`,
        }}
      />

      {/* Large ambient glow */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none opacity-10 transition-all duration-500 ease-out"
        style={{
          background: `radial-gradient(circle, 
            hsl(var(--brand-purple) / 0.1) 0%, 
            hsl(var(--brand-blue) / 0.05) 50%, 
            transparent 100%)`,
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
    </div>
  );
}
