import { useEffect, useState, useRef } from 'react';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

const SnowStorm = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [scrollIntensity, setScrollIntensity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes: Snowflake[] = [];
      for (let i = 0; i < 100; i++) {
        flakes.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 5,
          drift: (Math.random() - 0.5) * 100,
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
      style={{ opacity: 0.3 + scrollIntensity * 0.7 }}
    >
      {snowflakes.map((flake) => {
        const speedMultiplier = 1 + scrollIntensity * 2;
        const driftMultiplier = 1 + scrollIntensity * 3;
        
        return (
          <div
            key={flake.id}
            className="absolute rounded-full bg-frost/80"
            style={{
              left: `${flake.x}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              animation: `snowfall ${flake.duration / speedMultiplier}s linear infinite, snowdrift ${flake.duration / speedMultiplier}s ease-in-out infinite`,
              animationDelay: `${flake.delay}s`,
              boxShadow: `0 0 ${flake.size}px hsl(var(--frost) / 0.5)`,
              ['--drift' as string]: `${flake.drift * driftMultiplier}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default SnowStorm;
