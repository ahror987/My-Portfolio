import { ArrowDown, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to opportunities
          </div>

          {/* Main heading */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Ahrorbek</span>
            <br />
            <span className="text-muted-foreground">Atojonov</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            A 16-year-old passionate about crafting beautiful web experiences. 
            Currently learning and growing every day to become a better developer.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/ahror987" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Quick links */}
          <div 
            className="flex items-center justify-center gap-6 text-muted-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <a 
              href="https://github.com/ahror987" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <a 
              href="mailto:atajonov9940@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <a 
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} className="animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
