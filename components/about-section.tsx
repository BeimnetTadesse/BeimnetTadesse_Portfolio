import { GraduationCap, Code, TrendingUp, Sparkles, Target, BookOpen } from "lucide-react"

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Passionate about creating dynamic, interactive websites and applications using modern technologies like React, Next.js, and Node.js.",
      color: "primary",
      gradient: "bg-gradient-brown"
    },


    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Currently pursuing dual degrees while actively participating in hackathons and building real-world projects for clients.",
      color: "accent",
      gradient: "bg-gradient-hover"
    },
    {
        icon: TrendingUp,
        title: "Marketing Insight",
        description: "Learning digital marketing strategies, managing social media accounts, running ads, and analyzing basic metrics to improve online presence and engagement.",
        color: "accent",
        gradient: "bg-gradient-brown",
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Get To Know Me</span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse-glow" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary relative">
            About Me
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-brown rounded-full" />
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            I am a 3rd-year Software Engineering student at Addis Ababa Science and Technology University, also studying
            Marketing Management at Saint Mary University. I have experience in frontend and backend development,
            building projects both individually and in teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-brown rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
              <div className="absolute -inset-2 bg-gradient-card rounded-2xl opacity-50" />
              
              {/* Main image container */}
              <div className="relative bg-card rounded-2xl p-2 shadow-card">
                <img
                  src="/photo2(2).png"
                  alt="Beimnet Ashenafi"
                  className="rounded-xl w-full max-w-md mx-auto shadow-warm transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Shimmer overlay */}
                <div className="absolute inset-2 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer" />
                </div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/10 rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary/10 rounded-full animate-float" />
            </div>
          </div>

          {/* Enhanced Info Cards */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                {/* Background glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-card/80 backdrop-blur-sm rounded-xl shadow-card hover:shadow-glow transition-all duration-500 group-hover:-translate-y-2 border border-border/20 overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="p-6 relative">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className={`p-3 ${skill.gradient} rounded-xl shadow-warm group-hover:animate-pulse-glow transition-all duration-300`}>
                          <skill.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {skill.title}
                          </h3>
                          <Target className="h-4 w-4 text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="h-1 bg-gradient-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16 animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-brown" />
            <BookOpen className="h-6 w-6 text-primary animate-pulse-glow" />
            <div className="w-12 h-px bg-gradient-brown" />
          </div>
        </div>
      </div>
    </section>
  )
}