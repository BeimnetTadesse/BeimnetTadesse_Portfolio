/* eslint-disable @next/next/no-img-element */
"use client";

import { Sparkles, BookOpen, Code, Users, Lightbulb, Zap, Target } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-warm relative overflow-hidden">
      {/* Floating Background Elements mimicking Skills section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-primary/3 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Geometric Pattern Overlay (Bold Squares) */}
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

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary relative mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-brown rounded-full mx-auto shadow-sm" />
        </div>

        {/* Content Split: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto w-full">
          
          {/* Left Column: Image Area */}
          <div className="w-full sm:w-2/3 lg:w-1/3 mx-auto animate-slide-up relative group">
            {/* Image Box */}
            <div className="relative bg-card rounded-[2rem] p-2 shadow-card border border-border/20 z-10 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
              <img 
                src="/nin.jpg" 
                alt="Beimnet Tadesse" 
                className="w-full h-auto aspect-[4/5] object-cover rounded-2xl filter drop-shadow-md"
              />
              
              {/* Overlay Sparkles */}
              <div className="absolute top-4 left-4 bg-card/80 backdrop-blur-md p-2.5 rounded-xl border border-border/20 shadow-glow animate-float">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="absolute bottom-4 right-4 bg-card/80 backdrop-blur-md p-2.5 rounded-xl border border-border/20 shadow-glow animate-float" style={{ animationDelay: '2s' }}>
                <Code className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Right Column: Text and Badges */}
          <div className="w-full lg:w-2/3 space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-normal bg-card/40 backdrop-blur-sm p-8 rounded-3xl border border-border/10 shadow-sm">
              <p>
                I’m <span className="text-primary font-bold">Beimnet Tadesse</span>, a Software Engineering student at Addis Ababa Science and Technology University and also studying Marketing Management at Saint Mary University. My journey in tech started with curiosity and has grown into a passion for building web applications and digital solutions that are both functional and user-focused.
              </p>
              <p>
                I’ve worked on projects both individually and in teams, creating dynamic websites and applications using modern technologies like React, Next.js, and Node.js. Alongside development, I’m exploring digital marketing strategies, managing social media campaigns, and analyzing metrics to make online experiences more engaging.
              </p>
            </div>

            {/* Trait Badges (Small Boxes) */}
            <div className="flex flex-wrap gap-4 px-2">
              <div className="flex items-center gap-2.5 px-5 py-2.5 bg-gradient-card rounded-xl border border-primary/20 shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-semibold text-foreground/90 tracking-wide">Team Work</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-2.5 bg-gradient-card rounded-xl border border-primary/20 shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <BookOpen className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-semibold text-foreground/90 tracking-wide">Active Learning</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-2.5 bg-gradient-card rounded-xl border border-primary/20 shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <Lightbulb className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-semibold text-foreground/90 tracking-wide">Problem Solver</span>
              </div>
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
