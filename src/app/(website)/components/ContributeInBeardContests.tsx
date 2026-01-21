


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
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import ContestantCard from "@/components/common/ContestantCard";

function ContributeInBeardContests() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const contestants = [
    {
      id: "1",
      name: "Contestant 1",
      votes: 1455,
      imageUrl: "/images/contributor.jpg",
      rank: "1st",
    },
    {
      id: "2",
      name: "Contestant 2",
      votes: 1401,
      imageUrl: "/images/contributor.jpg",
      rank: "2nd",
    },
    {
      id: "3",
      name: "Contestant 3",
      votes: 1389,
      imageUrl: "/images/contributor.jpg",
      rank: "3rd",
    },
    {
      id: "4",
      name: "Contestant 4",
      votes: 1256,
      imageUrl: "/images/contributor.jpg",
      rank: "4th",
    },
    {
      id: "5",
      name: "Contestant 5",
      votes: 1134,
      imageUrl: "/images/contributor.jpg",
      rank: "5th",
    },
  ];

  return (
    <div className="bg-[#1a1a1a] py-16 md:px-4">
      <div className="container mx-auto overflow-hidden md:overflow-visible">
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
                <ContestantCard
                  id={contestant.id}
                  name={contestant.name}
                  imageUrl={contestant.imageUrl}
                  votes={contestant.votes}
                  featured={false}
                />
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
