'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section className="bg-[#1C1C1E] px-4 py-12 md:px-8 md:py-[150px]">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-[48px] font-extrabold text-[#FFFFFFDE] mb-6">About</h2>
            <p className="text-[#D9D9D9] text-sm md:text-xl !leading-[186%] text-justify">
              The barber online community offered by Beard Friends is a great way 
              for individuals to connect and share their passion for proper beard 
              maintenance. The community allows users to find nearby barber 
              shops, participate in beard contests, and shop for grooming items, all 
              while connecting with other like-minded individuals. Whether you&apos;re a 
              seasoned beard enthusiast or just starting out, the community 
              provides a platform to learn, share, and grow together. With a 
              supportive and knowledgeable community at your fingertips, 
              maintaining a healthy and stylish beard has never been easier.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/dabol.png"
              alt="Bearded man wearing sunglasses"
              width={1000}
              height={1000}
              className="object-contain h-[474px] w-full rounded-[12px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
