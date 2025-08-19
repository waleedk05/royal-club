"use client";
import React from "react";
import Image from "next/image";

export default function Gallery() {
  const allItems = [
    {
      id: "1",
      img: "/cars/car1.jpg",
      width: 280,
      height: 110,
    },
    {
      id: "2",
      img: "/cars/car2.jpg",
      width: 240,
      height: 170,
    },
    {
      id: "3",
      img: "/cars/car3.jpg",
      width: 280,
      height: 105,
    },
    {
      id: "4",
      img: "/cars/car4.jpg",
      width: 240,
      height: 130,
    },
    {
      id: "5",
      img: "/cars/car5.jpg",
      width: 180,
      height: 130,
    },
    {
      id: "6",
      img: "/cars/car6.jpg",
      width: 240,
      height: 160,
    },
    {
      id: "7",
      img: "/cars/car7.jpg",
      width: 190,
      height: 105,
    },
    {
      id: "8",
      img: "/cars/car8.jpg",
      width: 190,
      height: 100,
    },
    {
      id: "9",
      img: "/cars/car9.png",
      width: 260,
      height: 110,
    },
    {
      id: "10",
      img: "/cars/car10.png",
      width: 260,
      height: 110,
    },
    {
      id: "11",
      img: "/cars/car11.png",
      width: 270,
      height: 120,
    },
    {
      id: "12",
      img: "/cars/car12.jpg",
      width: 260,
      height: 109,
    },
    {
      id: "13",
      img: "/cars/car13.jpg",
      width: 280,
      height: 120,
    },
    {
      id: "14",
      img: "/cars/car14.jpg",
      width: 280,
      height: 110,
    },
    {
      id: "15",
      img: "/cars/car15.png",
      width: 250,
      height: 130,
    },
    {
      id: "16",
      img: "/cars/car16.jpg",
      width: 260,
      height: 100,
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-primary px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      style={{paddingBottom: "80px"}}>
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-normal text-accent mb-4 sm:mb-6"
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
      <div className="max-w-7xl mx-auto">
        <div className="masonry-grid">
          {allItems.map((item) => {
            // Calculate grid row span based on image height
            const rowSpan = Math.ceil(item.height / 35); // 35px per row unit

            return (
              <div
                key={item.id}
                className="masonry-item group relative overflow-hidden rounded-lg glass-card transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  gridRowEnd: `span ${rowSpan}`,
                  aspectRatio: `${item.width} / ${item.height}`,
                }}>
                <Image
                  src={item.img}
                  alt={`Luxury car ${item.id}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3
                    className="text-white font-medium text-lg"
                    style={{fontFamily: "var(--font-vidaloka)"}}>
                    Luxury Vehicle {item.id}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">Premium Collection</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12 sm:mt-16">
          <p
            className="text-lg sm:text-xl text-muted font-light"
            style={{fontFamily: "var(--font-vidaloka)"}}>
            Visit us to browse our full collection
          </p>
        </div>
      </div>
    </section>
  );
}
