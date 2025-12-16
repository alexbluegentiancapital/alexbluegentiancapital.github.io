import IceParticles from '@/components/IceParticles';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Ice Particles */}
      <IceParticles />
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27608-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
      
      {/* Subtle blue accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-frost/5" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <div className="text-center">
          {/* Logo/Wordmark */}
          <div 
            className="mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className="text-6xl font-bold uppercase tracking-[0.3em] text-foreground animate-glow-pulse sm:text-7xl md:text-8xl lg:text-9xl">
              Frostbite
            </h1>
          </div>
          
          {/* Tagline */}
          <p
            className="text-glow-subtle text-lg font-light uppercase tracking-[0.4em] text-frost opacity-0 animate-fade-in-up sm:text-xl md:text-2xl"
            style={{ animationDelay: '0.6s' }}
          >
            forged in the cold
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default Index;
