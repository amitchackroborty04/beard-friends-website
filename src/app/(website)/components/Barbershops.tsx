


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
    if (!api) return;

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
    <div className="bg-[#1C1C1E] py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10 md:mb-16 tracking-tight">
          Barbershops
        </h2>

        {/* Carousel Container */}
        <div className="relative px-2 md:px-0">
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
                  // Mobile: 85% width to show next card, Tablet: 50%, Desktop: 33%
                  className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="bg-[#2a2a2a] border-none overflow-hidden group cursor-pointer transition-all hover:ring-1 hover:ring-purple-500/50">
                    <CardContent className="p-0">
                      {/* Image - Height adjusted for mobile/desktop */}
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <Image
                          fill
                          src={shop.image}
                          alt={shop.name}
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a] via-transparent to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="p-5 md:p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg md:text-xl font-bold text-white truncate pr-2">
                            {shop.name}
                          </h3>
                          <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-md">
                            <span className="text-white text-xs md:text-sm font-bold">
                              {shop.rating.toFixed(1)}
                            </span>
                            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-gray-400 text-xs md:text-sm font-medium">
                          <span className="flex items-center gap-1">
                            {shop.location}
                          </span>
                          <span className="bg-white/5 px-2 py-0.5 rounded text-[10px] md:text-xs">
                            {shop.distance}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons - Hidden on Mobile for better UX */}
            <div className="hidden lg:block">
              <CarouselPrevious className="-left-14 bg-white/5 border-white/10 hover:bg-purple-500 hover:border-purple-500 text-white transition-all" />
              <CarouselNext className="-right-14 bg-white/5 border-white/10 hover:bg-purple-500 hover:border-purple-500 text-white transition-all" />
            </div>
          </Carousel>
        </div>

        {/* Pagination Dots - Larger touch area */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {barbershops.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 transition-all duration-300 ${
                current === index
                  ? "bg-purple-500 w-10 rounded-full"
                  : "bg-gray-600 w-2.5 rounded-full hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Explore All Button */}
        <div className="flex justify-center mt-12">
          <button className="w-full sm:w-auto bg-[#BA5EEF] hover:bg-[#A54DD9] text-white font-bold px-10 py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-purple-500/20">
            Explore All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Barbershops;