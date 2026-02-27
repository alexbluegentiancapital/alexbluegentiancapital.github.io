import IceParticles from '@/components/IceParticles';
import frostbiteLogo from '@/assets/frostbite-logo.png';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });
      
      if (error) throw error;
      
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll be in touch soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-background">
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
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6">
          <div className="text-center">
            {/* Logo/Wordmark */}
            <div 
              className="mb-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <img 
                src={frostbiteLogo} 
                alt="Frostbite" 
                className="h-10 w-auto animate-glow-pulse sm:h-14 md:h-16 lg:h-20 drop-shadow-[0_0_25px_rgba(155,220,255,0.4)]"
              />
            </div>
            
            {/* Tagline */}
            <p
              className="tagline-glow text-sm font-light uppercase tracking-[0.2em] text-frost sm:text-base sm:tracking-[0.3em] md:text-xl md:tracking-[0.4em]"
              style={{
                animation: 'tagline-glow 3s ease-in-out infinite',
                textShadow:
                  '0 0 5px hsl(195 100% 70% / 1), 0 0 15px hsl(195 100% 70% / 1), 0 0 40px hsl(195 100% 70% / 0.8), 0 0 80px hsl(195 100% 70% / 0.6), 0 0 120px hsl(195 100% 50% / 0.5)',
              }}
            >
              forged in the cold
            </p>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section className="relative w-full px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-[0.1em] text-foreground sm:mb-8 sm:text-4xl sm:tracking-[0.15em] md:mb-12 md:text-5xl md:tracking-[0.2em] lg:text-6xl">
            About
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:space-y-4 sm:text-base md:space-y-6 md:text-lg lg:text-xl">
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
      <section className="relative w-full px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-[0.1em] text-foreground sm:mb-8 sm:text-4xl sm:tracking-[0.15em] md:mb-12 md:text-5xl md:tracking-[0.2em] lg:text-6xl">
            Thesis
          </h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
            <div className="space-y-2 border-l-2 border-frost/30 pl-3 sm:space-y-3 sm:pl-4 md:pl-6">
              <h3 className="text-base font-semibold uppercase tracking-wider text-frost sm:text-lg md:text-xl">Cold Weather Technology</h3>
              <p className="text-xs text-muted-foreground sm:text-sm md:text-base">
                Investing in systems engineered for extreme environments—Arctic-grade equipment, cold climate logistics, and polar operational capabilities.
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-frost/30 pl-3 sm:space-y-3 sm:pl-4 md:pl-6">
              <h3 className="text-base font-semibold uppercase tracking-wider text-frost sm:text-lg md:text-xl">Artificial Intelligence</h3>
              <p className="text-xs text-muted-foreground sm:text-sm md:text-base">
                Backing AI solutions for defence applications—autonomous systems, intelligence analysis, decision support, and predictive threat detection.
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-frost/30 pl-3 sm:space-y-3 sm:pl-4 md:pl-6">
              <h3 className="text-base font-semibold uppercase tracking-wider text-frost sm:text-lg md:text-xl">Infrastructure</h3>
              <p className="text-xs text-muted-foreground sm:text-sm md:text-base">
                Supporting secure communications, cyber defence platforms, and resilient networks that form the backbone of modern defence operations.
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-frost/30 pl-3 sm:space-y-3 sm:pl-4 md:pl-6">
              <h3 className="text-base font-semibold uppercase tracking-wider text-frost sm:text-lg md:text-xl">Deep Tech</h3>
              <p className="text-xs text-muted-foreground sm:text-sm md:text-base">
                Investing in foundational technologies—advanced materials, quantum sensing, space systems, and next-generation propulsion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative w-full bg-card/30 px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-[0.1em] text-foreground sm:mb-8 sm:text-4xl sm:tracking-[0.15em] md:mb-12 md:text-5xl md:tracking-[0.2em] lg:text-6xl">
            Portfolio
          </h2>
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 md:gap-6">
            {[
              { name: 'Dominion Dynamics', link: 'https://www.dominion-dynamics.com/', sector: 'Cold Weather Technology & Digital Infrastructure', stage: 'Pre-Seed' },
              { name: 'Irréversible', link: 'https://www.irreversible.tech/', sector: 'Deep Tech', stage: 'Pre-Seed' },
              // { name: 'Arctic Training Centre', link: 'https://www.arctictrainingcentre.com/', sector: 'Digital Infrastructure & Cold Weather Technology', stage: 'Pre-Seed' },
              { name: 'Sentradel', link: 'https://www.sentradel.com/', sector: 'Artificial Intelligence', stage: 'Seed' },
              { name: 'Supply Energetics', link: 'https://www.supplyenergetics.com/', sector: 'Infrastructure', stage: 'Seed' },
              { name: 'Building-Bloc', link: 'https://building-bloc.com/', sector: 'Infrastructure & Deep Tech', stage: 'Pre-Seed' },
            ].map((company) => (
              <a
                key={company.name}
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg border border-border/50 bg-card/50 p-3 transition-all duration-300 hover:border-frost/50 hover:bg-card/80 sm:p-4 md:p-6"
              >
                <h3 className="mb-1 text-base font-semibold text-foreground transition-colors group-hover:text-frost sm:mb-2 sm:text-lg md:text-xl">
                  {company.name}
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">{company.sector}</p>
                <span className="mt-2 inline-block rounded-full border border-frost/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-frost sm:mt-3 sm:px-3 sm:py-1 sm:text-xs">
                  {company.stage}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="relative w-full px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-[0.1em] text-foreground sm:mb-8 sm:text-4xl sm:tracking-[0.15em] md:mb-12 md:text-5xl md:tracking-[0.2em] lg:text-6xl">
            News
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                source: 'The Globe and Mail',
                company: 'Dominion Dynamics',
                href: 'https://www.theglobeandmail.com/business/economy/article-dominion-dynamics-arctic-sensor-nodes-seed-funding/',
                title:
                  "Dominion Dynamics, vying to become Canadian defence 'neoprime,' raises $21-million led by Georgian",
                description:
                  'Portfolio company Dominion Dynamics secures seed funding to advance Arctic sensor node technology for Canadian defence.',
              },
              {
                source: 'The Globe and Mail',
                company: 'Irréversible',
                href:
                  'https://www.theglobeandmail.com/investing/markets/markets-news/GlobeNewswire/37242456/bdc-steps-up-its-defence-sector-footprint-with-investments-in-semiconductors-and-space-tech-and-a-new-strategic-partnership/',
                title:
                  'BDC steps up its defence sector footprint with investments in semiconductors and space tech and a new strategic partnership',
                description:
                  'Sector update on defence-related investments spanning semiconductors and space technology, plus a new strategic partnership.',
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg border border-border/50 bg-card/50 p-3 transition-all duration-300 hover:border-frost/50 hover:bg-card/80 sm:p-4 md:p-6"
              >
                <div className="mb-1 flex flex-wrap gap-2 sm:mb-2">
                  <span className="inline-block rounded-full border border-frost/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-frost sm:px-3 sm:py-1 sm:text-xs">
                    {item.company}
                  </span>
                  <span className="inline-block rounded-full border border-frost/30 bg-frost/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-frost sm:px-3 sm:py-1 sm:text-xs">
                    {item.source}
                  </span>
                </div>
                <h3 className="mb-1 text-base font-semibold text-foreground transition-colors group-hover:text-frost sm:mb-2 sm:text-lg md:text-xl">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-full bg-card/30 px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-[0.1em] text-foreground sm:mb-8 sm:text-4xl sm:tracking-[0.15em] md:mb-12 md:text-5xl md:tracking-[0.2em] lg:text-6xl">
            Contact
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <Input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-border/50 bg-background/50 placeholder:text-muted-foreground/50 focus:border-frost"
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-border/50 bg-background/50 placeholder:text-muted-foreground/50 focus:border-frost"
              />
            </div>
            <Textarea
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="border-border/50 bg-background/50 placeholder:text-muted-foreground/50 focus:border-frost"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-frost text-background hover:bg-frost/90 sm:w-auto"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border/30 pt-6 sm:mt-8 sm:gap-4 sm:pt-8 md:mt-12 md:gap-6 md:pt-12">
            <a
              href="mailto:info@frostbite.vc"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-frost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:h-6 sm:w-6"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span className="text-sm sm:text-base">info@frostbite.vc</span>
            </a>
            <a
              href="https://www.linkedin.com/company/frostbite-capital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-frost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="sm:h-6 sm:w-6"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:h-6 sm:w-6"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-sm sm:text-base">Vancouver, Canada</span>
            </div>
            <a
              href="/yeti-rampage.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-frost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:h-6 sm:w-6"
              >
                <line x1="6" x2="10" y1="12" y2="12"/>
                <line x1="8" x2="8" y1="10" y2="14"/>
                <line x1="15" x2="15.01" y1="13" y2="13"/>
                <line x1="18" x2="18.01" y1="11" y2="11"/>
                <rect width="20" height="12" x="2" y="6" rx="2"/>
              </svg>
              <span className="text-sm sm:text-base">Rampage</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
