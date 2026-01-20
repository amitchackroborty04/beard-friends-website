"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function DigitalSteps() {
  return (
    <div className="bg-[#0E0E0F] py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Digital Steps
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Attention all beard enthusiasts! We are excited to announce the
              annual Beard Contest happening Right Now. Whether you have a full
              beard, a stylish mustache, or a unique facial hair design, this
              contest is for you! We invite all men who have put time and effort
              into growing and grooming their beards to come and showcase their
              impressive facial hair styles. There will be various categories to
              enter, including full beard, partial beard, mustache, and
              freestyle.
            </p>

            <button className="group flex items-center gap-2 text-white font-semibold text-lg hover:text-[#BA5EEF] transition-colors">
              Read More
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px] aspect-square">
              <Image
                src="/images/degitals.png"
                alt="Digital Steps"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalSteps;
