import { Link } from "react-router-dom";
import { Youtube, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-card/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link 
              to="/" 
              className="font-display text-3xl font-bold tracking-wider gradient-text"
            >
              MOTION<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Crafting immersive motion experiences that push the boundaries of visual storytelling. 
              Let's create something extraordinary together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "Work", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Motion Design Studio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with <span className="text-secondary">♥</span> for motion lovers
          </p>
        </div>
      </div>
    </footer>
  );
};
