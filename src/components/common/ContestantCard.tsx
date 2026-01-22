


// components/common/ContestantCard.tsx
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
    setIsLiked(prev => !prev)
    setCurrentVotes(prev => (isLiked ? prev - 1 : prev + 1))
  }

  const cardHeight = featured
    ? 'h-64 sm:h-80 md:h-[292px]'
    : 'h-56 sm:h-64 md:h-[292px]'

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-b from-transparent to-black/80 flex flex-col !h-[392px] justify-end ${cardHeight} w-full`}
    >
      {/* Image Background */}
      <Image
        src={imageUrl || '/placeholder-contestant.jpg'}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        priority={featured}
      />

      {/* Bottom Info Bar */}
      <div className="relative flex items-center justify-between gap-4 p-4 sm:p-6 bg-[#2C2C2E] backdrop-blur-sm">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Logo / Badge */}
          <div className="h-10 w-10 sm:h-11 sm:w-11 shrink-0">
            <Image
              src="/images/logo3.png"
              alt="Contest badge"
              width={100}
              height={100}
              className="h-full w-full rounded-full object-cover "
            />
          </div>

          {/* Votes */}
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90">
              {currentVotes.toLocaleString()}
            </span>
            <span className="text-sm sm:text-base font-medium text-white/70">
              votes
            </span>
          </div>
        </div>

        {/* Like Button - positioned a bit higher */}
        {/* <Button
          onClick={handleLike}
          variant="ghost"
          size="icon"
          className={`absolute -top-6 right-4 sm:right-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full !bg-[#2C2C2E] transition-all ${
            isLiked
              ? 'bg-blue-600/30 text-blue-400 hover:bg-blue-600/40'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <ThumbsUp className={`h-6 w-6 sm:!h-7 sm:!w-7 ${isLiked ? 'fill-current' : ''}`} />
        </Button> */}
      </div>

      {/* Name overlay (optional - appears on hover for featured) */}
      {featured && (
        <div className="absolute inset-x-0 bottom-20 sm:bottom-24 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg line-clamp-1">
            {name}
          </h3>
        </div>
      )}
    </div>
  )
}