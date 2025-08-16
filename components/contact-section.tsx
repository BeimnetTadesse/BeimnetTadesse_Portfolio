"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xqaljokv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const contactInfo = [
    { icon: <Mail className="h-6 w-6 text-primary" />, label: "Email", value: "beimnetasnin@gmail.com", href: "mailto:beimnetasnin@gmail.com" },
    { icon: <MapPin className="h-6 w-6 text-primary" />, label: "Location", value: "Addis Ababa, Ethiopia", href: null },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/BeimnetTadesse" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/beimnet-ashenafi-2339b8287/" },
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "https://www.instagram.com/__.aloha__/" },
    { icon: <Send className="h-5 w-5" />, label: "Telegram", href: "https://t.me/byfaithhh" },
  ];

  return (
    <section className="py-24 bg-gradient-warm relative overflow-hidden">
      {/* Decorative Floating Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full opacity-10 animate-float"></div>
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-secondary rounded-full opacity-10 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-primary rounded-full opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 relative">
            Contact Me
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-brown rounded-full"></div>
          </h2>
          <p className="text-foreground text-xl max-w-2xl mx-auto">
            Feel free to reach out for collaborations, projects, or just a chat!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="group relative bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-primary/10 overflow-hidden">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {["name", "email"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field === "email" ? "your.email@example.com" : "Your name"}
                    required
                    className="w-full rounded-lg p-3 bg-muted/50 text-foreground border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="w-full rounded-lg p-3 bg-muted/50 text-foreground border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-brown text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
              >
                <Send className="h-5 w-5" /> {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && <p className="text-green-500 mt-2">Message sent successfully!</p>}
              {status === "error" && <p className="text-red-500 mt-2">Failed to send message. Try again.</p>}
            </form>

            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-6">
            <div className="group relative bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-primary/10 overflow-hidden">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 mb-4 p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
                >
                  {info.icon}
                  <div>
                    <p className="font-medium text-foreground">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="hover:text-primary transition-colors">{info.value}</a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="group relative bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-primary/10 overflow-hidden">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border relative overflow-hidden text-foreground transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="absolute inset-0 bg-gradient-brown opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    <span className="relative flex items-center gap-3 z-10">
                      {social.icon} <span>{social.label}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
