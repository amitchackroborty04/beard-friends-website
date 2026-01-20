'use client'

import Image from 'next/image'

export default function AboutCommunity() {
  return (
    <section className="bg-black px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="/images/community.jpg"
              alt="Barber working with straight razor"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Our Community</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Barber shops have been an integral part of communities for centuries. They 
              are more than just places to get a haircut; they are social hubs where people 
              gather to catch up on the latest news, share stories, and build relationships. 
              Barber shops are where fathers take their sons for their first haircuts, where 
              friends meet for a quick trim before a night out, and where older men come for 
              the familiar comfort of a routine shave. Barber shops foster a sense of 
              community by providing a space where people can come together and 
              connect, creating a sense of belonging that extends far beyond a simple 
              grooming appointment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
