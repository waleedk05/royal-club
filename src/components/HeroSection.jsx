import React from "react";
import Image from "next/image";
import car1 from "../../public/cars/car1.jpg";
import TextPressure from "@/ui/TextPressure";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen bg-primary" id="hero">
      {/* Background Image */}
      <Image
        src={car1}
        alt="Vintage luxury car"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-card"></div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Desktop TextPressure */}
        <div className="hidden md:block w-full max-w-6xl" style={{height: "210px"}}>
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

        {/* Mobile Simple Text */}
        <div className="block md:hidden">
          <h1
            className="text-6xl sm:text-6xl font-normal text-accent tracking-wider drop-shadow-2xl"
            style={{fontFamily: "var(--font-vidaloka)"}}>
            ROYAL CLUB
          </h1>
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
