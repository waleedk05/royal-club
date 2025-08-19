import React from "react";
import Image from "next/image";
import car1 from "../../public/cars/car1.jpg";
import TextPressure from "@/ui/TextPressure";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen bg-primary" id="hero">
      {/* Background Image */}
      <Image src={car1} alt="Vintage luxury car" fill className="object-cover" priority />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-card"></div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl" style={{height: "200px"}}>
          <TextPressure
            text="ROYAL CLUB"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={24}
          />
        </div>
        <div className="mt-6 sm:mt-8">
          <p className="text-lg sm:text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed drop-shadow-lg font-light tracking-wide px-4 sm:px-0">
            Experience luxury, elegance, and timeless automotive excellence
          </p>
        </div>
      </div>
    </div>
  );
}
