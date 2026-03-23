/* eslint-disable @next/next/no-img-element */
"use client";

import { LayoutTemplate, Database, PenTool, Code, Smartphone, Settings, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Frontend Development",
      icon: LayoutTemplate,
      description: "Building responsive, interactive user interfaces with modern frameworks like React and Next.js.",
      technologies: [
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
      ],
      delay: 0,
    },
    {
      title: "Backend Development",
      icon: Database,
      description: "Creating scalable server-side applications, RESTful APIs, and database architecture.",
      technologies: [
        { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
      ],
      delay: 0.1,
    },
    {
      title: "UI/UX Design",
      icon: PenTool,
      description: "Designing intuitive user experiences with beautiful interfaces that users love to interact with.",
      technologies: [
        { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "Adobe XD", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" },
        { name: "Wireframing" },
        { name: "Prototyping" }
      ],
      delay: 0.2,
    },
    {
      title: "Full Stack Development",
      icon: Code,
      description: "End-to-end web application development from concept to deployment.",
      technologies: [
        { name: "MERN Stack", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "JAMstack", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "PWAs", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" }
      ],
      delay: 0.3,
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      description: "Building cross-platform mobile applications for iOS and Android.",
      technologies: [
        { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
        { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Expo" },
        { name: "Mobile UI" },
        { name: "App Store" }
      ],
      delay: 0.4,
    },
    {
      title: "Maintenance & Support",
      icon: Settings,
      description: "Ongoing support, bug fixes, and updates to keep your applications running smoothly.",
      technologies: [
        { name: "Performance Optimization" },
        { name: "Security Updates" },
        { name: "Bug Fixes" }
      ],
      delay: 0.5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-warm relative overflow-hidden transition-colors duration-500">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none mb-12">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-primary/3 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 dark:hidden">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-primary/20" />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">What I Offer</span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse-glow" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-brown">Services</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-brown rounded-full" />
          </h2>
          <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto mt-6 text-[15px]">
            Comprehensive solutions tailored to your digital needs, from design to deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative dark:gradient-border rounded-3xl animate-slide-up"
              style={{ animationDelay: `${service.delay}s` }}
            >
              <div className="relative bg-card/40 backdrop-blur-md rounded-3xl shadow-card cursor-pointer border border-border p-8 flex flex-col h-full hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background Glow Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute -inset-1 bg-gradient-brown opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500" />
                
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-brown shadow-warm flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Title & Description */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-8 text-[15px]">
                    {service.description}
                  </p>
                </div>

                {/* Technologies Section */}
                <div className="relative z-10 mb-8">
                  <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-4">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {service.technologies.map((tech, techIdx) => (
                      <div
                        key={techIdx}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 border border-border/30 shadow-sm hover:border-primary/40 transition-colors duration-300"
                      >
                        {tech.img && <img src={tech.img} alt={tech.name} className="w-4 h-4 object-contain filter drop-shadow-sm" />}
                        {!tech.img && <CheckCircle className="w-4 h-4 text-primary/60" />}
                        <span className="text-xs font-semibold text-foreground/80 tracking-wide">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Link at the bottom right */}
                <div className="relative z-10 flex justify-end mt-auto pt-4 border-t border-border/10">
                  <div className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                    <span className="text-sm font-semibold tracking-wide">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
