import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["All", "Motion Graphics", "3D Animation", "Brand", "UI/UX"];

const projects = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "Brand",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    description: "A vibrant brand animation exploring neon aesthetics and cyberpunk themes.",
  },
  {
    id: 2,
    title: "Digital Flux",
    category: "Motion Graphics",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    description: "Abstract motion graphics piece showcasing fluid dynamics and light play.",
  },
  {
    id: 3,
    title: "Cyber Wave",
    category: "3D Animation",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    description: "Immersive 3D environment with futuristic wave formations.",
  },
  {
    id: 4,
    title: "Pulse Interface",
    category: "UI/UX",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    description: "Interactive UI animations for a health monitoring application.",
  },
  {
    id: 5,
    title: "Aurora Spectrum",
    category: "Motion Graphics",
    thumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    description: "Color spectrum exploration through generative motion design.",
  },
  {
    id: 6,
    title: "Tech Genesis",
    category: "3D Animation",
    thumbnail: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    description: "Product visualization for next-generation tech devices.",
  },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary text-sm uppercase tracking-widest font-display">
              Portfolio
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
              My <span className="gradient-text">Creative</span> Work
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-xl">
              A collection of motion design projects spanning various industries 
              and creative directions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 sticky top-20 z-30 bg-background/80 backdrop-blur-lg border-b border-border/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "glass"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className={cn(
                  "group relative glass-card overflow-hidden rounded-2xl cursor-pointer",
                  "opacity-0 animate-scale-in"
                )}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm hover-glow">
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
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-lg flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl glass-card rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video */}
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1`}
                title={selectedProject.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Info */}
            <div className="p-6">
              <span className="text-xs text-primary uppercase tracking-widest">
                {selectedProject.category}
              </span>
              <h3 className="font-display text-2xl font-bold mt-2">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground mt-2">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Work;
