'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ThumbsUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ContestantCardProps {
  id: string
  name: string
  imageUrl: string
  votes: number
  featured?: boolean
}

export default function ContestantCard({
  
  name,
  imageUrl,
  votes,
  featured = false,
}: ContestantCardProps) {
  const [currentVotes, setCurrentVotes] = useState(votes)
  const [isLiked, setIsLiked] = useState(false)



  const handleLike = () => {
    setIsLiked(!isLiked)
    setCurrentVotes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const cardSize = featured
    ? 'w-full h-64 sm:h-80 md:h-96'
    : 'w-full h-56 sm:h-64 md:h-72'

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end ${cardSize}`}
    >
      {/* Image Background */}
      <div className=''>
        <Image
          src={imageUrl}
          alt={name}
         width={1000}
        height={1000}
          className="object-cover h-[216px]"
        
        />
      </div>

      {/* Shield Icon and Votes */}
      <div className="flex items-center justify-between gap-2 p-4 sm:p-6 bg-[#2C2C2E]  relative">
        <div className="flex items-center gap-10">
          <div className=" h-[45px] w-[38px]">
          
            <Image
              src='/images/logo3.png'
              alt={name}
              width={100}
              height={100}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex  ">
            <span className="text-[22px] font-semibold  text-[#FFFFFFDE]">Votes</span>
            <span className="text-[22px] font-semibold text-[#FFFFFFDE] ">
              {currentVotes.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Like Button */}
        <div className=' absolute top-[-30px] right-10'>
        <Button
          onClick={handleLike}
          variant="ghost"
          size="icon"
          className={`rounded-full !bg-[#2C2C2E] h-[53px] w-[53px] transition-colors ${
            isLiked
              ? 'bg-blue-500/20 text-blue-400'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <ThumbsUp className="!h-6 !w-6" />
        </Button>
        </div>
      </div>
    </div>
  )
}
