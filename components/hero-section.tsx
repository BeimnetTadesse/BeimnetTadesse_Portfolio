"use client";

import Image from "next/image";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Instagram,
  Send,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const IconButton = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <div className="group rounded-full dark:gradient-border">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-3 rounded-full border border-border dark:border-transparent bg-card/40 text-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <div className="relative z-10">{children}</div>
      </a>
    </div>
  );

  const PrimaryButton = ({
    onClick,
    children,
  }: {
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className="group relative flex items-center px-8 py-3 rounded-full 
        bg-gradient-brown text-white font-semibold tracking-wide 
        shadow-warm hover:shadow-glow 
        transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <div className="relative z-10 flex items-center">{children}</div>
    </button>
  );
  

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-warm relative overflow-hidden pt-24 pb-32 md:pb-0 transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full animate-float blur-xl" />
        <div
          className="absolute top-40 right-32 w-32 h-32 bg-secondary/5 rounded-full animate-float blur-lg"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-48 h-48 bg-accent/5 rounded-full animate-float blur-2xl"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/2 right-20 w-24 h-24 bg-primary/3 rounded-full animate-float blur-md"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-primary/20" />
            ))}
          </div>
        </div>
        <div className="hidden md:block absolute top-1/4 left-1/4 animate-pulse-glow">
          <Star className="h-6 w-6 text-primary/30" />
        </div>
        <div
          className="hidden md:block absolute top-3/4 right-1/4 animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        >
          <Sparkles className="h-4 w-4 text-secondary/40" />
        </div>
        <div
          className="hidden md:block absolute top-1/3 left-1/3 animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        >
          <Zap className="h-5 w-5 text-accent/35" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center gap-12 lg:gap-24">
          <div className="text-center md:text-left space-y-8 max-w-2xl animate-slide-up relative z-10">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight mt-12 relative pb-4">
              <span className="bg-clip-text text-transparent bg-gradient-brown inline-block">
                Beimnet Tadesse
              </span>
              <div className="absolute bottom-0 left-0 w-24 h-1.5 bg-gradient-brown rounded-full" />
            </h1>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-base md:text-lg text-foreground/80 max-w-xl mx-auto mt-2 md:mx-0 leading-relaxed">
                Developing responsive and scalable web applications that address real-world needs using modern technologies.
              </p>
            </div>
            <p
              className="text-base md:text-lg text-foreground/80 max-w-xl mx-auto md:mx-0 animate-slide-up leading-relaxed"
              style={{ animationDelay: "0.4s" }}
            >
              Software Engineer • Marketing Enthusiast • Full-Stack Developer
            </p>
            <div
              className="flex justify-center md:justify-start gap-4 pt-4 animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <IconButton href="https://github.com/BeimnetTadesse">
                <Github className="h-5 w-5" />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/beimnet-tadesse-2339b8287/">
                <Linkedin className="h-5 w-5" />
              </IconButton>
              <IconButton href="https://www.instagram.com/__.aloha__/">
                <Instagram className="h-5 w-5" />
              </IconButton>
              <IconButton href="https://t.me/byfaithhh">
                <Send className="h-5 w-5" />
              </IconButton>
            </div>
            <div
              className="flex justify-center md:justify-start gap-4 pt-6 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              <PrimaryButton onClick={scrollToAbout}>
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </PrimaryButton>
              <a
                href="/Beimnet_Tadesse_CV.pdf"
                download
                className="group relative flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
              >
                Download CV
                <Download className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div
  className="flex justify-center md:justify-end items-center animate-slide-up"
  style={{ animationDelay: "1s" }}
>
  <div className="relative group w-72 sm:w-80 md:w-[450px] h-72 sm:h-80 md:h-[450px]">
    <div className="absolute -inset-6 bg-gradient-brown rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
    <div className="absolute -inset-4 bg-gradient-card rounded-full opacity-30" />
    <div className="relative w-full h-full rounded-full shadow-glow overflow-hidden">
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-1" />
      <Image
  src="/newphoto2.png"
  alt="Beimnet Tadesse"
  fill
  priority // makes it load faster above the fold
  className="relative rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
/>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>
    <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/10 rounded-full animate-pulse-glow" />
    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary/10 rounded-full animate-float" />
    <div
      className="absolute top-1/4 -left-12 w-8 h-8 bg-accent/15 rounded-full animate-pulse-glow"
      style={{ animationDelay: "1s" }}
    />
  </div>
</div>



        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-slide-up"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/60 uppercase tracking-wide">
            Scroll Down
          </span>
          <div className="w-px h-8 bg-gradient-brown" />
          <ArrowDown className="h-6 w-6 text-primary/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}