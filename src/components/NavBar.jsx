"use client";
import React, {useState, useEffect} from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "gallery", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-card rounded-full px-8 py-4 shadow-lg">
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2
              className="text-xl font-semibold text-accent font-heading"
              style={{fontFamily: "var(--font-vidaloka)"}}>
              ROYAL CLUB
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => scrollToSection("hero")}
              className={`relative px-4 py-2 text-sm font-semibold transition-standard rounded-full hover:bg-white/10 ${
                activeSection === "hero" ? "text-accent" : "text-muted hover:text-accent"
              }`}>
              Home
              {activeSection === "hero" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full transition-all duration-300"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className={`relative px-4 py-2 text-sm font-semibold transition-standard rounded-full hover:bg-white/10 ${
                activeSection === "gallery" ? "text-accent" : "text-muted hover:text-accent"
              }`}>
              Gallery
              {activeSection === "gallery" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full transition-all duration-300"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`relative px-4 py-2 text-sm font-semibold transition-standard rounded-full hover:bg-white/10 ${
                activeSection === "about" ? "text-accent" : "text-muted hover:text-accent"
              }`}>
              About
              {activeSection === "about" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full transition-all duration-300"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`relative px-4 py-2 text-sm font-semibold transition-standard rounded-full hover:bg-white/10 ${
                activeSection === "contact" ? "text-accent" : "text-muted hover:text-accent"
              }`}>
              Contact
              {activeSection === "contact" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full transition-all duration-300"></div>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-muted hover:text-accent p-3 rounded-full hover:bg-white/10 transition-standard">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
