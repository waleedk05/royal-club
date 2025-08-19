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
      height: 360,
    },
    {
      id: "6",
      img: "/cars/car6.jpg",
      url: "https://example.com/six",
      height: 450,
    },
    {
      id: "7",
      img: "/cars/car7.jpg",
      url: "https://example.com/seven",
      height: 280,
    },
    {
      id: "8",
      img: "/cars/car8.jpg",
      url: "https://example.com/eight",
      height: 250,
    },
    {
      id: "9",
      img: "/cars/car9.png",
      url: "https://example.com/nine",
      height: 300,
    },
    {
      id: "10",
      img: "/cars/car10.png",
      url: "https://example.com/ten",
      height: 300,
    },
    {
      id: "11",
      img: "/cars/car11.png",
      url: "https://example.com/eleven",
      height: 300,
    },
    {
      id: "12",
      img: "/cars/car12.jpg",
      url: "https://example.com/twelve",
      height: 300,
    },
    {
      id: "13",
      img: "/cars/car13.jpg",
      url: "https://example.com/thirteen",
      height: 280,
    },
    {
      id: "14",
      img: "/cars/car14.jpg",
      url: "https://example.com/fourteen",
      height: 270,
    },
    {
      id: "15",
      img: "/cars/car15.png",
      url: "https://example.com/fifteen",
      height: 350,
    },
    {
      id: "16",
      img: "/cars/car16.jpg",
      url: "https://example.com/sixteen",
      height: 300,
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-primary px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      style={{minHeight: "100vh", paddingBottom: "150px"}}>
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h1
          className="text-3xl sm:text-5xl md:text-7xl font-normal text-accent mb-4 sm:mb-6"
          style={{fontFamily: "var(--font-vidaloka)"}}>
          Our Collection
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          Discover our curated selection of luxury automobiles
        </p>
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="h-1 w-16 sm:w-24 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Gallery Section */}
      <div
        className="max-w-7xl mx-auto overflow-hidden"
        style={{
          minHeight: "600px",
          paddingBottom: "100px",
          maxHeight: "150vh", // Constraint for mobile
        }}>
        <div className="relative w-full" style={{height: "auto", minHeight: "1600px"}}>
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </section>
  );
}
