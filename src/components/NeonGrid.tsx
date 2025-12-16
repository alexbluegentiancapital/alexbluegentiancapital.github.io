import { useEffect, useState } from 'react';

const NeonGrid = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade in as user scrolls, max at 0.6
  const opacity = Math.min(scrollY / 500, 0.6);
  const gridOffset = scrollY * 0.3;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `rotateX(60deg) translateY(${gridOffset}px)`,
          transformOrigin: 'center top',
        }}
      >
        <svg 
          className="w-full h-[200%]" 
          preserveAspectRatio="none"
          style={{ opacity }}
        >
          <defs>
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Horizontal grid lines */}
          {Array.from({ length: 30 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0%"
              y1={`${i * 80}px`}
              x2="100%"
              y2={`${i * 80}px`}
              stroke="hsl(195, 100%, 60%)"
              strokeWidth="1.5"
              filter="url(#neonGlow)"
            />
          ))}
          
          {/* Vertical grid lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${(i + 1) * 5}%`}
              y1="0%"
              x2={`${(i + 1) * 5}%`}
              y2="100%"
              stroke="hsl(195, 100%, 60%)"
              strokeWidth="1.5"
              filter="url(#neonGlow)"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default NeonGrid;
