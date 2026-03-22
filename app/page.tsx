import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { EducationSection } from "../components/education-section"
// import { ExperienceSection } from "../components/experience-section"
import { SkillsSection } from "../components/skills-section"
import { ProjectsSection } from "../components/projects-section"
import { ContactSection } from "../components/contact-section"
import { ServicesSection } from "../components/services-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      {/* <div id="experience">
        <ExperienceSection />
      </div> */}
     
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  )
}
