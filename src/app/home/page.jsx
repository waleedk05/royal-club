import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div>
      <NavBar />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
