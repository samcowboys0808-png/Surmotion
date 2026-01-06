import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card rounded-3xl p-12 md:p-20 text-center neon-border">
          {/* Decorative Elements */}
          <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-primary/50" />

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Create
            <span className="block gradient-text mt-2">Something Amazing?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Let's collaborate and bring your vision to life with motion design 
            that captivates and inspires.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass">
              <Link to="/work">Browse Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
