import IceParticles from '@/components/IceParticles';
import SnowStorm from '@/components/SnowStorm';

const Index = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Snow Storm Effect */}
      <SnowStorm />
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
              Frostbite is a defence venture capital fund investing in single and dual-use defence technologies. We partner with visionary founders building critical capabilities to strengthen Western security and sovereignty.
            </p>
            <p>
              Founded in Canada by a Canadian Armed Forces veteran, we understand the unique demands of defence innovation. Our mission is clear: back companies that protect Western democracies and safeguard the Arctic.
            </p>
            <p className="text-frost">
              We bridge the gap between military insight and entrepreneurial ambition—deploying capital where it matters most for national security.
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
              <h3 className="text-xl font-semibold uppercase tracking-wider text-frost">Cold Weather Technology</h3>
              <p className="text-muted-foreground">
                Investing in systems engineered for extreme environments—Arctic-grade equipment, cold climate logistics, and polar operational capabilities.
              </p>
            </div>
            <div className="space-y-4 border-l-2 border-frost/30 pl-6">
              <h3 className="text-xl font-semibold uppercase tracking-wider text-frost">Artificial Intelligence</h3>
              <p className="text-muted-foreground">
                Backing AI solutions for defence applications—autonomous systems, intelligence analysis, decision support, and predictive threat detection.
              </p>
            </div>
            <div className="space-y-4 border-l-2 border-frost/30 pl-6">
              <h3 className="text-xl font-semibold uppercase tracking-wider text-frost">Digital Infrastructure</h3>
              <p className="text-muted-foreground">
                Supporting secure communications, cyber defence platforms, and resilient networks that form the backbone of modern defence operations.
              </p>
            </div>
            <div className="space-y-4 border-l-2 border-frost/30 pl-6">
              <h3 className="text-xl font-semibold uppercase tracking-wider text-frost">Deep Tech</h3>
              <p className="text-muted-foreground">
                Investing in foundational technologies—advanced materials, quantum sensing, space systems, and next-generation propulsion.
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
