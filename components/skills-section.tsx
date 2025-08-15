"use client"

import { Code, Palette, TrendingUp, Sparkles, Zap, Target } from "lucide-react"
import type React from "react"

export function SkillsSection() {
  const Progress = ({ value, className = "" }: { value: number; className?: string }) => {
    const clamped = Math.max(0, Math.min(100, value))
    return (
      <div className="relative">
        <div
          className={`w-full bg-muted/40 rounded-full overflow-hidden ${className}`}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-gradient-brown transition-[width] duration-1000 ease-out relative overflow-hidden"
            style={{ width: `${clamped}%` }}
          >
            {/* Shimmer effect on progress bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-brown rounded-full blur opacity-0 hover:opacity-20 transition-opacity duration-300" />
      </div>
    )
  }

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      description: "Building modern, responsive user interfaces",
      color: "primary",
      gradient: "bg-gradient-brown",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "HTML/CSS/JS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: Palette,
      description: "Server-side development and database management",
      color: "accent",
      gradient: "bg-gradient-card",
      skills: [
        { name: "Node.js/ Express.js", level: 80 },
        { name: "Django", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "API Development", level: 80 },
        { name: "PostgreSQL", level: 80 },
      ],
    },
    {
      title: "Marketing Basics",
      icon: TrendingUp,
      description: "Managing social media and advertising campaigns",
      color: "accent",
      gradient: "bg-gradient-brown",
      skills: [
        { name: "Social Media Management", level: 75 },
        { name: "Ads Management", level: 80 },
        { name: "Content Creation", level: 85 },
        { name: "Community Engagement", level: 70 },
        { name: "Basic Analytics", level: 75 },
      ],
    }
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
            Technical expertise & marketing knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/80 backdrop-blur-sm rounded-xl shadow-card hover:shadow-glow transition-all duration-500 group-hover:-translate-y-2 border border-border/20 overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Header */}
                <div className="p-6 border-b border-border/20 relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="relative">
                      <div className={`p-3 ${category.gradient} rounded-xl shadow-warm group-hover:animate-pulse-glow transition-all duration-300`}>
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                        {category.title}
                        <Target className="h-4 w-4 text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h3>
                      <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills list */}
                <div className="p-6 space-y-4 relative">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2 group/skill">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-foreground/60 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                  
                  {/* Floating accent elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/5 rounded-full animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary/5 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Bottom accent line */}
                <div className="h-1 bg-gradient-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16 animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-brown" />
            <Code className="h-6 w-6 text-primary animate-pulse-glow" />
            <div className="w-12 h-px bg-gradient-brown" />
          </div>
        </div>
      </div>
    </section>
  )
}