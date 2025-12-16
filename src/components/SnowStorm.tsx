import { useEffect, useState, useRef } from 'react';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

const SnowStorm = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [scrollIntensity, setScrollIntensity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes: Snowflake[] = [];
      for (let i = 0; i < 120; i++) {
        flakes.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 4 + 3,
          delay: Math.random() * 8,
          drift: (Math.random() - 0.5) * 150,
          opacity: Math.random() * 0.6 + 0.4,
        });
      }
      setSnowflakes(flakes);
    };

    generateSnowflakes();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const intensity = Math.min(scrollY / (maxScroll * 0.3), 1);
      setScrollIntensity(intensity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-10"
      style={{ opacity: 0.2 + scrollIntensity * 0.8 }}
    >
      <style>
        {snowflakes.map((flake) => {
          const speedMultiplier = 1 + scrollIntensity * 2;
          const driftAmount = flake.drift * (1 + scrollIntensity * 2);
          return `
            @keyframes snowfall-${flake.id} {
              0% {
                transform: translateY(-20px) translateX(0px);
                opacity: ${flake.opacity};
              }
              100% {
                transform: translateY(100vh) translateX(${driftAmount}px);
                opacity: ${flake.opacity * 0.3};
              }
            }
          `;
        }).join('\n')}
      </style>
      {snowflakes.map((flake) => {
        const speedMultiplier = 1 + scrollIntensity * 2;
        
        return (
          <div
            key={flake.id}
            className="absolute rounded-full bg-frost"
            style={{
              left: `${flake.x}%`,
              top: '-20px',
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              animation: `snowfall-${flake.id} ${flake.duration / speedMultiplier}s linear ${flake.delay}s infinite`,
              boxShadow: `0 0 ${flake.size * 2}px hsl(var(--frost) / 0.6)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default SnowStorm;
