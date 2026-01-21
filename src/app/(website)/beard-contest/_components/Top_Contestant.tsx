'use client'

import ContestantCard from "@/components/common/ContestantCard"


interface Contestant {
  id: string
  name: string
  imageUrl: string
  votes: number
}

const featuredContestants: Contestant[] = [
{
  id: '5',
  name: 'Contestant 5',
  imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
  votes: 1127,
},

  {
    id: '2',
    name: 'Contestant 2',
    imageUrl:
      '/images/card1.jpg',
    votes: 1243,
  },
]

const allContestants: Contestant[] = [
  {
    id: '3',
    name: 'Contestant 3',
    imageUrl:
       '/images/card1.jpg',
    votes: 1455,
  },
  {
    id: '4',
    name: 'Contestant 4',
    imageUrl:
     '/images/card1.jpg',
    votes: 1243,
  },
  {
    id: '5',
    name: 'Contestant 5',
    imageUrl:
       '/public/images/card1.jpg',
    votes: 1127,
  },
  {
    id: '6',
    name: 'Contestant 6',
    imageUrl:
     '/images/card1.jpg',
    votes: 1043,
  },
]

export default function TopContestantSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 grid grid-cols-1 gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-12">
  {/* Left Content (6 columns) */}
  <div className="flex flex-col justify-center lg:col-span-6">
    <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
      Top Contestant
    </h1>
    <p className="text-sm text-gray-300 sm:text-base md:text-lg leading-relaxed">
      Lorem ipsum dolor sit amet consectetur. Odio vitae lectus arcu aliquam
      nibh pretium. Diam eu proin viverra dignissim. Ut purus elit iaculis
      quis congue faucibus sit vulputate. Donec aliquet augue ut lectus. Diam
      nulla dignissim nunc risus vitae enim ac sit nunc.
    </p>
  </div>

  {/* Featured Cards (6 columns) */}
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
    {featuredContestants.map((contestant) => (
      <ContestantCard
        key={contestant.id}
        {...contestant}
        featured={true}
      />
    ))}
  </div>
</div>


      {/* All Contestants Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {allContestants.map((contestant) => (
          <ContestantCard
            key={contestant.id}
            {...contestant}
            featured={false}
          />
        ))}
      </div>
    </div>
  )
}
