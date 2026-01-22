
"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ContestantCard from "@/components/common/ContestantCard";

interface Participant {
  _id: string;
  user: {
    _id: string;
    name: string;
    avatar: { public_id: string; url: string };
  };
  photo: { public_id: string; url: string };
  description: string;
  votes: number;
  frame: string;
  submittedAt: string;
}

interface ContestData {
  contest: {
    _id: string;
    title: string;
    startDate: string;
    endDate: string;
  };
  participants: Participant[];
}

async function fetchCurrentBeardContest() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contest/web-current`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store", // or "force-cache" depending on your needs
  });

  if (!res.ok) throw new Error("Failed to fetch contest data");
  const json = await res.json();

  if (!json.success || !json.data?.length) {
    throw new Error(json.message || "No contest data");
  }

  return json.data[0]; // assuming we take the first/current contest
}

function ContributeInBeardContests() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  // TanStack Query
  const { data, isLoading, error } = useQuery<ContestData, Error>({
    queryKey: ["current-beard-contest"],
    queryFn: fetchCurrentBeardContest,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Sort participants by votes (highest first)
  const sortedParticipants = React.useMemo(() => {
    if (!data?.participants) return [];
    return [...data.participants].sort((a, b) => b.votes - a.votes);
  }, [data]);

  // Prepare data in the shape ContestantCard expects
  const contestants = sortedParticipants.map((p, idx) => ({
    id: p._id,
    name: p.user.name,
    votes: p.votes,
    imageUrl: p.photo.url, // using entry photo, not avatar
    rank: idx < 3 ? `${idx + 1}${idx === 0 ? "st" : idx === 1 ? "nd" : "rd"}` : undefined,
  }));

  // Optional: show error or empty state
  if (error) {
    return (
      <div className="bg-[#1a1a1a] py-16 text-center text-red-400">
        Failed to load contest: {error.message}
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] py-16 md:px-4">
      <div className="container mx-auto overflow-hidden md:overflow-visible">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contribute in Our Beard Contests
          </h2>
          <p className="text-gray-300 text-sm md:text-xl  mx-auto leading-relaxed">
           Attention all beard enthusiasts! We are excited to announce the annual Beard Contest happening Right Now. Whether you have a full beard, a stylish mustache, or a unique facial hair design, this contest is for you! We invite all men who have put time and effort into growing and grooming their beards to come and showcase their impressive facial hair styles. There will be various categories to enter, including full beard, partial beard, mustache, and freestyle.
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
            {isLoading
              ? // Skeleton loading cards (same number as real data or fixed amount)
                Array.from({ length: 5 }).map((_, i) => (
                  <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-gray-800/50 rounded-xl overflow-hidden h-[420px] animate-pulse">
                      <div className="h-64 bg-gray-700" />
                      <div className="p-4">
                        <div className="h-6 bg-gray-600 rounded w-3/4 mb-2" />
                        <div className="h-5 bg-gray-600 rounded w-1/2" />
                      </div>
                    </div>
                  </CarouselItem>
                ))
              : contestants.map((contestant) => (
                  <CarouselItem
                    key={contestant.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="relative">
                      <ContestantCard
                        id={contestant.id}
                        name={contestant.name}
                        imageUrl={contestant.imageUrl}
                        votes={contestant.votes}
                        featured={false}
                      />
                      {/* Top 3 badge */}
                      {contestant.rank && (
                        <div className="absolute top-3 left-3 z-10 h-[50px]">
                          <span className="bg-[#BA5EEF] text-white font-bold py-3 px-3 rounded-full text-sm ">
                            {contestant.rank}
                          </span>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 -translate-x-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
          <CarouselNext className="right-0 translate-x-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {Array.from({ length: isLoading ? 5 : contestants.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => !isLoading && api?.scrollTo(index)}
              className={`h-3 rounded-full transition-all ${
                current === index ? "bg-[#BA5EEF] w-8 rounded-md" : "bg-gray-500 w-3"
              } ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
              disabled={isLoading}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="flex justify-center mt-8">
          <button className="bg-[#BA5EEF] hover:bg-[#A54DD9] text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:gap-3">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default ContributeInBeardContests;