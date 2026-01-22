


/* eslint-disable @typescript-eslint/no-unused-vars */
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
import {  ChevronRight } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

function OnlineShop() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const products = [
    {
      id: 1,
      name: "Brush",
      description: "Premium Black Comb and Brush",
      price: "$4.15",
      image: "/images/onlineProducts.jpg.jpg",
    },
    {
      id: 2,
      name: "Spray",
      description: "Professional Black Comb and Spray",
      price: "$6.47",
      image: "/images/onlineProducts.jpg",
    },
    {
      id: 3,
      name: "Lotion",
      description: "Moisturizing Black Comb and Lotion",
      price: "$2.47",
      image: "/images/onlineProducts.jpg",
    },
    {
      id: 4,
      name: "Comb",
      description: "Classic Black Comb and Tools",
      price: "$1.47",
      image: "/images/onlineProducts.jpg",
    },
    {
      id: 5,
      name: "Brush Set",
      description: "Complete Black Comb and Brush Set",
      price: "$8.99",
      image: "/images/onlineProducts.jpg",
    },
    {
      id: 6,
      name: "Brush Set",
      description: "Complete Black Comb and Brush Set",
      price: "$8.99",
      image: "/images/onlineProducts.jpg",
    },
    {
      id: 7,
      name: "Brush Set",
      description: "Complete Black Comb and Brush Set",
      price: "$8.99",
      image: "/images/onlineProducts.jpg",
    },
    {
      id: 8,
      name: "Brush Set",
      description: "Complete Black Comb and Brush Set",
      price: "$8.99",
      image: "/images/onlineProducts.jpg",
    },
    {
      id: 9,
      name: "Brush Set",
      description: "Complete Black Comb and Brush Set",
      price: "$8.99",
      image: "/images/onlineProducts.jpg",
    },
    {
      id: 10,
      name: "Brush Set",
      description: "Complete Black Comb and Brush Set",
      price: "$8.99",
      image: "/images/onlineProducts.jpg",
    },
  ];

  return (
    <div className="bg-[#1C1C1E] md:py-16 overflow-x-hidden">
      <div className="">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Online Shop
          </h2>
          <p className="text-gray-400 text-sm">Trending Products</p>
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
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="px-2 basis-1/2 md:basis-1/4 lg:basis-1/5 min-w-0"
              >
                <div className="bg-white border-none overflow-hidden group cursor-pointer rounded-lg flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      fill
                      src={product.image}
                      alt={product.name}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 bg-[#1a1a1a] flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 text-xs mb-3">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-xl font-bold">
                        {product.price}
                      </span>
                      <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <ChevronRight className="w-5 h-5 text-black" />
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="left-0 -translate-x-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
          <CarouselNext className="right-0 translate-x-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
        </Carousel>

        {/* Explore All Button */}
        {/* <div className="flex justify-center mt-12">
          <button className="bg-[#BA5EEF] hover:bg-[#A54DD9] text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:gap-3">
            Explore All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default OnlineShop;
