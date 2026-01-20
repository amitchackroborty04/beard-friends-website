"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";

function HomeHero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
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

  const slides = [
    {
      title: "Beard Friends",
      description:
        "The barber online community offered by Beard Friends is a great way for individuals to connect and share their passion for proper beard maintenance. The community allows users to find nearby barber shops, participate in beard contests, and shop for grooming items, all while connecting with other like-minded individuals. Whether you're a seasoned beard enthusiast or just starting out, the community provides a platform to learn, share, and grow together. With a supportive and knowledgeable community at your fingertips, maintaining a healthy and stylish beard has never been easier.",
    },
    {
      title: "Join Our Community",
      description:
        "Connect with fellow beard enthusiasts from around the world. Share tips, tricks, and experiences about beard care and maintenance. Participate in exciting contests, discover the best barber shops in your area, and access exclusive grooming products. Our community is built on the foundation of mutual support and shared passion for exceptional beard care.",
    },
    {
      title: "Expert Grooming Tips",
      description:
        "Learn from the best in the business. Our platform brings together professional barbers, grooming experts, and experienced beard enthusiasts to share their knowledge. Get personalized advice, discover new products, and master the art of beard maintenance. From beginners to experts, everyone finds valuable insights to elevate their grooming game.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/herobgimage.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold text-white">
                      {slide.title}
                    </h1>

                    <p className="text-gray-200 text-base md:text-lg lg:px-6 mx-auto text-center !leading-[186%]">
                      {slide.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center space-x-2 mt-12">
            {slides.map((_, index) => (
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
        </div>
      </div>
    </div>
  );
}

export default HomeHero;