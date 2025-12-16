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

  const opacity = Math.max(0.3 - scrollY / 1000, 0.05);
  const perspectiveOffset = scrollY * 0.1;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg 
        className="w-full h-full" 
        preserveAspectRatio="xMidYMid slice"
        style={{
          transform: `perspective(1000px) rotateX(60deg) translateY(${perspectiveOffset}px)`,
          transformOrigin: 'center center',
        }}
      >
        <defs>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="gridGradientH" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(195, 100%, 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(195, 100%, 70%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(195, 100%, 60%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gridGradientV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(195, 100%, 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(195, 100%, 70%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(195, 100%, 60%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Horizontal grid lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0%"
            y1={`${(i + 1) * 5}%`}
            x2="100%"
            y2={`${(i + 1) * 5}%`}
            stroke="url(#gridGradientH)"
            strokeWidth="1"
            filter="url(#neonGlow)"
            style={{ opacity }}
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
            stroke="url(#gridGradientV)"
            strokeWidth="1"
            filter="url(#neonGlow)"
            style={{ opacity }}
          />
        ))}
      </svg>
    </div>
  );
};

export default NeonGrid;
