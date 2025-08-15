"use client"

import { ExternalLink, Github, Sparkles, Star, Rocket, Zap, Target } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Mekrez",
      description: "A modern school webiste for Mekrez Academy built with Next.js and Tailwind CSS",
      image: "/mekrez.png",
      liveUrl: "https://mekrez.vercel.app/",
      githubUrl: "https://github.com/BeimnetTadesse/Mekrez",
      featured: false
    },
    {
      title: "Adey Crochet",
      description: "A crochet project website built with React and Tailwind",
      image: "/adey.png",
      liveUrl: "https://adey-crochet.vercel.app",
      githubUrl: "https://github.com/BeimnetTadesse/Adey_Crochet",
      featured: true
    },
    {
      title: "Kaptan",
      description: "A modern marketing agency website built with React and Tailwind",
      image: "/kaptan.png",
      liveUrl: "https://kaptan.vercel.app/",
      githubUrl: "https://github.com/BeimnetTadesse/Kaptan",
      featured: false
    },
  ]

  const Button = ({ href, outline = false, children }: { href: string, outline?: boolean, children: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-500 overflow-hidden ${
        outline
          ? "border border-primary text-primary bg-transparent hover:bg-gradient-brown hover:text-primary-foreground hover:scale-105"
          : "bg-gradient-brown text-primary-foreground hover:shadow-glow hover:scale-105"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  )

  return (
    <section className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-primary/3 rounded-full animate-float" style={{ animationDelay: '1s' }} />

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-primary/20" />
            ))}
          </div>
        </div>

        {/* Sparkle effects */}
        <div className="absolute top-1/4 left-1/4 animate-pulse-glow">
          <Zap className="h-6 w-6 text-primary/30" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-pulse-glow" style={{ animationDelay: '1s' }}>
          <Target className="h-4 w-4 text-secondary/40" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Featured Work</span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse-glow" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary relative">
            Projects
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-brown rounded-full" />
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            A showcase of my recent work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/80 backdrop-blur-sm rounded-xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/20 overflow-hidden group-hover:-translate-y-2">
                
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 space-y-4 relative">
                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    {project.title}
                    <Rocket className="h-4 w-4 text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <Button href={project.liveUrl}>
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button href={project.githubUrl} outline>
                        <Github className="h-4 w-4" /> Code
                      </Button>
                    )}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-1 bg-gradient-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
