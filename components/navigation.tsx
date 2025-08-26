"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About Me", href: "#about" },
    { id: "education", label: "Education", href: "#education" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "skills", label: "Skills", href: "#skills" },
    // { id: "experience", label: "Experience", href: "#experience" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const NavButton = ({
    label,
    active,
    onClick,
    className = "",
  }: {
    label: string;
    active?: boolean;
    onClick: () => void;
    className?: string;
  }) => (
    <button
      onClick={onClick}
      className={`group relative px-4 py-2 transition-all duration-500 font-medium whitespace-nowrap rounded-full overflow-hidden
        ${
          active
            ? "bg-gradient-brown text-white font-bold scale-105" // ✅ white text on brown bg
            : "text-foreground hover:bg-gradient-card hover:text-primary transform hover:-translate-y-1 hover:shadow-warm hover:scale-105"
        } 
        ${className}`}
    >
      <span className="relative z-10">{label}</span>
    </button>
  );
  

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-card">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-2 left-20 w-16 h-16 bg-primary/5 rounded-full animate-float blur-sm" />
        <div
          className="absolute top-4 right-32 w-12 h-12 bg-secondary/5 rounded-full animate-float blur-sm"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1 left-1/2 w-8 h-8 bg-accent/5 rounded-full animate-float blur-sm"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-brown rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="relative font-serif text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-brown tracking-wide flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary animate-pulse-glow" />
              N I N A
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/30">
            {navItems.map((item) => (
              <NavButton
                key={item.id}
                label={item.label}
                active={activeSection === item.id}
                onClick={() => scrollToSection(item.href)}
              />
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden group relative p-3 rounded-full text-foreground hover:bg-gradient-card transition-all duration-500 transform hover:scale-110 border border-border/30 overflow-hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <div className="relative z-10 transition-transform duration-300">
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-brown rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-6 px-4 bg-gradient-card/80 backdrop-blur-sm border-t border-border/50 shadow-card relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 right-8 w-20 h-20 bg-primary/5 rounded-full animate-float blur-lg" />
            <div
              className="absolute bottom-6 left-12 w-16 h-16 bg-secondary/5 rounded-full animate-float blur-md"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="flex flex-col space-y-3 relative z-10">
            {navItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <NavButton
                  label={item.label}
                  active={activeSection === item.id}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left w-full justify-start rounded-lg py-3 px-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
