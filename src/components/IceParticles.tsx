import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const IceParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        newParticles.push({
          id: i,
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 15 + 10,
          delay: Math.random() * 10,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getParticleStyle = (particle: Particle) => {
    const dx = particle.baseX - mousePos.x;
    const dy = particle.baseY - mousePos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 15;
    
    let offsetX = 0;
    let offsetY = 0;
    
    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      offsetX = (dx / distance) * force * 8;
      offsetY = (dy / distance) * force * 8;
    }

    return {
      left: `${particle.baseX + offsetX}%`,
      top: `${particle.baseY + offsetY}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      opacity: particle.opacity,
      animationDuration: `${particle.duration}s`,
      animationDelay: `${particle.delay}s`,
      boxShadow: `0 0 ${particle.size * 2}px hsl(var(--frost) / 0.6)`,
      transition: 'left 0.3s ease-out, top 0.3s ease-out',
    };
  };

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-frost animate-float"
          style={getParticleStyle(particle)}
        />
      ))}
    </div>
  );
};

export default IceParticles;
