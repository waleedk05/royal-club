"use client";
import React from "react";

export default function NavBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-card rounded-full px-6 py-3">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-lg font-bold text-accent">ROYAL CLUB</h2>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-secondary hover:text-accent px-3 py-2 text-sm font-medium transition-standard rounded-full btn-secondary">
              Home
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-secondary hover:text-accent px-3 py-2 text-sm font-medium transition-standard rounded-full btn-secondary">
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-secondary hover:text-accent px-3 py-2 text-sm font-medium transition-standard rounded-full btn-secondary">
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-secondary hover:text-accent px-3 py-2 text-sm font-medium transition-standard rounded-full btn-secondary">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-secondary hover:text-accent p-2 rounded-full btn-secondary transition-standard">
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
