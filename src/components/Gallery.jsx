"use client";
import React from "react";
import Masonry from "@/ui/Masonry";

export default function Gallery() {
  const items = [
    {
      id: "1",
      img: "/cars/car1.jpg",
      url: "https://example.com/one",
      height: 300,
    },
    {
      id: "2",
      img: "/cars/car2.jpg",
      url: "https://example.com/two",
      height: 500,
    },
    {
      id: "3",
      img: "/cars/car3.jpg",
      url: "https://example.com/three",
      height: 250,
    },
    {
      id: "4",
      img: "/cars/car4.jpg",
      url: "https://example.com/four",
      height: 400,
    },
    {
      id: "5",
      img: "/cars/car5.jpg",
      url: "https://example.com/five",
      height: 380,
    },
    {
      id: "6",
      img: "/cars/car6.jpg",
      url: "https://example.com/six",
      height: 450,
    },
  ];

  return (
    <section id="gallery" className="min-h-screen bg-primary px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1
          className="text-5xl md:text-7xl font-normal text-accent mb-6"
          style={{fontFamily: "var(--font-vidaloka)"}}>
          Our Collection
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">
          Discover our curated selection of luxury automobiles
        </p>
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-24 bg-accent rounded-full"></div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="random"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </section>
  );
}
