"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function AboutOurCommunity() {
  return (
    <div className="bg-[#0E0E0F] py-16 md:px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[400px] rounded-lg overflow-hidden group">
            <Image
              fill
              src="/images/about.jpg"
              alt="Barber Community"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About Our Community
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Barber shops have been an integral part of communities for
              centuries. They are more than just places to get a haircut; they
              are social hubs where people gather to catch up on the latest
              news, share stories, and build relationships. Barber shops are
              where fathers take their sons for their first haircuts, where
              friends meet for a quick trim before a night out, and where older
              men come for the familiar comfort of a routine shave. Barber shops
              foster a sense of community by providing a space where people can
              come together and connect, creating a sense of belonging that
              extends far beyond a simple grooming appointment.
            </p>

            <button className="group flex items-center gap-2 text-white font-semibold text-lg hover:text-[#BA5EEF] transition-colors">
              Learn more
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOurCommunity;