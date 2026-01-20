"use client";
import React from "react";
import type { CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";

function Barbershops() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const barbershops = [
    {
      id: 1,
      name: "Dasy Ponyo",
      rating: 5.0,
      location: "Islamabad",
      distance: "28 Kms",
      image: "/images/barbershopimage.jpg",
    },
    {
      id: 2,
      name: "Daniel Bonjo",
      rating: 4.9,
      location: "Islamabad",
      distance: "32 Kms",
      image: "/images/barbershopimage.jpg",
    },
    {
      id: 3,
      name: "Alexander joe",
      rating: 4.9,
      location: "Islamabad",
      distance: "51 Kms",
      image: "/images/barbershopimage.jpg",
    },
    {
      id: 4,
      name: "Classic Cuts",
      rating: 4.8,
      location: "Islamabad",
      distance: "15 Kms",
      image: "/images/barbershopimage.jpg",
    },
    {
      id: 5,
      name: "Style Studio",
      rating: 5.0,
      location: "Islamabad",
      distance: "22 Kms",
      image: "/images/barbershopimage.jpg",
    },
  ];

  return (
    <div className="bg-[#1C1C1E] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Barbershops
        </h2>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {barbershops.map((shop) => (
              <CarouselItem
                key={shop.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-[#2a2a2a] border-none overflow-hidden group cursor-pointer">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        fill
                        src={shop.image}
                        alt={shop.name}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white">
                          {shop.name}
                        </h3>
                        <div className="flex items-center gap-1 bg-[#3a3a3a] px-2 py-1 rounded">
                          <span className="text-white text-sm font-medium">
                            {shop.rating}
                          </span>
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-gray-400 text-sm">
                        <span>{shop.location}</span>
                        <span>{shop.distance}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="left-0 top-1/2 -translate-x-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
          <CarouselNext className="right-0 top-1/2 translate-x-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 mt-12">
          {barbershops.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 rounded-full transition-all ${
                current === index
                  ? "bg-purple-500 w-8 rounded-md"
                  : "bg-gray-500 w-3"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Explore All Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#BA5EEF] hover:bg-[#A54DD9] text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:gap-3">
            Explore All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Barbershops;