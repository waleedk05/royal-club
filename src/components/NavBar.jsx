"use client";
import React, {useState, useEffect} from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
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
    <>
      <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-auto">
        <div className="glass-card rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-lg">
          <div className="flex items-center justify-between sm:space-x-10">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h2
                className="text-lg sm:text-xl font-semibold text-accent font-heading"
                style={{fontFamily: "var(--font-vidaloka)"}}>
                ROYAL CLUB
              </h2>
            </div>

            {/* Desktop Navigation Links */}
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
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-muted hover:text-accent p-2 sm:p-3 rounded-full hover:bg-white/10 transition-standard">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className={`text-left px-4 py-3 text-base font-semibold transition-standard rounded-lg hover:bg-white/10 ${
                    activeSection === "hero"
                      ? "text-accent bg-white/5"
                      : "text-muted hover:text-accent"
                  }`}>
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className={`text-left px-4 py-3 text-base font-semibold transition-standard rounded-lg hover:bg-white/10 ${
                    activeSection === "gallery"
                      ? "text-accent bg-white/5"
                      : "text-muted hover:text-accent"
                  }`}>
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`text-left px-4 py-3 text-base font-semibold transition-standard rounded-lg hover:bg-white/10 ${
                    activeSection === "about"
                      ? "text-accent bg-white/5"
                      : "text-muted hover:text-accent"
                  }`}>
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`text-left px-4 py-3 text-base font-semibold transition-standard rounded-lg hover:bg-white/10 ${
                    activeSection === "contact"
                      ? "text-accent bg-white/5"
                      : "text-muted hover:text-accent"
                  }`}>
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
