import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">
              Motion Design Studio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 opacity-0 animate-slide-up stagger-1">
            Crafting
            <span className="block gradient-text neon-text">Digital Motion</span>
            <span className="block text-foreground">Experiences</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-slide-up stagger-2">
            Where creativity meets technology. Transforming ideas into captivating 
            visual stories through innovative motion design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up stagger-3">
            <Button asChild size="lg" variant="default">
              <Link to="/work">
                <Play className="w-5 h-5" />
                View My Work
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-0 animate-slide-up stagger-4">
            {[
              { value: "50+", label: "Projects" },
              { value: "8+", label: "Years" },
              { value: "100%", label: "Passion" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary neon-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 border border-primary/30 rounded-lg rotate-45 animate-float" />
      <div className="absolute bottom-1/3 left-10 w-16 h-16 border border-secondary/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
    </section>
  );
};
