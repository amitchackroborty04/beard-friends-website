'use client'

import Image from 'next/image'

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      title: 'Users can find nearby barber shops and connect with other like-minded individuals who are passionate about proper beard maintenance',
      image: '/images/benifit.png'
    },
    {
      id: 2,
      title: 'The community offers a platform to participate in beard contests and showcase your grooming skills',
         image: '/images/benifit.png'
    },
    {
      id: 3,
      title: 'Users can access a shopping system to find and purchase grooming items, making it easier to maintain a healthy and stylish beard',
         image: '/images/benifit.png'
    }
  ]

  return (
    <section className="bg-black px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto container">
        <h2 className="text-center text-4xl font-bold md:text-5xl mb-4">Benefits</h2>
        <p className="text-center text-gray-400 mb-12 md:mb-16 text-sm md:text-base">
          There are several benefits to joining the barber online community offered by Beard Friends.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-gray-900 rounded-lg p-6 md:p-8 flex flex-col items-center text-center hover:bg-gray-800 transition"
            >
              <div className="w-full flex justify-center relative mb-6">
                <Image
                  src={benefit.image}
                  alt={`Benefit ${benefit.id}`}
                  width={1000}
                    height={1000}
                  className="object-cover h-[160px] w-[167px]"
                  priority
                />
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
            Additionally, the community provides a wealth of resources and knowledge, including tips, advice, and tutorials from experienced 
            professionals and fellow enthusiasts. Joining this community can help individuals stay up-to-date with the latest trends and techniques, 
            connect with others who share their interests, and take their beard grooming to the next level.
          </p>
        </div>
      </div>
    </section>
  )
}
