import { Layers, Sparkles, Video, Palette, Box, Zap } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Motion Graphics",
    description: "Dynamic visual effects and animations that bring static designs to life.",
  },
  {
    icon: Layers,
    title: "2D Animation",
    description: "Character animation and illustrated motion for storytelling.",
  },
  {
    icon: Box,
    title: "3D Animation",
    description: "Immersive three-dimensional worlds and photorealistic renders.",
  },
  {
    icon: Sparkles,
    title: "Visual Effects",
    description: "Compositing and VFX that blend seamlessly with live footage.",
  },
  {
    icon: Palette,
    title: "Brand Animation",
    description: "Animated logos and brand elements that create lasting impressions.",
  },
  {
    icon: Zap,
    title: "UI Animation",
    description: "Micro-interactions and interface animations for digital products.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary text-sm uppercase tracking-widest font-display">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            What I <span className="gradient-text">Create</span>
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            From concept to final delivery, I specialize in creating motion design 
            that captures attention and communicates your message effectively.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 rounded-2xl hover-glow transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
