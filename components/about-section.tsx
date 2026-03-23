"use client";

import { Sparkles, BookOpen, Code, Users, Lightbulb, Zap, Target } from "lucide-react";
import { About3DScene } from "./about-3d-scene";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-warm relative overflow-hidden transition-colors duration-500">
      {/* Floating Background Elements mimicking Skills section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-primary/3 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Geometric Pattern Overlay (Bold Squares) */}
        <div className="absolute inset-0 opacity-5 dark:hidden">
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

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center animate-pulse-glow shadow-sm">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="h-px bg-gradient-brown flex-1 w-16 max-w-20"></div>
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <div className="h-px bg-gradient-brown flex-1 w-16 max-w-20"></div>
            <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center animate-pulse-glow shadow-sm" style={{ animationDelay: '1s' }}>
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-brown">About Me</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-brown rounded-full" />
          </h2>
        </div>

        {/* Content Split: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto w-full">
          
          {/* Left Column: 3D Interactive Scene */}
          <div className="w-full sm:w-2/3 lg:w-1/3 mx-auto animate-slide-up relative group">
            <div className="dark:gradient-border rounded-[2rem] transform group-hover:-translate-y-2 transition-transform duration-500">
              {/* 3D Scene Box */}
              <div className="relative bg-card rounded-[2rem] p-2 shadow-card border border-border z-10 overflow-hidden">
                {/* Fixed-height container for the Canvas */}
                <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: '360px' }}>
                  <About3DScene />

                  {/* Overlay Sparkles */}
                  <div className="absolute top-4 left-4 bg-card/80 backdrop-blur-md p-2.5 rounded-xl border border-border shadow-glow animate-float pointer-events-none">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-card/80 backdrop-blur-md p-2.5 rounded-xl border border-border shadow-glow animate-float pointer-events-none" style={{ animationDelay: '2s' }}>
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text and Badges */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="dark:gradient-border rounded-2xl">
              <div className="bg-card/40 backdrop-blur-md p-8 rounded-2xl shadow-card border border-border relative overflow-hidden group hover:shadow-glow transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="space-y-6 text-lg text-foreground/90 leading-relaxed relative z-10">
                  <p>
                    I’m <span className="text-primary font-bold">Beimnet Tadesse</span>, a Software Engineering student at Addis Ababa Science and Technology University and also studying Marketing Management at Saint Mary University. My journey in tech started with curiosity and has grown into a passion for building web applications and digital solutions that are both functional and user-focused.
                  </p>
                  <p>
                    I’ve worked on projects both individually and in teams, creating dynamic websites and applications using modern technologies like React, Next.js, and Node.js. Alongside development, I’m exploring digital marketing strategies, managing social media campaigns, and analyzing metrics to make online experiences more engaging.
                  </p>
                </div>
              </div>
            </div>

            {/* Trait Badges (Small Boxes) */}
            <div className="flex flex-wrap gap-4 px-2">
              {[
                { icon: Users, label: "Team Work" },
                { icon: BookOpen, label: "Active Learning" },
                { icon: Lightbulb, label: "Problem Solver" }
              ].map((trait, i) => (
                <div key={i} className="dark:gradient-border rounded-xl">
                  <div className="flex items-center gap-2.5 px-5 py-2.5 bg-gradient-card rounded-xl border border-border shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group cursor-default">
                    <trait.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-semibold text-foreground/90 tracking-wide">{trait.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-brown" />
            <Sparkles className="h-6 w-6 text-primary animate-pulse-glow" />
            <div className="w-12 h-px bg-gradient-brown" />
          </div>
        </div>
      </div>
    </section>
  );
}
