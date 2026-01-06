import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, Award, Users, Clock, Target } from "lucide-react";

const skills = [
  { name: "After Effects", level: 95 },
  { name: "Cinema 4D", level: 88 },
  { name: "Premiere Pro", level: 90 },
  { name: "Blender", level: 82 },
  { name: "Illustrator", level: 85 },
  { name: "Figma", level: 78 },
];

const stats = [
  { icon: Award, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "35+", label: "Happy Clients" },
  { icon: Clock, value: "8+", label: "Years Experience" },
  { icon: Target, value: "100%", label: "Dedication" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass-card neon-border">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Motion Designer Portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl">
                <div className="font-display text-4xl font-bold text-primary neon-text">8+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-primary text-sm uppercase tracking-widest font-display">
                About Me
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
                Passion for <span className="gradient-text">Motion</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                I'm a motion designer with over 8 years of experience crafting visual stories 
                that captivate audiences. My journey began with a fascination for how movement 
                can transform static designs into living, breathing experiences.
              </p>
              <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
                From brand animations to complex 3D visualizations, I bring creativity and 
                technical expertise to every project. My work has been featured in international 
                campaigns and has helped brands connect with their audiences in meaningful ways.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg">
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Let's Connect</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary neon-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-primary text-sm uppercase tracking-widest font-display">
                Expertise
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
                Skills & <span className="gradient-text">Tools</span>
              </h2>
              <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                Years of experience have honed my skills across industry-standard tools 
                and cutting-edge software. Here's my current toolkit:
              </p>
            </div>

            {/* Skills Bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-card/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm uppercase tracking-widest font-display">
              Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              My Creative <span className="gradient-text">Approach</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Conceptualize",
                  description: "Every project begins with deep understanding of the vision and goals.",
                },
                {
                  title: "Create",
                  description: "Meticulous attention to detail in every frame and movement.",
                },
                {
                  title: "Refine",
                  description: "Iterative process to achieve perfection in the final delivery.",
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="glass-card p-8 rounded-2xl opacity-0 animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-xl font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
