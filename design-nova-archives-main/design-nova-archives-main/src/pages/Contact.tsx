import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Youtube, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@motiondesign.studio", href: "mailto:hello@motiondesign.studio" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "Los Angeles, CA", href: "#" },
];

const socialLinks = [
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm uppercase tracking-widest font-display">
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
              Let's <span className="gradient-text">Create</span> Together
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              Have a project in mind? I'd love to hear about it. Let's discuss 
              how we can bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">
                  Contact <span className="text-primary">Information</span>
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Decorative */}
              <div className="hidden lg:block">
                <div className="glass-card rounded-2xl p-8 neon-border">
                  <div className="font-display text-xl font-semibold mb-2">
                    Available for Freelance
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Currently accepting new projects. Let's create something amazing together!
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-green-500">Open to work</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold mb-8">
                  Send a <span className="text-primary">Message</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-muted/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2 mt-6">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted/50 border-border/50 focus:border-primary min-h-[160px]"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full mt-8">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
