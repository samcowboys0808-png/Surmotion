import { ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "Brand Animation",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Digital Flux",
    category: "Motion Graphics",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Cyber Wave",
    category: "3D Animation",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export const FeaturedWork = () => {
  return (
    <section className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-primary text-sm uppercase tracking-widest font-display">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Featured <span className="gradient-text">Work</span>
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/work">
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group relative glass-card overflow-hidden rounded-2xl opacity-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm hover-glow cursor-pointer">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-primary uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold mt-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
