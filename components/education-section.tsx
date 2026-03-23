import { Calendar, MapPin, BookOpen, Award, Sparkles } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "BSc – Software Engineering",
      institution: "Addis Ababa Science and Technology University",
      duration: "Expected Aug 2027",
      location: "Addis Ababa, Ethiopia",
      description:
        "Comprehensive program covering software development, algorithms, data structures, and system design.",
      icon: "tech",
      delay: "0.2s"
    },
    {
      degree: "BCom – Marketing Management",
      institution: "Saint Mary University",
      duration: "Expected Aug 2027",
      location: "Addis Ababa, Ethiopia",
      description:
        "Business-focused curriculum covering digital marketing, consumer behavior, and strategic marketing.",
      icon: "business",
      delay: "0.4s"
    },
  ]

  return (
    <section className="py-20 bg-gradient-warm relative overflow-hidden transition-colors duration-500">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-secondary animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-primary animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 rounded-full bg-secondary animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Creative Elements */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center animate-pulse-glow">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="h-px bg-gradient-brown flex-1 max-w-20"></div>
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <div className="h-px bg-gradient-brown flex-1 max-w-20"></div>
            <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center animate-pulse-glow" style={{ animationDelay: '1s' }}>
              <Award className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 relative">
            <span className="bg-clip-text text-transparent bg-gradient-brown">Education</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-brown rounded-full"></div>
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Pursuing dual degrees to bridge technology and business
          </p>
        </div>

        {/* Education Cards with Creative Layout */}
        <div className="max-w-6xl mx-auto relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent transform -translate-x-1/2 opacity-30"></div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`animate-slide-up ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                style={{ animationDelay: edu.delay }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-brown rounded-full border-4 border-background shadow-glow" 
                     style={{ top: `${20 + index * 40}%` }}></div>
                
                <div className="group relative dark:gradient-border rounded-2xl">
                  <div className="relative bg-card/40 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-border overflow-hidden h-full">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-3 h-3 rounded-full ${edu.icon === 'tech' ? 'bg-primary' : 'bg-secondary'} animate-pulse`}></div>
                            <h3 className="font-serif text-xl font-bold text-foreground">{edu.degree}</h3>
                          </div>
                          <p className="text-lg font-semibold text-primary mb-4">{edu.institution}</p>
                        </div>
                        
                        {/* Floating Icon */}
                        <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center animate-float shadow-warm">
                          {edu.icon === 'tech' ? (
                            <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="flex items-center gap-2 px-3 py-2 text-sm bg-primary/10 border border-primary/20 rounded-lg text-foreground font-medium backdrop-blur-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-2 text-sm bg-primary/10 border border-primary/20 rounded-lg text-foreground font-medium backdrop-blur-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          {edu.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-foreground leading-relaxed mb-4">{edu.description}</p>
                      
                      {/* Progress Indicator */}
                      <div className="w-full bg-primary/10 rounded-full h-2 mb-2">
                        <div className="bg-gradient-brown h-2 rounded-full w-3/4 transition-all duration-1000 group-hover:w-full"></div>
                      </div>
                      <p className="text-xs text-muted-foreground">In Progress</p>
                    </div>
                    
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-brown opacity-10 rounded-bl-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-card rounded-full border border-primary/20 shadow-card">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">Building the future, one degree at a time</span>
            <Sparkles className="h-4 w-4 text-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  )
}