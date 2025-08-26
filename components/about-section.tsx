"use client";

import { GraduationCap, Code, TrendingUp, Sparkles, Target, BookOpen } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Technical Excellence",
      description:
        "Passionate about creating dynamic, interactive websites and applications using modern technologies like React, Next.js, and Node.js.",
      gradient: "bg-gradient-brown",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description:
        "Currently pursuing dual degrees while actively participating in hackathons and building real-world projects for clients.",
      gradient: "bg-gradient-hover",
    },
    {
      icon: TrendingUp,
      title: "Marketing Insight",
      description:
        "Learning digital marketing strategies, managing social media accounts, running ads, and analyzing basic metrics to improve online presence and engagement.",
      gradient: "bg-gradient-brown",
    },
  ];

  return (
    <section className="py-24 bg-gradient-warm relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full animate-float" />
        <div className="absolute top-36 right-12 w-28 h-28 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-16 left-1/4 w-40 h-40 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center animate-pulse-glow">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div className="h-px bg-gradient-brown flex-1 max-w-20"></div>
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <div className="h-px bg-gradient-brown flex-1 max-w-20"></div>
            <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center animate-pulse-glow" style={{ animationDelay: '1s' }}>
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
          </div>

          {/* Title + separator line + paragraph */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary relative mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-brown rounded-full mx-auto mb-6" />
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            I am a 3rd-year Software Engineering student at Addis Ababa Science and Technology University, also studying
            Marketing Management at Saint Mary University. I have experience in frontend and backend development,
            building projects both individually and in teams.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex-1 min-h-[22rem] bg-card/80 rounded-2xl shadow-card hover:shadow-glow border border-border/20 overflow-hidden transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Subtle shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer"></div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col h-full justify-between relative z-10">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className={`p-2 ${skill.gradient} rounded-xl shadow-warm animate-pulse-glow`}>
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
  <h3 className="text-xl font-semibold text-foreground mb-2">
    {skill.title}
  </h3>

  {/* Full-width thin separator line, lowered */}
  <div className="w-full h-px bg-gradient-brown mt-6 mb-7" />

  <p className="pt-2 text-lg text-foreground/80 leading-relaxed -mx-2">
  {skill.description}
</p>
</div>

                </div>

                {/* Bottom accent line */}
                <div className="h-1 bg-gradient-brown mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16 animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-brown" />
            <Code className="h-6 w-6 text-primary animate-pulse-glow" />
            <div className="w-12 h-px bg-gradient-brown" />
          </div>
        </div>
      </div>
    </section>
  );
}
