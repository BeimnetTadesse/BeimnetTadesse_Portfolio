"use client"

import { Building, Calendar, Sparkles, Award, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend & Backend Developer",
      company: "Mekrez School",
      duration: "2024 – Present",
      location: "Remote",
      skills: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS"],
      description: "Developing comprehensive educational platform with modern web technologies, focusing on user experience and performance optimization.",
      status: "current"
    },
    {
      title: "Team Project Participant",
      company: "GDG Hackathon",
      duration: "2024",
      location: "Addis Ababa, Ethiopia",
      skills: ["React", "JavaScript", "Team Collaboration"],
      description: "Collaborated with cross-functional teams to develop innovative solutions, gaining experience in rapid prototyping and agile development.",
      status: "completed"
    },
  ]

  return (
    <section className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-primary/20" />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="h-6 w-6 text-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Professional Journey</span>
            <Award className="h-6 w-6 text-primary animate-pulse-glow" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary relative">
            Experience
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-brown rounded-full" />
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Selected professional and project experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-brown transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group relative animate-slide-up flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-2">
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full ${
                      exp.status === 'current' ? 'bg-gradient-brown animate-pulse-glow' : 'bg-secondary'
                    } border-4 border-background shadow-glow`} />
                    {exp.status === 'current' && (
                      <div className="absolute -inset-2 bg-gradient-brown rounded-full blur opacity-30 animate-pulse-glow" />
                    )}
                  </div>
                </div>

                {/* Content card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="group relative">
                    {/* Background glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-card/80 backdrop-blur-sm rounded-xl shadow-card hover:shadow-glow transition-all duration-500 group-hover:-translate-y-2 border border-border/20 overflow-hidden">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      <div className="p-6 relative">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                              {exp.title}
                              {exp.status === 'current' && (
                                <span className="px-2 py-1 text-xs bg-gradient-brown text-primary-foreground rounded-full animate-pulse-glow">
                                  Current
                                </span>
                              )}
                            </h3>
                            <div className="flex items-center gap-2 mt-2 text-foreground/80">
                              <Building className="h-4 w-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-foreground/60">
                              <MapPin className="h-3 w-3" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                          
                          <div className="mt-3 md:mt-0">
                            <span className="inline-flex items-center gap-1 px-3 py-1 text-sm border border-primary rounded-full text-primary bg-primary/5">
                              <Calendar className="h-3 w-3" />
                              {exp.duration}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-foreground/80 leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-300">
                          {exp.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-2 py-1 text-xs rounded-full font-medium bg-gradient-card text-primary border border-primary/20 hover:bg-gradient-brown hover:text-primary-foreground transition-all duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Bottom accent line */}
                      <div className="h-1 bg-gradient-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16 animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-brown" />
            <Sparkles className="h-6 w-6 text-primary animate-pulse-glow" />
            <div className="w-12 h-px bg-gradient-brown" />
          </div>
        </div>
      </div>
    </section>
  )
}