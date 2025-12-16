import { useEffect, useState } from 'react';

const NeonLines = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lines = [
    { startX: 0, startY: 20, angle: 25, length: 400, speed: 0.15 },
    { startX: 100, startY: 40, angle: -15, length: 300, speed: 0.1 },
    { startX: 20, startY: 60, angle: 35, length: 500, speed: 0.2 },
    { startX: 80, startY: 80, angle: -25, length: 350, speed: 0.12 },
    { startX: 50, startY: 100, angle: 20, length: 450, speed: 0.18 },
    { startX: 10, startY: 120, angle: -10, length: 380, speed: 0.08 },
    { startX: 90, startY: 140, angle: 30, length: 420, speed: 0.14 },
    { startX: 30, startY: 160, angle: -30, length: 320, speed: 0.16 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(195, 100%, 60%)" stopOpacity="0" />
            <stop offset="20%" stopColor="hsl(195, 100%, 70%)" stopOpacity="0.8" />
            <stop offset="80%" stopColor="hsl(195, 100%, 70%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(195, 100%, 60%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {lines.map((line, index) => {
          const offset = scrollY * line.speed;
          const yPos = (line.startY + offset * 0.05) % 200;
          const xOffset = Math.sin((scrollY * line.speed) * 0.01) * 20;
          const opacity = Math.min(scrollY / 300, 0.6);
          
          const x1 = line.startX + xOffset;
          const y1 = yPos;
          const x2 = x1 + Math.cos(line.angle * Math.PI / 180) * (line.length / 5);
          const y2 = y1 + Math.sin(line.angle * Math.PI / 180) * (line.length / 10);

          return (
            <line
              key={index}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="url(#neonGradient)"
              strokeWidth="2"
              filter="url(#neonGlow)"
              style={{
                opacity,
                transition: 'opacity 0.3s ease-out',
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default NeonLines;