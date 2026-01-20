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
import { ArrowRight, Award, Share2 } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

function ContributeInBeardContests() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const contestants = [
    {
      id: 1,
      votes: 1455,
      image: "/images/contributor.jpg",
      rank: "1st",
    },
    {
      id: 2,
      votes: 1401,
      image: "/images/contributor.jpg",
      rank: "2nd",
    },
    {
      id: 3,
      votes: 1389,
      image: "/images/contributor.jpg",
      rank: "3rd",
    },
    {
      id: 4,
      votes: 1256,
      image: "/images/contributor.jpg",
      rank: "4th",
    },
    {
      id: 5,
      votes: 1134,
      image: "/images/contributor.jpg",
      rank: "5th",
    },
  ];

  return (
    <div className="bg-[#1a1a1a] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contribute in Our Beard Contests
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            Attention all beard enthusiasts! We are excited to announce the
            annual Beard Contest happening Right Now. Whether you have a full
            beard, a stylish mustache, or a unique facial hair design, this
            contest is for you! We invite all men who have put time and effort
            into growing and grooming their beards to come and showcase their
            impressive facial hair styles. There will be various categories to
            enter, including full beard, partial beard, mustache, and freestyle.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-8"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {contestants.map((contestant) => (
              <CarouselItem
                key={contestant.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-[#2a2a2a] border-none overflow-hidden group cursor-pointer">
                  <CardContent className="p-0">
                    {/* Image with Rank Badge */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        fill
                        src={contestant.image}
                        alt={`Contestant ${contestant.id}`}
                        className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                      
                      {/* Rank Badge */}
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#BA5EEF] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {contestant.rank}
                        </span>
                      </div>

                      {/* Share Button */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                        <Share2 className="w-5 h-5 text-black" />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>

                    {/* Votes Section */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 text-white">
                        <Award className="w-6 h-6 fill-white" />
                        <span className="text-xl font-bold">
                          {contestant.votes} Votes
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="left-0 -translate-x-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
          <CarouselNext className="right-0 translate-x-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {contestants.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 rounded-full transition-all ${
                current === index
                  ? "bg-[#BA5EEF] w-8 rounded-md"
                  : "bg-gray-500 w-3"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#BA5EEF] hover:bg-[#A54DD9] text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:gap-3">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContributeInBeardContests;