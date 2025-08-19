"use client";
import React from "react";
import Image from "next/image";
import SpotlightCard from "@/ui/SpotlightCard";

export default function About() {
  return (
    <section className="min-h-screen bg-primary py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-medium text-accent mb-4 sm:mb-6"
            style={{fontFamily: "var(--font-vidaloka)"}}>
            About Royal Club
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-white rounded-full mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">
                Luxury Redefined
              </h3>
              <p className="text-base sm:text-lg text-secondary leading-relaxed">
                For over three decades, Royal Club has been the epitome of automotive excellence. We
                curate the world's most prestigious vehicles, from vintage classics to modern
                masterpieces, offering our exclusive members access to automotive artistry that
                transcends time.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">
                Exclusive Membership
              </h3>
              <p className="text-base sm:text-lg text-secondary leading-relaxed">
                Our membership is by invitation only, bringing together automotive enthusiasts,
                collectors, and connoisseurs who share a passion for exceptional craftsmanship and
                timeless design. Experience the privilege of exclusivity.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">500+</div>
                <div className="text-muted text-xs sm:text-sm">Premium Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">30+</div>
                <div className="text-muted text-xs sm:text-sm">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">100+</div>
                <div className="text-muted text-xs sm:text-sm">Elite Members</div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-card rounded-2xl p-4 sm:p-8">
              <Image
                src="/cars/car1.jpg"
                alt="Luxury vehicle showcase"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 glass-card rounded-lg p-3 sm:p-6">
                <h4 className="text-accent font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  Heritage Collection
                </h4>
                <p className="text-secondary text-sm">
                  Timeless classics that define automotive history
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(239, 239, 239, 0.2)">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 21 21">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">
              Certified Authenticity
            </h3>
            <p className="text-muted text-sm sm:text-base">
              Every vehicle in our collection undergoes rigorous authentication and certification
              processes.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(239, 239, 239, 0.2)">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">
              Concierge Service
            </h3>
            <p className="text-muted text-sm sm:text-base">
              Personal automotive consultants available 24/7 to assist with your luxury vehicle
              needs.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(239, 239, 239, 0.2)">
            <div className="w-12 h-12 bg-accent rounded-lg mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Performance Excellence</h3>
            <p className="text-muted">
              Each vehicle is maintained to perfection by our team of master technicians and
              craftsmen.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
