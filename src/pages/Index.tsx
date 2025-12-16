import IceParticles from '@/components/IceParticles';
import NeonLines from '@/components/NeonLines';

const Index = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Neon Lines Background */}
      <NeonLines />
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
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
      </section>

      {/* About Section */}
      <section className="relative min-h-screen w-full px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-4xl font-bold uppercase tracking-[0.2em] text-foreground md:text-5xl lg:text-6xl">
            About
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              Frostbite is a venture capital firm investing in bold founders building transformative technologies. We partner with visionaries who dare to reshape industries and challenge the status quo.
            </p>
            <p>
              Founded on the belief that greatness emerges from adversity, we seek out companies forged in the crucible of innovation—those that thrive where others falter.
            </p>
            <p className="text-frost">
              Our approach is simple: identify exceptional talent, provide strategic capital, and stand back as they build the future.
            </p>
          </div>
        </div>
      </section>

      {/* Thesis Section */}
      <section className="relative min-h-screen w-full bg-card/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-4xl font-bold uppercase tracking-[0.2em] text-foreground md:text-5xl lg:text-6xl">
            Thesis
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4 border-l-2 border-frost/30 pl-6">
              <h3 className="text-xl font-semibold uppercase tracking-wider text-frost">Deep Tech</h3>
              <p className="text-muted-foreground">
                We invest in foundational technologies that create lasting competitive advantages—AI infrastructure, quantum computing, and advanced materials.
              </p>
            </div>
            <div className="space-y-4 border-l-2 border-frost/30 pl-6">
              <h3 className="text-xl font-semibold uppercase tracking-wider text-frost">Climate Innovation</h3>
              <p className="text-muted-foreground">
                Supporting breakthrough solutions addressing the climate crisis—from carbon capture to sustainable energy systems.
              </p>
            </div>
            <div className="space-y-4 border-l-2 border-frost/30 pl-6">
              <h3 className="text-xl font-semibold uppercase tracking-wider text-frost">Digital Infrastructure</h3>
              <p className="text-muted-foreground">
                Backing the picks and shovels of the digital economy—developer tools, security platforms, and cloud infrastructure.
              </p>
            </div>
            <div className="space-y-4 border-l-2 border-frost/30 pl-6">
              <h3 className="text-xl font-semibold uppercase tracking-wider text-frost">Health & Bio</h3>
              <p className="text-muted-foreground">
                Investing in next-generation healthcare technologies that extend human healthspan and democratize access to care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative min-h-screen w-full px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-4xl font-bold uppercase tracking-[0.2em] text-foreground md:text-5xl lg:text-6xl">
            Portfolio
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Vertex AI', sector: 'Deep Tech', stage: 'Series B' },
              { name: 'CarbonZero', sector: 'Climate', stage: 'Series A' },
              { name: 'NeuralStack', sector: 'Infrastructure', stage: 'Seed' },
              { name: 'BioGenix', sector: 'Health & Bio', stage: 'Series A' },
              { name: 'QuantumCore', sector: 'Deep Tech', stage: 'Series B' },
              { name: 'GridFlow', sector: 'Climate', stage: 'Series A' },
            ].map((company) => (
              <div
                key={company.name}
                className="group relative overflow-hidden rounded-lg border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-frost/50 hover:bg-card/80"
              >
                <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-frost">
                  {company.name}
                </h3>
                <p className="text-sm text-muted-foreground">{company.sector}</p>
                <span className="mt-4 inline-block rounded-full border border-frost/30 px-3 py-1 text-xs uppercase tracking-wider text-frost">
                  {company.stage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
