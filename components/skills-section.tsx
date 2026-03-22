/* eslint-disable @next/next/no-img-element */
"use client"

import { Sparkles, Zap, Target, Code } from "lucide-react"

export function SkillsSection() {
  const devSkills = [
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" }
  ]

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
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Technical Expertise</span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse-glow" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary relative">
            Skills
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-brown rounded-full" />
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Technologies I work with regularly
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {devSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative animate-slide-up flex flex-col items-center gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card backdrop-blur-md shadow-card hover:shadow-glow transition-all duration-300 group-hover:-translate-y-2 border border-border/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-brown opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
                
                {/* SVG Icon Logo */}
                <img 
                  src={skill.src} 
                  alt={skill.name} 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain relative z-10 filter transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom decorative element & text */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '1.4s' }}>
          <p className="text-sm md:text-base text-foreground/60 font-medium tracking-wide mb-8">
            Always exploring new technologies
          </p>
          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-brown" />
              <Code className="h-5 w-5 text-primary/60 animate-pulse-glow" />
              <div className="w-16 h-px bg-gradient-brown" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}