'use client'

import Image from 'next/image'

export default function About_community() {
  return (
    <section className="bg-[#0E0E0F] px-4 py-12 md:px-8 md:py-[150px]">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
         
          {/* left Image */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/about4.jpg"
              alt="Bearded man wearing sunglasses"
              width={1000}
              height={1000}
              className="object-cover w-[470px] h-[421px]  rounded-[12px]"
              priority
            />
          </div>
           {/* right Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-[48px] font-extrabold text-[#FFFFFFDE] mb-6">About Our Community</h2>
            <p className="text-[#D9D9D9] text-sm md:text-xl !leading-[186%] text-justify">
             Barber shops have been an integral part of communities for centuries. They are more than just places to get a haircut; they are social hubs where people gather to catch up on the latest news, share stories, and build relationships. Barber shops are where fathers take their sons for their first haircuts, where friends meet for a quick trim before a night out, and where older men come for the familiar comfort of a routine shave. Barber shops foster a sense of community by providing a space where people can come together and connect, creating a sense of belonging that extends far beyond a simple grooming appointment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
