
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
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

// ────────────────────────────────────────────────
// Type (you can move this to a separate types file)
interface Barber {
  _id: string;
  shopName: string;
  avatar: { url: string };
  avgRating: number;
  address: { city: string };
  distance: number | null;
}

// ────────────────────────────────────────────────
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

  // ─── Data fetching with fetch + TanStack Query ───────
  const { data, isLoading, isError } = useQuery<Barber[]>({
    queryKey: ["barbers"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/berbers-web`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      if (!json.success) {
        throw new Error(json.message || "Failed to fetch barbers");
      }

      return json.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const barbers = data ?? [];

  // ─── Skeleton loader (same as before) ────────────────
  const SkeletonCard = () => (
    <CarouselItem className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3">
      <Card className="bg-[#2a2a2a] border-none overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-64 md:h-80 bg-gray-700 animate-pulse" />
          <div className="p-5 md:p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="h-7 w-44 bg-gray-600 rounded animate-pulse" />
              <div className="h-6 w-14 bg-gray-600 rounded animate-pulse" />
            </div>
            <div className="flex items-center justify-between">
              <div className="h-5 w-24 bg-gray-700 rounded animate-pulse" />
              <div className="h-5 w-16 bg-gray-700 rounded animate-pulse" />
            </div>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );

  // ─── Main render ─────────────────────────────────────
  return (
    <div className="bg-[#1C1C1E] py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10 md:mb-16 tracking-tight">
          Barbershops
        </h2>

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
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
              ) : isError ? (
                <CarouselItem className="pl-4">
                  <div className="text-center text-red-400 py-12">
                    Failed to load barbershops. Please try again later.
                  </div>
                </CarouselItem>
              ) : barbers.length === 0 ? (
                <CarouselItem className="pl-4">
                  <div className="text-center text-gray-400 py-12">
                    No barbershops found
                  </div>
                </CarouselItem>
              ) : (
                barbers.map((shop) => (
                  <CarouselItem
                    key={shop._id}
                    className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="bg-[#2a2a2a] border-none overflow-hidden group cursor-pointer transition-all hover:ring-1 hover:ring-purple-500/50">
                      <CardContent className="p-0">
                        <div className="relative h-64 md:h-80 overflow-hidden">
                          <Image
                            fill
                            src={shop.avatar?.url || "/images/placeholder-barber.jpg"}
                            alt={shop.shopName}
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                            unoptimized // ← helpful for cloudinary URLs
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a] via-transparent to-transparent" />
                        </div>

                        <div className="p-5 md:p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg md:text-xl font-bold text-white truncate pr-2">
                              {shop.shopName}
                            </h3>
                            <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-md">
                              <span className="text-white text-xs md:text-sm font-bold">
                                {shop.avgRating.toFixed(1)}
                              </span>
                              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-gray-400 text-xs md:text-sm font-medium">
                            <span>{shop.address?.city || "Unknown"}</span>
                            <span className="bg-white/5 px-2 py-0.5 rounded text-[10px] md:text-xs">
                              {shop.distance ? `${shop.distance.toFixed(1)} km` : "Nearby"}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>

            <div className="hidden lg:block">
              <CarouselPrevious className="-left-14 bg-white/5 border-white/10 hover:bg-purple-500 hover:border-purple-500 text-white transition-all" />
              <CarouselNext className="-right-14 bg-white/5 border-white/10 hover:bg-purple-500 hover:border-purple-500 text-white transition-all" />
            </div>
          </Carousel>
        </div>

        {/* Pagination dots */}
        {!isLoading && !isError && barbers.length > 0 && (
          <div className="flex items-center justify-center gap-2.5 mt-10">
            {barbers.map((_, index) => (
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
        )}

        {/* <div className="flex justify-center mt-12">
          <button className="w-full sm:w-auto bg-[#BA5EEF] hover:bg-[#A54DD9] text-white font-bold px-10 py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-purple-500/20">
            Explore All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Barbershops;